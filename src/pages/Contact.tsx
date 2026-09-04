import { MapPin, Phone, MessageCircle, Mail, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import PageHero from '@/components/ui/PageHero';
import ContactForm from '@/components/forms/ContactForm';
import {
  OFFICE_ADDRESS, CONTACT_PLACEHOLDER,
  getPhoneUrl, getWhatsAppUrl, getDirectionsUrl,
} from '@/lib/utils';

const contactMethods = [
  { icon: Phone, label: 'CALL US', value: CONTACT_PLACEHOLDER.phone, href: getPhoneUrl(), desc: 'Speak with our team' },
  { icon: MessageCircle, label: 'WHATSAPP', value: 'Message Us', href: getWhatsAppUrl(), desc: 'Quick response' },
  { icon: Mail, label: 'EMAIL', value: CONTACT_PLACEHOLDER.email, href: `mailto:${CONTACT_PLACEHOLDER.email}`, desc: 'Write to us' },
  { icon: MapPin, label: 'VISIT US', value: 'Vijayawada Office', href: getDirectionsUrl('Pantakaluva Road, Vijayawada, Andhra Pradesh 520010'), desc: 'Get directions' },
];

import { usePageMeta } from '@/hooks/usePageMeta';

export default function Contact() {
  usePageMeta({
    title: 'Contact Us',
    description: 'Get in touch with VARALAKSHMI HOUSING INFRA LLP in Vijayawada, Andhra Pradesh. Contact us for project enquiries, site visits, plot availability and property information.',
    canonical: 'https://varalakshmihousing.com/contact',
  });

  return (
    <>
      <PageHero
        label="CONTACT US"
        title={<>Let's Talk About <span className="text-gold-400">Your Future</span></>}
        description="Get in touch with our team for project enquiries, site visits or any questions about our developments."
      />

      {/* Contact info + Form */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="section-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Get In Touch</h2>

                {/* Office address */}
                <div className="premium-card p-6 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-navy-500" />
                    <span className="text-xs font-bold text-gold-500 uppercase tracking-wider">Office Address</span>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed whitespace-pre-line">
                    {OFFICE_ADDRESS}
                  </p>
                </div>

                {/* Contact methods */}
                <div className="space-y-3">
                  {contactMethods.map((m) => (
                    <a
                      key={m.label}
                      href={m.href}
                      target={m.label === 'WHATSAPP' || m.label === 'VISIT US' ? '_blank' : undefined}
                      rel={m.label === 'WHATSAPP' || m.label === 'VISIT US' ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200/60 hover:border-navy-200 hover:shadow-card transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center group-hover:bg-navy-500 transition-colors duration-300">
                        <m.icon className="w-5 h-5 text-navy-500 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <span className="text-[10px] font-bold text-gold-500 tracking-wider uppercase">{m.label}</span>
                        <p className="text-sm font-semibold text-neutral-900">{m.value}</p>
                        <p className="text-xs text-neutral-400">{m.desc}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Office hours */}
                <div className="mt-6 flex items-start gap-3 text-sm text-neutral-500">
                  <Clock className="w-4 h-4 text-neutral-400 mt-0.5 flex-shrink-0" />
                  <span>Office hours: Monday – Saturday, 10:00 AM – 6:00 PM</span>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={100}>
                <h2 className="text-2xl font-bold text-neutral-900 mb-2">Send Us a Message</h2>
                <p className="text-neutral-500 mb-8">
                  Fill in the form below and we'll respond as soon as possible.
                </p>
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-48 sm:h-64 lg:h-80 bg-navy-50 border-t border-neutral-200 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-10 h-10 text-navy-300 mx-auto mb-3" />
          <p className="text-sm text-neutral-500">Google Maps integration available after API configuration.</p>
        </div>
      </section>
    </>
  );
}
