import { assets } from './assets';

export const homeStats = [
  { value: '50+', label: 'Student chapters across universities and high schools.' },
  { value: '1,000', label: 'Community members and participants reached.' },
  { value: '08', label: 'In-Programs and experiences hosted.' },
  { value: '12', label: 'Ex-Programs and experiences hosted.' },
];

export const homeFeatures = [
  {
    image: assets.homeFeature,
    title: 'Programs assisting Neurodivergent Communities',
    description:
      'EchoBloom explores how AI can support dignity, inclusion, and human connection.',
  },
  {
    image: assets.homeFeature,
    title: 'Powered by IPMD',
    description:
      'Our programs use technology developed with IPMD to support creativity, expression, and communication.',
  },
  {
    image: assets.homeFeature,
    title: 'Built with the Next Generation',
    description:
      'Interns contribute across design, research, technology, outreach, and community programs.',
  },
];

export const homeProgramTabs = [
  {
    id: 'clinical',
    label: 'Clinical Art Session',
    title: 'Create. Express. Transform.',
    description:
      'Guided art sessions where neurodivergent participants create together, explore expression, and use AI to transform their work into new forms.',
    image: assets.homeProgram,
  },
  {
    id: 'showcase',
    label: 'Art Showcase',
    title: 'Share creative work with community audiences.',
    description:
      'Participants display original artwork and AI-assisted interpretations in inclusive showcase settings.',
    image: assets.homeProgram,
  },
  {
    id: 'xr',
    label: 'XR Virtual Gallery',
    title: 'Step into immersive creative environments.',
    description:
      'Explore digital art and emotional narratives in curated XR spaces designed for many ways of participating.',
    image: assets.homeProgram,
  },
];
