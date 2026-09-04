import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { COMPANY_NAME, scrollToTop } from '@/lib/utils';

export default function AboutIntro() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="section-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with premium frame */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Outer frame accent */}
              <div className="absolute -inset-3 border border-gold-500/10 rounded-2xl" />
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated relative">
                <img
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80"
                  alt="Modern residential development showing planned community"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 via-transparent to-transparent" />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-5 -right-5 sm:-bottom-6 sm:-right-6 bg-white rounded-xl shadow-elevated px-5 py-3 border border-neutral-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-medium">Est.</p>
                    <p className="text-sm font-bold text-neutral-900">Vijayawada, AP</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <div>
              <span className="section-label block mb-4">WHO WE ARE</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
                Creating Places.{' '}
                <span className="text-navy-500">Building Confidence.</span>
              </h2>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-12 h-0.5 bg-gold-500" />
                <div className="w-2 h-2 rotate-45 border border-gold-500/50" />
              </div>

              <p className="mt-8 text-neutral-600 text-lg leading-relaxed">
                {COMPANY_NAME} is a real-estate and infrastructure development company based in Vijayawada, Andhra Pradesh, focused on residential plotted developments and thoughtfully planned land projects.
              </p>

              <p className="mt-4 text-neutral-500 leading-relaxed">
                We believe every plot represents more than a piece of land. It represents an opportunity, an aspiration and a foundation for the future.
              </p>

              <p className="mt-4 text-neutral-500 leading-relaxed">
                Our approach combines location, planning, transparency and customer-focused service to create a dependable property-buying experience.
              </p>

              {/* Key points */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                {['Transparent Process', 'Customer-First', 'Strategic Locations', 'Quality Planning'].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm text-neutral-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                    {point}
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 mt-8 text-navy-500 font-semibold text-sm hover:text-navy-700 transition-colors group"
              >
                MORE ABOUT US
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
