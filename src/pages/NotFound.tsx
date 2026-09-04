import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { scrollToTop, COMPANY_NAME } from '@/lib/utils';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found | VARALAKSHMI HOUSING INFRA LLP';
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-neutral-150 px-6">
      <div className="text-center max-w-lg">
        <span className="text-8xl sm:text-9xl font-bold text-navy-100 font-display">404</span>
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
          THE PAGE YOU'RE LOOKING FOR COULDN'T BE FOUND.
        </h1>
        <p className="mt-4 text-neutral-500 leading-relaxed">
          The page may have been moved, deleted or may never have existed. Please check the URL or navigate to a valid page.
        </p>
        <div className="mt-8">
          <Link to="/" onClick={scrollToTop}>
            <Button variant="primary" size="lg">
              RETURN HOME
            </Button>
          </Link>
        </div>
        <p className="mt-10 text-xs text-neutral-400">
          {COMPANY_NAME}
        </p>
      </div>
    </section>
  );
}
