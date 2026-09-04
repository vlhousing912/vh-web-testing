import { Link } from 'react-router-dom';
import {
  Target, Eye, Shield, Star, Users, Handshake,
  Award, MapPin, ArrowRight,
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import PageHero from '@/components/ui/PageHero';
import { COMPANY_NAME, TAGLINE, scrollToTop } from '@/lib/utils';
import { usePageMeta } from '@/hooks/usePageMeta';

const values = [
  { icon: Shield, title: 'Trust', description: 'Building long-term relationships through transparency and responsible practices.' },
  { icon: Star, title: 'Quality', description: 'Focusing on thoughtful planning, infrastructure and development standards.' },
  { icon: Eye, title: 'Transparency', description: 'Providing clear information about projects, pricing, documentation and processes.' },
  { icon: Users, title: 'Customer Focus', description: 'Placing the customer at the center of every decision and process.' },
];

const approachPoints = [
  'Location-driven project selection',
  'Thoughtful master planning',
  'Transparent customer communication',
  'Professional documentation support',
  'Customer-first service approach',
  'Long-term value orientation',
];

export default function About() {
  usePageMeta({
    title: 'About Us',
    description: 'Learn about VARALAKSHMI HOUSING INFRA LLP - a trusted real-estate and infrastructure development company based in Vijayawada, Andhra Pradesh, focused on thoughtfully planned residential plotted developments.',
    canonical: 'https://varalakshmihousing.com/about',
  });

  return (
    <>
      <PageHero
        label="ABOUT US"
        title={<>Building Trust. <span className="text-gold-400">Creating Value.</span><br />Shaping Tomorrow.</>}
      />

      {/* Company Introduction */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="section-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80"
                  alt="Modern residential development"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <span className="section-label block mb-4">WHO WE ARE</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight leading-tight">
                  A Company Built on <span className="text-navy-500">Purpose</span>
                </h2>
                <div className="gold-accent mt-6" />
                <p className="mt-8 text-neutral-600 text-lg leading-relaxed">
                  {COMPANY_NAME} is a real-estate and infrastructure development company based in Vijayawada, Andhra Pradesh, focused on residential plotted developments and thoughtfully planned land projects.
                </p>
                <p className="mt-4 text-neutral-500 leading-relaxed">
                  Our work is guided by a belief that every property decision should be supported by clarity, planning and a customer-focused approach. We are committed to creating developments that stand the test of time.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-28 bg-neutral-150">
        <div className="section-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="premium-card p-10 h-full">
                <div className="w-14 h-14 rounded-2xl bg-navy-50 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-navy-500" />
                </div>
                <span className="section-label block mb-3">OUR VISION</span>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Where We're Heading</h3>
                <p className="text-neutral-600 leading-relaxed">
                  To become a trusted and respected real-estate development brand in Andhra Pradesh, recognized for transparent practices, thoughtfully planned projects and lasting customer value.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="premium-card p-10 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gold-50 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-gold-600" />
                </div>
                <span className="section-label block mb-3">OUR MISSION</span>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">What Drives Us</h3>
                <p className="text-neutral-600 leading-relaxed">
                  To develop well-planned residential plotted communities in strategically selected locations while delivering transparency, quality, reliability and customer-focused service at every stage.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="section-max section-padding">
          <ScrollReveal>
            <SectionHeading
              label="OUR VALUES"
              title="The Principles Behind Our Work"
              description="These values define how we operate, how we treat our customers and how we approach every project."
            />
          </ScrollReveal>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 100}>
                <div className="premium-card p-8 h-full text-center group">
                  <div className="w-14 h-14 rounded-2xl bg-navy-50 flex items-center justify-center mx-auto mb-5 group-hover:bg-navy-500 transition-colors duration-300">
                    <value.icon className="w-6 h-6 text-navy-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 tracking-wide uppercase">{value.title}</h3>
                  <p className="mt-3 text-sm text-neutral-500 leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 lg:py-28 bg-neutral-150">
        <div className="section-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="section-label block mb-4">OUR APPROACH</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight leading-tight">
                  How We <span className="text-navy-500">Work</span>
                </h2>
                <div className="gold-accent mt-6" />
                <p className="mt-8 text-neutral-600 leading-relaxed">
                  Our approach is defined by careful evaluation, thoughtful planning and a commitment to delivering information and service that helps our customers make informed decisions.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="space-y-3">
                {approachPoints.map((point, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-neutral-200/60">
                    <div className="w-8 h-8 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-navy-500">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="text-sm font-medium text-neutral-700">{point}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Customer Commitment */}
      <section className="py-20 lg:py-28 bg-navy-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="section-max section-padding relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Handshake className="w-12 h-12 text-gold-400 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Our <span className="text-gold-400">Customer Commitment</span>
              </h2>
              <p className="mt-6 text-lg text-white/70 leading-relaxed">
                We are committed to treating every customer with respect, providing clear information, and supporting the property buying journey with professionalism and care. Our goal is to create lasting relationships built on trust.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Leadership & Milestones — placeholder */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="section-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="premium-card p-10 h-full">
                <Award className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="text-xl font-bold text-neutral-900 mb-3">LEADERSHIP</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Our leadership team brings together experience in real estate development, customer service and business management. Details about our leadership will be updated as information becomes available.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="premium-card p-10 h-full">
                <MapPin className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="text-xl font-bold text-neutral-900 mb-3">MILESTONES</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Key milestones and achievements will be shared here as our journey progresses. We believe in sharing verified milestones rather than fabricated history.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-150">
        <div className="section-max section-padding text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
              Ready to Learn More?
            </h2>
            <p className="mt-3 text-neutral-500 max-w-lg mx-auto">
              Explore our projects or get in touch to learn how we can help with your property journey.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/projects" onClick={scrollToTop}>
                <Button variant="primary" showArrow>EXPLORE PROJECTS</Button>
              </Link>
              <Link to="/contact" onClick={scrollToTop}>
                <Button variant="secondary">CONTACT US</Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
