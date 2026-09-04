import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { footerNavigation } from '@/data/navigation';
import { COMPANY_NAME, TAGLINE, LOGO_URL, SOCIAL_LINKS } from '@/lib/utils';
import { scrollToTop } from '@/lib/utils';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const socialIcons = [
  { icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
  { icon: Youtube, href: SOCIAL_LINKS.youtube, label: 'YouTube' },
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white" role="contentinfo">
      {/* Main footer */}
      <div className="section-max section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" onClick={scrollToTop} aria-label="Varalakshmi Housing Infra LLP">
              <img src={LOGO_URL} alt="Varalakshmi Housing Infra LLP" className="h-20 w-auto object-contain mb-5" />
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              A real-estate and infrastructure development company based in Vijayawada, Andhra Pradesh, focused on thoughtfully planned residential plotted developments.
            </p>
            <p className="text-gold-500 text-sm font-medium italic">
              {TAGLINE}
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-neutral-800 text-neutral-400 hover:bg-navy-500 hover:text-white transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={scrollToTop}
                    className="text-neutral-400 text-sm hover:text-gold-500 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerNavigation.quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={scrollToTop}
                    className="text-neutral-400 text-sm hover:text-gold-500 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerNavigation.legal.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={scrollToTop}
                    className="text-neutral-400 text-sm hover:text-gold-500 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="section-max section-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-xs">
              © 2026 {COMPANY_NAME}. All Rights Reserved.
            </p>
            <p className="text-neutral-600 text-xs italic">
              Designed for a premium digital experience.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
