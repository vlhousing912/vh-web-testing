import { Shield, Star, Eye, TrendingUp } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

const values = [
  {
    number: '01',
    icon: Shield,
    title: 'TRUST',
    description:
      'Building long-term relationships through transparency and responsible practices.',
  },
  {
    number: '02',
    icon: Star,
    title: 'QUALITY',
    description:
      'Focusing on thoughtful planning, infrastructure and development standards.',
  },
  {
    number: '03',
    icon: Eye,
    title: 'TRANSPARENCY',
    description:
      'Providing clear information about projects, pricing, documentation and processes.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'VALUE',
    description:
      'Seeking strategically selected locations with long-term potential.',
  },
];

export default function Values() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-150">
      <div className="section-max section-padding">
        <ScrollReveal>
          <SectionHeading
            label="OUR VALUES"
            title="The Values Behind Our Work"
            description="Our work is guided by principles that prioritize the customer and ensure long-term quality."
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 100}>
              <div className="relative group h-full">
                {/* Card */}
                <div className="relative bg-white rounded-xl border border-neutral-200/60 p-8 h-full transition-all duration-500 group-hover:shadow-elevated group-hover:-translate-y-2 group-hover:border-navy-200/50 overflow-hidden">
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-500/0 via-navy-500/0 to-navy-500/0 group-hover:from-navy-500/[0.02] group-hover:via-transparent group-hover:to-gold-500/[0.03] transition-all duration-500" />

                  {/* Large number */}
                  <span className="relative text-4xl sm:text-5xl font-bold text-navy-100 group-hover:text-navy-200/80 transition-colors duration-500 font-display block">
                    {value.number}
                  </span>

                  {/* Icon */}
                  <div className="relative w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mt-5 mb-4 group-hover:bg-navy-500 group-hover:scale-110 transition-all duration-500 shadow-sm group-hover:shadow-navy-500/25">
                    <value.icon className="w-5 h-5 text-navy-500 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="relative text-lg font-bold text-neutral-900 tracking-wide uppercase">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-3 text-sm text-neutral-500 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-navy-500 to-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
