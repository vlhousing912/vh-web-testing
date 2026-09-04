import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { scrollToTop } from '@/lib/utils';
import { CalendarCheck, Clock, Car } from 'lucide-react';

const benefits = [
  { icon: CalendarCheck, label: 'Flexible scheduling', description: 'Choose a date that works for you' },
  { icon: Car, label: 'Guided experience', description: 'Our team will walk you through the project' },
  { icon: Clock, label: '30-minute visit', description: 'Quick yet comprehensive site overview' },
];

export default function SiteVisitCTA() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Premium animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-600 via-navy-500 to-navy-700" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gold-500/[0.05] blur-[100px] animate-[float3_22s_ease-in-out_infinite]" />
      </div>

      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="section-max section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal direction="left">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-gold-400 block mb-4">
                SITE VISIT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                SEE THE LOCATION{' '}
                <span className="text-gold-400">FOR YOURSELF</span>
              </h2>
              <p className="mt-6 text-lg text-white/65 leading-relaxed max-w-lg">
                Experience the project, understand the surroundings and make an informed property decision.
              </p>

              {/* Benefits row */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {benefits.map((b) => (
                  <div key={b.label} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.05] border border-white/[0.08]">
                    <div className="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <b.icon className="w-4 h-4 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white/90">{b.label}</p>
                      <p className="text-xs text-white/40 mt-0.5">{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4">
                <Link to="/site-visit" onClick={scrollToTop}>
                  <Button variant="accent" size="lg" showArrow>
                    SCHEDULE A SITE VISIT
                  </Button>
                </Link>
                <Link to="/contact" onClick={scrollToTop}>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="!text-white !border-white/30 hover:!bg-white/10"
                  >
                    TALK TO OUR TEAM
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="hidden md:block relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                  alt="Professional site visit experience"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating card overlay */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-xl shadow-elevated px-5 py-3">
                <p className="text-xs text-neutral-500 font-medium">Next Available</p>
                <p className="text-sm font-bold text-navy-500">Schedule Your Visit Today</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
