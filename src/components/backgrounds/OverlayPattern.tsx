'use client';

import { cn } from '@/lib/utils';

interface OverlayPatternProps {
  pattern: 'grain' | 'halftone' | 'scanlines' | 'vignette' | 'dots' | 'lines';
  opacity?: number; // 0-1
  color?: 'purple' | 'cream' | 'gold' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function OverlayPattern({
  pattern,
  opacity = 0.08,
  color = 'purple',
  size = 'md',
  className,
}: OverlayPatternProps) {
  const colorValues = {
    purple: 'rgba(147, 51, 234, VAR)',
    cream: 'rgba(245, 240, 232, VAR)',
    gold: 'rgba(212, 175, 55, VAR)',
    white: 'rgba(255, 255, 255, VAR)',
  };

  const sizeValues = {
    sm: '2px',
    md: '4px',
    lg: '6px',
  };

  const getPatternStyle = () => {
    const colorWithOpacity = colorValues[color].replace('VAR', String(opacity));
    const patternSize = sizeValues[size];

    switch (pattern) {
      case 'grain':
        return {
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity,
          mixBlendMode: 'overlay' as const,
        };

      case 'halftone':
        return {
          backgroundImage: `radial-gradient(circle, ${colorWithOpacity} 1px, transparent 1px)`,
          backgroundSize: `${patternSize} ${patternSize}`,
        };

      case 'scanlines':
        return {
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent ${patternSize},
            rgba(0, 0, 0, ${opacity}) ${patternSize},
            rgba(0, 0, 0, ${opacity}) calc(${patternSize} * 2)
          )`,
        };

      case 'vignette':
        return {
          background: `radial-gradient(
            ellipse at center,
            transparent 30%,
            rgba(0, 0, 0, ${opacity * 5}) 100%
          )`,
        };

      case 'dots':
        return {
          backgroundImage: `radial-gradient(circle at center, ${colorWithOpacity} 1.5px, transparent 1.5px)`,
          backgroundSize: `${parseInt(patternSize) * 3}px ${parseInt(patternSize) * 3}px`,
        };

      case 'lines':
        return {
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            ${colorWithOpacity} 2px,
            ${colorWithOpacity} 3px
          )`,
        };

      default:
        return {};
    }
  };

  return (
    <div
      className={cn('absolute inset-0 pointer-events-none z-[2]', className)}
      style={getPatternStyle()}
      aria-hidden="true"
    />
  );
}

export default OverlayPattern;
