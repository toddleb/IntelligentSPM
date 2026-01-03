import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { HeroSecondaryProps } from "@/types";

export function HeroSecondary({ breadcrumb, title, description }: HeroSecondaryProps) {
  return (
    <section className="py-12 md:py-16 lg:py-20 border-b border-[var(--bg-secondary)]">
      <Container>
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-[var(--text-tertiary)] mb-4">
            <Link href="/" className="hover:text-[var(--text-secondary)]">
              Home
            </Link>
            {breadcrumb.map((crumb, index) => (
              <span key={crumb.href} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                {index === breadcrumb.length - 1 ? (
                  <span className="text-[var(--text-secondary)]">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-[var(--text-secondary)]">
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
          {title}
        </h1>

        {description && (
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
