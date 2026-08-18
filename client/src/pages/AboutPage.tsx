import { Link } from 'react-router-dom';
import { aboutValues, ipmdProducts, teamMembers } from '../data/about';
import { assets } from '../data/assets';
import { CTABanner, Carousel } from '../components/sections/Carousel';
import { HeroSection } from '../components/sections/HeroSection';
import { SplitSection } from '../components/sections/SplitSection';
import { AccordionRow, Icon } from '../components/ui/AccordionRow';
import { Button } from '../components/ui/Button';
import { useCarousel } from '../hooks/useCarousel';

export function AboutPage() {
  const carousel = useCarousel(teamMembers, 4);

  return (
    <>
      <HeroSection
        eyebrow="Who We Are"
        eyebrowClassName="text-content-brand-eb"
        title="Humanity at the Heart of AI"
        description="EchoBloom Foundation advances AI for Humanity by creating emotionally intelligent technology for neurodiverse, non-verbal, and intellectually disabled communities."
      />

      <section className="container-page pb-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {aboutValues.map((value) => (
            <div key={value.title} className="flex flex-col items-center gap-3 text-center">
              <Icon name={value.icon} size={48} className="text-content-brand-eb" />
              <p className="font-semibold text-content-brand-eb">{value.title}</p>
            </div>
          ))}
        </div>
      </section>

      <SplitSection
        muted
        title="Relationship with IPMD"
        description="EchoBloom’s technology is developed by IPMD. EchoBloom Foundation brings it into communities through research, programs, and the global AI for Humanity network."
        media={
          <div className="w-full rounded-s border border-border-default bg-background-primary p-3">
            {ipmdProducts.map((product) => (
              <AccordionRow key={product.title} title={product.title} description={product.description} />
            ))}
          </div>
        }
      >
        <a href="https://ipmdinc.com" target="_blank" rel="noreferrer">
          <Button className="w-full md:w-auto">Explore our Technology Partner IPMD</Button>
        </a>
      </SplitSection>

      <section className="container-page py-16">
        <div className="flex min-h-[320px] items-center justify-center rounded-s bg-background-muted md:min-h-[720px]">
          <button
            type="button"
            aria-label="Play featured video"
            className="flex size-[130px] items-center justify-center rounded-full bg-background-primary shadow-lg"
          >
            <Icon name="ri-play-fill" size={48} className="text-content-brand-eb" />
          </button>
        </div>
      </section>

      <Carousel
        title="Meet the Team"
        items={carousel.visibleItems}
        renderItem={(member) => (
          <div
            key={member.id}
            className="flex h-[420px] items-end rounded-s bg-background-muted p-4 md:h-[520px]"
          >
            <div>
              <p className="font-semibold text-content-primary">{member.name}</p>
              <p className="text-sm text-content-tertiary">{member.role}</p>
            </div>
          </div>
        )}
        onPrev={carousel.prev}
        onNext={carousel.next}
        hasMultiple={carousel.hasMultiple}
      />

      <CTABanner
        title="Join the Movement"
        quote='"The direction of AI is shaped by the people who choose to build differently."'
      >
        <Link to="/intern">
          <Button>Become a Volunteer</Button>
        </Link>
      </CTABanner>
    </>
  );
}
