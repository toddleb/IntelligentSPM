export type IntelType = "blog" | "newsletter" | "learn";

export type IntelItem = {
  id: string;
  type: IntelType;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  href: string;
  featured: boolean;
  author: string;
};

export const typeColors: Record<IntelType, string> = {
  blog: "#38BDF8",
  newsletter: "#FE9200",
  learn: "#A855F7",
};

export const typeLabels: Record<IntelType, string> = {
  blog: "Blog",
  newsletter: "Newsletter",
  learn: "Learn",
};

export const learnItems: IntelItem[] = [
  {
    id: "learn-spm-101",
    type: "learn",
    title: "SPM 101",
    excerpt:
      "New to SPM? Start here. The fundamentals of sales performance management without the vendor spin.",
    date: "2026-01-01",
    readTime: "15 min",
    href: "/learn/spm-101",
    featured: false,
    author: "The Toddfather",
  },
  {
    id: "learn-8-levers",
    type: "learn",
    title: "The 8 Levers of Intelligent SPM",
    excerpt:
      "Deep dive into the SPM framework. 929 knowledge base cards organized by lever.",
    date: "2026-01-01",
    readTime: "20 min",
    href: "/levers",
    featured: false,
    author: "The Toddfather",
  },
  {
    id: "learn-policies",
    type: "learn",
    title: "17 SCP Policies",
    excerpt:
      "Sales Compensation Policies covering clawback, quota, windfall, 409A, and more.",
    date: "2026-01-01",
    readTime: "30 min",
    href: "/learn/policies",
    featured: false,
    author: "The Toddfather",
  },
  {
    id: "learn-glossary",
    type: "learn",
    title: "SPM Glossary",
    excerpt:
      "SPM terms defined. No jargon, no confusion. Plain language definitions for 50+ terms.",
    date: "2026-01-01",
    readTime: "10 min",
    href: "/learn/glossary",
    featured: false,
    author: "The Toddfather",
  },
];
