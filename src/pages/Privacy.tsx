import ScrollReveal from '@/components/ui/ScrollReveal';
import PageHero from '@/components/ui/PageHero';
import { COMPANY_NAME } from '@/lib/utils';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function Privacy() {
  usePageMeta({
    title: 'Privacy Policy',
    description: 'Privacy policy for VARALAKSHMI HOUSING INFRA LLP website. Learn how we collect, use and protect your personal information.',
    canonical: 'https://varalakshmihousing.com/privacy',
  });

  return (
    <>
      <PageHero label="LEGAL" title="Privacy Policy" compact />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto section-padding">
          <ScrollReveal>
            <div className="prose prose-neutral max-w-none">
              <p className="text-sm text-neutral-400 mb-8">Last updated: January 2026</p>

              <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                When you use our website, submit forms or contact us, we may collect personal information such as your name, email address, phone number and any other information you voluntarily provide.
              </p>

              <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                We use the information collected to respond to your enquiries, schedule site visits, provide project information and improve our services. We do not sell or share your personal information with third parties for marketing purposes.
              </p>

              <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">3. Data Security</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                We take reasonable measures to protect your personal information from unauthorized access, alteration or disclosure. However, no method of transmission over the internet is completely secure.
              </p>

              <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">4. Cookies</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Our website may use basic cookies to enhance your browsing experience. We do not use tracking cookies without your consent. Cookie preferences can be managed through your browser settings.
              </p>

              <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">5. Third-Party Links</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
              </p>

              <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">6. Your Rights</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                You have the right to access, correct or delete your personal information. To exercise these rights, please contact us through the channels provided on our website.
              </p>

              <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">7. Changes to This Policy</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                We may update this privacy policy from time to time. Any changes will be posted on this page with an updated date.
              </p>

              <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">8. Contact</h2>
              <p className="text-neutral-600 leading-relaxed">
                For questions about this privacy policy, please contact us through the contact information provided on our website.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
