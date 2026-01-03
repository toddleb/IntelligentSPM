import { cn } from "@/lib/utils";
import type { StatBlockProps } from "@/types";

const sizes = {
  sm: {
    value: "text-2xl",
    label: "text-xs",
  },
  md: {
    value: "text-4xl",
    label: "text-sm",
  },
  lg: {
    value: "text-5xl md:text-6xl",
    label: "text-base",
  },
};

export function StatBlock({ value, label, size = "md" }: StatBlockProps) {
  return (
    <div className="text-center">
      <p className={cn("font-bold text-[var(--accent)]", sizes[size].value)}>
        {value}
      </p>
      <p className={cn("text-[var(--text-secondary)] mt-1", sizes[size].label)}>
        {label}
      </p>
    </div>
  );
}
