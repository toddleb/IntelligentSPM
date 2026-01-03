import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroHome } from "@/components/heroes";
import { FeatureGrid } from "@/components/sections";
import { AnimatedSection } from "@/components/animation";
import { StardustBackground } from "@/components/backgrounds";
import {
  Cpu,
  Briefcase,
  Scale,
  CheckCircle2,
  Sparkles,
  Brain,
  FileSearch,
  TrendingUp,
  Zap,
  ArrowRight,
} from "lucide-react";
import type { Feature } from "@/types";

// AI Capabilities for the feature grid
const aiFeatures: Feature[] = [
  {
    id: "plan-intelligence",
    icon: "Brain",
    title: "Plan Intelligence",
    description:
      "AI-powered analysis finds loopholes, complexity bombs, and behavior misalignments in minutes—not weeks.",
    href: "/ai-spm#intelligence",
  },
  {
    id: "document-processing",
    icon: "FileSearch",
    title: "Document Processing",
    description:
      "Extract structure from comp plans, policies, and contracts. Turn PDFs into actionable data.",
    href: "/ai-spm#documents",
  },
  {
    id: "forecasting",
    icon: "TrendingUp",
    title: "Predictive Analytics",
    description:
      "Model payout scenarios, forecast attainment, and identify risks before they become disputes.",
    href: "/ai-spm#analytics",
  },
  {
    id: "automation",
    icon: "Zap",
    title: "Workflow Automation",
    description:
      "Automate exception handling, approval routing, and dispute resolution with AI-assisted workflows.",
    href: "/ai-spm#automation",
  },
];

// Services for the grid
const services = [
  {
    icon: Cpu,
    title: "AI-Powered SPM",
    tagline: "The future is here",
    description:
      "AI is changing how companies run comp. I help you identify high-impact use cases, avoid the hype, and actually implement.",
    contexts: "Plan diagnostics, forecasting, document analysis",
    href: "/services#ai",
    featured: true,
  },
  {
    icon: Briefcase,
    title: "Strategy & Transformation",
    tagline: "Big-picture work",
    description:
      "Sales transformation programs, SPM roadmaps, governance design, and sales planning methodology.",
    contexts: "M&A integration, GTM realignment, PE portfolio",
    href: "/services#strategy",
  },
  {
    icon: CheckCircle2,
    title: "Vendor Selection",
    tagline: "Pick the right platform",
    description:
      "SPM vendor evaluation, RFP development, implementation oversight, and AI integration.",
    contexts: "ICM selection, implementation QA",
    href: "/services#vendor",
  },
  {
    icon: Scale,
    title: "Expert Witness",
    tagline: "Courtroom-ready",
    description:
      "When comp disputes go to court, lawyers call me. Expert testimony that holds up under cross-examination.",
    contexts: "Wrongful termination, commission disputes",
    href: "/services#expert",
  },
];

