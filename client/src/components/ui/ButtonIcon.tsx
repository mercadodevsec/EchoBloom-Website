import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../lib/utils';

export type ButtonIconProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  label: string;
};

export function ButtonIcon({ children, label, className, ...props }: ButtonIconProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        'inline-flex size-10 items-center justify-center rounded-pill border border-border-default bg-background-primary text-content-primary transition-colors hover:bg-background-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-content-brand-eb',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
