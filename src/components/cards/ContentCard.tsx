import Link from "next/link";
import { ArrowRight, Headphones, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ContentCardProps } from "@/types";

export function ContentCard({
  type,
  title,
  description,
  href,
  date,
  duration,
}: ContentCardProps) {
  const Icon = type === "podcast" ? Headphones : FileText;

  return (
    <Link
      href={href}
      className={cn(
        "group block p-6 bg-[var(--bg-secondary)] border border-[var(--bg-tertiary)] rounded-xl",
        "hover:border-[var(--accent-muted)] transition-all"
      )}
    >
      <div className="flex items-center gap-2 mb-3">
        <span
          className={cn(
            "inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium",
            type === "podcast"
              ? "bg-purple-900/30 text-purple-400"
              : "bg-blue-900/30 text-blue-400"
          )}
        >
          <Icon className="w-3 h-3" />
          {type === "podcast" ? "Podcast" : "Article"}
        </span>
        {duration && (
          <span className="text-xs text-[var(--text-muted)]">{duration}</span>
        )}
      </div>

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
        {title}
      </h3>

      <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">
        {description}
      </p>

      <div className="flex items-center justify-between">
        {date && <span className="text-xs text-[var(--text-muted)]">{date}</span>}
        <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] group-hover:gap-2 transition-all">
          {type === "podcast" ? "Listen" : "Read"} <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
