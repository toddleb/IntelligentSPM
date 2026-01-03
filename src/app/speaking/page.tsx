import type { Metadata } from "next";
import { ArrowRight, Clock, Mic, Users, Building, MessageSquare } from "lucide-react";
import { HeroSecondary } from "@/components/heroes/HeroSecondary";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Speaking — Todd LeBaron | IntelligentSPM",
  description:
    "Keynotes and workshops on SPM, sales compensation, and AI. Book The Toddfather for your next conference or corporate event.",
};

const keynoteTopics = [
  {
    title: "30 Years of SPM Mistakes (So You Don't Have To)",
    description:
      "The patterns that keep breaking comp plans—and the lessons I've learned fixing them. A candid look at three decades of what goes wrong and why.",
    format: "Keynote (45-60 min)",
  },
  {
    title: "AI + Comp: What Actually Works",
    description:
      "Everyone's talking about AI. Few know how to apply it to SPM. I'll cut through the hype and show you the use cases that actually matter—and the ones that don't.",
    format: "Keynote (45 min) or Workshop (half-day)",
  },
  {
    title: "The Comp Plan Is Lying",
    description:
      "Your comp plan says one thing. Your reps hear another. This session introduces a diagnostic framework for finding where plan design diverges from actual behavior.",
    format: "Keynote (45 min)",
  },
  {
    title: "Governance Isn't Optional",
    description:
      "The best-designed comp plan fails without operating discipline. How to build the cadences, controls, and ownership model that make SPM sustainable.",
    format: "Keynote (45 min) or Workshop (2 hours)",
  },
  {
    title: "Vendor Selection: What They Don't Want You to Ask",
    description:
      "How to evaluate ICM platforms beyond the demo. The questions vendors avoid and the framework that actually predicts implementation success.",
    format: "Keynote (30-45 min)",
  },
];

const formats = [
  {
    icon: Mic,
    title: "Conference Keynote",
    description: "45-60 minutes. High-energy, practical, memorable. Custom-tailored to your audience.",
  },
  {
    icon: Building,
    title: "Executive Briefing",
    description: "Focused 60-90 minute session for leadership teams. Specific to your company's SPM challenges.",
  },
  {
    icon: Users,
    title: "Workshop",
    description: "Half-day or full-day hands-on sessions. Plan diagnostics, governance design, AI readiness, or vendor selection.",
  },
  {
    icon: MessageSquare,
    title: "Podcast / Panel",
    description: "Happy to join your podcast or panel for conversations on SPM, comp, and AI.",
  },
];

const pastEvents = [
  "Revenue Operations Summit",
  "SaaS Finance & Operations Conference",
  "Enterprise Compensation Roundtable",
  "Corporate executive offsites (various)",
];

export default function SpeakingPage() {
  return (
    <>
      <HeroSecondary
        breadcrumb={[{ label: "Speaking", href: "/speaking" }]}
        title="Keynotes that don't suck."
        description="No death by PowerPoint. No vendor pitches. No inspirational fluff. Just practical frameworks and hard-won lessons—delivered with enough edge to keep your audience awake."
      />

      {/* What You Get */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
              What you get
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)]">
              <p>
                I&apos;ve been doing SPM for 30 years. I&apos;ve seen what works, what fails,
                and what keeps failing because no one wants to admit the real problem.
              </p>
              <p>
                My talks are built around one goal: give your audience something they can
                use on Monday. Real frameworks. Real examples. Real talk about what&apos;s
                broken and how to fix it.
              </p>
              <p className="text-[var(--text-primary)]">
                If you want someone to tell your audience everything is fine, I&apos;m not
                your guy. If you want uncomfortable truths delivered with expertise and
                a little wit—let&apos;s talk.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Keynote Topics */}
      <Section background="secondary">
        <Container>
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">
            Keynote Topics
          </h2>
          <div className="space-y-6">
            {keynoteTopics.map((topic) => (
              <div
                key={topic.title}
                className="noir-panel p-6 rounded-xl"
              >
                <div className="flex items-center gap-2 text-sm text-[var(--text-tertiary)] mb-3">
                  <Clock className="w-4 h-4" />
                  {topic.format}
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  {topic.title}
                </h3>
                <p className="text-[var(--text-secondary)]">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Formats */}
      <Section>
        <Container>
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">
            Formats
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {formats.map((format) => (
              <div
                key={format.title}
                className="p-6 bg-[var(--bg-secondary)] border border-[var(--bg-tertiary)] rounded-xl"
              >
                <format.icon className="w-8 h-8 text-[var(--accent)] mb-4" />
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                  {format.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {format.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Past Speaking */}
      <Section background="secondary">
        <Container>
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
            Where I&apos;ve spoken
          </h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {pastEvents.map((event) => (
              <li
                key={event}
                className="flex items-center gap-3 text-[var(--text-secondary)]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                {event}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="tertiary">
        <Container className="text-center">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
            Let&apos;s talk about your event.
          </h2>
          <p className="text-[var(--text-secondary)] mb-8 max-w-xl mx-auto">
            Tell me about your audience and what you&apos;re trying to achieve.
            I&apos;ll let you know if I&apos;m a fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">
              Request Availability <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button href="/contact" variant="secondary">
              Send a Message
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
