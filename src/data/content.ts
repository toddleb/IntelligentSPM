import type { ContentCardProps } from "@/types";

export const featuredContent: ContentCardProps[] = [
  {
    type: "podcast",
    title: "Why your ICM is a black box (and what to do about it)",
    description:
      "A conversation about plan transparency and the myth of system-of-record accuracy.",
    href: "/media/podcast/icm-black-box",
    duration: "32 min",
  },
  {
    type: "article",
    title: "The 5 loopholes hiding in every comp plan",
    description:
      "Common patterns that create disputes—and how to close them.",
    href: "/media/articles/5-loopholes",
  },
  {
    type: "article",
    title: "Shadow accounting isn't paranoia. It's governance.",
    description:
      "Why every comp team needs a parallel payout truth layer.",
    href: "/media/articles/shadow-accounting-governance",
  },
];

export const frameworks = [
  {
    name: "SPM Syndicate Scorecard",
    description: "Assess vendor and program maturity across 6 dimensions.",
    href: "/frameworks/spm-syndicate-scorecard",
  },
  {
    name: "Magic Wave",
    description:
      "The clarity × control × scalability quadrant. A better way to evaluate plan health.",
    href: "/frameworks/magic-wave",
  },
];

export const caseStudies = [
  {
    industry: "Enterprise SaaS",
    problem: "Dispute volume spiking after every payout cycle",
    outcome: "62% reduction in disputes within one quarter",
    href: "/case-studies/enterprise-saas",
  },
  {
    industry: "MedTech Manufacturing",
    problem: "9-day payout processing cycle",
    outcome: "Reduced to 3 days with shadow accounting",
    href: "/case-studies/medtech-manufacturing",
  },
  {
    industry: "Financial Services",
    problem: "Unknown payout leakage risk",
    outcome: "$1.8M exposure identified and remediated",
    href: "/case-studies/financial-services",
  },
];
