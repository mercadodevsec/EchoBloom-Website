import { useLocation } from 'react-router-dom';
import type { NavRoute } from '../data/navigation';

export function useActiveRoute(): NavRoute {
  const { pathname } = useLocation();

  if (pathname.startsWith('/about')) return 'about';
  if (pathname.startsWith('/programs')) return 'programs';
  if (pathname.startsWith('/impact') || pathname.startsWith('/artworks')) return 'impact';
  if (pathname.startsWith('/contact')) return 'contact';
  return 'home';
}
