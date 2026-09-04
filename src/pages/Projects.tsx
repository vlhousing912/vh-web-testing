import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import PageHero from '@/components/ui/PageHero';
import { projects } from '@/data/projects';
import { scrollToTop } from '@/lib/utils';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function Projects() {
  usePageMeta({
    title: 'Our Projects',
    description: 'Explore thoughtfully planned residential plotted developments from VARALAKSHMI HOUSING INFRA LLP in Vijayawada, Andhra Pradesh. View project details, locations and site visit options.',
    canonical: 'https://varalakshmihousing.com/projects',
  });

  return (
    <>
      <PageHero
        label="OUR PROJECTS"
        title={<>Thoughtfully Planned <span className="text-gold-400">Developments</span></>}
        description="Explore residential plotted developments from Varalakshmi Housing, designed with location, planning and customer value in mind."
      />

      {/* Projects listing */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="section-max section-padding">
          {projects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-neutral-400 text-lg">No projects to display at this time.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 100}>
                  <div className="premium-card overflow-hidden h-full flex flex-col group">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.heroImage}
                        alt={`${project.name} - ${project.category}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge label={project.status} variant="status" status={project.status} />
                        <Badge label={project.category} variant="category" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-2 text-neutral-500 text-sm">
                        <MapPin className="w-3.5 h-3.5 text-navy-400 flex-shrink-0" />
                        <span className="truncate">{project.location.village || project.location.district}, {project.location.state}</span>
                      </div>
                      <p className="mt-3 text-sm text-neutral-500 leading-relaxed flex-1 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.highlights.slice(0, 3).map((h) => (
                          <span key={h} className="text-xs px-2.5 py-1 bg-neutral-100 text-neutral-600 rounded-full">
                            {h}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="mt-5 pt-4 border-t border-neutral-100">
                        <Link
                          to={`/projects/${project.slug}`}
                          onClick={scrollToTop}
                          className="inline-flex items-center gap-2 text-navy-500 font-semibold text-sm hover:text-navy-700 transition-colors group/link"
                        >
                          VIEW PROJECT
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-150">
        <div className="section-max section-padding text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
              Interested in a Project?
            </h2>
            <p className="mt-3 text-neutral-500 max-w-lg mx-auto">
              Schedule a site visit to experience our projects firsthand.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/site-visit" onClick={scrollToTop}>
                <Button variant="primary" showArrow>SCHEDULE SITE VISIT</Button>
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
