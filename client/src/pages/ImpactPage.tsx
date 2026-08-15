import { Link } from 'react-router-dom';
import { impactFeatures, impactStats } from '../data/impact';
import { assets } from '../data/assets';
import { HeroSection } from '../components/sections/HeroSection';
import { SplitSection } from '../components/sections/SplitSection';
import { StatsRow } from '../components/sections/StatsRow';
import { FeatureCard } from '../components/sections/FeatureCard';
import { Button } from '../components/ui/Button';

export function ImpactPage() {
  return (
    <>
      <HeroSection
        eyebrow="Art Gallery"
        title="Creativity, Connection, Possibility"
        description="EchoBloom creates programs and technology that help people express themselves in ways traditional systems often overlook. Through art, accessible experiences, and human-centered AI, we are exploring what technology can become when it begins with dignity."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/artworks">
            <Button className="w-full sm:w-auto">Explore Artworks</Button>
          </Link>
          <Link to="/programs">
            <Button variant="secondary" className="w-full sm:w-auto">
              View Programs
            </Button>
          </Link>
        </div>
      </HeroSection>

      <section className="container-page pb-8">
        <img src={assets.impactHero} alt="" className="h-[240px] w-full rounded-s object-cover md:h-[440px]" />
      </section>

      <StatsRow stats={impactStats} />

      <section className="container-page py-16 text-center">
        <h2 className="font-heading text-3xl font-bold md:text-[40px]">
          Every piece begins with someone’s Expression
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-content-tertiary">
          The artwork created through EchoBloom programs is more than an outcome of a session. It
          represents an idea, a moment, a choice of color, a feeling, or a way of communicating that
          belongs to the person who created it.
        </p>
        <div className="mt-8">
          <Link to="/artworks">
            <Button>View the Collection</Button>
          </Link>
        </div>
      </section>

      <section className="container-page pb-16">
        <img src={assets.homeHero} alt="" className="h-[280px] w-full rounded-s object-cover md:h-[577px]" />
      </section>

      <section className="container-page py-12 text-center">
        <h2 className="font-heading text-3xl font-bold md:text-[40px]">
          The Impact we want to create is still ahead of Us
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-content-tertiary">
          EchoBloom is still growing. Our ambition is not simply to reach more people, but to keep
          learning how technology can better respect the people it is meant to serve.
        </p>
      </section>

      <section className="container-page grid gap-4 pb-16 md:grid-cols-3">
        {impactFeatures.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </section>

      <SplitSection
        title="Impact doesn’t happen Alone"
        description="Whether you're a student, educator, researcher, community organization, volunteer, or potential partner, there are many ways to contribute to what EchoBloom is building."
        media={
          <img src={assets.homeIntern} alt="" className="w-full rounded-s object-cover" />
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/contact">
            <Button>Connect</Button>
          </Link>
          <Link to="/intern">
            <Button variant="secondary">Join Us</Button>
          </Link>
        </div>
      </SplitSection>
    </>
  );
}
