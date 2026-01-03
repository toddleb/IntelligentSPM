import type { ServiceCardProps } from "@/types";

export const services: ServiceCardProps[] = [
  {
    icon: "scan",
    title: "Plan Intelligence Audit",
    tagline: "Find the risk before your reps do.",
    description:
      "A fast, fixed-scope assessment of your comp plan's complexity, loopholes, dispute triggers, and payout risk.",
    timeline: "5-10 business days",
    href: "/services/plan-intelligence-audit",
  },
  {
    icon: "layers",
    title: "Shadow Accounting Setup",
    tagline: "When the system shrugs, you need a backup.",
    description:
      "A parallel payout truth layer for reconciliation, variance analysis, and dispute-ready audit documentation.",
    timeline: "2-4 weeks",
    href: "/services/shadow-accounting-setup",
  },
  {
    icon: "settings",
    title: "SPM Operating Model",
    tagline: "Stop fighting fires. Start running a system.",
    description:
      "Design the governance, workflows, and roles that turn comp admin from chaos into a repeatable operation.",
    timeline: "4-8 weeks",
    href: "/services/spm-operating-model",
  },
  {
    icon: "target",
    title: "Comp Plan Redesign",
    tagline: "Plans that teach reps the right behavior.",
    description:
      "Behavior-first comp plan design that survives edge cases, aligns to your GTM motion, and actually drives performance.",
    timeline: "6-12 weeks",
    href: "/services/comp-plan-redesign",
  },
];

export const featuredService = {
  eyebrow: "Flagship Service",
  title: "Plan Intelligence Audit",
  tagline: "The fastest way to stop disputes and start running comp like a system.",
  description:
    "Fixed-scope. Fast turnaround. In 5-10 business days, you'll know exactly where your plan is vulnerable—and what to do about it.",
  features: [
    "Risk score (complexity, loopholes, dispute exposure)",
    "Exception map with handling recommendations",
    "Payout curve analysis",
    "Rep behavior alignment report",
    "Executive-ready remediation plan",
  ],
  href: "/services/plan-intelligence-audit",
};
