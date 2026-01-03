'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface KenBurnsImageProps {
  src: string;
  alt: string;
  duration?: number; // seconds
  scale?: number; // max scale, e.g., 1.1
  direction?: 'in' | 'out';
  overlay?: 'none' | 'dark' | 'gradient' | 'vignette';
  priority?: boolean;
  className?: string;
}

export function KenBurnsImage({
  src,
  alt,
  duration = 20,
  scale = 1.1,
  direction = 'in',
  overlay = 'dark',
  priority = false,
  className,
}: KenBurnsImageProps) {
  const overlayStyles = {
    none: '',
    dark: 'after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/30 after:via-transparent after:to-black/50',
    gradient: 'after:absolute after:inset-0 after:bg-gradient-to-br after:from-purple-900/40 after:via-transparent after:to-black/60',
    vignette: 'after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.7)_100%)]',
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        overlayStyles[overlay],
        className
      )}
    >
      <div
        className={cn(
          'w-full h-full',
          direction === 'in' ? 'ken-burns' : 'ken-burns-reverse'
        )}
        style={{
          '--ken-burns-duration': `${duration}s`,
          '--ken-burns-scale': scale,
        } as React.CSSProperties}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
        />
      </div>
    </div>
  );
}

export default KenBurnsImage;
