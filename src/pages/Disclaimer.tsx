import ScrollReveal from '@/components/ui/ScrollReveal';
import PageHero from '@/components/ui/PageHero';
import { COMPANY_NAME } from '@/lib/utils';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function Disclaimer() {
  usePageMeta({
    title: 'Disclaimer',
    description: 'Disclaimer for VARALAKSHMI HOUSING INFRA LLP website. Important information about project details, investment decisions and regulatory compliance.',
    canonical: 'https://varalakshmihousing.com/disclaimer',
  });

  return (
    <>
      <PageHero label="LEGAL" title="Disclaimer" compact />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto section-padding">
          <ScrollReveal>
            <div className="space-y-8 text-neutral-600 leading-relaxed">
              <div className="premium-card p-8">
                <p className="text-lg text-neutral-800 font-medium">
                  The information provided on this website is intended for general informational purposes only and may be subject to change.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-bold text-neutral-900">General Disclaimer</h2>
                <p>
                  The content on this website, including text, images, project details, specifications, plans, layouts, prices, amenities and other information, is provided for general informational purposes. While {COMPANY_NAME} endeavors to keep information accurate and current, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability or availability of the information.
                </p>

                <h2 className="text-xl font-bold text-neutral-900">Project Information</h2>
                <p>
                  Project specifications, approvals, availability, pricing, amenities, photographs, maps and other details displayed on this website should be independently verified with {COMPANY_NAME} before making any purchase or investment decision. Images and illustrations may be representative and may not reflect the exact final development.
                </p>

                <h2 className="text-xl font-bold text-neutral-900">No Investment Guarantees</h2>
                <p>
                  Any statements regarding location advantages, future development, infrastructure improvements or potential appreciation should not be interpreted as a guarantee of appreciation, returns or investment performance. Property values are subject to market conditions and various other factors.
                </p>

                <h2 className="text-xl font-bold text-neutral-900">Regulatory Compliance</h2>
                <p>
                  All applicable regulatory approvals, RERA registrations, DTCP approvals and other compliance information should be verified independently with the relevant authorities and {COMPANY_NAME} before making any property purchase decision. The display of any project on this website does not imply any guarantee of regulatory approval status.
                </p>

                <h2 className="text-xl font-bold text-neutral-900">Third-Party Links</h2>
                <p>
                  This website may contain links to third-party websites for convenience. {COMPANY_NAME} does not endorse, verify or assume responsibility for the content, accuracy or practices of any third-party websites.
                </p>

                <h2 className="text-xl font-bold text-neutral-900">Professional Advice</h2>
                <p>
                  Nothing on this website constitutes financial, legal, tax or investment advice. Prospective buyers are strongly encouraged to seek independent professional advice before making any property-related decisions.
                </p>

                <h2 className="text-xl font-bold text-neutral-900">Limitation of Liability</h2>
                <p>
                  {COMPANY_NAME} shall not be held liable for any direct, indirect, incidental, consequential or special damages arising from the use of, or reliance on, the information provided on this website.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-neutral-150 border border-neutral-200 mt-8">
                <p className="text-sm text-neutral-500 italic">
                  This disclaimer is effective as of January 2026 and applies to all content on this website. {COMPANY_NAME} reserves the right to update this disclaimer at any time. Users are encouraged to review this page periodically.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
