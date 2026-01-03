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

// Theme types
export interface HSLColor {
  h: number;
  s: number;
  l: number;
}

export interface ThemeColors {
  accent: HSLColor;
  gold: string;
  silver: string;
  bgPrimary: string;
  bgSecondary: string;
  bgTertiary: string;
  textPrimary: string;
  textSecondary: string;
}

export interface ThemeTypography {
  displayFont: string;
  headingFont: string;
  bodyFont: string;
  monoFont: string;
  baseSize: number;
  scaleRatio: number;
}

export interface ThemeEffect {
  enabled: boolean;
  opacity: number;
}

export interface ThemeEffects {
  grain: ThemeEffect;
  vignette: ThemeEffect & { spread: number };
  scanlines: ThemeEffect;
  neonGlow: ThemeEffect & { intensity: number };
  halftone: ThemeEffect & { size: number };
}

export interface ThemeBackground {
  type: 'solid' | 'gradient' | 'cosmic' | 'custom';
  value: string;
  parallax: boolean;
  particles: boolean;
}

export interface ThemeComponents {
  borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  buttonStyle: 'solid' | 'gradient' | 'outline' | 'glass';
  cardStyle: 'solid' | 'glass' | 'glow' | 'comic';
}

export interface ThemeConfig {
  id: string;
  name: string;
  colors: ThemeColors;
  typography: ThemeTypography;
  effects: ThemeEffects;
  background: ThemeBackground;
  components: ThemeComponents;
}

// Animation types
export type AnimationType =
  | 'fade'
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'scale'
  | 'scale-up'
  | 'rotate';

export interface AnimationConfig {
  type: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export interface ParallaxLayer {
  id: string;
  content: 'stars' | 'nebula' | 'particles' | 'custom';
  speed: number;
  opacity: number;
  zIndex: number;
}

// AI + SPM types
export interface AICapability {
  id: string;
  title: string;
  description: string;
  icon: string;
  examples: string[];
  name?: string; // Legacy alias for title
  benefits?: string[]; // Legacy alias for examples
  cta?: { label: string; href: string };
}

export interface AITool {
  id: string;
  name: string;
  description: string;
  icon: string;
  status: 'available' | 'coming-soon' | 'waitlist' | 'premium';
  type?: 'free' | 'waitlist' | 'premium' | 'coming-soon'; // Legacy
  href?: string;
  features?: string[];
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  icon: string;
  headline?: string; // Legacy support
  body?: string; // Legacy support
}

// Tab types for tabbed content
export interface Tab {
  id: string;
  label: string;
  icon?: string;
  content?: React.ReactNode;
}

// Feature types
export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  href?: string;
}
