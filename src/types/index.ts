// Navigation types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Hero types
export interface HeroPrimaryProps {
  eyebrow?: string;
  headline: string;
  subhead: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  microProof?: string;
}

export interface HeroSecondaryProps {
  breadcrumb?: Array<{ label: string; href: string }>;
  title: string;
  description?: string;
}

// Card types
export interface ServiceCardProps {
  icon: string;
  title: string;
  tagline: string;
  description: string;
  timeline?: string;
  href: string;
}

export interface ToolCardProps {
  name: string;
  description: string;
  status: "free" | "waitlist" | "download" | "available" | "coming-soon";
  whoFor?: string;
  cta: { label: string; href: string };
}

export interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company?: string;
  variant?: "inline" | "card" | "featured";
}

export interface StatBlockProps {
  value: string;
  label: string;
  size?: "sm" | "md" | "lg";
}

export interface ContentCardProps {
  type: "article" | "podcast";
  title: string;
  description: string;
  image?: string;
  href: string;
  date?: string;
  duration?: string;
}

export interface CaseStudyCardProps {
  industry: string;
  problem: string;
  outcome: string;
  href: string;
}

export interface FrameworkCardProps {
  name: string;
  tagline: string;
  description: string;
  useWhen?: string;
  href: string;
}

// Button types
export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  role?: string;
  inquiryType: string;
  companySize?: string;
  timeline?: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}

// Quiz types
export interface QuizQuestion {
  id: string;
  category: "clarity" | "complexity" | "disputes" | "exceptions" | "governance";
  question: string;
}

export interface QuizResult {
  category: string;
  score: number;
  status: "green" | "yellow" | "red";
  flags: string[];
}
