import { type ReactNode } from 'react';
import { ButtonIcon } from '../ui/ButtonIcon';
import { Icon } from '../ui/AccordionRow';

export type CarouselProps<T> = {
  title?: string;
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  onPrev: () => void;
  onNext: () => void;
  hasMultiple: boolean;
};

export function Carousel<T>({
  title,
  items,
  renderItem,
  onPrev,
  onNext,
  hasMultiple,
}: CarouselProps<T>) {
  return (
    <section aria-roledescription="carousel" className="py-8">
      <div className="container-page">
        {title ? (
          <div className="mb-8 flex items-center justify-between gap-4">
            <h2 className="font-heading text-3xl font-bold text-content-primary md:text-[40px]">
              {title}
            </h2>
            {hasMultiple ? (
              <div className="flex gap-3">
                <ButtonIcon label="Previous slide" onClick={onPrev}>
                  <Icon name="ri-arrow-left-s-line" size={16} />
                </ButtonIcon>
                <ButtonIcon label="Next slide" onClick={onNext}>
                  <Icon name="ri-arrow-right-s-line" size={16} />
                </ButtonIcon>
              </div>
            ) : null}
          </div>
        ) : null}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => renderItem(item, index))}
        </div>
      </div>
    </section>
  );
}

export type CTABannerProps = {
  title: string;
  quote?: string;
  children?: ReactNode;
};

export function CTABanner({ title, quote, children }: CTABannerProps) {
  return (
    <section className="bg-content-primary py-16 text-white md:py-24">
      <div className="container-page flex flex-col items-center gap-8 text-center">
        <div className="max-w-3xl space-y-3">
          <h2 className="font-heading text-4xl font-bold md:text-6xl md:leading-[76px]">{title}</h2>
          {quote ? <p className="text-lg text-content-tertiary-inverse">{quote}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function PageHeroBanner({ image }: { image: string }) {
  return (
    <div className="container-page pb-8 pt-6">
      <img
        src={image}
        alt=""
        className="h-[180px] w-full rounded-s object-cover md:h-[311px]"
      />
    </div>
  );
}
