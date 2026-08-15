import { cn } from '../../lib/utils';

export type FeatureCardProps = {
  image: string;
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({ image, title, description, className }: FeatureCardProps) {
  return (
    <article
      className={cn(
        'relative min-h-[320px] overflow-hidden rounded-s bg-content-primary md:min-h-[462px]',
        className,
      )}
    >
      <img src={image} alt="" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <h3 className="font-heading text-xl font-semibold text-white md:text-2xl">{title}</h3>
        <p className="mt-2 text-sm text-white/90 md:text-base">{description}</p>
      </div>
    </article>
  );
}
