import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function NotFoundPage() {
  return (
    <section className="container-page flex min-h-[50vh] flex-col items-center justify-center py-24 text-center">
      <div className="w-full max-w-3xl rounded-s bg-background-muted px-6 py-16">
        <p className="font-heading text-5xl font-bold text-content-primary md:text-6xl">404</p>
        <h1 className="mt-4 font-heading text-3xl font-bold">Page not found</h1>
        <p className="mt-4 text-content-tertiary">
          The page you’re looking for doesn’t exist or may have moved.
        </p>
        <Link to="/" className="mt-8 inline-block">
          <Button>Return Home</Button>
        </Link>
      </div>
    </section>
  );
}
