import { Link } from 'react-router-dom';
import { assets } from '../data/assets';
import { internHighlights, interns } from '../data/interns';
import { InternApplicationForm } from '../components/forms/InternApplicationForm';
import { Carousel, PageHeroBanner } from '../components/sections/Carousel';
import { HeroSection } from '../components/sections/HeroSection';
import { SplitSection } from '../components/sections/SplitSection';
import { AccordionRow } from '../components/ui/AccordionRow';
import { Button } from '../components/ui/Button';
import { useCarousel } from '../hooks/useCarousel';

export function InternPage() {
  const carousel = useCarousel(interns, 4);

  return (
    <>
      <PageHeroBanner image={assets.programHero} />
      <HeroSection
        title="Build something that Matters"
        description="Join EchoBloom and work at the intersection of AI, design, research, accessibility, and human expression. Our interns contribute to real projects supporting neurodivergent individuals, non-verbal communities, and people with intellectual and developmental disabilities."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#apply">
            <Button className="w-full sm:w-auto">Apply Now</Button>
          </a>
          <Link to="/about">
            <Button variant="secondary" className="w-full sm:w-auto">
              Learn About Us
            </Button>
          </Link>
        </div>
      </HeroSection>

      <SplitSection
        muted
        title="More than an Internship"
        description="At EchoBloom, interns don't just observe. They contribute to products, programs, research, community initiatives, and experiences that are actively being developed and used."
        media={
          <div className="w-full rounded-s border border-border-default bg-background-primary p-3">
            {internHighlights.map((item) => (
              <AccordionRow key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        }
      />

      <section id="apply" className="container-page py-16 md:py-24">
        <div className="mb-10 text-center">
          <p className="text-sm text-content-tertiary">Join Us</p>
          <h2 className="font-heading text-4xl font-bold md:text-6xl">Find your Place at EchoBloom</h2>
        </div>
        <InternApplicationForm />
      </section>

      <Carousel
        title="Meet our Amazing Interns"
        items={carousel.visibleItems}
        renderItem={(intern) => (
          <Link
            key={intern.slug}
            to={`/intern/${intern.slug}`}
            className="flex h-[420px] flex-col justify-end rounded-s bg-background-muted p-4 md:h-[546px]"
          >
            <p className="font-semibold text-content-primary">{intern.name}</p>
            <p className="text-sm text-content-tertiary">{intern.role}</p>
          </Link>
        )}
        onPrev={carousel.prev}
        onNext={carousel.next}
        hasMultiple={carousel.hasMultiple}
      />
    </>
  );
}
