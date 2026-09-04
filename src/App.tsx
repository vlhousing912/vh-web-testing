import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import TopBar from '@/components/layout/TopBar';
import Footer from '@/components/layout/Footer';
import LoadingScreen from '@/components/layout/LoadingScreen';
import ScrollProgress from '@/components/ui/ScrollProgress';
import BackToTop from '@/components/ui/BackToTop';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { getPhoneUrl, getWhatsAppUrl, scrollToTop } from '@/lib/utils';

// Lazy-loaded pages for code splitting
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Projects = lazy(() => import('@/pages/Projects'));
const ProjectDetails = lazy(() => import('@/pages/ProjectDetails'));
const WhyUs = lazy(() => import('@/pages/WhyUs'));
const Locations = lazy(() => import('@/pages/Locations'));
const GalleryPage = lazy(() => import('@/pages/GalleryPage'));
const SiteVisit = lazy(() => import('@/pages/SiteVisit'));
const Insights = lazy(() => import('@/pages/Insights'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const Contact = lazy(() => import('@/pages/Contact'));
const Privacy = lazy(() => import('@/pages/Privacy'));
const Terms = lazy(() => import('@/pages/Terms'));
const Disclaimer = lazy(() => import('@/pages/Disclaimer'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="w-10 h-10 border-[3px] border-navy-200 border-t-navy-500 rounded-full animate-spin mx-auto" />
        <p className="mt-4 text-sm text-neutral-400">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <TopBar />
      <Header />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/site-visit" element={<SiteVisit />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
      <BackToTop />

      {/* Mobile bottom CTA bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-neutral-200 shadow-elevated">
        <div className="flex">
          <a
            href={getPhoneUrl()}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 text-navy-500 font-semibold text-xs hover:bg-navy-50 transition-colors min-h-[48px]"
            aria-label="Call us"
          >
            <Phone className="w-4 h-4" />
            CALL
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 text-green-600 font-semibold text-xs border-x border-neutral-200 hover:bg-green-50 transition-colors min-h-[48px]"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            WHATSAPP
          </a>
          <Link
            to="/site-visit"
            onClick={scrollToTop}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-navy-500 text-white font-semibold text-xs hover:bg-navy-600 transition-colors min-h-[48px]"
          >
            SITE VISIT
          </Link>
        </div>
      </div>
    </div>
  );
}
