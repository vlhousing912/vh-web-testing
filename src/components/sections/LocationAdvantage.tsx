import { MapPin, Building2, GraduationCap, HeartPulse, Store, Route, Bus } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

const advantages = [
  { icon: Route, label: 'Road Connectivity', description: 'Well-connected road networks' },
  { icon: Building2, label: 'Urban Centres', description: 'Proximity to key urban areas' },
  { icon: GraduationCap, label: 'Educational Institutions', description: 'Schools and colleges nearby' },
  { icon: HeartPulse, label: 'Hospitals', description: 'Healthcare facilities accessible' },
  { icon: Store, label: 'Commercial Areas', description: 'Shopping and business hubs' },
  { icon: Bus, label: 'Transportation', description: 'Public transport accessibility' },
];

export default function LocationAdvantage() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="section-max section-padding">
        <ScrollReveal>
          <SectionHeading
            label="LOCATION ADVANTAGE"
            title="Connected to Opportunity"
            description="Location is an important consideration in every property decision. Our projects are selected with connectivity and surrounding development in mind."
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map placeholder — premium card */}
          <ScrollReveal direction="left">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-navy-50 to-navy-100/50 border border-navy-100 flex flex-col items-center justify-center p-8 text-center relative">
              {/* Decorative corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-navy-300/30" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-navy-300/30" />

              <div className="w-16 h-16 rounded-2xl bg-navy-500/10 flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-navy-400" />
              </div>
              <h3 className="text-lg font-bold text-navy-500">Interactive Map</h3>
              <p className="text-sm text-neutral-500 mt-2 max-w-xs">
                Google Maps integration will be displayed here once configured.
              </p>
              <div className="mt-4 px-3 py-1.5 rounded-lg bg-navy-100/50 border border-navy-200/50">
                <code className="text-[11px] text-navy-600 font-mono">VITE_GOOGLE_MAPS_API_KEY</code>
              </div>
              <p className="text-xs text-neutral-400 mt-3">Set in your environment to enable</p>
            </div>
          </ScrollReveal>

          {/* Advantages grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantages.map((adv, i) => (
              <ScrollReveal key={adv.label} delay={i * 80}>
                <div className="p-5 rounded-xl border border-neutral-200/60 hover:border-navy-200 hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 group cursor-default">
                  <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center mb-3 group-hover:bg-navy-500 group-hover:shadow-lg group-hover:shadow-navy-500/20 transition-all duration-500">
                    <adv.icon className="w-5 h-5 text-navy-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900 tracking-wide uppercase group-hover:text-navy-500 transition-colors duration-300">
                    {adv.label}
                  </h4>
                  <p className="text-xs text-neutral-500 mt-1">{adv.description}</p>
                  <p className="text-xs text-neutral-400 mt-2 italic">Distance details will be updated.</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
