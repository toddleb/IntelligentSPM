import type { ToolCardProps } from "@/types";

export const tools: ToolCardProps[] = [
  {
    name: "Plan Smell Test",
    description: "3 minutes. Flags obvious failure patterns.",
    status: "free",
    whoFor: "Anyone with a comp plan and 3 minutes",
    cta: { label: "Run it", href: "/tools/plan-smell-test" },
  },
  {
    name: "Plan Risk Scan",
    description: "Upload your plan → get a risk score + exception map.",
    status: "waitlist",
    whoFor: "RevOps and Sales Ops leaders",
    cta: { label: "Join waitlist", href: "/tools/plan-risk-scan" },
  },
  {
    name: "Shadow Accounting Lite",
    description: "A payout truth kit to reconcile what payroll can't.",
    status: "download",
    whoFor: "Comp admins and Finance",
    cta: { label: "Get the kit", href: "/tools/shadow-accounting-lite" },
  },
  {
    name: "Loophole Finder",
    description: "Pattern library of common comp plan exploits.",
    status: "available",
    whoFor: "Plan designers and auditors",
    cta: { label: "Explore", href: "/tools/loophole-finder" },
  },
  {
    name: "Dispute Pack Generator",
    description: "Produce dispute-ready evidence in minutes.",
    status: "coming-soon",
    whoFor: "Comp admins handling escalations",
    cta: { label: "Notify me", href: "/tools/dispute-pack-generator" },
  },
];
