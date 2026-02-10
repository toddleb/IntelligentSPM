/**
 * PrimaryButton Component
 *
 * A styled CTA button with consistent sizing and hover effects.
 * Supports multiple color variants via the `variant` prop.
 */

import Link from "next/link";

type ButtonVariant = "orange" | "cyan" | "green" | "purple";

interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: "default" | "large";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  orange: "bg-[#FE9200] hover:bg-[#FE9200]/90 text-white",
  cyan: "bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-white",
  green: "bg-[#A3E635] hover:bg-[#A3E635]/90 text-[#1a0e2e]",
  purple: "bg-[#58108E] hover:bg-[#58108E]/90 text-white",
};

export function PrimaryButton({
  children,
  href,
  variant = "orange",
  size = "default",
  className = "",
  type = "button",
  disabled = false,
  onClick,
}: PrimaryButtonProps) {
  const sizeStyles = size === "large" ? "px-8 py-4 text-lg" : "px-6 py-3";
  const baseStyles = `${sizeStyles} rounded-xl font-bold transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href}>
        <button className={baseStyles} disabled={disabled}>
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseStyles}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
