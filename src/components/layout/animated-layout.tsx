'use client';

import React from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';

interface AnimatedLayoutProps {
  children: React.ReactNode;
}

export function AnimatedLayout({ children }: AnimatedLayoutProps) {
  // Fonction récursive pour ajouter les animations aux sections
  const addAnimations = (element: React.ReactNode, depth: number = 0): React.ReactNode => {
    if (!React.isValidElement(element)) {
      return element;
    }

    const child = element as React.ReactElement;
    const props = child.props;

    // Si c'est une section, on l'entoure d'une AnimatedSection
    if (child.type === 'section') {
      return (
        <AnimatedSection
          key={child.key}
          animation="fade-up"
          delay={depth * 100}
          className={props.className}
        >
          {React.Children.map(props.children, (child) => addAnimations(child, depth + 1))}
        </AnimatedSection>
      );
    }

    // Si l'élément a des enfants, on les traite récursivement
    if (props.children) {
      const newChildren = React.Children.map(props.children, (child) =>
        addAnimations(child, depth + 1)
      );

      return React.cloneElement(child, { ...props, children: newChildren });
    }

    return child;
  };

  return <>{React.Children.map(children, (child) => addAnimations(child))}</>;
}
