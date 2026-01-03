import { Metadata } from 'next';
import { AnimatedSection } from '@/components/animation';
import { StardustBackground } from '@/components/backgrounds/StardustBackground';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { Button } from '@/components/ui';
import {
  whatIsSPM,
  whySPMMatters,
  commonProblems,
  bestPractices,
  aiTransformation,
} from '@/data/spm101';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight, CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'SPM 101 | IntelligentSPM',
  description:
    'Learn the fundamentals of Sales Performance Management. What is SPM, why it matters, common problems, best practices, and how AI is transforming compensation.',
};

const getIcon = (iconName: string) => {
  const icons = LucideIcons as unknown as Record<string, LucideIcon>;
  const Icon = icons[iconName];
  return Icon ? <Icon className="w-6 h-6" /> : null;
};

export default function SPM101Page() {
  return (
    <main className="min-h-screen bg-bg-noir">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <StardustBackground variant="purple-black" density="sparse" />

        <div className="container-main relative z-10">
          <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-mono uppercase tracking-widest text-gold mb-4">
              Education
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              SPM{' '}
              <span className="text-gradient-purple text-glow">101</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Everything you need to know about Sales Performance Management—from
              fundamentals to AI transformation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What is SPM Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-noir via-bg-secondary to-bg-noir" />

        <div className="container-main relative z-10">
          <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              {whatIsSPM.headline}
            </h2>
            <p className="text-xl text-text-secondary">
              {whatIsSPM.definition}
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatIsSPM.scope.map((item, index) => (
              <AnimatedSection
                key={item.id}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="noir-panel p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why SPM Matters Section */}
      <section className="relative py-24 overflow-hidden">
        <StardustBackground variant="gold-dust" density="sparse" />

        <div className="container-main relative z-10">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Why SPM{' '}
              <span className="text-gradient-gold">Matters</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Done right, SPM is a strategic lever. Done wrong, it&apos;s an expensive
              liability.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whySPMMatters.map((item, index) => (
              <AnimatedSection
                key={item.id}
                animation="scale-up"
                delay={index * 100}
              >
                <div className="noir-panel-glow p-6 h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold-dark/20 flex items-center justify-center text-gold mx-auto mb-4">
                    {getIcon(item.icon)}
                  </div>
                  <div className="text-3xl font-bold text-gold mb-1">
                    {item.stat}
                  </div>
                  <div className="text-xs text-text-muted uppercase tracking-wide mb-4">
                    {item.statLabel}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-noir via-bg-primary to-bg-noir" />

        <div className="container-main relative z-10">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Common SPM{' '}
              <span className="text-red-400">Problems</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              These issues plague most organizations. The good news? They&apos;re all
              fixable.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {commonProblems.map((problem, index) => (
              <AnimatedSection
                key={problem.id}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="noir-panel p-8 h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 flex-shrink-0">
                      {getIcon(problem.icon)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary">
                        {problem.title}
                      </h3>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium text-red-400 mb-3">
                        <AlertTriangle className="w-4 h-4" />
                        Symptoms
                      </div>
                      <ul className="space-y-2">
                        {problem.symptoms.map((symptom, i) => (
                          <li
                            key={i}
                            className="text-sm text-text-secondary flex items-start gap-2"
                          >
                            <span className="text-red-400 mt-1">•</span>
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium text-text-muted mb-3">
                        <Lightbulb className="w-4 h-4" />
                        Root Causes
                      </div>
                      <ul className="space-y-2">
                        {problem.causes.map((cause, i) => (
                          <li
                            key={i}
                            className="text-sm text-text-secondary flex items-start gap-2"
                          >
                            <span className="text-text-muted mt-1">•</span>
                            {cause}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-accent/5 border border-accent/10">
                    <div className="flex items-center gap-2 text-sm font-medium text-accent mb-2">
                      <CheckCircle2 className="w-4 h-4" />
                      Solution
                    </div>
                    <p className="text-sm text-text-secondary">
                      {problem.solution}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="relative py-24 overflow-hidden">
        <StardustBackground variant="purple-black" density="sparse" />

        <div className="container-main relative z-10">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Best{' '}
              <span className="text-gradient-purple">Practices</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              These principles separate high-performing SPM programs from the rest.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {bestPractices.map((practice, index) => (
              <AnimatedSection
                key={practice.id}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="noir-panel-glow p-8 h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white mb-6">
                    {getIcon(practice.icon)}
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {practice.title}
                  </h3>
                  <p className="text-text-secondary mb-6">
                    {practice.description}
                  </p>
                  <ul className="space-y-3">
                    {practice.tips.map((tip, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-text-secondary"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AI Transformation Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-noir via-bg-secondary to-bg-noir" />

        <div className="container-main relative z-10">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <span className="inline-block text-sm font-mono uppercase tracking-widest text-gold mb-4">
              The Future
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              {aiTransformation.headline}
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {aiTransformation.description}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {aiTransformation.capabilities.map((cap, index) => (
              <AnimatedSection
                key={cap.id}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="noir-panel p-6 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-gold/20 flex items-center justify-center text-accent">
                      {getIcon(cap.icon)}
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary pt-2">
                      {cap.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/10">
                      <div className="text-xs font-medium text-red-400 uppercase tracking-wide mb-2">
                        Before AI
                      </div>
                      <p className="text-sm text-text-secondary">{cap.before}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-accent/5 border border-accent/10">
                      <div className="text-xs font-medium text-accent uppercase tracking-wide mb-2">
                        With AI
                      </div>
                      <p className="text-sm text-text-secondary">{cap.after}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={400} className="mt-12 text-center">
            <Button href="/ai-spm" size="lg" className="btn-gold">
              Explore AI + SPM
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <StardustBackground variant="cosmic-fog" density="medium" />

        <div className="container-main relative z-10 text-center">
          <AnimatedSection animation="scale-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              Ready to Transform Your{' '}
              <span className="text-gradient-purple text-glow">
                SPM Program
              </span>
              ?
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10">
              Whether you&apos;re fixing fundamental issues or ready for AI
              transformation, let&apos;s talk about where you are and where you want to
              be.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/contact" size="lg" variant="primary" className="btn-gold">
                Schedule a Consultation
              </Button>
              <Button href="/services" size="lg" variant="secondary" className="btn-noir-secondary">
                View Services
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
