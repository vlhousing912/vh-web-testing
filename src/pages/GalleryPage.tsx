import { useState, useCallback, useEffect } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import PageHero from '@/components/ui/PageHero';
import { projects } from '@/data/projects';
import { ProjectImage } from '@/types';
import { usePageMeta } from '@/hooks/usePageMeta';

const allImages: ProjectImage[] = projects.flatMap((p) => p.images);

const categories = ['All', ...new Set(allImages.map((img) => img.category))];

const categoryLabels: Record<string, string> = {
  All: 'All',
  aerial: 'Aerial Views',
  project: 'Project Views',
  layout: 'Layout',
  infrastructure: 'Infrastructure',
  'site-visit': 'Site Visits',
  event: 'Events',
  progress: 'Progress',
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === 'All'
      ? allImages
      : allImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const navigateLightbox = useCallback(
    (dir: 1 | -1) => {
      if (lightboxIndex === null) return;
      const next = lightboxIndex + dir;
      if (next < 0) setLightboxIndex(filtered.length - 1);
      else if (next >= filtered.length) setLightboxIndex(0);
      else setLightboxIndex(next);
    },
    [lightboxIndex, filtered.length]
  );

  usePageMeta({
    title: 'Gallery',
    description: 'Explore the gallery of VARALAKSHMI HOUSING INFRA LLP projects - aerial views, site visits, infrastructure development and planned layouts in Vijayawada, Andhra Pradesh.',
    canonical: 'https://varalakshmihousing.com/gallery',
  });

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, navigateLightbox]);

  return (
    <>
      <PageHero
        label="GALLERY"
        title={<>Visualizing <span className="text-gold-400">Our Work</span></>}
        description="Explore views of our projects, developments and the environments we create."
      />

      {/* Filter + Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="section-max section-padding">
          {/* Category filters */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-navy-500 text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {categoryLabels[cat] || cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Masonry-style grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-neutral-400">No images in this category.</p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {filtered.map((img, i) => (
                <div key={i} className="break-inside-avoid">
                  <button
                    onClick={() => openLightbox(i)}
                    className="relative w-full rounded-xl overflow-hidden group cursor-pointer"
                    aria-label={`View ${img.alt}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/30 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-11 h-11 rounded-full bg-white/90 flex items-center justify-center">
                        <ZoomIn className="w-5 h-5 text-navy-500" />
                      </div>
                    </div>
                    {img.caption && (
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-navy-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-xs font-medium">{img.caption}</p>
                      </div>
                    )}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/90 backdrop-blur-sm">
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          <button
            onClick={() => navigateLightbox(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <img
            src={filtered[lightboxIndex].src}
            alt={filtered[lightboxIndex].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
          />

          {/* Next */}
          <button
            onClick={() => navigateLightbox(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white text-sm font-medium">
              {filtered[lightboxIndex].caption || filtered[lightboxIndex].alt}
            </p>
            <p className="text-white/50 text-xs mt-1">
              {lightboxIndex + 1} / {filtered.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
