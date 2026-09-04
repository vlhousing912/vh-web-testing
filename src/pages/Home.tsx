import { useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import TrustStrip from '@/components/sections/TrustStrip';
import AboutIntro from '@/components/sections/AboutIntro';
import Values from '@/components/sections/Values';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import PropertyJourney from '@/components/sections/PropertyJourney';
import LocationAdvantage from '@/components/sections/LocationAdvantage';
import InvestmentPhilosophy from '@/components/sections/InvestmentPhilosophy';
import Transparency from '@/components/sections/Transparency';
import GalleryPreview from '@/components/sections/GalleryPreview';
import Testimonials from '@/components/sections/Testimonials';
import SiteVisitCTA from '@/components/sections/SiteVisitCTA';
import ContactSection from '@/components/sections/ContactSection';

function WaveDivider({ from = '#FFFFFF', to = '#F1F2F6', className = '' }: { from?: string; to?: string; className?: string }) {
  return (
    <div className={`relative w-full -my-px ${className}`} aria-hidden="true" style={{ background: from }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-12 sm:h-16 lg:h-20">
        <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill={to} />
      </svg>
    </div>
  );
}

function DiagonalDivider({ from = '#FFFFFF', to = '#F1F2F6', className = '' }: { from?: string; to?: string; className?: string }) {
  return (
    <div className={`relative w-full -my-px ${className}`} aria-hidden="true" style={{ background: from }}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="block w-full h-8 sm:h-12 lg:h-14">
        <path d="M0,0 L1440,60 L1440,60 L0,60 Z" fill={to} />
      </svg>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = 'VARALAKSHMI HOUSING INFRA LLP | Residential Plots & Real Estate Development';
  }, []);

  return (
    <>
      <Hero />
      <TrustStrip />

      {/* Smooth transition to white */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <AboutIntro />

      <DiagonalDivider from="#FFFFFF" to="#F1F2F6" />

      <Values />

      <WaveDivider from="#F1F2F6" to="#FFFFFF" />

      <FeaturedProjects />

      <DiagonalDivider from="#FFFFFF" to="#F1F2F6" />

      <PropertyJourney />

      <WaveDivider from="#F1F2F6" to="#FFFFFF" />

      <LocationAdvantage />

      {/* Premium divider before dark section */}
      <div className="premium-divider my-0" />

      <InvestmentPhilosophy />

      <DiagonalDivider from="#0D2266" to="#F1F2F6" className="!bg-gradient-to-r !from-[#0D2266] !via-[#0B1F5E] !to-[#0D2266]" />

      <Transparency />

      <WaveDivider from="#F1F2F6" to="#FFFFFF" />

      <GalleryPreview />

      <DiagonalDivider from="#FFFFFF" to="#F1F2F6" />

      <Testimonials />

      <WaveDivider from="#F1F2F6" to="#0B3D91" />

      <SiteVisitCTA />

      {/* Premium divider before contact */}
      <div className="premium-divider !bg-gradient-to-r from-navy-500 via-navy-400 to-navy-500 my-0" />

      <ContactSection />
    </>
  );
}
