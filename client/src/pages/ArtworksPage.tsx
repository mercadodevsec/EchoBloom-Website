import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  artworkFilters,
  artworkStats,
  artworks,
  type ArtworkCategory,
} from '../data/artworks';
import { assets } from '../data/assets';
import { HeroSection } from '../components/sections/HeroSection';
import { StatsRow } from '../components/sections/StatsRow';
import { ButtonGroupPill } from '../components/ui/ButtonGroupPill';
import { Button } from '../components/ui/Button';
import { useCarousel } from '../hooks/useCarousel';

export function ArtworksPage() {
  const [filter, setFilter] = useState<ArtworkCategory>('all');
  const filtered = useMemo(
    () => artworks.filter((item) => filter === 'all' || item.category === filter),
    [filter],
  );
  const carousel = useCarousel(filtered, 3);

  return (
    <>
      <HeroSection
        title="Art as a Way to be Heard"
        description="Explore artwork created through EchoBloom’s creative programs — from original participant expressions to new interpretations created with technology."
      />

      <StatsRow stats={artworkStats} />

      <section className="container-page py-12">
        <div className="overflow-hidden rounded-s">
          <img src={assets.homeHero} alt="" className="h-[240px] w-full object-cover md:h-[440px]" />
          <div className="flex flex-col gap-4 border-t border-border-default bg-background-primary p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold text-content-primary">Creative Art Session · 2026</p>
              <p className="text-content-tertiary">
                An original participant artwork explored through AI-assisted visual transformation.
              </p>
            </div>
            <Button>View Artwork</Button>
          </div>
        </div>
      </section>

      <section className="container-page py-8 text-center">
        <h2 className="font-heading text-3xl font-bold md:text-[40px]">Explore the Collection</h2>
        <p className="mx-auto mt-4 max-w-xl text-content-tertiary">
          Discover work created across EchoBloom sessions, programs, and creative experiences.
        </p>
      </section>

      <section className="container-page pb-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <ButtonGroupPill options={artworkFilters} value={filter} onChange={setFilter} />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {carousel.visibleItems.map((item) => (
            <article
              key={item.id}
              className={item.span === 'large' ? 'md:col-span-2' : ''}
            >
              <FeatureCardImage item={item} />
            </article>
          ))}
        </div>
        {carousel.hasMultiple ? (
          <div className="mt-6 flex justify-end gap-3">
            <Button variant="secondary" size="sm" onClick={carousel.prev}>
              Previous
            </Button>
            <Button variant="secondary" size="sm" onClick={carousel.next}>
              Next
            </Button>
          </div>
        ) : null}
      </section>
    </>
  );
}

function FeatureCardImage({
  item,
}: {
  item: (typeof artworks)[number];
}) {
  return (
    <div className="relative min-h-[280px] overflow-hidden rounded-s md:min-h-[462px]">
      <img src={item.image} alt="" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
      </div>
    </div>
  );
}
