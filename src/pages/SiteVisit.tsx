import { CalendarCheck, Phone, MessageCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import PageHero from '@/components/ui/PageHero';
import SiteVisitForm from '@/components/forms/SiteVisitForm';
import { getPhoneUrl, getWhatsAppUrl, CONTACT_PLACEHOLDER } from '@/lib/utils';

import { usePageMeta } from '@/hooks/usePageMeta';

export default function SiteVisit() {
  usePageMeta({
    title: 'Schedule Site Visit',
    description: 'Schedule a site visit with VARALAKSHMI HOUSING INFRA LLP. Experience our residential plotted developments in Vijayawada, Andhra Pradesh firsthand.',
    canonical: 'https://varalakshmihousing.com/site-visit',
  });

  return (
    <>
      <PageHero
        label="SITE VISIT"
        title={<>Schedule a <span className="text-gold-400">Site Visit</span></>}
        description="Experience the project location firsthand. A site visit helps you understand the surroundings, connectivity and development potential before making a decision."
      />

      {/* Form + Info */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="section-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-neutral-900 mb-2">Book Your Visit</h2>
                <p className="text-neutral-500 mb-8">
                  Fill in the details below and our team will coordinate your visit.
                </p>
                <SiteVisitForm />
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div>
              <ScrollReveal delay={100}>
                <div className="lg:sticky lg:top-24 space-y-6">
                  <div className="premium-card p-6">
                    <CalendarCheck className="w-8 h-8 text-navy-500 mb-4" />
                    <h3 className="font-bold text-neutral-900 uppercase tracking-wide text-sm">What to Expect</h3>
                    <ul className="mt-4 space-y-3 text-sm text-neutral-600">
                      {[
                        'Guided project walkthrough',
                        'Location and connectivity tour',
                        'Infrastructure and planning overview',
                        'Documentation guidance',
                        'Transparent Q&A session',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="premium-card p-6">
                    <h3 className="font-bold text-neutral-900 uppercase tracking-wide text-sm mb-4">Prefer to Call?</h3>
                    <div className="space-y-3">
                      <a
                        href={getPhoneUrl()}
                        className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 hover:bg-navy-50 transition-colors"
                      >
                        <Phone className="w-4 h-4 text-navy-500" />
                        <span className="text-sm font-medium text-neutral-700">{CONTACT_PLACEHOLDER.phone}</span>
                      </a>
                      <a
                        href={getWhatsAppUrl('Hello, I would like to schedule a site visit.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 hover:bg-green-50 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-neutral-700">WhatsApp Us</span>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
