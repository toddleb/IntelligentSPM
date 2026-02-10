export type IntelType = "blog" | "newsletter";

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
};

export const typeLabels: Record<IntelType, string> = {
  blog: "Blog",
  newsletter: "Newsletter",
};
