import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../../data/assets';
import { navItems } from '../../data/navigation';
import { useActiveRoute } from '../../hooks/useActiveRoute';
import { Button } from '../ui/Button';
import { Icon } from '../ui/AccordionRow';
import { cn } from '../../lib/utils';

export function Header() {
  const activeRoute = useActiveRoute();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-default/60 bg-background-disabled/95 backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-xs focus:bg-background-brand-eb focus:px-4 focus:py-2 focus:text-content-on-brand"
      >
        Skip to content
      </a>
      <div className="container-page flex h-20 items-center justify-between gap-4 md:h-24">
        <Link to="/" className="shrink-0" aria-label="EchoBloom home">
          <img src={assets.logo} alt="EchoBloom" className="size-11" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={cn(
                'text-base transition-colors',
                activeRoute === item.route
                  ? 'font-semibold text-content-brand-eb'
                  : 'text-content-tertiary hover:text-content-primary',
              )}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/intern">
            <Button>Get Involved</Button>
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-s border border-border-default lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? 'ri-close-line' : 'ri-menu-line'} size={20} />
        </button>
      </div>

      {menuOpen ? (
        <nav
          className="border-t border-border-default bg-background-primary px-5 py-4 lg:hidden"
          aria-label="Mobile primary"
        >
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'block py-2 text-base',
                    activeRoute === item.route
                      ? 'font-semibold text-content-brand-eb'
                      : 'text-content-tertiary',
                  )}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link to="/intern" onClick={() => setMenuOpen(false)}>
                <Button className="w-full">Get Involved</Button>
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
