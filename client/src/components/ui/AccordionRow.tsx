import { type ReactNode } from 'react';
import { cn } from '../../lib/utils';

export type AccordionRowProps = {
  title: string;
  description: string;
  className?: string;
};

export function AccordionRow({ title, description, className }: AccordionRowProps) {
  return (
    <div className={cn('border-b border-border-default py-3', className)}>
      <h3 className="font-heading text-lg font-semibold text-content-primary">{title}</h3>
      <p className="mt-1 text-base text-content-tertiary">{description}</p>
    </div>
  );
}

export type IconProps = {
  name: string;
  size?: 16 | 24 | 32;
  className?: string;
};

export function Icon({ name, size = 24, className }: IconProps) {
  return (
    <i
      className={cn(name, className)}
      style={{ fontSize: size }}
      aria-hidden="true"
    />
  );
}
