import { MapPin, Building2, GraduationCap, HeartPulse, Store, Route, Bus } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import PageHero from '@/components/ui/PageHero';
import { projects } from '@/data/projects';
import { usePageMeta } from '@/hooks/usePageMeta';

const connectivityFactors = [
  { icon: Route, label: 'Road Connectivity' },
  { icon: Building2, label: 'Urban Centres' },
  { icon: GraduationCap, label: 'Educational Institutions' },
  { icon: HeartPulse, label: 'Hospitals' },
  { icon: Store, label: 'Commercial Areas' },
  { icon: Bus, label: 'Transportation' },
];

export default function Locations() {
  usePageMeta({
    title: 'Locations',
    description: 'Explore project locations from VARALAKSHMI HOUSING INFRA LLP in Vijayawada, Andhra Pradesh. Strategic locations with road connectivity, nearby urban centres and infrastructure.',
    canonical: 'https://varalakshmihousing.com/locations',
  });

  return (
    <>
      <PageHero
        label="LOCATIONS"
        title={<>Connected to <span className="text-gold-400">Opportunity</span></>}
        description="Location is a critical factor in every property decision. Our projects are selected based on connectivity, development potential and surrounding infrastructure."
      />

      {/* Map placeholder */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="section-max section-padding">
          <ScrollReveal>
            <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-navy-50 border border-navy-100 flex flex-col items-center justify-center p-8 text-center">
              <MapPin className="w-16 h-16 text-navy-300 mb-4" />
              <h2 className="text-2xl font-bold text-navy-500">Project Locations Map</h2>
              <p className="text-sm text-neutral-500 mt-3 max-w-md">
                Interactive map showing all project locations will be displayed here once Google Maps API key is configured.
              </p>
              <p className="text-xs text-neutral-400 mt-4">
                Set <code className="bg-navy-100 px-2 py-0.5 rounded text-navy-600">VITE_GOOGLE_MAPS_API_KEY</code> to enable.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Project locations */}
      <section className="py-16 lg:py-20 bg-neutral-150">
        <div className="section-max section-padding">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-10">
              Our Project Locations
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {projects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 100}>
                <div className="premium-card p-6 lg:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-navy-500" />
                        <span className="text-xs font-bold text-gold-500 uppercase tracking-wider">Project Location</span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900">{project.name}</h3>
                      <p className="mt-2 text-sm text-neutral-500">{project.location.address}</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                      {connectivityFactors.map((cf) => (
                        <div key={cf.label} className="flex items-center gap-2 p-2 rounded-lg bg-neutral-50">
                          <cf.icon className="w-3.5 h-3.5 text-navy-400 flex-shrink-0" />
                          <span className="text-xs text-neutral-600">{cf.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {project.locationAdvantages && project.locationAdvantages.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-neutral-100">
                      <p className="text-xs text-neutral-400 italic">
                        Detailed distance and connectivity information will be updated for each location.
                      </p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
