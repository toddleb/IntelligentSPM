'use client';

import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import { AnimatedSection } from '@/components/animation';

interface ParallaxLayer {
  id: string;
  type: 'stars' | 'nebula' | 'gradient' | 'custom';
  speed: number; // 0-1
  opacity: number;
  color?: string;
  customStyle?: React.CSSProperties;
}

interface HeroParallaxProps {
  eyebrow?: string;
  headline: string;
  highlightedText?: string;
  subhead: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  layers?: ParallaxLayer[];
  className?: string;
}

const defaultLayers: ParallaxLayer[] = [
  {
    id: 'stars-far',
    type: 'stars',
    speed: 0.1,
    opacity: 0.4,
  },
  {
    id: 'nebula-purple',
    type: 'nebula',
    speed: 0.2,
    opacity: 0.6,
    color: 'rgba(147, 51, 234, 0.2)',
  },
  {
    id: 'nebula-gold',
    type: 'nebula',
    speed: 0.3,
    opacity: 0.4,
    color: 'rgba(212, 175, 55, 0.1)',
  },
  {
    id: 'stars-near',
    type: 'stars',
    speed: 0.5,
    opacity: 0.7,
  },
];

function generateStarsBackground(opacity: number) {
  return `
    radial-gradient(1px 1px at 15% 25%, rgba(255,255,255,${opacity}) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 35% 65%, rgba(255,255,255,${opacity * 0.8}) 0%, transparent 100%),
    radial-gradient(1px 1px at 55% 15%, rgba(255,255,255,${opacity * 0.9}) 0%, transparent 100%),
    radial-gradient(1px 1px at 75% 75%, rgba(255,255,255,${opacity * 0.7}) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 85% 35%, rgba(212,175,55,${opacity * 0.6}) 0%, transparent 100%),
    radial-gradient(1px 1px at 45% 85%, rgba(255,255,255,${opacity * 0.8}) 0%, transparent 100%),
    radial-gradient(1px 1px at 25% 45%, rgba(255,255,255,${opacity * 0.6}) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 65% 55%, rgba(147,51,234,${opacity * 0.5}) 0%, transparent 100%)
  `;
}

function generateNebulaBackground(color: string) {
  return `radial-gradient(ellipse 80% 60% at 50% 50%, ${color} 0%, transparent 60%)`;
}

export function HeroParallax({
  eyebrow,
  headline,
  highlightedText,
  subhead,
  primaryCTA,
  secondaryCTA,
  layers = defaultLayers,
  className,
}: HeroParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollProgress = -rect.top;
      setScrollY(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLayerStyle = (layer: ParallaxLayer): React.CSSProperties => {
    const translateY = scrollY * layer.speed;
    let background = '';

    switch (layer.type) {
      case 'stars':
        background = generateStarsBackground(layer.opacity);
        break;
      case 'nebula':
        background = generateNebulaBackground(layer.color || 'rgba(147, 51, 234, 0.2)');
        break;
      case 'gradient':
        background = `radial-gradient(ellipse at 50% 30%, ${layer.color || 'rgba(147, 51, 234, 0.15)'} 0%, transparent 50%)`;
        break;
      case 'custom':
        return {
          transform: `translateY(${translateY}px)`,
          opacity: layer.opacity,
          ...layer.customStyle,
        };
    }

    return {
      background,
      opacity: layer.opacity,
      transform: `translateY(${translateY}px)`,
    };
  };

  return (
    <section
      ref={containerRef}
      className={cn(
        'relative min-h-screen flex items-center justify-center overflow-hidden',
        'bg-bg-noir',
        className
      )}
    >
      {/* Parallax layers */}
      {layers.map((layer) => (
        <div
          key={layer.id}
          className="absolute inset-0 pointer-events-none will-change-transform"
          style={getLayerStyle(layer)}
          aria-hidden="true"
        />
      ))}

      {/* Heavy vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.8) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Scanlines for dramatic effect */}
      <div
        className="absolute inset-0 pointer-events-none z-[6] opacity-[0.03]"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container-main relative z-10 py-24 lg:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          {eyebrow && (
            <AnimatedSection animation="fade-up" delay={0}>
              <span className="inline-block text-sm font-mono uppercase tracking-widest text-gold mb-6">
                {eyebrow}
              </span>
            </AnimatedSection>
          )}

          {/* Headline */}
          <AnimatedSection animation="scale-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
              {highlightedText ? (
                <>
                  {headline.split(highlightedText)[0]}
                  <span className="text-gradient-purple text-glow">{highlightedText}</span>
                  {headline.split(highlightedText)[1]}
                </>
              ) : (
                <span className="text-gradient-purple text-glow">{headline}</span>
              )}
            </h1>
          </AnimatedSection>

          {/* Subhead */}
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-xl sm:text-2xl text-text-secondary leading-relaxed mb-10 max-w-3xl mx-auto">
              {subhead}
            </p>
          </AnimatedSection>

          {/* CTAs */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href={primaryCTA.href} size="lg" variant="primary" className="btn-gold">
                {primaryCTA.label}
              </Button>
              {secondaryCTA && (
                <Button href={secondaryCTA.href} size="lg" variant="secondary" className="btn-noir-secondary">
                  {secondaryCTA.label}
                </Button>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <AnimatedSection animation="fade" delay={600}>
          <div className="flex flex-col items-center gap-2 text-text-muted">
            <span className="text-xs uppercase tracking-widest">Explore</span>
            <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent animate-pulse" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default HeroParallax;
