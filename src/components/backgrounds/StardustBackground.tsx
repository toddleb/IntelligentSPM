'use client';

import { cn } from '@/lib/utils';

interface StardustBackgroundProps {
  variant?: 'purple-black' | 'gold-dust' | 'cosmic-fog' | 'nebula';
  density?: 'sparse' | 'medium' | 'dense';
  animated?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function StardustBackground({
  variant = 'purple-black',
  density = 'medium',
  animated = true,
  className,
  children,
}: StardustBackgroundProps) {
  const densityStyles = {
    sparse: 'opacity-30',
    medium: 'opacity-50',
    dense: 'opacity-70',
  };

  const variantStyles = {
    'purple-black': `
      radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.8) 0%, transparent 100%),
      radial-gradient(1px 1px at 40% 70%, rgba(255,255,255,0.6) 0%, transparent 100%),
      radial-gradient(1px 1px at 60% 20%, rgba(255,255,255,0.7) 0%, transparent 100%),
      radial-gradient(1.5px 1.5px at 80% 60%, rgba(255,255,255,0.9) 0%, transparent 100%),
      radial-gradient(ellipse 80% 60% at 70% 20%, rgba(147,51,234,0.2) 0%, transparent 50%),
      radial-gradient(ellipse 60% 80% at 20% 80%, rgba(88,28,135,0.15) 0%, transparent 50%)
    `,
    'gold-dust': `
      radial-gradient(1.5px 1.5px at 25% 35%, rgba(212,175,55,0.9) 0%, transparent 100%),
      radial-gradient(1px 1px at 55% 65%, rgba(255,215,0,0.7) 0%, transparent 100%),
      radial-gradient(1px 1px at 75% 25%, rgba(212,175,55,0.8) 0%, transparent 100%),
      radial-gradient(1.5px 1.5px at 15% 75%, rgba(255,215,0,0.6) 0%, transparent 100%),
      radial-gradient(ellipse 70% 50% at 60% 30%, rgba(212,175,55,0.15) 0%, transparent 50%),
      radial-gradient(ellipse 50% 70% at 30% 70%, rgba(184,134,11,0.1) 0%, transparent 50%)
    `,
    'cosmic-fog': `
      radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.5) 0%, transparent 100%),
      radial-gradient(1px 1px at 80% 70%, rgba(255,255,255,0.4) 0%, transparent 100%),
      radial-gradient(ellipse 100% 80% at 50% 50%, rgba(147,51,234,0.1) 0%, transparent 60%),
      radial-gradient(ellipse 80% 100% at 20% 80%, rgba(88,28,135,0.08) 0%, transparent 50%),
      radial-gradient(ellipse 80% 100% at 80% 20%, rgba(212,175,55,0.05) 0%, transparent 50%)
    `,
    'nebula': `
      radial-gradient(1px 1px at 30% 40%, rgba(255,255,255,0.8) 0%, transparent 100%),
      radial-gradient(1.5px 1.5px at 70% 30%, rgba(212,175,55,0.7) 0%, transparent 100%),
      radial-gradient(1px 1px at 50% 80%, rgba(255,255,255,0.6) 0%, transparent 100%),
      radial-gradient(ellipse 120% 80% at 30% 20%, rgba(147,51,234,0.25) 0%, transparent 50%),
      radial-gradient(ellipse 80% 120% at 70% 80%, rgba(88,28,135,0.2) 0%, transparent 50%),
      radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,175,55,0.08) 0%, transparent 40%)
    `,
  };

  return (
    <div className={cn('relative', className)}>
      {/* Stardust layer */}
      <div
        className={cn(
          'absolute inset-0 pointer-events-none',
          densityStyles[density],
          animated && 'animate-cosmic-drift'
        )}
        style={{
          background: variantStyles[variant],
        }}
        aria-hidden="true"
      />
      {/* Content */}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}

export default StardustBackground;
