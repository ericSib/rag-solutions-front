import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

export type ButtonVariant = 
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link';

export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export interface CardProps {
  className?: string;
  hoverable?: boolean;
  bordered?: boolean;
}

export interface AlertProps {
  title?: string;
  description: string;
  variant?: 'default' | 'destructive' | 'success' | 'warning' | 'info';
  dismissible?: boolean;
  onDismiss?: () => void;
}

export type ToastVariant = 'default' | 'destructive' | 'success' | 'warning' | 'info';

export interface ToastProps {
  title?: string;
  description: string;
  variant?: ToastVariant;
  duration?: number;
}
