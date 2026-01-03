import type { NavItem } from "@/types";

export const mainNavigation: NavItem[] = [
  { label: "AI + SPM", href: "/ai-spm" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "SPM 101", href: "/spm-101" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  aiSpm: [
    { label: "AI + SPM Overview", href: "/ai-spm" },
    { label: "AI Tools", href: "/ai-spm#ai-tools" },
    { label: "AI Services", href: "/services#ai-services" },
    { label: "SPM 101", href: "/spm-101" },
  ],
  services: [
    { label: "AI-Powered Services", href: "/services#ai" },
    { label: "Strategy & Transformation", href: "/services#strategy" },
    { label: "Vendor Selection", href: "/services#vendor" },
    { label: "Expert Witness", href: "/services#expert" },
  ],
  insights: [
    { label: "Articles", href: "/insights" },
    { label: "Podcast", href: "/insights#podcast" },
    { label: "Newsletter", href: "/insights#newsletter" },
  ],
  connect: [
    { label: "Contact", href: "/contact" },
    { label: "LinkedIn", href: "https://linkedin.com/in/toddlebaron" },
    { label: "Twitter/X", href: "https://twitter.com/intelligentspm" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};
