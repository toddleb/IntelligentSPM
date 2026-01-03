import type { NavItem } from "@/types";

export const mainNavigation: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Speaking", href: "/speaking" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  services: [
    { label: "Strategy & Transformation", href: "/services#strategy" },
    { label: "Vendor Selection", href: "/services#vendor" },
    { label: "Expert Witness", href: "/services#expert" },
    { label: "AI + SPM", href: "/services#ai" },
    { label: "Speaking", href: "/speaking" },
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
