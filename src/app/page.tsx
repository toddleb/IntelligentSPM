import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Briefcase, Scale, Cpu, Mic, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 lg:py-36">
        <Container className="text-center max-w-4xl">
          <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-wider mb-4">
            The Toddfather of SPM
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] leading-tight mb-6">
            30 years of sales comp expertise.
            <br />
            <span className="text-gradient-purple">Now powered by AI.</span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-8 max-w-3xl mx-auto">
            I help companies transform their SPM programs—from strategy to execution.
            Whether you&apos;re selecting a vendor, fixing a broken plan, or figuring out
            how AI fits in, I&apos;ve probably solved it before.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button href="/contact" size="lg">
              Let&apos;s Talk
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              See How I Help
            </Button>
          </div>

          <p className="text-sm text-[var(--text-tertiary)]">
            Trusted by Fortune 500s. Called by lawyers. Building the future of SPM.
          </p>
        </Container>
      </section>

      {/* Meet The Toddfather */}
      <section className="py-16 md:py-20 bg-[var(--bg-secondary)]">
        <Container className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
            Meet The Toddfather
          </h2>
          <div className="space-y-4 text-[var(--text-secondary)] text-lg leading-relaxed">
            <p>
              I&apos;m Todd LeBaron. I&apos;ve spent three decades inside sales compensation—as
              an operator, advisor, and the person who gets called when things go sideways.
            </p>
            <p>
              I&apos;ve designed comp plans for 50-person startups and 5,000-rep enterprises.
              I&apos;ve testified as an expert witness when comp disputes hit the courtroom.
              And now I&apos;m applying AI to the SPM problems I&apos;ve been solving for 30 years.
            </p>
            <p>
              Before SPM, I was an AI researcher for the Air Force and DARPA. That&apos;s not
              a typo. I was doing machine learning before it was cool—and long before anyone
              thought to point it at sales compensation. Now those worlds have collided.
            </p>
            <p>
              If your comp program needs strategic direction, operational rigor, or someone
              who can explain it to a jury—I&apos;m your guy.
            </p>
          </div>
          <div className="mt-8">
            <Button href="/about" variant="ghost">
              More about me &rarr;
            </Button>
          </div>
        </Container>
      </section>

      {/* How I Help */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              How I help
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Strategic advisory. Technical implementation. Expert testimony.
              I work across the full spectrum of SPM.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Strategy & Transformation */}
            <div className="noir-panel rounded-xl p-8">
              <div className="w-12 h-12 rounded-lg bg-[var(--accent-muted)] flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-[var(--accent)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                Strategy & Transformation
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Sales transformation programs, SPM roadmaps, current state / future state
                assessments, governance design, and sales planning methodology.
                The big-picture work that sets the foundation.
              </p>
              <p className="text-sm text-[var(--text-tertiary)] mb-4">
                M&A comp integration, GTM realignment, PE portfolio optimization
              </p>
              <Button href="/services#strategy" variant="ghost" size="sm">
                Learn more &rarr;
              </Button>
            </div>

            {/* Vendor Selection */}
            <div className="noir-panel rounded-xl p-8">
              <div className="w-12 h-12 rounded-lg bg-[var(--accent-muted)] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-[var(--accent)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                Vendor Selection & Implementation
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                SPM vendor evaluation, RFP development, implementation oversight,
                and AI integration. I help you pick the right platform—and make
                sure it actually works.
              </p>
              <p className="text-sm text-[var(--text-tertiary)] mb-4">
                ICM selection, implementation QA, AI use case identification
              </p>
              <Button href="/services#vendor" variant="ghost" size="sm">
                Learn more &rarr;
              </Button>
            </div>

            {/* Expert Witness */}
            <div className="noir-panel rounded-xl p-8">
              <div className="w-12 h-12 rounded-lg bg-[var(--accent-muted)] flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-[var(--accent)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                Expert Witness & Legal Support
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                When comp disputes go to court, lawyers call me. I provide expert
                testimony, litigation support, and analysis that holds up under
                cross-examination.
              </p>
              <p className="text-sm text-[var(--text-tertiary)] mb-4">
                Wrongful termination, commission disputes, class actions
              </p>
              <Button href="/services#expert" variant="ghost" size="sm">
                Learn more &rarr;
              </Button>
            </div>

            {/* AI + SPM */}
            <div className="noir-panel rounded-xl p-8">
              <div className="w-12 h-12 rounded-lg bg-[var(--accent-muted)] flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-[var(--accent)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                AI-Powered SPM
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                AI is changing how companies run comp—but most teams don&apos;t know
                where to start. I help you identify high-impact use cases, avoid
                the hype, and actually implement.
              </p>
              <p className="text-sm text-[var(--text-tertiary)] mb-4">
                Plan diagnostics, forecasting, document analysis, payout optimization
              </p>
              <Button href="/services#ai" variant="ghost" size="sm">
                Learn more &rarr;
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* AI Angle */}
      <section className="py-16 md:py-24 bg-[var(--bg-secondary)]">
        <Container className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
            AI changes everything.
            <br />
            <span className="text-[var(--accent)]">Expertise tells it where to look.</span>
          </h2>

          <div className="space-y-4 text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
            <p>
              Everyone&apos;s talking about AI. Few know how to apply it to SPM.
            </p>
            <p>
              I&apos;m not just advising on AI—I&apos;m building with it. I&apos;m developing
              an AI-powered SPM platform (launching Q1) that brings plan intelligence,
              diagnostics, and automation to comp teams.
            </p>
            <p>
              But here&apos;s what I&apos;ve learned: AI amplifies expertise. It doesn&apos;t
              replace it. The teams winning with AI are the ones who know what
              questions to ask. That&apos;s where 30 years comes in.
            </p>
          </div>

          <ul className="space-y-3 mb-8">
            {[
              "Identify the AI use cases that actually matter for your program",
              "Cut through vendor hype with real implementation experience",
              "Apply LLMs to plan analysis, document processing, and forecasting",
              "Build the foundation for AI-ready SPM operations",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Button href="/contact">
            Talk to me about AI + SPM &rarr;
          </Button>
        </Container>
      </section>

      {/* Why Companies Call Me */}
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-12 text-center">
            Why companies call me
          </h2>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[var(--accent)] mb-2">30+</div>
              <div className="text-sm text-[var(--text-secondary)]">years in SPM</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[var(--accent)] mb-2">100+</div>
              <div className="text-sm text-[var(--text-secondary)]">comp programs designed or fixed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[var(--accent)] mb-2">F500</div>
              <div className="text-sm text-[var(--text-secondary)]">to high-growth startups</div>
            </div>
          </div>

          {/* Credibility Bullets */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { title: "Expert witness", desc: "Lawyers hire me to explain comp to juries" },
              { title: "Vendor-neutral", desc: "I don't sell software, I solve problems" },
              { title: "AI practitioner", desc: "Building, not just advising" },
              { title: "Operator background", desc: "I've run comp, not just consulted on it" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--accent)] mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-[var(--text-primary)]">{item.title}</span>
                  <span className="text-[var(--text-secondary)]"> — {item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-[var(--bg-secondary)]">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-12 text-center">
            What people say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Todd doesn't just understand comp—he understands the business. He helped us redesign our entire SPM program during a major acquisition. The board was impressed.",
                role: "Chief Revenue Officer",
                company: "Enterprise SaaS",
              },
              {
                quote: "We hired Todd as an expert witness. He explained complex commission structures to a jury in a way that actually made sense. We won.",
                role: "Partner",
                company: "Employment Litigation Firm",
              },
              {
                quote: "Most consultants give you a deck. Todd gave us a working comp plan and a governance model we could actually run. Three years later, it's still working.",
                role: "VP Sales Operations",
                company: "Global MedTech",
              },
            ].map((testimonial, i) => (
              <div key={i} className="noir-panel rounded-xl p-8">
                <blockquote className="text-[var(--text-secondary)] mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold text-[var(--text-primary)]">{testimonial.role}</div>
                  <div className="text-sm text-[var(--text-tertiary)]">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Speaking Section */}
      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-[var(--accent-muted)] flex items-center justify-center">
              <Mic className="w-6 h-6 text-[var(--accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
              Keynotes that don&apos;t suck
            </h2>
          </div>

          <p className="text-lg text-[var(--text-secondary)] mb-6">
            I speak at conferences, corporate events, and executive offsites.
            No death by PowerPoint. No vendor pitches. Just frameworks your
            audience can use on Monday.
          </p>

          <ul className="space-y-2 mb-8 text-[var(--text-secondary)]">
            <li>&bull; &ldquo;30 Years of SPM Mistakes (So You Don&apos;t Have To)&rdquo;</li>
            <li>&bull; &ldquo;AI + Comp: What Actually Works&rdquo;</li>
            <li>&bull; &ldquo;The Comp Plan Is Lying: A Diagnostic Framework&rdquo;</li>
          </ul>

          <Button href="/speaking">
            Book me to speak &rarr;
          </Button>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-[var(--bg-secondary)]">
        <Container className="text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Let&apos;s talk about your SPM program.
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Whether you need a quick gut-check or a full transformation,
            I&apos;m always up for a conversation. Book a call or drop me a line.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              Book a call &rarr;
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Send a message &rarr;
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
