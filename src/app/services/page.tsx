'use client';

import { AnimatedSection } from '@/components/animation';
import { StardustBackground } from '@/components/backgrounds/StardustBackground';
import { TabbedContent } from '@/components/sections/TabbedContent';
import { Button } from '@/components/ui';
import {
  Cpu,
  Briefcase,
  CheckCircle2,
  Scale,
  Sparkles,
  Mic,
  ArrowRight,
} from 'lucide-react';

const aiServices = [
  {
    title: 'AI Readiness Assessment',
    desc: 'Evaluate your SPM maturity and identify the highest-impact AI opportunities.',
  },
  {
    title: 'AI Strategy Development',
    desc: 'Build a practical roadmap for AI adoption that aligns with your business goals.',
  },
  {
    title: 'Plan Intelligence & Diagnostics',
    desc: 'AI-powered analysis: loophole detection, complexity scoring, behavior alignment.',
  },
  {
    title: 'AI Integration Advisory',
    desc: 'How to prepare your SPM program for AI—data, process, vendor evaluation.',
  },
];

const strategyServices = [
  {
    title: 'Sales Transformation Programs',
    desc: 'Full-scope SPM redesign as part of broader go-to-market transformation.',
  },
  {
    title: 'SPM Strategy & Roadmaps',
    desc: 'Multi-year SPM vision and phased execution plan.',
  },
  {
    title: 'Current State / Future State Assessments',
    desc: 'Diagnostic deep-dive with prioritized action plan.',
  },
  {
    title: 'SPM Governance Design',
    desc: 'Operating model for how comp gets planned, executed, and governed.',
  },
  {
    title: 'Sales Planning & Quota Methodology',
    desc: 'Quota-setting frameworks, territory design, capacity planning.',
  },
];

const vendorServices = [
  {
    title: 'SPM Vendor Selection',
    desc: 'Structured evaluation framework, RFP development, demo facilitation.',
  },
  {
    title: 'RFP Development & Management',
    desc: 'Requirements documentation, scoring methodology, vendor communication.',
  },
  {
    title: 'Implementation Oversight & QA',
    desc: 'Independent review of progress, configuration decisions, and UAT.',
  },
  {
    title: 'Platform Optimization',
    desc: 'Getting more from your existing ICM investment.',
  },
];

const expertServices = [
  {
    title: 'Expert Witness Testimony',
    desc: 'Deposition and trial testimony. Clear, credible, and defensible.',
  },
  {
    title: 'Expert Reports',
    desc: 'Written analysis and opinion on compensation-related matters.',
  },
  {
    title: 'Litigation Support',
    desc: 'Case analysis, document review, and strategic input.',
  },
  {
    title: 'Executive Testimony Preparation',
    desc: 'Coaching executives who need to testify on compensation matters.',
  },
];

