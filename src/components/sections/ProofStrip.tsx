import { Container } from "@/components/ui/Container";

const placeholderLogos = [
  "Enterprise SaaS",
  "Global MedTech",
  "FinServ Provider",
  "Industrial Systems",
  "Cloud Scale-up",
  "Mid-Market Tech",
];

interface ProofStripProps {
  headline?: string;
}

export function ProofStrip({
  headline = "Trusted by teams who got tired of payout surprises.",
}: ProofStripProps) {
  return (
    <section className="py-12 border-y border-[var(--bg-secondary)]">
      <Container>
        <p className="text-center text-sm text-[var(--text-tertiary)] mb-8">
          {headline}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {placeholderLogos.map((name) => (
            <span
              key={name}
              className="text-sm font-medium text-[var(--text-muted)] opacity-50 hover:opacity-100 transition-opacity"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
