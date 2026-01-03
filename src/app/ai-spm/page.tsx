import { Metadata } from 'next';
import Link from 'next/link';
import { HeroParallax } from '@/components/heroes/HeroParallax';
import { AnimatedSection } from '@/components/animation';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { StardustBackground } from '@/components/backgrounds/StardustBackground';
import { Button } from '@/components/ui';
import {
  aiCapabilities,
  aiTools,
  painPoints,
  whyToddForAI,
  aiServices,
} from '@/data/ai-spm';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'AI + SPM | IntelligentSPM',
  description:
    'Transform your strategic portfolio management with AI-powered insights. Pattern recognition, predictive analytics, and automated intelligence for better project decisions.',
};

const getIcon = (iconName: string) => {
  const icons = LucideIcons as unknown as Record<string, LucideIcon>;
  const Icon = icons[iconName];
  return Icon ? <Icon className="w-6 h-6" /> : null;
};

export default function AISPMPage() {
  return (
    <main className="min-h-screen bg-bg-noir">
      {/* Hero Section */}
      <HeroParallax
        eyebrow="The Future of SPM"
        headline="AI Transforms Strategic Portfolio Management"
        highlightedText="AI Transforms"
        subhead="25 years of SPM expertise meets cutting-edge AI. Finally, someone who knows exactly where to point these powerful tools."
        primaryCTA={{ label: 'See AI in Action', href: '#ai-tools' }}
        secondaryCTA={{ label: 'Book Discovery Call', href: '/contact' }}
      />

      {/* The Problem Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-noir via-bg-primary to-bg-noir" />

        <div className="container-main relative z-10">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <span className="inline-block text-sm font-mono uppercase tracking-widest text-accent mb-4">
              The Problem
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Why Traditional SPM is{' '}
              <span className="text-gradient-purple">Failing</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Organizations are drowning in project data while starving for
              actionable insights. The old approaches can&apos;t keep up.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, index) => (
              <AnimatedSection
                key={point.id}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="noir-panel p-6 h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mx-auto mb-4">
                    {getIcon(point.icon)}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {point.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <StardustBackground variant="purple-black" density="sparse" />

        <div className="container-main relative z-10">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <span className="inline-block text-sm font-mono uppercase tracking-widest text-gold mb-4">
              AI Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              What AI Brings to{' '}
              <span className="text-gradient-gold">SPM</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              The right AI capabilities, applied with deep domain expertise,
              transform how organizations manage project portfolios.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiCapabilities.map((capability, index) => (
              <AnimatedSection
                key={capability.id}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="noir-panel-glow p-8 h-full">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white">
                      {getIcon(capability.icon)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-text-primary mb-3">
                        {capability.title}
                      </h3>
                      <p className="text-text-secondary mb-4">
                        {capability.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {capability.examples.map((example, i) => (
                          <span
                            key={i}
                            className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section id="ai-tools" className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-noir via-bg-secondary to-bg-noir" />

        <div className="container-main relative z-10">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <span className="inline-block text-sm font-mono uppercase tracking-widest text-accent mb-4">
              AI Tools
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Practical AI Solutions{' '}
              <span className="text-gradient-purple">Available Now</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Not theoretical. Not someday. Real AI tools you can use today to
              transform your project intelligence.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiTools.map((tool, index) => (
              <AnimatedSection
                key={tool.id}
                animation="scale-up"
                delay={index * 100}
              >
                <div
                  className={cn(
                    'noir-panel p-8 h-full relative overflow-hidden group',
                    tool.status === 'coming-soon' && 'opacity-80'
                  )}
                >
                  {tool.status === 'coming-soon' && (
                    <div className="absolute top-4 right-4 px-3 py-1 text-xs font-bold bg-gold/20 text-gold rounded-full">
                      Coming Q1 2025
                    </div>
                  )}

                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white mb-6 group-hover:shadow-glow-sm transition-shadow">
                    {getIcon(tool.icon)}
                  </div>

                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {tool.name}
                  </h3>
                  <p className="text-text-secondary mb-6">{tool.description}</p>

                  {tool.status === 'available' && (
                    <Button
                      href={`/contact?tool=${tool.id}`}
                      variant="secondary"
                      size="sm"
                      className="btn-noir-secondary"
                    >
                      Learn More
                    </Button>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <StardustBackground variant="gold-dust" density="sparse" />

        <div className="container-main relative z-10">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <span className="inline-block text-sm font-mono uppercase tracking-widest text-gold mb-4">
              AI Advisory Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Guided AI{' '}
              <span className="text-gradient-gold">Implementation</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Don&apos;t just buy AI tools—implement them strategically with expert
              guidance every step of the way.
            </p>
          </AnimatedSection>

          <FeatureGrid
            features={aiServices}
            columns={2}
            variant="cards"
            stagger={true}
          />
        </div>
      </section>

      {/* Why Todd Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-noir via-bg-primary to-bg-noir" />

        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-up">
              <span className="inline-block text-sm font-mono uppercase tracking-widest text-accent mb-4">
                Why Work With Me
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                AI Expertise + SPM Mastery ={' '}
                <span className="text-gradient-purple">Real Results</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                AI tools are only as good as the person wielding them. I bring
                25+ years of hands-on SPM experience combined with proven AI
                implementation success. This isn&apos;t about chasing shiny
                technology—it&apos;s about solving real problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/about" variant="secondary" className="btn-noir-secondary">
                  Read My Story
                </Button>
                <Button href="/contact" variant="primary" className="btn-gold">
                  Book a Call
                </Button>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyToddForAI.map((item, index) => (
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
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <StardustBackground variant="cosmic-fog" density="medium" />

        <div className="container-main relative z-10 text-center">
          <AnimatedSection animation="scale-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Ready to Transform Your{' '}
              <span className="text-gradient-purple text-glow">
                Project Intelligence
              </span>
              ?
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10">
              Let&apos;s discuss how AI can solve your specific SPM challenges.
              No sales pitch—just an honest conversation about possibilities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                href="/contact"
                size="lg"
                variant="primary"
                className="btn-gold"
              >
                Schedule Discovery Call
              </Button>
              <Button
                href="#ai-tools"
                size="lg"
                variant="secondary"
                className="btn-noir-secondary"
              >
                Explore AI Tools
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
