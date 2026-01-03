'use client';

import { AnimatedSection } from '@/components/animation';
import { StardustBackground } from '@/components/backgrounds/StardustBackground';
import { ThemeCustomizer } from '@/components/theme/ThemeCustomizer';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Palette,
  Zap,
} from 'lucide-react';

function PreviewCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="noir-panel p-6">
      <h4 className="text-sm font-medium text-text-muted uppercase tracking-wide mb-4">
        {title}
      </h4>
      {children}
    </div>
  );
}

export default function ThemePage() {
  return (
    <main className="min-h-screen bg-bg-noir">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <StardustBackground variant="purple-black" density="sparse" />

        <div className="container-main relative z-10">
          <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-mono uppercase tracking-widest text-gold mb-4">
              Customize
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Theme{' '}
              <span className="text-gradient-purple text-glow">Customizer</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Personalize the site appearance. Adjust colors, effects, and styles
              to match your preferences.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-16 overflow-hidden">
        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Customizer Panel */}
            <div className="lg:col-span-2">
              <AnimatedSection animation="fade-up">
                <ThemeCustomizer />
              </AnimatedSection>
            </div>

            {/* Live Preview Panel */}
            <div className="space-y-6">
              <AnimatedSection animation="fade-up" delay={100}>
                <div className="noir-panel-glow p-6 sticky top-24">
                  <h3 className="text-lg font-semibold text-text-primary mb-6 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-accent" />
                    Live Preview
                  </h3>

                  <div className="space-y-6">
                    {/* Buttons Preview */}
                    <PreviewCard title="Buttons">
                      <div className="space-y-3">
                        <Button className="btn-gold w-full">
                          Primary Button
                        </Button>
                        <Button variant="secondary" className="btn-noir-secondary w-full">
                          Secondary Button
                        </Button>
                      </div>
                    </PreviewCard>

                    {/* Text Preview */}
                    <PreviewCard title="Typography">
                      <div className="space-y-2">
                        <h4 className="text-lg font-bold text-text-primary">
                          Heading Text
                        </h4>
                        <p className="text-text-secondary">
                          Body text with secondary color for readability.
                        </p>
                        <p className="text-accent font-medium">
                          Accent colored link text
                        </p>
                      </div>
                    </PreviewCard>

                    {/* Card Preview */}
                    <PreviewCard title="Cards">
                      <div className="noir-panel p-4">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-3">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <h5 className="font-semibold text-text-primary mb-1">
                          Feature Card
                        </h5>
                        <p className="text-sm text-text-secondary">
                          Sample card component with icon.
                        </p>
                      </div>
                    </PreviewCard>

                    {/* Badges Preview */}
                    <PreviewCard title="Badges & Tags">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                          AI-Powered
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full">
                          Featured
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-bg-hover text-text-secondary rounded-full">
                          Default
                        </span>
                      </div>
                    </PreviewCard>

                    {/* Glow Effect Preview */}
                    <PreviewCard title="Glow Effects">
                      <div className="text-center py-4">
                        <span className="text-2xl font-bold text-gradient-purple text-glow">
                          Neon Glow
                        </span>
                      </div>
                    </PreviewCard>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Component Gallery Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-noir via-bg-secondary to-bg-noir" />

        <div className="container-main relative z-10">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Component Gallery
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Preview how your theme settings affect various components across the
              site.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Cards */}
            <AnimatedSection animation="fade-up" delay={0}>
              <div className="noir-panel-glow p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white mb-4">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Custom Colors
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                  Adjust accent colors to match your brand identity.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    HSL color picker
                  </li>
                  <li className="flex items-center gap-2 text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    Preset themes
                  </li>
                  <li className="flex items-center gap-2 text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    Real-time preview
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <div className="noir-panel-glow p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Visual Effects
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                  Toggle and adjust cinematic visual effects.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    Film grain overlay
                  </li>
                  <li className="flex items-center gap-2 text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    Vignette effect
                  </li>
                  <li className="flex items-center gap-2 text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    Neon glow intensity
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="noir-panel-glow p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Export & Share
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                  Save your customizations for later use.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    CSS variables export
                  </li>
                  <li className="flex items-center gap-2 text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    JSON config export
                  </li>
                  <li className="flex items-center gap-2 text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    Local storage save
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-16 overflow-hidden">
        <StardustBackground variant="gold-dust" density="sparse" />

        <div className="container-main relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-gold mb-2">5</div>
                <div className="text-sm text-text-muted">Preset Themes</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">360</div>
                <div className="text-sm text-text-muted">Hue Options</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold mb-2">3</div>
                <div className="text-sm text-text-muted">Visual Effects</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">2</div>
                <div className="text-sm text-text-muted">Export Formats</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <StardustBackground variant="cosmic-fog" density="medium" />

        <div className="container-main relative z-10 text-center">
          <AnimatedSection animation="scale-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              Like What You See?
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10">
              This customizer demonstrates the flexibility of the design system.
              Want something similar for your project?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/contact" size="lg" variant="primary" className="btn-gold">
                Let&apos;s Talk
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="/" size="lg" variant="secondary" className="btn-noir-secondary">
                Back to Home
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
