import { cn } from "@/lib/utils";
import type { TestimonialProps } from "@/types";

export function TestimonialCard({
  quote,
  name,
  title,
  company,
  variant = "card",
}: TestimonialProps) {
  if (variant === "inline") {
    return (
      <blockquote className="border-l-2 border-[var(--accent)] pl-4">
        <p className="text-[var(--text-secondary)] italic">&ldquo;{quote}&rdquo;</p>
        <footer className="mt-2 text-sm text-[var(--text-tertiary)]">
          &mdash; <span className="font-medium">{name}</span>, {title}
          {company && `, ${company}`}
        </footer>
      </blockquote>
    );
  }

  return (
    <div
      className={cn(
        "p-6 rounded-xl",
        variant === "featured"
          ? "bg-[var(--bg-tertiary)] border border-[var(--bg-hover)]"
          : "bg-[var(--bg-secondary)] border border-[var(--bg-tertiary)]"
      )}
    >
      <blockquote className="mb-4">
        <p className="text-lg text-[var(--text-primary)] leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>
      <footer className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[var(--accent-muted)] flex items-center justify-center">
          <span className="text-sm font-bold text-[var(--accent)]">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-sm font-medium text-[var(--text-primary)]">{name}</p>
          <p className="text-xs text-[var(--text-tertiary)]">
            {title}{company && `, ${company}`}
          </p>
        </div>
      </footer>
    </div>
  );
}
