import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Todd LeBaron",
  description:
    "30 years of sales compensation expertise. Expert witness. AI practitioner. The SPM advisor companies call when the stakes are high.",
};

const beliefs = [
  {
    title: "Comp is a strategic lever, not a back-office function.",
    description:
      "The companies that treat SPM as 'just payroll' consistently underperform. The ones that treat it as a behavior engine and strategic tool win.",
  },
  {
    title: "AI changes everything—but only if you know what to point it at.",
    description:
      "Everyone's talking about AI. Few know how to apply it to SPM. The winning combination is deep domain expertise plus modern AI capabilities.",
  },
  {
    title: "Technology doesn't fix broken thinking.",
    description:
      "I've seen companies buy million-dollar ICM platforms and still run comp in spreadsheets. The tool isn't the problem. Process and governance are.",
  },
  {
    title: "The best plan fails without operating discipline.",
    description:
      "You can design a perfect comp plan. Without governance—cadences, controls, ownership, exception handling—it will drift, break, and create disputes.",
  },
  {
    title: "I'll tell you what I think, not what you want to hear.",
    description:
      "I'm not here to validate bad decisions. If your comp plan is broken, I'll say so. If your vendor is wrong for you, I'll say that too.",
  },
];

const industries = [
  "Enterprise SaaS",
  "Medical Devices & Life Sciences",
  "Financial Services & Insurance",
  "Manufacturing & Industrial",
  "Telecommunications",
  "Professional Services",
];

