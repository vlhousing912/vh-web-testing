import ScrollReveal from '@/components/ui/ScrollReveal';
import PageHero from '@/components/ui/PageHero';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function Terms() {
  usePageMeta({
    title: 'Terms & Conditions',
    description: 'Terms and conditions for using the VARALAKSHMI HOUSING INFRA LLP website and services.',
    canonical: 'https://varalakshmihousing.com/terms',
  });

  return (
    <>
      <PageHero label="LEGAL" title="Terms & Conditions" compact />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto section-padding">
          <ScrollReveal>
            <div className="prose prose-neutral max-w-none">
              <p className="text-sm text-neutral-400 mb-8">Last updated: January 2026</p>

              <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                By accessing and using this website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.
              </p>

              <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">2. Website Content</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                The content on this website is provided for general informational purposes only. While we strive to keep information accurate and up-to-date, we make no representations or warranties about the completeness, accuracy or reliability of any information presented.
              </p>

              <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">3. No Investment Advice</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Nothing on this website constitutes financial, investment or legal advice. Any decisions regarding property purchase should be made after independent verification and professional consultation.
              </p>

              <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">4. Enquiries and Forms</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Information submitted through contact forms or enquiry forms is used solely to respond to your query. Submission of a form does not constitute a binding agreement or commitment from either party.
              </p>

              <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">5. Intellectual Property</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                All content on this website, including text, images, logos and graphics, is the property of VARALAKSHMI HOUSING INFRA LLP and is protected by applicable intellectual property laws.
              </p>

              <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">6. Limitation of Liability</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                VARALAKSHMI HOUSING INFRA LLP shall not be liable for any direct, indirect, incidental or consequential damages arising from the use of this website or reliance on its content.
              </p>

              <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">7. External Links</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                This website may contain links to external websites. We are not responsible for the content, privacy practices or accuracy of external sites.
              </p>

              <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">8. Changes to Terms</h2>
              <p className="text-neutral-600 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective upon posting on this page. Continued use of the website constitutes acceptance of updated terms.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
