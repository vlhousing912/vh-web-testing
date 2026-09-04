import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { OFFICE_ADDRESS, CONTACT_PLACEHOLDER, getDirectionsUrl, getWhatsAppUrl, getPhoneUrl } from '@/lib/utils';

const contactMethods = [
  {
    icon: Phone,
    label: 'CALL',
    value: CONTACT_PLACEHOLDER.phone,
    href: getPhoneUrl(),
    description: 'Speak with our team',
  },
  {
    icon: MessageCircle,
    label: 'WHATSAPP',
    value: 'Message Us',
    href: getWhatsAppUrl(),
    description: 'Quick response',
  },
  {
    icon: Mail,
    label: 'EMAIL',
    value: CONTACT_PLACEHOLDER.email,
    href: `mailto:${CONTACT_PLACEHOLDER.email}`,
    description: 'Write to us',
  },
  {
    icon: MapPin,
    label: 'GET DIRECTIONS',
    value: 'Vijayawada Office',
    href: getDirectionsUrl('Pantakaluva Road, Vijayawada, Andhra Pradesh 520010'),
    description: 'Visit our office',
  },
];

export default function ContactSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="section-max section-padding">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="section-label block mb-4">CONTACT US</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
              Let's Talk About{' '}
              <span className="text-navy-500">Your Future</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="w-12 h-0.5 bg-gold-500" />
              <div className="w-2 h-2 rotate-45 border border-gold-500/50" />
              <div className="w-12 h-0.5 bg-gold-500" />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact methods */}
          <ScrollReveal direction="left">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 uppercase tracking-wide mb-6">
                VARALAKSHMI HOUSING INFRA LLP
              </h3>

              {/* Address card */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200/60 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-navy-500/[0.03] rounded-bl-[40px]" />
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-navy-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-600 leading-relaxed whitespace-pre-line">
                    {OFFICE_ADDRESS}
                  </p>
                </div>
              </div>

              {/* Contact method cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.label === 'WHATSAPP' || method.label === 'GET DIRECTIONS' ? '_blank' : undefined}
                    rel={method.label === 'WHATSAPP' || method.label === 'GET DIRECTIONS' ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 p-4 rounded-xl border border-neutral-200/60 hover:border-navy-200 hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-500/0 to-gold-500/0 group-hover:from-navy-500/[0.02] group-hover:to-gold-500/[0.03] transition-all duration-500" />
                    <div className="relative w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0 group-hover:bg-navy-500 group-hover:shadow-lg group-hover:shadow-navy-500/20 transition-all duration-500">
                      <method.icon className="w-5 h-5 text-navy-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="relative">
                      <span className="text-xs font-bold text-gold-500 tracking-wider uppercase">
                        {method.label}
                      </span>
                      <p className="text-sm font-semibold text-neutral-900 mt-0.5 group-hover:text-navy-500 transition-colors duration-300">{method.value}</p>
                      <p className="text-xs text-neutral-400 mt-0.5">{method.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Map placeholder */}
          <ScrollReveal direction="right">
            <div className="aspect-[4/3] lg:aspect-auto rounded-2xl overflow-hidden bg-gradient-to-br from-navy-50 to-navy-100/50 border border-navy-100 flex flex-col items-center justify-center p-6 sm:p-8 text-center min-h-[280px] lg:min-h-[400px] relative">
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-navy-300/30" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-navy-300/30" />

              <div className="w-16 h-16 rounded-2xl bg-navy-500/10 flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-navy-400" />
              </div>
              <h3 className="text-lg font-bold text-navy-500">Our Office Location</h3>
              <p className="text-sm text-neutral-500 mt-2 max-w-sm">
                Map integration will be displayed here once Google Maps API key is configured.
              </p>
              <p className="text-xs text-neutral-400 mt-4">
                Pantakaluva Road, Vijayawada, NTR District – 520010
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
