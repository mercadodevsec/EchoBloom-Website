import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../lib/utils';

export type ButtonGroupPillProps = {
  options: { id: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export function ButtonGroupPill({ options, value, onChange, className }: ButtonGroupPillProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter options"
      className={cn('inline-flex flex-wrap gap-2 rounded-pill bg-background-muted p-1', className)}
    >
      {options.map((option) => {
        const selected = option.id === value;
        return (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(option.id)}
            className={cn(
              'rounded-pill px-4 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-content-brand-eb',
              selected
                ? 'bg-background-brand-eb text-content-on-brand'
                : 'text-content-secondary hover:bg-background-primary',
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export type ButtonPillProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean;
  children: ReactNode;
};

export function ButtonPill({ selected, children, className, ...props }: ButtonPillProps) {
  return (
    <button
      type="button"
      className={cn(
        'rounded-pill border px-5 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-content-brand-eb',
        selected
          ? 'border-content-brand-eb bg-background-brand-eb text-content-on-brand'
          : 'border-border-default bg-background-primary text-content-secondary hover:bg-background-muted',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