function ServiceList({
  services,
}: {
  services: { title: string; desc: string }[];
}) {
  return (
    <ul className="space-y-4">
      {services.map((item) => (
        <li key={item.title} className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-semibold text-text-primary">{item.title}</span>
            <span className="text-text-secondary"> — {item.desc}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function ServicesPage() {
  const serviceTabs = [
    {
      id: 'ai',
      label: 'AI-Powered',
      icon: 'Cpu',
      content: (
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white mb-6">
              <Cpu className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-3">
              AI-Powered SPM
            </h3>
            <p className="text-accent font-medium mb-4">
              AI changes everything. Expertise tells it where to look.
            </p>
            <p className="text-text-secondary">
              I&apos;m building an AI-powered SPM platform launching Q1 and advising
              companies on practical AI applications. AI amplifies expertise—it
              doesn&apos;t replace it.
            </p>
          </div>
          <div className="lg:col-span-3">
            <ServiceList services={aiServices} />
            <div className="mt-8 p-4 rounded-lg bg-accent/10 border border-accent/20">
              <p className="text-accent font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Coming Q1: AI-powered SPM tools with plan analysis, diagnostics, and
                automation.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/ai-spm" className="btn-gold">
                Explore AI + SPM
              </Button>
              <Button href="/contact?service=ai" variant="secondary" className="btn-noir-secondary">
                Discuss AI Services
              </Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'strategy',
      label: 'Strategy',
      icon: 'Briefcase',
      content: (
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white mb-6">
              <Briefcase className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-3">
              Strategy & Transformation
            </h3>
            <p className="text-accent font-medium mb-4">
              The big-picture work that sets the foundation.
            </p>
            <p className="text-text-secondary">
              When SPM needs fundamental change—new GTM motion, M&A integration,
              restructuring—you need someone who sees the whole system.
            </p>
          </div>
          <div className="lg:col-span-3">
            <ServiceList services={strategyServices} />
            <p className="mt-6 text-sm text-text-muted">
              Typical engagements: M&A comp integration (60-90 days), GTM
              realignment (8-12 weeks), PE portfolio assessment (2-4 weeks)
            </p>
            <div className="mt-8">
              <Button href="/contact?service=strategy" variant="primary" className="btn-gold">
                Discuss Strategy Work
              </Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'vendor',
      label: 'Vendor Selection',
      icon: 'CheckCircle',
      content: (
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white mb-6">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-3">
              Vendor Selection
            </h3>
            <p className="text-accent font-medium mb-4">
              Pick the right platform. Make sure it works.
            </p>
            <p className="text-text-secondary">
              Most companies get vendor selection wrong—not because vendors are bad,
              but because the evaluation process is broken.
            </p>
          </div>
          <div className="lg:col-span-3">
            <ServiceList services={vendorServices} />
            <p className="mt-6 text-sm text-text-muted">
              Typical engagements: Full vendor selection (6-10 weeks), RFP
              development (2-4 weeks), Implementation QA (ongoing)
            </p>
            <div className="mt-8">
              <Button href="/contact?service=vendor" variant="primary" className="btn-gold">
                Talk Vendor Selection
              </Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'expert',
      label: 'Expert Witness',
      icon: 'Scale',
      content: (
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white mb-6">
              <Scale className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-3">
              Expert Witness
            </h3>
            <p className="text-accent font-medium mb-4">
              When comp disputes go to court.
            </p>
            <p className="text-text-secondary">
              I&apos;ve testified in wrongful termination cases, commission disputes,
              and class actions. I make technical concepts clear under
              cross-examination.
            </p>
          </div>
          <div className="lg:col-span-3">
            <ServiceList services={expertServices} />
            <p className="mt-6 text-sm text-text-muted">
              Case types: Wrongful termination, commission disputes, class action
              wage claims, breach of contract
            </p>
            <div className="mt-8">
              <Button href="/contact?service=expert" variant="primary" className="btn-gold">
                Contact for Legal Matters
              </Button>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-bg-noir">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <StardustBackground variant="purple-black" density="sparse" />

        <div className="container-main relative z-10">
          <AnimatedSection animation="fade-up" className="max-w-4xl">
            <span className="inline-block text-sm font-mono uppercase tracking-widest text-gold mb-4">
              Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              How I{' '}
              <span className="text-gradient-purple text-glow">Help</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl">
              From AI-powered diagnostics to courtroom testimony. I work across
              the full spectrum of SPM—wherever you need deep expertise and honest
              answers.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-noir via-bg-secondary to-bg-noir" />

        <div className="container-main relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="noir-panel p-8 lg:p-12 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                My Approach
              </h2>
              <p className="text-lg text-accent font-medium mb-4">
                I don&apos;t sell hours. I solve problems.
              </p>
              <p className="text-text-secondary mb-4">
                Every engagement is scoped around outcomes, not activities. I&apos;ll
                tell you what I think—even if it&apos;s not what you want to hear.
                And I&apos;ll make sure you can actually execute after I leave.
              </p>
              <p className="text-text-secondary">
                I&apos;m vendor-neutral, which means I don&apos;t get paid to recommend
                any platform. My only incentive is getting your program right.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Tabbed Services Section */}
      <section id="services" className="relative py-24 overflow-hidden">
        <div className="container-main relative z-10">
          <AnimatedSection animation="fade-up" className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-4">
              What I Offer
            </h2>
            <p className="text-text-secondary text-center max-w-2xl mx-auto">
              Select a service area to learn more about how I can help your
              organization.
            </p>
          </AnimatedSection>

          <TabbedContent tabs={serviceTabs} variant="pills" animated={true} />
        </div>
      </section>

      {/* Speaking Section */}
      <section className="relative py-24 overflow-hidden">
        <StardustBackground variant="gold-dust" density="sparse" />

        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-up">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-bg-noir mb-6">
                <Mic className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Speaking & Workshops
              </h2>
              <p className="text-accent font-medium mb-4">
                Keynotes that don&apos;t suck.
              </p>
              <p className="text-text-secondary mb-6">
                I speak at conferences, corporate events, and executive offsites.
                No death by PowerPoint. No inspirational fluff. Just practical
                frameworks and uncomfortable truths about sales compensation.
              </p>
              <Button href="/speaking" className="btn-gold">
                See Speaking Topics
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="noir-panel p-8">
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  Formats
                </h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                    Conference Keynotes (45-60 min)
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                    Executive Briefings (60-90 min)
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                    Corporate Workshops (half or full-day)
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                    Podcast Appearances
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Working Together Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-noir via-bg-secondary to-bg-noir" />

        <div className="container-main relative z-10">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Working Together
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              A straightforward process designed to get you results, not pad my
              hours.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Initial Conversation',
                desc: 'Free 30-minute call to discuss your situation. No sales pitch—just honest assessment.',
              },
              {
                step: '2',
                title: 'Scoping',
                desc: 'Proposal with clear scope and approach. Fixed-price for projects, retainer for advisory.',
              },
              {
                step: '3',
                title: 'Engagement',
                desc: 'We work together. I deliver. You execute. I\'m available for questions throughout.',
              },
              {
                step: '4',
                title: 'Handoff',
                desc: 'Clear deliverables, documented recommendations, and a path forward.',
              },
            ].map((item, index) => (
              <AnimatedSection
                key={item.step}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="noir-panel p-6 h-full text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-accent">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <StardustBackground variant="cosmic-fog" density="medium" />

        <div className="container-main relative z-10 text-center">
          <AnimatedSection animation="scale-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              Let&apos;s Talk About Your{' '}
              <span className="text-gradient-purple text-glow">
                SPM Challenges
              </span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10">
              Book a call or send a message. I read everything and respond within
              24 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/contact" size="lg" variant="primary" className="btn-gold">
                Book a Call
              </Button>
              <Button
                href="/contact"
                size="lg"
                variant="secondary"
                className="btn-noir-secondary"
              >
                Send a Message
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
