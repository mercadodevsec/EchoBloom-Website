import { Link } from 'react-router-dom';
import { assets } from '../data/assets';
import { homeFeatures, homeProgramTabs, homeStats } from '../data/home';
import { FeatureCard } from '../components/sections/FeatureCard';
import { HeroSection } from '../components/sections/HeroSection';
import { ProgramShowcase } from '../components/sections/ProgramShowcase';
import { SplitSection } from '../components/sections/SplitSection';
import { StatsRow } from '../components/sections/StatsRow';
import { Button } from '../components/ui/Button';

export function HomePage() {
  return (
    <>
      <HeroSection
        title="Building a more Human Future for AI"
        description="We bring emotionally intelligent technology into communities through inclusive programs, partnerships, and shared experiences."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/intern">
            <Button className="w-full sm:w-auto">Join the Movement</Button>
          </Link>
          <Link to="/programs">
            <Button variant="secondary" className="w-full sm:w-auto">
              Explore our Programs
            </Button>
          </Link>
        </div>
      </HeroSection>

      <section className="container-page pb-12">
        <img
          src={assets.homeHero}
          alt="Community members collaborating outdoors"
          className="h-[240px] w-full rounded-s object-cover md:h-[440px]"
        />
      </section>

      <StatsRow stats={homeStats} />

      <SplitSection
        title="A different premise for Artificial Intelligence"
        description="Most AI is built for those easiest to serve. EchoBloom takes a different path, creating technology that recognizes and responds to human emotion, especially for people conventional systems often overlook."
      />

      <section className="container-page grid gap-4 pb-16 md:grid-cols-3">
        {homeFeatures.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </section>

      <ProgramShowcase tabs={homeProgramTabs} />

      <SplitSection
        title="Intern with us to make something Meaningful"
        description="EchoBloom’s state-of-the-art internship program will benefit all students to learn, develop and deploy all the necessary technologies and solutions for the most challenging problems of today to create a better world tomorrow."
        media={
          <img
            src={assets.homeIntern}
            alt="Students collaborating with laptops"
            className="w-full rounded-s object-cover"
          />
        }
      >
        <Link to="/intern">
          <Button>Join Us</Button>
        </Link>
      </SplitSection>
    </>
  );
}
