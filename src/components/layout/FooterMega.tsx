"use client";

import Link from "next/link";
import { useState } from "react";
import { footerNavigation } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Linkedin, Twitter } from "lucide-react";

export function FooterMega() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--bg-tertiary)]">
      <Container className="py-12 md:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insights */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">
              Insights
            </h3>
            <ul className="space-y-3">
              {footerNavigation.insights.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {footerNavigation.connect.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-[var(--bg-tertiary)]">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
              The SPM Dispatch
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-4">
              Weekly insights on sales comp, SPM, and AI. No vendor pitches. Just signal.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2 bg-[var(--bg-primary)] border border-[var(--bg-hover)] rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none transition-colors"
              />
              <Button type="submit" disabled={status === "loading"}>
                {status === "loading" ? "..." : "Subscribe"}
              </Button>
            </form>
            {status === "success" && (
              <p className="mt-2 text-sm text-[var(--accent)]">
                You&apos;re in! Check your inbox.
              </p>
            )}
            {status === "error" && (
              <p className="mt-2 text-sm text-[var(--error)]">
                Something went wrong. Try again.
              </p>
            )}
            <p className="mt-2 text-xs text-[var(--text-muted)]">
              One email per week. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--bg-tertiary)] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm text-[var(--text-tertiary)]">
            <span>&copy; {new Date().getFullYear()} IntelligentSPM</span>
            <span>&bull;</span>
            <span>Todd LeBaron</span>
            <Link href="/privacy" className="hover:text-[var(--text-secondary)]">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[var(--text-secondary)]">
              Terms
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/toddlebaron"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/intelligentspm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
