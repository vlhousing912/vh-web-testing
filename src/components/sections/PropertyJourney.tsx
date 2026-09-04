import ScrollReveal from '@/components/ui/ScrollReveal';
import { Search, MapPin, Crosshair, FileText, FileCheck, CheckCircle, Home } from 'lucide-react';

const steps = [
  { number: '01', title: 'EXPLORE', description: 'Discover our projects.', icon: Search },
  { number: '02', title: 'VISIT', description: 'Schedule and experience the location.', icon: MapPin },
  { number: '03', title: 'SELECT', description: 'Choose the plot that suits your requirements.', icon: Crosshair },
  { number: '04', title: 'BOOK', description: 'Complete the booking process.', icon: FileText },
  { number: '05', title: 'DOCUMENT', description: 'Complete the applicable documentation.', icon: FileCheck },
  { number: '06', title: 'REGISTER', description: 'Proceed with registration assistance.', icon: CheckCircle },
  { number: '07', title: 'OWN', description: 'Begin your property ownership journey.', icon: Home },
];

export default function PropertyJourney() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-150">
      <div className="section-max section-padding">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="section-label block mb-4">YOUR PROPERTY JOURNEY</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
              From Discovery to <span className="text-navy-500">Ownership</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="w-12 h-0.5 bg-gold-500" />
              <div className="w-2 h-2 rotate-45 border border-gold-500/50" />
              <div className="w-12 h-0.5 bg-gold-500" />
            </div>
          </div>
        </ScrollReveal>

        {/* Desktop: horizontal */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line — gradient gold */}
            <div className="absolute top-8 left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-gold-500/30 via-navy-300 to-gold-500/30" />

            <div className="grid grid-cols-7 gap-4">
              {steps.map((step, i) => (
                <ScrollReveal key={step.title} delay={i * 100}>
                  <div className="flex flex-col items-center text-center group">
                    {/* Circle with hover animation */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-navy-500 flex items-center justify-center shadow-card group-hover:bg-navy-500 group-hover:shadow-lg group-hover:shadow-navy-500/20 group-hover:-translate-y-1 transition-all duration-500">
                      <step.icon className="w-6 h-6 text-navy-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="mt-4 text-xs font-bold text-gold-500">{step.number}</span>
                    <h3 className="mt-1 text-sm font-bold text-neutral-900 tracking-wide uppercase group-hover:text-navy-500 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs text-neutral-500 leading-relaxed">{step.description}</p>
                    {/* Bottom accent */}
                    <div className="w-0 h-px bg-gold-500 mt-3 group-hover:w-6 transition-all duration-500" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical line — gradient */}
            <div className="absolute top-0 bottom-0 left-6 w-[2px] bg-gradient-to-b from-gold-500/30 via-navy-300 to-gold-500/30" />

            <div className="space-y-8">
              {steps.map((step, i) => (
                <ScrollReveal key={step.title} delay={i * 80}>
                  <div className="flex items-start gap-5 group">
                    {/* Circle */}
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-navy-500 flex items-center justify-center shadow-card group-hover:bg-navy-500 transition-all duration-500">
                      <step.icon className="w-5 h-5 text-navy-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="pt-1">
                      <span className="text-xs font-bold text-gold-500">{step.number}</span>
                      <h3 className="text-base font-bold text-neutral-900 tracking-wide uppercase mt-0.5 group-hover:text-navy-500 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-sm text-neutral-500 mt-1">{step.description}</p>
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
