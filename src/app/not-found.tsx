import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-20 md:py-32 min-h-[60vh] flex items-center">
      <Container className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
          This page doesn&apos;t exist.
        </h1>
        <p className="text-xl text-[var(--text-secondary)] mb-8">
          Unlike your payout disputes.
        </p>
        <p className="text-[var(--text-tertiary)] mb-8">
          Let&apos;s get you somewhere useful.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/">Go home</Button>
          <Button href="/services" variant="secondary">
            See services
          </Button>
          <Button href="/tools" variant="secondary">
            Explore tools
          </Button>
          <Button href="/contact" variant="ghost">
            Contact
          </Button>
        </div>
      </Container>
    </section>
  );
}
