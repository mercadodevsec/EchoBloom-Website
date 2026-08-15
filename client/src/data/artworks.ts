import { assets } from './assets';

export type ArtworkCategory = 'all' | 'sessions' | 'ai-assisted' | 'community';

export const artworkFilters: { id: ArtworkCategory; label: string }[] = [
  { id: 'all', label: 'All Artworks' },
  { id: 'sessions', label: 'Creative Sessions' },
  { id: 'ai-assisted', label: 'AI-Assisted' },
  { id: 'community', label: 'Community' },
];

export const artworks = [
  {
    id: '1',
    title: 'Programs assisting Neurodivergent Communities',
    category: 'sessions' as const,
    image: assets.homeFeature,
    span: 'small' as const,
  },
  {
    id: '2',
    title: 'Powered by IPMD',
    category: 'ai-assisted' as const,
    image: assets.homeFeature,
    span: 'large' as const,
  },
  {
    id: '3',
    title: 'Built with the Next Generation',
    category: 'community' as const,
    image: assets.homeFeature,
    span: 'small' as const,
  },
  {
    id: '4',
    title: 'Expression through Color',
    category: 'sessions' as const,
    image: assets.homeFeature,
    span: 'large' as const,
  },
];

export const artworkStats = [
  { value: '—', label: 'Sessions Conducted' },
  { value: '—', label: 'Artworks Created' },
  { value: '—', label: 'Artists Contributed' },
];
