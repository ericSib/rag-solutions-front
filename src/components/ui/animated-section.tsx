'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right';
  delay?: number;
  className?: string;
}

export function AnimatedSection({
  children,
  animation = 'fade-up',
  delay = 0,
  className,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            const element = entry.target as HTMLElement;
            element.style.opacity = '1';
            element.style.transform = 'translate(0, 0)';
            hasAnimated.current = true;
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getAnimationStyles = () => {
    const baseStyles = 'opacity-0 transition-all duration-700';
    const delayStyle = `delay-[${delay}ms]`;

    switch (animation) {
      case 'fade-up':
        return `${baseStyles} translate-y-8 ${delayStyle}`;
      case 'fade-down':
        return `${baseStyles} -translate-y-8 ${delayStyle}`;
      case 'fade-left':
        return `${baseStyles} translate-x-8 ${delayStyle}`;
      case 'fade-right':
        return `${baseStyles} -translate-x-8 ${delayStyle}`;
      default:
        return baseStyles;
    }
  };

  return (
    <div
      ref={sectionRef}
      className={cn(getAnimationStyles(), className)}
    >
      {children}
    </div>
  );
}
