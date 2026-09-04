import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { getFeaturedProjects } from '@/data/projects';
import { scrollToTop } from '@/lib/utils';

const featuredProjects = getFeaturedProjects();

export default function FeaturedProjects() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="section-max section-padding">
        <ScrollReveal>
          <SectionHeading
            label="OUR FEATURED DEVELOPMENTS"
            title="Thoughtfully Planned Residential Developments"
            description="Explore residential plotted developments from Varalakshmi Housing, designed with location, planning and customer value in mind."
          />
        </ScrollReveal>

        <div className="mt-14">
          {featuredProjects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 150}>
              <div className="premium-card overflow-hidden group">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image — premium hover zoom with overlay */}
                  <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <img
                      src={project.heroImage}
                      alt={`${project.name} - ${project.category}`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Multi-layer overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-navy-950/10 to-transparent" />
                    <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/10 transition-colors duration-500" />

                    {/* Status badges */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <Badge label={project.status} variant="status" status={project.status} />
                      <Badge label={project.category} variant="category" className="hidden sm:inline-flex" />
                    </div>

                    {/* Hover CTA overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <Link
                        to={`/projects/${project.slug}`}
                        onClick={scrollToTop}
                        className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-elevated scale-75 group-hover:scale-100 transition-transform duration-500"
                      >
                        <ArrowUpRight className="w-6 h-6 text-navy-500" />
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <span className="section-label mb-3">{project.category}</span>
                    <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight group-hover:text-navy-500 transition-colors duration-300">
                      {project.name}
                    </h3>

                    <div className="flex items-center gap-2 mt-3 text-neutral-500 text-sm">
                      <MapPin className="w-4 h-4 text-navy-400 flex-shrink-0" />
                      {project.location.address}
                    </div>

                    <p className="mt-6 text-neutral-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights with animated underline */}
                    <div className="mt-6 grid grid-cols-2 gap-2">
                      {project.highlights.slice(0, 6).map((h) => (
                        <div key={h} className="flex items-center gap-2 text-sm text-neutral-600 group/item">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                          {h}
                        </div>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link to={`/projects/${project.slug}`} onClick={scrollToTop}>
                        <Button variant="primary" showArrow>
                          VIEW PROJECT
                        </Button>
                      </Link>
                      <Link to="/site-visit" onClick={scrollToTop}>
                        <Button variant="secondary">
                          SCHEDULE SITE VISIT
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
