'use client';

import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type AnimationType =
  | 'fade'
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'scale'
  | 'scale-up'
  | 'rotate';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number; // ms
  duration?: number; // ms
  threshold?: number; // 0-1
  once?: boolean; // animate only once
  stagger?: boolean; // stagger children
  staggerDelay?: number; // ms between children
  className?: string;
  as?: React.ElementType;
}

const animationClasses: Record<AnimationType, { initial: string; visible: string }> = {
  fade: {
    initial: 'opacity-0',
    visible: 'opacity-100',
  },
  'fade-up': {
    initial: 'opacity-0 translate-y-10',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-down': {
    initial: 'opacity-0 -translate-y-10',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-left': {
    initial: 'opacity-0 -translate-x-10',
    visible: 'opacity-100 translate-x-0',
  },
  'fade-right': {
    initial: 'opacity-0 translate-x-10',
    visible: 'opacity-100 translate-x-0',
  },
  scale: {
    initial: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100',
  },
  'scale-up': {
    initial: 'opacity-0 scale-90',
    visible: 'opacity-100 scale-100',
  },
  rotate: {
    initial: 'opacity-0 rotate-3',
    visible: 'opacity-100 rotate-0',
  },
};

export function AnimatedSection({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 500,
  threshold = 0.1,
  once = true,
  stagger = false,
  staggerDelay = 100,
  className,
  as: Component = 'div',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasAnimated || !once) {
            setIsVisible(true);
            if (once) setHasAnimated(true);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once, hasAnimated]);

  const { initial, visible } = animationClasses[animation];
  const DynamicComponent = Component;

  return (
    <DynamicComponent
      ref={ref}
      className={cn(
        'transition-all',
        isVisible ? visible : initial,
        stagger && 'stagger-children',
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        ...(stagger
          ? {
              '--stagger-delay': `${staggerDelay}ms`,
            }
          : {}),
      }}
    >
      {children}
    </DynamicComponent>
  );
}

// Utility hook for custom implementations
export function useIntersectionObserver(
  options: IntersectionObserverInit = {}
) {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return { ref, isIntersecting };
}

export default AnimatedSection;
