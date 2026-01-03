import { cn } from "@/lib/utils";

type BadgeStatus = "free" | "waitlist" | "download" | "available" | "coming-soon";

interface BadgeProps {
  status: BadgeStatus;
  className?: string;
}

const statusConfig = {
  free: {
    label: "Free",
    className: "bg-[var(--accent-muted)] text-[var(--accent)]",
  },
  waitlist: {
    label: "Waitlist",
    className: "bg-amber-900/30 text-amber-400",
  },
  download: {
    label: "Download",
    className: "bg-blue-900/30 text-blue-400",
  },
  available: {
    label: "Available",
    className: "bg-[var(--accent-muted)] text-[var(--accent)]",
  },
  "coming-soon": {
    label: "Coming Soon",
    className: "bg-[var(--bg-tertiary)] text-[var(--text-tertiary)]",
  },
};

export function Badge({ status, className }: BadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
