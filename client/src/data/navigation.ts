export type NavRoute = 'home' | 'about' | 'programs' | 'impact' | 'contact';

export const navItems: { label: string; href: string; route: NavRoute }[] = [
  { label: 'Home', href: '/', route: 'home' },
  { label: 'About', href: '/about', route: 'about' },
  { label: 'Programs', href: '/programs', route: 'programs' },
  { label: 'Impact', href: '/impact', route: 'impact' },
  { label: 'Contact', href: '/contact', route: 'contact' },
];

export const footerLinks = {
  explore: [
    { label: 'Our Impact', href: '/impact' },
    { label: 'Ethics Charter', href: '/about' },
    { label: 'Programs', href: '/programs' },
  ],
  getInvolved: [
    { label: 'Connect', href: '/contact' },
    { label: 'Newsletter', href: '/contact' },
    { label: 'Partnerships', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/contact' },
    { label: 'Ethics Charter', href: '/about' },
  ],
} as const;
