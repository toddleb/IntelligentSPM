import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { ToolCardProps } from "@/types";

export function ToolCard({ name, description, status, whoFor, cta }: ToolCardProps) {
  return (
    <div
      className={cn(
        "p-6 bg-[var(--bg-secondary)] border border-[var(--bg-tertiary)] rounded-xl",
        "hover:border-[var(--accent-muted)] transition-colors"
      )}
    >
      <div className="mb-4">
        <Badge status={status} />
      </div>

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
        {name}
      </h3>

      <p className="text-sm text-[var(--text-secondary)] mb-3">
        {description}
      </p>

      {whoFor && (
        <p className="text-xs text-[var(--text-tertiary)] mb-4">
          For: {whoFor}
        </p>
      )}

      <Button
        href={cta.href}
        variant={status === "coming-soon" ? "secondary" : "primary"}
        size="sm"
        className="w-full"
      >
        {cta.label}
      </Button>
    </div>
  );
}
