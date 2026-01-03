import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Briefcase, CheckCircle2, Scale, Cpu, Mic } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "SPM consulting services: strategy, transformation, vendor selection, expert witness, and AI integration. 30 years of expertise for your toughest comp challenges.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <Container className="max-w-4xl">
          <p className="text-sm text-[var(--text-tertiary)] mb-2">Home / Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            How I help.
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            From boardroom strategy to courtroom testimony. I work across the full spectrum
            of SPM—wherever you need deep expertise and honest answers.
          </p>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-12 bg-[var(--bg-secondary)]">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">My approach</h2>
          <p className="text-lg text-[var(--text-secondary)] mb-4">
            I don&apos;t sell hours. I solve problems.
          </p>
          <p className="text-[var(--text-secondary)]">
            Every engagement is scoped around outcomes, not activities. I&apos;ll tell you what
            I think—even if it&apos;s not what you want to hear. And I&apos;ll make sure you can
            actually execute after I leave.
          </p>
          <p className="text-[var(--text-secondary)] mt-4">
            I&apos;m vendor-neutral, which means I don&apos;t get paid to recommend any platform.
            My only incentive is getting your program right.
          </p>
        </Container>
      </section>

      {/* Strategy & Transformation */}
      <section id="strategy" className="py-16 md:py-24 scroll-mt-20">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[var(--accent-muted)] flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-[var(--accent)]" />
              </div>
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                Strategy & Transformation
              </h2>
              <p className="text-[var(--accent)]">The big-picture work that sets the foundation.</p>
            </div>
            <div className="lg:col-span-2">
              <p className="text-lg text-[var(--text-secondary)] mb-6">
                When SPM needs to change at a fundamental level—new GTM motion, M&A integration,
                organizational restructuring—you need more than a plan review. You need someone
                who can see the whole system and design for where you&apos;re going, not where you&apos;ve been.
              </p>

              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">What&apos;s included:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  { title: "Sales Transformation Programs", desc: "Full-scope SPM redesign as part of broader go-to-market transformation." },
                  { title: "SPM Strategy & Roadmaps", desc: "Multi-year SPM vision and phased execution plan." },
                  { title: "Current State / Future State Assessments", desc: "Diagnostic deep-dive with prioritized action plan." },
                  { title: "SPM Governance Design", desc: "Operating model for how comp gets planned, executed, and governed." },
                  { title: "Sales Planning & Quota Methodology", desc: "Quota-setting frameworks, territory design, capacity planning." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-[var(--text-primary)]">{item.title}</span>
                      <span className="text-[var(--text-secondary)]"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-[var(--text-tertiary)] mb-6">
                Typical engagements: M&A comp integration (60-90 days), GTM realignment (8-12 weeks),
                PE portfolio assessment (2-4 weeks), Governance overhaul (4-6 weeks)
              </p>

              <Button href="/contact">Discuss a strategic engagement &rarr;</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Vendor Selection */}
      <section id="vendor" className="py-16 md:py-24 bg-[var(--bg-secondary)] scroll-mt-20">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[var(--accent-muted)] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-[var(--accent)]" />
              </div>
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                Vendor Selection & Implementation
              </h2>
              <p className="text-[var(--accent)]">Pick the right platform. Make sure it actually works.</p>
            </div>
            <div className="lg:col-span-2">
              <p className="text-lg text-[var(--text-secondary)] mb-6">
                Choosing an ICM/SPM platform is a high-stakes decision. Most companies get it wrong—not
                because the vendors are bad, but because the evaluation process is broken. I help you
                ask the right questions, see past the demo, and ensure implementation delivers what was promised.
              </p>

              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">What&apos;s included:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  { title: "SPM Vendor Selection", desc: "Structured evaluation framework, RFP development, demo facilitation." },
                  { title: "RFP Development & Management", desc: "Requirements documentation, scoring methodology, vendor communication." },
                  { title: "Implementation Oversight & QA", desc: "Independent review of progress, configuration decisions, and UAT." },
                  { title: "Platform Optimization", desc: "Getting more from your existing ICM investment." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-[var(--text-primary)]">{item.title}</span>
                      <span className="text-[var(--text-secondary)]"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-[var(--text-tertiary)] mb-6">
                Typical engagements: Full vendor selection (6-10 weeks), RFP development (2-4 weeks),
                Implementation QA (ongoing), Platform health check (1-2 weeks)
              </p>

              <Button href="/contact">Talk about vendor selection &rarr;</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Expert Witness */}
      <section id="expert" className="py-16 md:py-24 scroll-mt-20">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[var(--accent-muted)] flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-[var(--accent)]" />
              </div>
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                Expert Witness & Legal Support
              </h2>
              <p className="text-[var(--accent)]">When comp disputes go to court.</p>
            </div>
            <div className="lg:col-span-2">
              <p className="text-lg text-[var(--text-secondary)] mb-6">
                Sales compensation is complex. Juries aren&apos;t. When lawyers need someone to explain
                how comp works—and whether it was administered properly—they call me. I&apos;ve testified
                in wrongful termination cases, commission disputes, and class actions. I know how to
                make technical concepts clear under cross-examination.
              </p>

              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">What&apos;s included:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  { title: "Expert Witness Testimony", desc: "Deposition and trial testimony. Clear, credible, and defensible." },
                  { title: "Expert Reports", desc: "Written analysis and opinion on compensation-related matters." },
                  { title: "Litigation Support", desc: "Case analysis, document review, and strategic input." },
                  { title: "Executive Testimony Preparation", desc: "Coaching executives who need to testify on compensation matters." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-[var(--text-primary)]">{item.title}</span>
                      <span className="text-[var(--text-secondary)]"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-[var(--text-tertiary)] mb-6">
                Case types: Wrongful termination, commission disputes, class action wage claims,
                breach of contract, trade secret / non-compete with comp implications
              </p>

              <Button href="/contact">Contact for legal matters &rarr;</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* AI + SPM */}
      <section id="ai" className="py-16 md:py-24 bg-[var(--bg-secondary)] scroll-mt-20">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[var(--accent-muted)] flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-[var(--accent)]" />
              </div>
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                AI-Powered SPM
              </h2>
              <p className="text-[var(--accent)]">AI changes everything. Expertise tells it where to look.</p>
            </div>
            <div className="lg:col-span-2">
              <p className="text-lg text-[var(--text-secondary)] mb-6">
                AI isn&apos;t a buzzword for me—I&apos;m building with it. I&apos;m developing an AI-powered
                SPM platform (launching Q1) and advising companies on practical AI applications for comp.
                But here&apos;s the truth: AI amplifies expertise. It doesn&apos;t replace it.
              </p>

              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">What&apos;s included:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  { title: "AI Use Case Identification", desc: "Where can AI actually help your SPM program? Cut through the hype." },
                  { title: "Plan Intelligence & Diagnostics", desc: "AI-powered analysis: loophole detection, complexity scoring, behavior alignment." },
                  { title: "Document & Data Processing", desc: "LLMs for plan documents, exception requests, dispute cases." },
                  { title: "AI Integration Strategy", desc: "How to prepare your SPM program for AI—data, process, vendor evaluation." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-[var(--text-primary)]">{item.title}</span>
                      <span className="text-[var(--text-secondary)]"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-[var(--text-tertiary)] mb-6">
                Typical engagements: AI readiness assessment (1-2 weeks), Use case workshop (1-2 days),
                Diagnostic implementation (4-6 weeks), Ongoing advisory
              </p>

              <p className="text-[var(--accent)] font-medium mb-6">
                Coming Q1: AI-powered SPM tools built with BHG. Plan analysis, diagnostics, and automation.
              </p>

              <Button href="/contact">Talk about AI + SPM &rarr;</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Speaking */}
      <section className="py-16 md:py-24 scroll-mt-20">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[var(--accent-muted)] flex items-center justify-center mb-4">
                <Mic className="w-6 h-6 text-[var(--accent)]" />
              </div>
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                Speaking & Workshops
              </h2>
              <p className="text-[var(--accent)]">Keynotes that don&apos;t suck.</p>
            </div>
            <div className="lg:col-span-2">
              <p className="text-lg text-[var(--text-secondary)] mb-6">
                I speak at conferences, corporate events, and executive offsites. No death by PowerPoint.
                No inspirational fluff. Just practical frameworks and uncomfortable truths about sales
                compensation—delivered with enough edge to keep people awake.
              </p>

              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Formats:</h3>
              <ul className="space-y-2 mb-8 text-[var(--text-secondary)]">
                <li>&bull; Conference Keynotes (45-60 min)</li>
                <li>&bull; Executive Briefings (60-90 min)</li>
                <li>&bull; Corporate Workshops (half-day or full-day)</li>
                <li>&bull; Podcast Appearances</li>
              </ul>

              <Button href="/speaking">See speaking topics &rarr;</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* How Engagements Work */}
      <section className="py-16 md:py-24 bg-[var(--bg-secondary)]">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">Working together</h2>
          <div className="space-y-8">
            {[
              { step: "1", title: "Initial Conversation", desc: "Free 30-minute call to discuss your situation and determine fit. No sales pitch—just an honest assessment of whether I can help." },
              { step: "2", title: "Scoping", desc: "If there's a fit, I'll propose a scope and approach. Fixed-price for defined projects. Retainer for ongoing advisory." },
              { step: "3", title: "Engagement", desc: "We work together. I deliver. You execute. I'm available for questions throughout." },
              { step: "4", title: "Handoff", desc: "Clear deliverables, documented recommendations, and a path forward. I make sure you can run without me." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-muted)] flex items-center justify-center flex-shrink-0">
                  <span className="text-[var(--accent)] font-bold">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">{item.title}</h3>
                  <p className="text-[var(--text-secondary)]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <Container className="text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
            Let&apos;s talk about your SPM challenges.
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Book a call or send a message. I read everything and respond within 24 hours.
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
