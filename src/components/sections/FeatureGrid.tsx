'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { AnimatedSection } from '@/components/animation';
import type { Feature } from '@/types';
import * as LucideIcons from 'lucide-react';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  variant?: 'cards' | 'minimal' | 'icons';
  stagger?: boolean;
  className?: string;
}

export function FeatureGrid({
  features,
  columns = 3,
  variant = 'cards',
  stagger = true,
  className,
}: FeatureGridProps) {
  const columnClasses = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  };

  const getIcon = (iconName: string) => {
    const icons = LucideIcons as unknown as Record<string, LucideIcon>;
    const Icon = icons[iconName];
    return Icon ? <Icon className="w-6 h-6" /> : null;
  };

  const renderCard = (feature: Feature, index: number) => {
    const delay = stagger ? index * 100 : 0;

    switch (variant) {
      case 'minimal':
        return (
          <AnimatedSection key={feature.id} animation="fade-up" delay={delay}>
            <div className="group p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {getIcon(feature.icon)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                  {feature.href && (
                    <Link
                      href={feature.href}
                      className="inline-flex items-center gap-1 mt-3 text-sm text-accent hover:text-accent-bright transition-colors"
                    >
                      Learn more
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        );

      case 'icons':
        return (
          <AnimatedSection key={feature.id} animation="scale-up" delay={delay}>
            <div className="group text-center p-8">
              <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-dark/20 items-center justify-center text-accent mb-4 group-hover:scale-110 group-hover:shadow-glow-md transition-all duration-300">
                {getIcon(feature.icon)}
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          </AnimatedSection>
        );

      case 'cards':
      default:
        return (
          <AnimatedSection key={feature.id} animation="fade-up" delay={delay}>
            <div
              className={cn(
                'group relative p-6 rounded-xl overflow-hidden',
                'noir-panel',
                'hover:border-accent/30 transition-all duration-300'
              )}
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-px bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:via-accent/5 group-hover:to-transparent rounded-xl transition-all duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white mb-4 group-hover:shadow-glow-sm transition-all duration-300">
                  {getIcon(feature.icon)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-bright transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Link */}
                {feature.href && (
                  <Link
                    href={feature.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-bright transition-colors"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </div>
          </AnimatedSection>
        );
    }
  };

  return (
    <div
      className={cn(
        'grid gap-6',
        columnClasses[columns],
        className
      )}
    >
      {features.map((feature, index) => renderCard(feature, index))}
    </div>
  );
}

export default FeatureGrid;
