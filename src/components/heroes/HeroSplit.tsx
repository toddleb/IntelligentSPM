'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import { AnimatedSection } from '@/components/animation';

interface HeroSplitProps {
  eyebrow?: string;
  headline: string;
  highlightedText?: string;
  subhead: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  image: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  comicFrame?: boolean;
  className?: string;
}

export function HeroSplit({
  eyebrow,
  headline,
  highlightedText,
  subhead,
  primaryCTA,
  secondaryCTA,
  image,
  imageAlt = '',
  imagePosition = 'right',
  comicFrame = false,
  className,
}: HeroSplitProps) {
  const imageFirst = imagePosition === 'left';

  return (
    <section
      className={cn(
        'relative py-20 lg:py-32 overflow-hidden bg-bg-primary',
        className
      )}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at ${imageFirst ? '80%' : '20%'} 30%, rgba(147,51,234,0.1) 0%, transparent 50%),
            radial-gradient(ellipse at ${imageFirst ? '20%' : '80%'} 70%, rgba(88,28,135,0.08) 0%, transparent 50%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <div
          className={cn(
            'grid lg:grid-cols-2 gap-12 lg:gap-16 items-center',
            imageFirst && 'lg:grid-flow-dense'
          )}
        >
          {/* Content */}
          <div className={cn(imageFirst && 'lg:col-start-2')}>
            {/* Eyebrow */}
            {eyebrow && (
              <AnimatedSection animation="fade-up" delay={0}>
                <span className="inline-block text-sm font-mono uppercase tracking-widest text-accent-bright mb-4">
                  {eyebrow}
                </span>
              </AnimatedSection>
            )}

            {/* Headline */}
            <AnimatedSection animation="fade-up" delay={100}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
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
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                {subhead}
              </p>
            </AnimatedSection>

            {/* CTAs */}
            {(primaryCTA || secondaryCTA) && (
              <AnimatedSection animation="fade-up" delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  {primaryCTA && (
                    <Button href={primaryCTA.href} size="lg" variant="primary" className="btn-noir">
                      {primaryCTA.label}
                    </Button>
                  )}
                  {secondaryCTA && (
                    <Button href={secondaryCTA.href} size="lg" variant="secondary" className="btn-noir-secondary">
                      {secondaryCTA.label}
                    </Button>
                  )}
                </div>
              </AnimatedSection>
            )}
          </div>

          {/* Image */}
          <AnimatedSection
            animation={imageFirst ? 'fade-right' : 'fade-left'}
            delay={200}
            className={cn(imageFirst && 'lg:col-start-1')}
          >
            <div
              className={cn(
                'relative aspect-[4/5] lg:aspect-[3/4]',
                comicFrame && 'comic-frame p-1'
              )}
            >
              {/* Image container */}
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className={cn(
                    'object-cover',
                    'noir-photo'
                  )}
                  priority
                />

                {/* Halftone overlay for comic effect */}
                {comicFrame && (
                  <div
                    className="absolute inset-0 pointer-events-none opacity-30"
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 1px, transparent 1px)',
                      backgroundSize: '4px 4px',
                    }}
                    aria-hidden="true"
                  />
                )}

                {/* Vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)',
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Glow effect behind image */}
              <div
                className="absolute -inset-4 -z-10 opacity-50 blur-3xl"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(147,51,234,0.3) 0%, transparent 70%)',
                }}
                aria-hidden="true"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default HeroSplit;
