import { Link } from 'react-router-dom';
import { assets } from '../data/assets';
import { programCards } from '../data/programs';
import { HeroSection } from '../components/sections/HeroSection';
import { PageHeroBanner } from '../components/sections/Carousel';
import { SplitSection } from '../components/sections/SplitSection';
import { Icon } from '../components/ui/AccordionRow';
import { Button } from '../components/ui/Button';

export function ProgramsPage() {
  return (
    <>
      <PageHeroBanner image={assets.programHero} />
      <HeroSection
        title="Empowering Minds through Innovative Programs"
        description="EchoBloom Foundation advances AI for Humanity by creating emotionally intelligent technology for neurodiverse, non-verbal, and intellectually disabled communities."
      />

      <SplitSection
        title="Creative Art Sessions"
        description="EchoBloom’s technology is developed by IPMD. EchoBloom Foundation brings it into communities through research, programs, and the global AI for Humanity network."
        media={<img src={assets.homeProgram} alt="" className="w-full rounded-s object-cover" />}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/programs/creative-art-sessions">
            <Button>Learn More</Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary">Get in Touch</Button>
          </Link>
        </div>
      </SplitSection>

      <section className="bg-background-muted py-16 md:py-24">
        <div className="container-page text-center">
          <h2 className="font-heading text-3xl font-bold md:text-[40px]">XR Virtual Gallery</h2>
          <p className="mx-auto mt-4 max-w-2xl text-content-tertiary">
            Step into immersive environments curated by our community. A limitless space where
            digital art and emotional narratives intertwine.
          </p>
          <div className="mt-8">
            <Link to="/artworks">
              <Button>Explore Gallery</Button>
            </Link>
          </div>
          <img src={assets.homeProgram} alt="" className="mt-10 w-full rounded-s object-cover" />
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold md:text-[40px]">Inclusive AI Programs</h2>
          <p className="mx-auto mt-4 max-w-2xl text-content-tertiary">
            Democratizing access to technology through education and specialized tools designed for
            all abilities.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {programCards.map((card) => (
            <article
              key={card.id}
              className="rounded-s border border-border-default bg-background-primary p-8"
            >
              <div className="mb-6 flex size-[72px] items-center justify-center rounded-full bg-background-muted text-content-brand-eb">
                <Icon name={card.icon} size={32} />
              </div>
              <h3 className="text-lg font-semibold text-content-primary">{card.title}</h3>
              <p className="mt-3 text-content-tertiary">{card.description}</p>
              <p className="mt-6 text-sm font-semibold text-content-brand-eb">Learn More</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
