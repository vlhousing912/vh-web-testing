import { Link } from 'react-router-dom';
import {
  MapPin, ClipboardCheck, Eye, Heart, Briefcase, TrendingUp,
  Shield, Star, Users, Award,
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import PageHero from '@/components/ui/PageHero';
import { scrollToTop } from '@/lib/utils';

const features = [
  {
    number: '01',
    icon: MapPin,
    title: 'STRATEGIC LOCATIONS',
    description: 'We carefully evaluate and select locations based on connectivity, infrastructure development potential and surrounding growth patterns. Location selection is a foundational part of our project approach.',
    details: ['Proximity to urban centres', 'Road connectivity assessment', 'Surrounding development analysis', 'Future growth potential evaluation'],
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'THOUGHTFUL PLANNING',
    description: 'Each project is designed with a focus on layout design, infrastructure quality, accessibility and long-term community value. Planning is central to how we create lasting developments.',
    details: ['Professional master planning', 'Infrastructure standards', 'Road and access design', 'Community-focused layouts'],
  },
  {
    number: '03',
    icon: Eye,
    title: 'TRANSPARENT INFORMATION',
    description: 'We provide clear, relevant information about projects, processes and documentation to support informed decisions. Transparency is a core principle in all our customer interactions.',
    details: ['Clear project information', 'Transparent pricing', 'Documentation clarity', 'Process transparency'],
  },
  {
    number: '04',
    icon: Heart,
    title: 'CUSTOMER-FIRST APPROACH',
    description: 'The customer experience guides every stage of our process, from first contact to documentation and beyond. We listen, respond and adapt to serve our customers better.',
    details: ['Responsive communication', 'Personalized guidance', 'Post-sale support', 'Feedback-driven improvement'],
  },
  {
    number: '05',
    icon: Briefcase,
    title: 'PROFESSIONAL PROCESS',
    description: 'A structured, professional approach to property development that prioritizes quality and reliability at every stage of the project lifecycle.',
    details: ['Structured workflows', 'Quality checkpoints', 'Professional documentation', 'Systematic follow-up'],
  },
  {
    number: '06',
    icon: TrendingUp,
    title: 'LONG-TERM VALUE FOCUS',
    description: 'We seek opportunities where location and planning can contribute to lasting property value over time. Our focus is on creating developments with enduring relevance.',
    details: ['Location appreciation potential', 'Infrastructure durability', 'Community value creation', 'Sustainable development approach'],
  },
];

import { usePageMeta } from '@/hooks/usePageMeta';

export default function WhyUs() {
  usePageMeta({
    title: 'Why Choose Us',
    description: 'Discover why VARALAKSHMI HOUSING INFRA LLP is a trusted choice for residential plotted developments in Andhra Pradesh. Strategic locations, thoughtful planning, transparent processes.',
    canonical: 'https://varalakshmihousing.com/why-us',
  });

  return (
    <>
      <PageHero
        label="WHY US"
        title={<>Why <span className="text-gold-400">Varalakshmi Housing?</span></>}
        description="Discover the principles and practices that set us apart in residential plotted development."
      />

      {/* Features */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="section-max section-padding">
          <div className="space-y-16">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={50}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-100 font-display">{feature.number}</span>
                      <div className="w-14 h-14 rounded-2xl bg-navy-50 flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-navy-500" />
                      </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight uppercase">
                      {feature.title}
                    </h2>
                    <div className="gold-accent mt-4" />
                    <p className="mt-6 text-neutral-600 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                  <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="premium-card p-8">
                      <h3 className="text-sm font-bold text-navy-500 uppercase tracking-wider mb-5">Key Aspects</h3>
                      <div className="space-y-3">
                        {feature.details.map((d, j) => (
                          <div key={j} className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                            <span className="text-sm text-neutral-700">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-16 bg-neutral-150">
        <div className="section-max section-padding">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { icon: Shield, label: 'Trust-Driven' },
                { icon: Star, label: 'Quality Focused' },
                { icon: Users, label: 'Customer First' },
                { icon: Award, label: 'Professional' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <stat.icon className="w-8 h-8 text-navy-500 mb-3" />
                  <p className="text-sm font-bold text-neutral-900 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="section-max section-padding text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
              Experience the Varalakshmi Difference
            </h2>
            <p className="mt-3 text-neutral-500 max-w-lg mx-auto">
              Visit our projects and see how thoughtful planning and customer focus define our work.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/projects" onClick={scrollToTop}>
                <Button variant="primary" showArrow>VIEW PROJECTS</Button>
              </Link>
              <Link to="/site-visit" onClick={scrollToTop}>
                <Button variant="secondary">SCHEDULE SITE VISIT</Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
