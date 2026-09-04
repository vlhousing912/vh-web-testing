import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { mainNavigation } from '@/data/navigation';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { scrollToTop, getPhoneUrl, LOGO_URL } from '@/lib/utils';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollY = useScrollPosition();
  const location = useLocation();
  const isScrolled = scrollY > 60;
  const isHome = location.pathname === '/';

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const headerBg = isHome
    ? isScrolled
      ? 'bg-white/95 backdrop-blur-lg shadow-card border-b border-neutral-100'
      : 'bg-gradient-to-b from-black/70 via-black/40 to-transparent'
    : 'bg-white/95 backdrop-blur-lg shadow-card border-b border-neutral-100';

  const textColor = isHome && !isScrolled ? 'text-white' : 'text-neutral-900';
  const navTextColor = isHome && !isScrolled ? 'text-white/80 hover:text-white' : 'text-neutral-600 hover:text-navy-500';


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
      role="banner"
    >
      {/* Premium gold accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

      {/* Main navigation */}
      <div className="section-max section-padding">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link
            to="/"
            onClick={scrollToTop}
            className="flex-shrink-0 flex items-center"
            aria-label="Varalakshmi Housing Infra LLP - Home"
          >
            <img
              src={LOGO_URL}
              alt="Varalakshmi Housing Infra LLP"
              className={`h-10 lg:h-12 w-auto object-contain transition-all duration-500 ${
                isHome && !isScrolled ? 'brightness-0 invert' : ''
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {mainNavigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${navTextColor} ${
                  location.pathname === item.path
                    ? isHome && !isScrolled
                      ? 'text-white'
                    : 'text-navy-500'
                : ''
                } group`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-0.5 bg-gold-500 transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getPhoneUrl()}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${navTextColor}`}
            >
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </a>
            <Link
              to="/site-visit"
              className="btn-primary text-sm !px-5 !py-2.5"
              onClick={scrollToTop}
            >
              Schedule Site Visit
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${textColor} hover:bg-black/5`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-400 overflow-hidden ${
          mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white border-t border-neutral-100 px-4 py-6 space-y-1" aria-label="Mobile navigation">
          {mainNavigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                location.pathname === item.path
                  ? 'bg-navy-50 text-navy-500'
                  : 'text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              {item.label}
              <ChevronRight className="w-4 h-4 text-neutral-300" />
            </Link>
          ))}
          <div className="pt-4 px-4 space-y-3 border-t border-neutral-100 mt-4">
            <a
              href={getPhoneUrl()}
              className="btn-secondary w-full text-center text-sm !py-3"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
            <Link
              to="/site-visit"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full text-center text-sm !py-3"
            >
              Schedule Site Visit
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
