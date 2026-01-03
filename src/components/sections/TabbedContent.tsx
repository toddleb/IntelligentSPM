'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { AnimatedSection } from '@/components/animation';
import type { Tab } from '@/types';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface TabbedContentProps {
  tabs: Tab[];
  variant?: 'pills' | 'underline' | 'buttons';
  animated?: boolean;
  className?: string;
}

export function TabbedContent({
  tabs,
  variant = 'underline',
  animated = true,
  className,
}: TabbedContentProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

  const variantStyles = {
    pills: {
      container: 'flex flex-wrap gap-2 p-1 bg-bg-secondary rounded-xl',
      tab: (active: boolean) =>
        cn(
          'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
          active
            ? 'bg-gradient-to-r from-accent to-accent-dark text-white shadow-glow-sm'
            : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover'
        ),
    },
    underline: {
      container: 'flex flex-wrap gap-8 border-b border-border-subtle',
      tab: (active: boolean) =>
        cn(
          'relative pb-4 text-sm font-medium transition-all duration-200',
          active
            ? 'text-accent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-accent after:to-accent-bright'
            : 'text-text-secondary hover:text-text-primary'
        ),
    },
    buttons: {
      container: 'flex flex-wrap gap-3',
      tab: (active: boolean) =>
        cn(
          'px-5 py-3 text-sm font-medium rounded-lg border transition-all duration-200',
          active
            ? 'border-accent bg-accent/10 text-accent neon-glow'
            : 'border-border-subtle text-text-secondary hover:border-accent/50 hover:text-text-primary'
        ),
    },
  };

  const getIcon = (iconName?: string) => {
    if (!iconName) return null;
    const icons = LucideIcons as unknown as Record<string, LucideIcon>;
    const Icon = icons[iconName];
    return Icon ? <Icon className="w-4 h-4" /> : null;
  };

  const styles = variantStyles[variant];

  return (
    <div className={cn('w-full', className)}>
      {/* Tab navigation */}
      <div className={cn(styles.container, 'mb-8')}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(styles.tab(activeTab === tab.id), 'flex items-center gap-2')}
          >
            {getIcon(tab.icon)}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="relative">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={cn(
              'transition-all duration-300',
              activeTab === tab.id
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
            )}
            aria-hidden={activeTab !== tab.id}
          >
            {animated ? (
              <AnimatedSection animation="fade-up" delay={100}>
                {tab.content}
              </AnimatedSection>
            ) : (
              tab.content
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabbedContent;
