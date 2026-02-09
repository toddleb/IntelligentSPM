import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { getResend, isResendConfigured } from "@/lib/resend";

const DEFAULT_ALLOWLIST = new Set([
  "gisele@oexits.com",
  "andre.lebaron@icloud.com",
  "danileb@icloud.com",
]);

function getAllowlist(): Set<string> {
  const env = process.env.NEWSLETTER_TEST_ALLOWLIST;
  if (!env) return DEFAULT_ALLOWLIST;
  return new Set(env.split(",").map((e) => e.trim().toLowerCase()).filter(Boolean));
}

function loadTemplate(): string {
  const filePath = path.join(process.cwd(), "src", "lib", "email-templates", "syndicate-issue-001.html");
  return fs.readFileSync(filePath, "utf-8");
}

export async function POST(request: NextRequest) {
  try {
    const { emails } = await request.json();
    const list: string[] = Array.isArray(emails) ? emails : [];

    if (list.length === 0) {
      return NextResponse.json({ error: "emails is required" }, { status: 400 });
    }

    const allowlist = getAllowlist();
    const blocked = list.filter((email) => !allowlist.has(String(email).toLowerCase()));

    if (blocked.length > 0) {
      return NextResponse.json({
        error: "One or more emails are not allowed for test sends",
        blocked,
      }, { status: 403 });
    }

    if (!isResendConfigured()) {
      return NextResponse.json({ error: "Resend not configured" }, { status: 500 });
    }

    const resend = await getResend();
    const template = loadTemplate();
    const origin = request.nextUrl.origin;
    const viewUrl = `${origin}/newsletter/issue-001.html`;
    const unsubUrl = "mailto:todd@intelligentspm.com?subject=Unsubscribe";

    const html = template
      .replaceAll("{{VIEW_IN_BROWSER_URL}}", viewUrl)
      .replaceAll("{{UNSUBSCRIBE_URL}}", unsubUrl);

    for (const email of list) {
      await resend.emails.send({
        from: "The Toddfather <todd@intelligentspm.com>",
        to: email,
        subject: "SPM Syndicate — Issue #001",
        html,
      });
    }

    return NextResponse.json({ success: true, sent: list.length });
  } catch (error) {
    console.error("Newsletter test send error:", error);
    return NextResponse.json({ error: "Failed to send test newsletter" }, { status: 500 });
  }
}
