import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "primary" | "secondary" | "tertiary";
}

const backgrounds = {
  primary: "bg-[var(--bg-primary)]",
  secondary: "bg-[var(--bg-secondary)]",
  tertiary: "bg-[var(--bg-tertiary)]",
};

export function Section({
  children,
  className,
  id,
  background = "primary",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-20 lg:py-24",
        backgrounds[background],
        className
      )}
    >
      {children}
    </section>
  );
}
