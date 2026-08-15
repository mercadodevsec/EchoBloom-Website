import { cn } from '../../lib/utils';

export type StatItem = {
  value: string;
  label: string;
};

export function StatsRow({ stats, className }: { stats: StatItem[]; className?: string }) {
  return (
    <section className={cn('py-8', className)}>
      <div className="container-page grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-3">
            <p className="font-heading text-5xl font-bold text-content-primary md:text-6xl">
              {stat.value}
            </p>
            <p className="text-base text-content-tertiary">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
