import { Link } from 'react-router-dom';
import { assets } from '../data/assets';
import { sessionMiniNav, sessionSteps } from '../data/programs';
import { PageHeroBanner } from '../components/sections/Carousel';
import { HeroSection } from '../components/sections/HeroSection';
import { ProgramShowcase } from '../components/sections/ProgramShowcase';
import { SplitSection } from '../components/sections/SplitSection';
import { homeProgramTabs } from '../data/home';
import { Button } from '../components/ui/Button';

export function ProgramDetailPage() {
  return (
    <>
      <PageHeroBanner image={assets.programHero} />
      <HeroSection
        title="Expression without needing Words"
        description="EchoBloom’s creative sessions bring art, guided activity, and AI-assisted transformation together to create new ways for participants to express themselves."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/contact">
            <Button>Join a Session</Button>
          </Link>
          <Link to="/artworks">
            <Button variant="secondary">See Artworks</Button>
          </Link>
        </div>
      </HeroSection>

      <section className="container-page py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <h2 className="font-heading text-3xl font-bold md:text-[40px]">What happens in a Session</h2>
          <div>
            <h3 className="text-lg font-semibold text-content-primary">
              A space to Create, Explore, and be Understood
            </h3>
            <p className="mt-3 text-content-tertiary">
              Participants begin with drawing, painting, or another creative activity. Their work can
              then be explored and transformed using AI tools, creating new visual interpretations
              while keeping the participant’s original expression at the center.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {sessionSteps.map((step) => (
            <article key={step.title} className="overflow-hidden rounded-s border border-border-default">
              <img src={step.image} alt="" className="h-[220px] w-full object-cover md:h-[274px]" />
              <div className="p-4">
                <h3 className="font-semibold text-content-primary">{step.title}</h3>
                <p className="mt-2 text-sm text-content-tertiary">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ProgramShowcase tabs={homeProgramTabs} className="bg-background-muted" />

      <section className="container-page py-8">
        <div className="flex flex-wrap gap-4">
          {sessionMiniNav.map((item) => (
            <span
              key={item}
              className="rounded-pill border border-border-default px-4 py-2 text-sm text-content-secondary"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <SplitSection
        title="Designed for different Ways of Participating"
        description="The sessions are designed to support neurodivergent and non-verbal participants, individuals with intellectual and developmental disabilities, as well as families, caregivers, and community or educational organizations."
        media={<img src={assets.homeIntern} alt="" className="w-full rounded-s object-cover" />}
      >
        <Link to="/contact">
          <Button>Request Information</Button>
        </Link>
      </SplitSection>

      <section className="container-page py-16">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold md:text-[40px]">
            From an Idea to something New
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-content-tertiary">
            The original artwork remains the starting point. Technology is used to explore new
            visual possibilities while preserving the participant’s creative contribution.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <img src={assets.homeFeature} alt="" className="w-full rounded-s object-cover" />
          <img src={assets.homeProgram} alt="" className="w-full rounded-s object-cover" />
        </div>
      </section>
    </>
  );
}
