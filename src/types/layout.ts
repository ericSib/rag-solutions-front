import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface SectionProps extends LayoutProps {
  className?: string;
  id?: string;
}

export interface ContainerProps extends SectionProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  centered?: boolean;
}

export interface HeaderProps {
  transparent?: boolean;
  sticky?: boolean;
}

export interface FooterProps {
  simple?: boolean;
}
