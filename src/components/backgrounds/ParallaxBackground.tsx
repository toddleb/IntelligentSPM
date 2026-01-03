'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ParallaxBackgroundProps {
  image?: string;
  speed?: number; // 0.1 to 1.0, lower = slower parallax
  overlay?: 'none' | 'dark' | 'gradient' | 'stardust' | 'vignette';
  kenBurns?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function ParallaxBackground({
  image,
  speed = 0.5,
  overlay = 'dark',
  kenBurns = false,
  className,
  children,
}: ParallaxBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far through the viewport the element is
      const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);

      // Apply parallax offset
      const parallaxOffset = (scrollProgress - 0.5) * 100 * speed;
      setOffset(parallaxOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  const overlayStyles = {
    none: '',
    dark: 'bg-gradient-to-b from-black/40 via-transparent to-black/60',
    gradient: 'bg-gradient-to-br from-purple-900/30 via-transparent to-black/50',
    stardust: 'bg-stardust',
    vignette: 'vignette-heavy',
  };

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
    >
      {/* Parallax background layer */}
      {image && (
        <div
          className={cn(
            'absolute inset-[-20%] w-[140%] h-[140%]',
            kenBurns && 'ken-burns'
          )}
          style={{
            transform: `translateY(${offset}px)`,
          }}
        >
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            priority
            aria-hidden="true"
          />
        </div>
      )}

      {/* Overlay layer */}
      {overlay !== 'none' && (
        <div
          className={cn(
            'absolute inset-0 pointer-events-none z-[1]',
            overlayStyles[overlay]
          )}
          aria-hidden="true"
        />
      )}

      {/* Content layer */}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}

export default ParallaxBackground;
