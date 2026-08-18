import { Link } from 'react-router-dom';
import { assets } from '../data/assets';
import { impactHighlights } from '../data/impact';
import { interns } from '../data/interns';
import { ImpactApplicationForm } from '../components/forms/ImpactApplicationForm';
import { Carousel, PageHeroBanner } from '../components/sections/Carousel';
import { HeroSection } from '../components/sections/HeroSection';
import { Button } from '../components/ui/Button';
import { useCarousel } from '../hooks/useCarousel';

export function ImpactPage() {
  const carousel = useCarousel(interns, 4);

  return (
    <>
      {/* Top Banner Image */}
      <PageHeroBanner image={assets.programHero} />

      {/* Hero Section */}
      <HeroSection
        title="Build something that Matters"
        description="Join EchoBloom and work at the intersection of AI, design, research, accessibility, and human expression. Our interns contribute to real projects supporting neurodivergent individuals, non-verbal communities, and people with intellectual and developmental disabilities."
      >
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#apply">
            <Button className="w-full sm:w-auto">Open Positions</Button>
          </a>
          <a href="#interns">
            <Button variant="secondary" className="w-full sm:w-auto">
              Meet our Interns &nbsp;▸
            </Button>
          </a>
        </div>
      </HeroSection>

      {/* More than an Internship Split Section */}
      <section className="py-16 md:py-24">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-content-primary md:text-[40px] md:leading-[52px]">
              More than an Internship
            </h2>
            <p className="text-base leading-relaxed text-content-tertiary">
              At EchoBloom, interns don't just observe. They contribute to to products, programs,
              research, community initiatives, and experiences that are actively being developed and
              used.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-border-default/60">
            {impactHighlights.map((item) => (
              <div key={item.title} className="py-5 first:pt-0 last:pb-0">
                <h3 className="font-heading text-base font-bold text-content-primary md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-content-tertiary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find your Place at EchoBloom Form Section */}
      <section id="apply" className="container-page py-16 md:py-24">
        <div className="mb-10 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-content-tertiary">
            Join us
          </p>
          <h2 className="mt-2 font-heading text-4xl font-bold leading-tight text-content-primary md:text-6xl md:leading-[1.15]">
            Find your Place
            <br />
            at EchoBloom
          </h2>
        </div>
        <ImpactApplicationForm />
      </section>

      {/* Meet our Amazing Interns Section */}
      <div id="interns">
        <Carousel
          title="Meet our Amazing Interns"
          subtitle="Product Design Intern"
          items={carousel.visibleItems}
          renderItem={(intern) => (
            <Link
              key={intern.slug}
              to={`/intern/${intern.slug}`}
              className="flex h-[380px] flex-col justify-end rounded-s bg-[#d9d9d9] p-4 transition-transform hover:scale-[1.01] md:h-[480px]"
            >
              <div>
                <p className="font-semibold text-content-primary">{intern.name}</p>
                <p className="text-sm text-content-tertiary">{intern.role}</p>
              </div>
            </Link>
          )}
          onPrev={carousel.prev}
          onNext={carousel.next}
          hasMultiple={carousel.hasMultiple}
        />
      </div>
    </>
  );
}
