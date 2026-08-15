import { Link } from 'react-router-dom';
import { assets } from '../data/assets';
import { ContactForm } from '../components/forms/ContactForm';
import { PageHeroBanner } from '../components/sections/Carousel';
import { HeroSection } from '../components/sections/HeroSection';
import { Icon } from '../components/ui/AccordionRow';
import { Button } from '../components/ui/Button';

const socialLinks = [
  { icon: 'ri-linkedin-fill', href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: 'ri-twitter-x-line', href: 'https://x.com', label: 'X' },
  { icon: 'ri-youtube-fill', href: 'https://youtube.com', label: 'YouTube' },
  { icon: 'ri-facebook-fill', href: 'https://facebook.com', label: 'Facebook' },
];

export function ContactPage() {
  return (
    <>
      <PageHeroBanner image={assets.contactGallery} />
      <HeroSection
        title="Let’s start a Conversation"
        description="Questions about EchoBloom, our programs, research, or the work we’re doing? We’d love to hear from you."
      />

      <section className="container-page py-12 md:py-16">
        <ContactForm />
      </section>

      <section className="bg-background-muted py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold md:text-[40px]">Follow our Work</h2>
            <p className="mt-4 text-content-tertiary">
              See recent sessions, artwork, community programs, and updates from EchoBloom.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="inline-flex size-10 items-center justify-center rounded-pill border border-border-default bg-background-primary text-content-primary hover:bg-background-muted"
                >
                  <Icon name={link.icon} size={20} />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={assets.homeFeature} alt="" className="h-48 rounded-s object-cover md:h-[390px]" />
            <img src={assets.homeProgram} alt="" className="h-48 rounded-s object-cover md:h-[390px]" />
          </div>
        </div>
      </section>
    </>
  );
}

export function ContactSuccessPage() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <div className="mb-6 flex size-10 items-center justify-center rounded-full bg-green-100 text-green-700">
        <Icon name="ri-check-line" size={20} />
      </div>
      <h1 className="font-heading text-4xl font-bold md:text-6xl">We got your message!</h1>
      <p className="mt-6 max-w-xl text-content-tertiary">
        Thanks for reaching out to EchoBloom. Our team will review your message and get back to you
        as soon as we can.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
        <Link to="/programs">
          <Button variant="secondary">Explore Programs</Button>
        </Link>
      </div>
    </section>
  );
}
