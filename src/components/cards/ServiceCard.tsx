import Link from "next/link";
import { ArrowRight, Scan, Layers, Target, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ServiceCardProps } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  scan: Scan,
  layers: Layers,
  target: Target,
  settings: Settings,
};

export function ServiceCard({
  icon,
  title,
  tagline,
  description,
  timeline,
  href,
}: ServiceCardProps) {
  const Icon = iconMap[icon] || Scan;

  return (
    <Link
      href={href}
      className={cn(
        "group block p-6 bg-[var(--bg-secondary)] border border-[var(--bg-tertiary)] rounded-xl",
        "hover:border-[var(--accent-muted)] hover:-translate-y-1 transition-all duration-200"
      )}
    >
      <div className="w-12 h-12 rounded-lg bg-[var(--accent-muted)] flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-[var(--accent)]" />
      </div>

      <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
        {title}
      </h3>

      <p className="text-sm font-medium text-[var(--accent)] mb-3">
        {tagline}
      </p>

      <p className="text-[var(--text-secondary)] text-sm mb-4">
        {description}
      </p>

      {timeline && (
        <p className="text-xs text-[var(--text-tertiary)] mb-4">
          {timeline}
        </p>
      )}

      <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] group-hover:gap-2 transition-all">
        Learn more <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}
