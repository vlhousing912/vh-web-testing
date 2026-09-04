import { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Why Us', path: '/why-us' },
  { label: 'Locations', path: '/locations' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' },
];

export const footerNavigation = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Why Choose Us', path: '/why-us' },
    { label: 'Our Projects', path: '/projects' },
    { label: 'Gallery', path: '/gallery' },
  ],
  quickLinks: [
    { label: 'Site Visit', path: '/site-visit' },
    { label: 'Contact', path: '/contact' },
    { label: 'FAQs', path: '/faq' },
    { label: 'Insights', path: '/insights' },
  ],
  legal: [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms & Conditions', path: '/terms' },
    { label: 'Disclaimer', path: '/disclaimer' },
  ],
};
