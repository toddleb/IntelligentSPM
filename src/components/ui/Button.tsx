"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";
import type { ButtonVariant, ButtonSize } from "@/types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
}

const variants = {
  primary: cn(
    // Noir gradient background
    "bg-gradient-to-br from-[#9333EA] to-[#7C3AED]",
    "text-white font-semibold",
    // Border and glow
    "border border-[rgba(147,51,234,0.5)]",
    "shadow-[0_0_20px_rgba(147,51,234,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]",
    // Text shadow for depth
    "[text-shadow:0_1px_2px_rgba(0,0,0,0.3)]",
    // Hover state - intensified glow
    "hover:shadow-[0_0_30px_rgba(147,51,234,0.5),0_0_60px_rgba(147,51,234,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]",
    "hover:-translate-y-0.5"
  ),
  secondary: cn(
    // Silver/steel theme
    "bg-transparent",
    "border border-[var(--silver-dark)]",
    "text-[var(--silver)]",
    "[text-shadow:0_0_10px_rgba(192,192,192,0.2)]",
    // Hover state
    "hover:border-[var(--silver)]",
    "hover:shadow-[0_0_15px_rgba(192,192,192,0.2)]",
    "hover:text-[var(--silver-bright)]"
  ),
  ghost: cn(
    "bg-transparent",
    "text-[var(--accent)]",
    "hover:underline underline-offset-4",
    "hover:text-[var(--accent-bright)]"
  ),
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const buttonClasses = cn(
      "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      return (
        <Link href={href} className={buttonClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={buttonClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
