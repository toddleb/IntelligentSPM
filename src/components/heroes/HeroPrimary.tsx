import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { HeroPrimaryProps } from "@/types";

export function HeroPrimary({
  eyebrow,
  headline,
  subhead,
  primaryCTA,
  secondaryCTA,
  microProof,
}: HeroPrimaryProps) {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Container className="text-center max-w-4xl">
        {eyebrow && (
          <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-wider mb-4">
            {eyebrow}
          </p>
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] leading-tight mb-6">
          {headline}
        </h1>

        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-8 max-w-3xl mx-auto">
          {subhead}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button href={primaryCTA.href} size="lg">
            {primaryCTA.label}
          </Button>
          {secondaryCTA && (
            <Button href={secondaryCTA.href} variant="secondary" size="lg">
              {secondaryCTA.label}
            </Button>
          )}
        </div>

        {microProof && (
          <p className="text-sm text-[var(--text-tertiary)]">
            {microProof}
          </p>
        )}
      </Container>
    </section>
  );
}
