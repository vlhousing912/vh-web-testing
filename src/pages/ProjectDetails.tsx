import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  MapPin, CheckCircle, Download, ArrowRight,
  FileText, Shield, IndianRupee, CreditCard,
  CalendarCheck, ChevronDown,
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Modal from '@/components/ui/Modal';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import SiteVisitForm from '@/components/forms/SiteVisitForm';
import ContactForm from '@/components/forms/ContactForm';
import { getProjectBySlug } from '@/data/projects';
import { scrollToTop } from '@/lib/utils';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [svOpen, setSvOpen] = useState(false);
  const [enqOpen, setEnqOpen] = useState(false);

  usePageMeta({
    title: project ? project.name : 'Project Not Found',
    description: project ? `${project.name} - ${project.category}. ${project.description} Located in ${project.location.address}.` : 'Project not found.',
    canonical: project ? `https://varalakshmihousing.com/projects/${project.slug}` : undefined,
    ogImage: project?.heroImage,
  });

  // Project structured data for SEO
  const projectSchema = project ? {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${project.name} - ${project.category}`,
    description: project.description,
    brand: {
      '@type': 'Organization',
      name: 'VARALAKSHMI HOUSING INFRA LLP',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'VARALAKSHMI HOUSING INFRA LLP',
      },
    },
    image: project.heroImage,
    url: `https://varalakshmihousing.com/projects/${project.slug}`,
  } : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-150">
        <div className="text-center px-6">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Project Not Found</h1>
          <p className="text-neutral-500 mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/projects" onClick={scrollToTop}>
            <Button variant="primary" showArrow>BROWSE PROJECTS</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Project structured data */}
      {projectSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }} />
      )}
      {/* Hero */}
      <section className="relative h-[40vh] sm:h-[50vh] min-h-[300px] sm:min-h-[400px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/30 to-transparent" />
        <div className="relative z-10 w-full section-max section-padding pb-12">
          <Breadcrumb
            items={[
              { label: 'Projects', path: '/projects' },
              { label: project.name },
            ]}
          />
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge label={project.status} variant="status" status={project.status} />
            <Badge label={project.category} variant="category" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            {project.name}
          </h1>
          <div className="flex items-center gap-2 mt-3 text-white/70">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{project.location.address}</span>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="section-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <span className="section-label block mb-4">PROJECT OVERVIEW</span>
                <h2 className="text-3xl font-bold text-neutral-900 tracking-tight mb-6">
                  {project.name} – {project.tagline || project.category}
                </h2>
                <div className="gold-accent mb-6" />
                <p className="text-neutral-600 leading-relaxed text-lg">
                  {project.longDescription || project.description}
                </p>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div>
              <ScrollReveal delay={100}>
                <div className="premium-card p-6 lg:sticky lg:top-24">
                  <h3 className="font-bold text-neutral-900 uppercase tracking-wide text-sm mb-4">Project Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b border-neutral-100">
                      <span className="text-neutral-500">Status</span>
                      <Badge label={project.status} variant="status" status={project.status} />
                    </div>
                    <div className="flex justify-between py-2 border-b border-neutral-100">
                      <span className="text-neutral-500">Location</span>
                      <span className="font-medium text-neutral-900 text-right">{project.location.village || project.location.district}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-neutral-100">
                      <span className="text-neutral-500">District</span>
                      <span className="font-medium text-neutral-900">{project.location.district}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-neutral-100">
                      <span className="text-neutral-500">State</span>
                      <span className="font-medium text-neutral-900">{project.location.state}</span>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mt-6 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                    <div className="flex items-center gap-2 mb-2">
                      <IndianRupee className="w-4 h-4 text-navy-500" />
                      <span className="text-xs font-bold text-navy-500 uppercase tracking-wider">Pricing</span>
                    </div>
                    <p className="text-sm text-neutral-500">
                      {project.pricing?.available && project.pricing.startingPrice
                        ? `Starting from ${project.pricing.currency} ${project.pricing.startingPrice}`
                        : 'Pricing details coming soon'}
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="mt-6 space-y-3">
                    <button onClick={() => setSvOpen(true)} className="btn-primary w-full text-center text-sm">
                      <CalendarCheck className="w-4 h-4 mr-2" />
                      SCHEDULE SITE VISIT
                    </button>
                    <button onClick={() => setEnqOpen(true)} className="btn-secondary w-full text-center text-sm">
                      ENQUIRE NOW
                    </button>
                    <button className="btn-ghost w-full text-center text-sm">
                      <Download className="w-4 h-4 mr-2" />
                      DOWNLOAD BROCHURE
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 lg:py-20 bg-neutral-150">
        <div className="section-max section-padding">
          <ScrollReveal>
            <SectionHeading
              label="PROJECT HIGHLIGHTS"
              title={`${project.name} Highlights`}
              alignment="left"
            />
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.highlights.map((h, i) => (
              <ScrollReveal key={h} delay={i * 60}>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-neutral-200/60">
                  <CheckCircle className="w-5 h-5 text-navy-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-neutral-700">{h}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      {project.amenities && project.amenities.length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="section-max section-padding">
            <ScrollReveal>
              <SectionHeading
                label="AMENITIES"
                title="Infrastructure & Features"
                alignment="left"
              />
            </ScrollReveal>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.amenities.map((a, i) => (
                <ScrollReveal key={a} delay={i * 60}>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-150 border border-neutral-200/60">
                    <div className="w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-neutral-700">{a}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Location Advantages */}
      {project.locationAdvantages && project.locationAdvantages.length > 0 && (
        <section className="py-16 lg:py-20 bg-neutral-150">
          <div className="section-max section-padding">
            <ScrollReveal>
              <SectionHeading
                label="LOCATION"
                title="Location Advantages"
                description="Key advantages of the project's location."
                alignment="left"
              />
            </ScrollReveal>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.locationAdvantages.map((la, i) => (
                <ScrollReveal key={la.name} delay={i * 60}>
                  <div className="p-5 rounded-xl bg-white border border-neutral-200/60 group hover:border-navy-200 hover:shadow-card transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-navy-500" />
                      <h4 className="font-bold text-neutral-900 text-sm">{la.name}</h4>
                    </div>
                    <p className="text-xs text-neutral-500">{la.note || 'Distance details will be updated.'}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {project.images.length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="section-max section-padding">
            <ScrollReveal>
              <SectionHeading
                label="GALLERY"
                title="Project Views"
                alignment="left"
              />
            </ScrollReveal>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.images.map((img, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden group">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Documents & Approvals */}
      <section className="py-16 lg:py-20 bg-neutral-150">
        <div className="section-max section-padding">
          <ScrollReveal>
            <SectionHeading
              label="INFORMATION"
              title="Approvals & Documents"
              alignment="left"
            />
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Shield, title: 'RERA Details', value: project.approvals?.rera || 'TO BE UPDATED' },
              { icon: FileText, title: 'Layout Approval', value: project.approvals?.layoutApproval || 'TO BE UPDATED' },
              { icon: CreditCard, title: 'Payment Information', value: project.paymentPlan || 'Contact for details' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="premium-card p-6">
                  <item.icon className="w-6 h-6 text-navy-500 mb-3" />
                  <h4 className="font-bold text-neutral-900 text-sm uppercase tracking-wide">{item.title}</h4>
                  <p className="mt-2 text-sm text-neutral-500">{item.value}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          {project.approvals?.note && (
            <p className="mt-6 text-xs text-neutral-400 italic max-w-2xl">{project.approvals.note}</p>
          )}
        </div>
      </section>

      {/* WhatsApp */}
      <section className="py-12 bg-white">
        <div className="section-max section-padding text-center">
          <WhatsAppButton
            message={`Hello, I would like to know more about ${project.name}.`}
            label={`Ask About ${project.name}`}
            variant="inline"
          />
        </div>
      </section>

      {/* Site Visit & Enquiry Modals */}
      <Modal isOpen={svOpen} onClose={() => setSvOpen(false)} title="Schedule Site Visit" size="lg">
        <SiteVisitForm onSuccess={() => setSvOpen(false)} />
      </Modal>
      <Modal isOpen={enqOpen} onClose={() => setEnqOpen(false)} title="Project Enquiry" size="lg">
        <ContactForm onSuccess={() => setEnqOpen(false)} />
      </Modal>
    </>
  );
}