const contexts = [
  "M&A integration",
  "Carve-outs and spin-offs",
  "Rapid-scale growth",
  "Turnaround and restructuring",
  "Platform migration",
  "Governance overhaul",
  "Expert testimony",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <Container className="max-w-4xl">
          <p className="text-sm text-[var(--text-tertiary)] mb-2">Home / About</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            The Toddfather.
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            30 years of making sales compensation work. Now bringing AI to the party.
          </p>
        </Container>
      </section>

      {/* The Story */}
      <section className="py-16 md:py-20 bg-[var(--bg-secondary)]">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Who I am</h2>
          <div className="space-y-4 text-[var(--text-secondary)] text-lg leading-relaxed">
            <p>
              I&apos;m Todd LeBaron. I&apos;ve spent three decades inside sales compensation—not
              watching from the sidelines, but in the trenches. I&apos;ve designed comp plans,
              run payout cycles, fixed broken programs, and testified in court when things went wrong.
            </p>
            <p>
              But here&apos;s the part that surprises people: before SPM, I was an AI researcher for
              the Air Force and DARPA. I was doing machine learning before it was cool—neural networks,
              pattern recognition, the hard stuff. That background shaped how I think about complex systems.
            </p>
            <p>
              I&apos;ve worked with 50-person startups figuring out their first comp plan and Fortune 500
              enterprises with thousands of reps and plans so complex they need their own governance teams.
              I&apos;ve seen what works. More importantly, I&apos;ve seen what breaks—and why.
            </p>
            <p>
              The nickname &ldquo;Toddfather&rdquo; started as a joke. A client coined it after I found
              a seven-figure payout error before their board meeting. It stuck because it captures
              how I work: direct, thorough, and always looking for what others miss.
            </p>
            <p>
              Now those two worlds—30 years of SPM and deep AI research roots—have collided.
              I&apos;m building AI-powered tools, advising companies on AI integration, and
              figuring out how modern technology can make comp programs smarter. But here&apos;s what
              I&apos;ve learned: AI amplifies expertise. It doesn&apos;t replace it.
            </p>
          </div>
        </Container>
      </section>

      {/* What I Believe */}
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">My point of view</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {beliefs.map((belief) => (
              <div key={belief.title} className="noir-panel rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  {belief.title}
                </h3>
                <p className="text-[var(--text-secondary)]">{belief.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Background */}
      <section className="py-16 md:py-20 bg-[var(--bg-secondary)]">
        <Container>
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">Where I&apos;ve been</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Experience Types</h3>
              <ul className="space-y-2">
                {[
                  { label: "Operator", desc: "Ran comp programs from the inside—planning, administration, governance" },
                  { label: "Advisor", desc: "Strategic consulting for transformations, vendor selections, and program design" },
                  { label: "Expert", desc: "Testified as expert witness in comp-related litigation" },
                  { label: "Builder", desc: "Developing AI-powered SPM tools (launching Q1)" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-[var(--text-primary)]">{item.label}:</span>{" "}
                      <span className="text-[var(--text-secondary)]">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Industries</h3>
              <ul className="space-y-1">
                {industries.map((industry) => (
                  <li key={industry} className="text-[var(--text-secondary)]">&bull; {industry}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Contexts</h3>
            <div className="flex flex-wrap gap-2">
              {contexts.map((context) => (
                <span
                  key={context}
                  className="px-3 py-1 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] text-sm rounded-full"
                >
                  {context}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-8 text-sm text-[var(--text-tertiary)]">
            Scale: From 50-rep startups to 5,000+ rep global enterprises. Mid-market to Fortune 500.
          </p>
        </Container>
      </section>

      {/* Expert Witness */}
      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">When lawyers call</h2>
          <p className="text-lg text-[var(--text-secondary)] mb-6">
            Sales compensation is complex. Juries aren&apos;t. When comp disputes end up in court,
            attorneys need someone who can explain how commission plans work, analyze whether they
            were administered correctly, and hold up under cross-examination.
          </p>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            That&apos;s me. I&apos;ve served as expert witness in wrongful termination cases,
            commission disputes, and class actions. I&apos;ve written expert reports, given
            depositions, and testified at trial.
          </p>
          <Button href="/contact">Contact for legal matters &rarr;</Button>
        </Container>
      </section>

      {/* AI + SPM */}
      <section className="py-16 md:py-20 bg-[var(--bg-secondary)]">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">Building the future</h2>
          <p className="text-lg text-[var(--text-secondary)] mb-6">
            I&apos;m not just advising on AI—I&apos;m building with it.
          </p>
          <p className="text-lg text-[var(--text-secondary)] mb-6">
            In partnership with BHG, I&apos;m developing an AI-powered SPM platform launching Q1.
            It brings plan intelligence, diagnostics, and automation to comp teams—informed by
            three decades of knowing what actually matters.
          </p>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            But the bigger picture is this: AI is going to transform how companies run compensation.
            The winners will be the ones who combine deep domain expertise with modern AI capabilities.
            That&apos;s the bet I&apos;m making.
          </p>
          <ul className="space-y-2 text-[var(--text-secondary)]">
            <li>&bull; AI-powered plan analysis and diagnostics</li>
            <li>&bull; LLM applications for document processing and exception handling</li>
            <li>&bull; Predictive analytics for comp forecasting</li>
            <li>&bull; Workflow automation for common SPM tasks</li>
          </ul>
        </Container>
      </section>

      {/* Working Style */}
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">How I work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Direct", desc: "I don't bury the lead. You'll know what I think early and often." },
              { title: "Practical", desc: "Everything I deliver is designed to be executed. No shelf decks." },
              { title: "Collaborative", desc: "I work with your team, build capability, and transfer knowledge." },
              { title: "Vendor-neutral", desc: "I don't sell software or take referral fees. My only incentive is getting it right." },
            ].map((style) => (
              <div key={style.title} className="noir-panel rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{style.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{style.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quote */}
      <section className="py-16 md:py-20 bg-[var(--bg-secondary)]">
        <Container className="max-w-3xl text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-[var(--text-primary)] italic mb-6">
            &ldquo;I&apos;ve been doing this for 30 years. The technology has changed.
            The problems haven&apos;t. And now we have AI to help solve them faster.&rdquo;
          </blockquote>
          <p className="text-[var(--text-secondary)]">— Todd LeBaron</p>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <Container className="text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Get in touch</h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Whether you need strategic advice, a speaker for your event, or an expert witness,
            I&apos;m always up for a conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">Book a call &rarr;</Button>
            <Button href="/contact" variant="secondary" size="lg">Send a message &rarr;</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