const testimonials = [
  {
    quote:
      "Todd doesn't just understand comp—he understands the business. He helped us redesign our entire SPM program during a major acquisition.",
    role: "Chief Revenue Officer",
    company: "Enterprise SaaS",
  },
  {
    quote:
      "We hired Todd as an expert witness. He explained complex commission structures to a jury in a way that made sense. We won.",
    role: "Partner",
    company: "Employment Litigation Firm",
  },
  {
    quote:
      "Most consultants give you a deck. Todd gave us a working comp plan and governance model. Three years later, it's still working.",
    role: "VP Sales Operations",
    company: "Global MedTech",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section - AI First */}
      <HeroHome
        eyebrow="The Toddfather of SPM"
        headline="AI transforms SPM. Finally, someone knows where to point it."
        highlightedText="AI transforms SPM"
        subhead="30 years of knowing what breaks in sales compensation—now with AI to find it faster. Whether you're selecting a vendor, fixing a broken plan, or figuring out how AI fits in, I've probably solved it before."
        primaryCTA={{ label: "Let's Talk", href: "/contact" }}
        secondaryCTA={{ label: "Explore AI + SPM", href: "/ai-spm" }}
        microProof="Building AI-powered SPM tools. Launching Q1."
        noirPanelImage="/images/toddfather-noir-panel.png"
      />

      {/* AI Advantage Section - Elevated */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <StardustBackground
          variant="nebula"
          density="sparse"
          className="absolute inset-0"
        />

        <Container className="relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                AI-Powered Intelligence
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                AI changes everything.
                <br />
                <span className="text-gradient-purple">
                  Expertise tells it where to look.
                </span>
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                Everyone's talking about AI. Few know how to apply it to SPM. I'm
                not just advising—I'm building. An AI-powered SPM platform that
                brings plan intelligence to comp teams.
              </p>
            </div>
          </AnimatedSection>

          <FeatureGrid
            features={aiFeatures}
            columns={4}
            variant="cards"
            stagger
          />

          <AnimatedSection animation="fade-up" delay={400}>
            <div className="text-center mt-12">
              <Button href="/ai-spm" size="lg" className="btn-gold">
                Explore AI + SPM
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Meet The Toddfather - Condensed */}
      <section className="py-16 md:py-24 bg-bg-secondary">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <AnimatedSection animation="fade-right">
              <span className="text-sm font-mono uppercase tracking-widest text-accent mb-4 block">
                The Toddfather
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                AI researcher. SPM operator.
                <br />
                <span className="text-gradient-purple">
                  The worlds have collided.
                </span>
              </h2>
              <div className="space-y-4 text-text-secondary text-lg leading-relaxed mb-8">
                <p>
                  Before SPM, I was an AI researcher for the Air Force and DARPA.
                  That's not a typo. I was doing machine learning before it was
                  cool—and long before anyone thought to point it at sales
                  compensation.
                </p>
                <p>
                  I've spent three decades inside sales compensation—as an
                  operator, advisor, and the person who gets called when things
                  go sideways. Now those worlds have collided.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button href="/about" variant="secondary">
                  More about me
                </Button>
                <Button href="/contact" variant="ghost">
                  Let's talk →
                </Button>
              </div>
            </AnimatedSection>

            {/* Stats / Proof */}
            <AnimatedSection animation="fade-left" delay={200}>
              <div className="grid grid-cols-2 gap-6">
                <div className="noir-panel rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-gradient-purple mb-2">
                    30+
                  </div>
                  <div className="text-sm text-text-secondary">
                    Years in SPM
                  </div>
                </div>
                <div className="noir-panel rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-gradient-purple mb-2">
                    100+
                  </div>
                  <div className="text-sm text-text-secondary">
                    Programs designed
                  </div>
                </div>
                <div className="noir-panel rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-gradient-purple mb-2">
                    F500
                  </div>
                  <div className="text-sm text-text-secondary">
                    To startups
                  </div>
                </div>
                <div className="noir-panel rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-gradient-gold mb-2">
                    AI
                  </div>
                  <div className="text-sm text-text-secondary">
                    Now building
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* How I Help - Services Grid */}
      <section className="py-16 md:py-24">
        <Container>
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                How I help
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                AI-powered intelligence. Strategic advisory. Expert testimony.
                I work across the full spectrum of SPM.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} animation="fade-up" delay={i * 100}>
                <div
                  className={`noir-panel rounded-xl p-8 h-full transition-all duration-300 hover:border-accent/30 ${
                    service.featured
                      ? "ring-1 ring-accent/30 bg-gradient-to-br from-accent/5 to-transparent"
                      : ""
                  }`}
                >
                  {service.featured && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium mb-4">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-accent mb-3">{service.tagline}</p>
                  <p className="text-text-secondary mb-4">{service.description}</p>
                  <p className="text-sm text-text-tertiary mb-4">
                    {service.contexts}
                  </p>
                  <Button href={service.href} variant="ghost" size="sm">
                    Learn more →
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* AI Tools Preview */}
      <section className="py-16 md:py-24 bg-bg-secondary relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, rgba(147,51,234,0.15) 0%, transparent 50%)",
          }}
        />
        <Container className="relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                AI Tools
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Try the tools
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                AI-powered diagnostics for your comp plan. Start with a quick
                assessment, or go deep with a full audit.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <AnimatedSection animation="scale-up" delay={0}>
              <div className="noir-panel-glow rounded-xl p-6 text-center h-full">
                <span className="inline-block px-3 py-1 rounded-full bg-success/20 text-success text-xs font-medium mb-4">
                  Free
                </span>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Plan Smell Test
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                  3-minute diagnostic for obvious failure patterns in your comp
                  plan.
                </p>
                <Button href="/tools/smell-test" size="sm" className="w-full">
                  Take the test
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-up" delay={100}>
              <div className="noir-panel-glow rounded-xl p-6 text-center h-full">
                <span className="inline-block px-3 py-1 rounded-full bg-warning/20 text-warning text-xs font-medium mb-4">
                  Waitlist
                </span>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Plan Risk Scan
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                  AI-powered analysis of your plan document for hidden risks and
                  loopholes.
                </p>
                <Button
                  href="/tools/risk-scan"
                  size="sm"
                  variant="secondary"
                  className="w-full"
                >
                  Join waitlist
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-up" delay={200}>
              <div className="noir-panel-glow rounded-xl p-6 text-center h-full">
                <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium mb-4">
                  Premium
                </span>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Plan Intelligence Audit
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                  Full diagnostic with AI + 30 years of expertise. Findings you
                  can act on.
                </p>
                <Button href="/contact" size="sm" className="btn-gold w-full">
                  Book audit
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <Container>
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">
              What people say
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                <div className="noir-panel rounded-xl p-8 h-full flex flex-col">
                  <div className="flex-1">
                    <div className="text-accent text-4xl mb-4">"</div>
                    <blockquote className="text-text-secondary mb-6 leading-relaxed">
                      {testimonial.quote}
                    </blockquote>
                  </div>
                  <div className="border-t border-border-subtle pt-4">
                    <div className="font-semibold text-text-primary">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-text-tertiary">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-bg-secondary relative overflow-hidden">
        <StardustBackground
          variant="gold-dust"
          density="sparse"
          className="absolute inset-0 opacity-50"
        />
        <Container className="relative z-10 text-center max-w-3xl">
          <AnimatedSection animation="scale-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Ready to make your SPM program{" "}
              <span className="text-gradient-purple">intelligent</span>?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Whether you need a quick gut-check, a full transformation, or want
              to explore what AI can do for your comp program—let's talk.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg" className="btn-gold">
                Book a call
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="/ai-spm" variant="secondary" size="lg">
                Explore AI + SPM
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
