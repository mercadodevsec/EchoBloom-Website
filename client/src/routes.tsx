import { createBrowserRouter } from 'react-router-dom';
import { SiteLayout } from './components/layout/SiteLayout';
import { AboutPage } from './pages/AboutPage';
import { ArtworksPage } from './pages/ArtworksPage';
import { ContactPage, ContactSuccessPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { ImpactPage } from './pages/ImpactPage';
import { InternPage } from './pages/InternPage';
import { InternProfilePage } from './pages/InternProfilePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProgramDetailPage } from './pages/ProgramDetailPage';
import { ProgramsPage } from './pages/ProgramsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'programs', element: <ProgramsPage /> },
      { path: 'programs/creative-art-sessions', element: <ProgramDetailPage /> },
      { path: 'impact', element: <ImpactPage /> },
      { path: 'artworks', element: <ArtworksPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'contact/success', element: <ContactSuccessPage /> },
      { path: 'intern', element: <InternPage /> },
      { path: 'intern/:slug', element: <InternProfilePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
