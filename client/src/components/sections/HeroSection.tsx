import { type ReactNode } from 'react';
import { cn } from '../../lib/utils';

export type HeroSectionProps = {
  eyebrow?: string;
  eyebrowClassName?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  children?: ReactNode;
  className?: string;
};

export function HeroSection({
  eyebrow,
  eyebrowClassName,
  title,
  description,
  align = 'center',
  children,
  className,
}: HeroSectionProps) {
  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div
        className={cn(
          'container-page flex flex-col items-center gap-6',
          align === 'center' ? 'items-center text-center' : 'items-start text-left',
        )}
      >
        {eyebrow ? (
          <p className={cn('text-sm text-content-tertiary', eyebrowClassName)}>{eyebrow}</p>
        ) : null}
        <h1 className="max-w-4xl font-heading text-4xl font-bold leading-tight tracking-tight text-content-primary md:text-6xl md:leading-[76px]">
          {title}
        </h1>
        {description ? (
          <p className="text-base text-content-tertiary md:text-base">{description}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
