import { type ReactNode } from 'react';
import { cn } from '../../lib/utils';

export type SplitSectionProps = {
  title: string;
  description?: string;
  reverse?: boolean;
  children?: ReactNode;
  media?: ReactNode;
  className?: string;
  muted?: boolean;
};

export function SplitSection({
  title,
  description,
  reverse,
  children,
  media,
  className,
  muted,
}: SplitSectionProps) {
  return (
    <section className={cn(muted ? 'bg-background-muted py-16 md:py-20' : 'py-16 md:py-20', className)}>
      <div
        className={cn(
          'container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16',
          reverse && 'lg:[&>*:first-child]:order-2',
        )}
      >
        <div className="flex flex-col gap-6">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-content-primary md:text-[40px] md:leading-[52px]">
            {title}
          </h2>
          {description ? <p className="text-base text-content-tertiary">{description}</p> : null}
          {children}
        </div>
        {media}
      </div>
    </section>
  );
}
