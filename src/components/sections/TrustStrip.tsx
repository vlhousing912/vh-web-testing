import { Shield, Target, MapPin, Users } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const trustPoints = [
  { icon: Shield, label: 'Thoughtful Planning', desc: 'Carefully designed developments' },
  { icon: Target, label: 'Transparent Process', desc: 'Clear and honest communication' },
  { icon: MapPin, label: 'Strategic Locations', desc: 'Primely selected sites' },
  { icon: Users, label: 'Customer-Focused Service', desc: 'Your interests come first' },
];

export default function TrustStrip() {
  return (
    <section id="trust-strip" className="relative" aria-label="Our approach">
      {/* Premium animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-20 left-1/4 w-[400px] h-[400px] rounded-full bg-gold-500/[0.04] blur-[80px] animate-[float1_20s_ease-in-out_infinite]" />
      </div>

      <div className="section-max section-padding py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {trustPoints.map((point, i) => (
            <ScrollReveal key={point.label} delay={i * 100}>
              <div className="flex flex-col items-center text-center group">
                {/* Premium icon container with hover effects */}
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-500/5 flex items-center justify-center mb-4 border border-gold-500/20 group-hover:border-gold-500/40 group-hover:shadow-lg group-hover:shadow-gold-500/10 transition-all duration-500 group-hover:-translate-y-1">
                  <point.icon className="w-6 h-6 text-gold-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-sm font-bold text-white tracking-wide uppercase">
                  {point.label}
                </h3>
                <p className="text-xs text-white/40 mt-1.5 max-w-[180px]">{point.desc}</p>
                {/* Subtle underline on hover */}
                <div className="w-0 h-px bg-gold-500/40 mt-3 group-hover:w-8 transition-all duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
