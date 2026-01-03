'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import { StardustBackground } from '@/components/backgrounds';
import { AnimatedSection } from '@/components/animation';

interface HeroHomeProps {
  eyebrow?: string;
  headline: string;
  highlightedText?: string;
  subhead: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  microProof?: string;
  backgroundImage?: string;
  noirPanelImage?: string;
  className?: string;
}

export function HeroHome({
  eyebrow,
  headline,
  highlightedText,
  subhead,
  primaryCTA,
  secondaryCTA,
  microProof,
  backgroundImage,
  noirPanelImage,
  className,
}: HeroHomeProps) {
  return (
    <section
      className={cn(
        'relative min-h-screen flex items-center justify-center overflow-hidden',
        'bg-bg-primary',
        className
      )}
    >
      {/* Stardust cosmic background */}
      <StardustBackground
        variant="nebula"
        density="medium"
        animated
        className="absolute inset-0"
      />

      {/* Background image with Ken Burns if provided */}
      {backgroundImage && (
        <div className="absolute inset-0 ken-burns opacity-30">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
            aria-hidden="true"
          />
        </div>
      )}

      {/* Noir panel character image */}
      {noirPanelImage && (
        <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-60 hidden lg:block">
          <div className="relative w-full h-full">
            <Image
              src={noirPanelImage}
              alt=""
              fill
              className="object-contain object-right-bottom"
              priority
              aria-hidden="true"
            />
            {/* Gradient fade to content */}
            <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/80 to-transparent" />
          </div>
        </div>
      )}

      {/* Heavy vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container-main relative z-10 py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          {eyebrow && (
            <AnimatedSection animation="fade-up" delay={0}>
              <span className="inline-block text-sm font-mono uppercase tracking-widest text-accent-bright mb-6">
                {eyebrow}
              </span>
            </AnimatedSection>
          )}

          {/* Headline */}
          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              {highlightedText ? (
                <>
                  {headline.split(highlightedText)[0]}
                  <span className="text-gradient-purple">{highlightedText}</span>
                  {headline.split(highlightedText)[1]}
                </>
              ) : (
                headline
              )}
            </h1>
          </AnimatedSection>

          {/* Subhead */}
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-8 max-w-2xl">
              {subhead}
            </p>
          </AnimatedSection>

          {/* CTAs */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={primaryCTA.href} size="lg" variant="primary" className="btn-noir">
                {primaryCTA.label}
              </Button>
              {secondaryCTA && (
                <Button href={secondaryCTA.href} size="lg" variant="secondary" className="btn-noir-secondary">
                  {secondaryCTA.label}
                </Button>
              )}
            </div>
          </AnimatedSection>

          {/* Micro proof */}
          {microProof && (
            <AnimatedSection animation="fade" delay={500}>
              <p className="mt-8 text-sm text-text-muted font-mono">
                {microProof}
              </p>
            </AnimatedSection>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <AnimatedSection animation="fade" delay={800}>
          <div className="flex flex-col items-center gap-2 text-text-muted">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent animate-pulse" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default HeroHome;
