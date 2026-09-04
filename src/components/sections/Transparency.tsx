import { FileText, Shield, IndianRupee, CreditCard, FolderOpen, Stamp } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { scrollToTop } from '@/lib/utils';

const infoCards = [
  { icon: FileText, title: 'Project Information', description: 'Project details, layout and specifications' },
  { icon: Shield, title: 'Approval Information', description: 'Regulatory and compliance details' },
  { icon: IndianRupee, title: 'Pricing Information', description: 'Transparent pricing details' },
  { icon: CreditCard, title: 'Payment Details', description: 'Payment plans and options' },
  { icon: FolderOpen, title: 'Documentation', description: 'Required documents and process' },
  { icon: Stamp, title: 'Registration Information', description: 'Registration process guidance' },
];

export default function Transparency() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-150">
      <div className="section-max section-padding">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="section-label block mb-4">TRANSPARENCY</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
              Information You Can <span className="text-navy-500">Trust</span>
            </h2>
            <p className="mt-5 text-lg text-neutral-500 leading-relaxed max-w-2xl mx-auto">
              We believe customers should have access to clear and relevant project information before making a property decision.
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="w-12 h-0.5 bg-gold-500" />
              <div className="w-2 h-2 rotate-45 border border-gold-500/50" />
              <div className="w-12 h-0.5 bg-gold-500" />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {infoCards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 80}>
              <div className="relative group h-full">
                <div className="bg-white rounded-xl border border-neutral-200/60 p-7 h-full transition-all duration-500 group-hover:shadow-elevated group-hover:-translate-y-1 group-hover:border-navy-200/50 overflow-hidden">
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-500/0 to-gold-500/0 group-hover:from-navy-500/[0.02] group-hover:to-gold-500/[0.03] transition-all duration-500" />

                  <div className="relative w-11 h-11 rounded-xl bg-navy-50 flex items-center justify-center mb-4 group-hover:bg-navy-500 group-hover:shadow-lg group-hover:shadow-navy-500/20 transition-all duration-500">
                    <card.icon className="w-5 h-5 text-navy-500 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="relative text-base font-bold text-neutral-900 tracking-wide uppercase group-hover:text-navy-500 transition-colors duration-300">
                    {card.title}
                  </h3>

                  <p className="relative mt-2 text-sm text-neutral-500 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-navy-500 to-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-10 text-center">
            <Link to="/projects" onClick={scrollToTop}>
              <Button variant="primary" showArrow>
                VIEW PROJECT DETAILS
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
