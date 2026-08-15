import { Link } from 'react-router-dom';
import { assets } from '../../data/assets';
import { footerLinks } from '../../data/navigation';

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-heading text-lg font-semibold uppercase text-content-brand-eb">{title}</h2>
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.href}
              className="text-base text-content-tertiary opacity-80 transition-opacity hover:opacity-100"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border-default bg-background-primary">
      <div className="container-page grid gap-10 py-16 lg:grid-cols-[1.2fr_2fr] lg:gap-16">
        <div className="max-w-sm space-y-4">
          <img src={assets.logo} alt="EchoBloom" className="size-11" />
          <p className="text-base text-content-tertiary">
            Bridging the ethical gap in AI through human-centered design and radical transparency.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <FooterColumn title="Explore" links={footerLinks.explore} />
          <FooterColumn title="Get Involved" links={footerLinks.getInvolved} />
          <FooterColumn title="Legal" links={footerLinks.legal} />
        </div>
      </div>
      <div className="border-t border-border-default/60 py-6">
        <div className="container-page">
          <p className="text-sm text-content-secondary opacity-60">
            © 2024 EchoBloom Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
