import { MapPin, ClipboardCheck, Eye, Heart, Briefcase, TrendingUp } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const features = [
  {
    number: '01',
    icon: MapPin,
    title: 'STRATEGIC LOCATIONS',
    description: 'We carefully evaluate and select locations based on connectivity, infrastructure development potential and surrounding growth.',
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'THOUGHTFUL PLANNING',
    description: 'Each project is designed with a focus on layout, infrastructure, accessibility and long-term community value.',
  },
  {
    number: '03',
    icon: Eye,
    title: 'TRANSPARENT INFORMATION',
    description: 'We provide clear, relevant information about projects, processes and documentation to support informed decisions.',
  },
  {
    number: '04',
    icon: Heart,
    title: 'CUSTOMER-FIRST APPROACH',
    description: 'The customer experience guides every stage of our process, from first contact to documentation and beyond.',
  },
  {
    number: '05',
    icon: Briefcase,
    title: 'PROFESSIONAL PROCESS',
    description: 'A structured, professional approach to property development that prioritizes quality and reliability.',
  },
  {
    number: '06',
    icon: TrendingUp,
    title: 'LONG-TERM VALUE FOCUS',
    description: 'We seek opportunities where location and planning can contribute to lasting property value over time.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="section-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image side with premium frame */}
          <ScrollReveal direction="left">
            <div className="relative lg:sticky lg:top-32">
              {/* Outer frame */}
              <div className="absolute -inset-3 border border-gold-500/10 rounded-2xl" />
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated relative">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="Modern architecture representing planned development"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent" />
              </div>
              {/* Floating stat badge */}
              <div className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-6 bg-white rounded-xl shadow-elevated px-5 py-3 border border-neutral-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-medium">Our Promise</p>
                    <p className="text-sm font-bold text-neutral-900">6 Key Pillars</p>
                  </div>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold-500/10 rounded-2xl -z-10" />
            </div>
          </ScrollReveal>

          {/* Features side */}
          <div>
            <ScrollReveal>
              <span className="section-label block mb-4">WHY US</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
                Why{' '}
                <span className="text-navy-500">Varalakshmi Housing?</span>
              </h2>
              <div className="flex items-center gap-3 mt-6 mb-10">
                <div className="w-12 h-0.5 bg-gold-500" />
                <div className="w-2 h-2 rotate-45 border border-gold-500/50" />
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {features.map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 80}>
                  <div className="flex gap-5 p-5 rounded-xl border border-transparent hover:bg-neutral-50 hover:border-neutral-200/60 transition-all duration-300 group cursor-default">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center group-hover:bg-navy-500 group-hover:shadow-lg group-hover:shadow-navy-500/20 transition-all duration-500">
                        <feature.icon className="w-5 h-5 text-navy-500 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-gold-500">{feature.number}</span>
                        <h3 className="text-base font-bold text-neutral-900 tracking-wide uppercase group-hover:text-navy-500 transition-colors duration-300">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    {/* Arrow indicator */}
                    <div className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                      <svg className="w-4 h-4 text-navy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
