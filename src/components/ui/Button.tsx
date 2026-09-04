import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  showArrow?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantClasses = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  ghost: 'btn-ghost',
  dark: 'inline-flex items-center justify-center px-8 py-3.5 bg-neutral-900 text-white font-semibold text-sm tracking-wide rounded-lg transition-all duration-300 ease-out hover:bg-neutral-800 hover:shadow-premium hover:-translate-y-0.5 active:translate-y-0',
};

const sizeClasses = {
  sm: 'text-xs px-5 py-2.5',
  md: '',
  lg: 'text-base px-10 py-4',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  showArrow = false,
  fullWidth = false,
  loading = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${loading ? 'opacity-70 pointer-events-none' : ''}
        ${className}
      `}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Loading...
        </span>
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
          {children}
          {(showArrow || iconPosition === 'right') && icon ? (
            <span className="ml-2">{icon}</span>
          ) : showArrow ? (
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          ) : null}
        </>
      )}
    </button>
  );
}
