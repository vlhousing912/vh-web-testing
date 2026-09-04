import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ZoomIn, ArrowRight, Expand } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Modal from '@/components/ui/Modal';
import { scrollToTop } from '@/lib/utils';

const previewImages = [
  {
    src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
    alt: 'Aerial view of residential development',
    caption: 'Aerial View',
    category: 'Aerial',
  },
  {
    src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',
    alt: 'Modern planned community',
    caption: 'Project View',
    category: 'Project',
  },
  {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    alt: 'Architectural development',
    caption: 'Infrastructure',
    category: 'Infrastructure',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
    alt: 'Road and connectivity',
    caption: 'Road Network',
    category: 'Connectivity',
  },
  {
    src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&q=80',
    alt: 'Land development progress',
    caption: 'Development Progress',
    category: 'Progress',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    alt: 'Professional site visit',
    caption: 'Site Visits',
    category: 'Events',
  },
];

export default function GalleryPreview() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="section-max section-padding">
        <ScrollReveal>
          <SectionHeading
            label="GALLERY"
            title="Visualizing Our Work"
            description="Explore views of our projects, developments and the environments we create."
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {previewImages.map((img, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <button
                onClick={() => setSelectedImage(i)}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer touch-manipulation"
                aria-label={`View ${img.caption}`}
              >
                {/* Image */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Multi-layer overlay */}
                <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/40 transition-all duration-500" />

                {/* Category badge */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="px-2.5 py-1 rounded-md bg-white/90 text-[10px] font-bold text-navy-500 tracking-wide uppercase backdrop-blur-sm">
                    {img.category}
                  </span>
                </div>

                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-elevated backdrop-blur-sm">
                    <Expand className="w-5 h-5 text-navy-500" />
                  </div>
                </div>

                {/* Caption bar */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-navy-950/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-xs font-medium tracking-wide">{img.caption}</p>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-10 text-center">
            <Link to="/gallery" onClick={scrollToTop}>
              <button className="inline-flex items-center gap-2 text-navy-500 font-semibold text-sm hover:text-navy-700 transition-colors group">
                VIEW FULL GALLERY
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox modal */}
      <Modal isOpen={selectedImage !== null} onClose={() => setSelectedImage(null)} size="lg">
        {selectedImage !== null && previewImages[selectedImage] && (
          <div className="text-center">
            <img
              src={previewImages[selectedImage].src.replace('w=600', 'w=1200')}
              alt={previewImages[selectedImage].alt}
              className="w-full rounded-lg"
            />
            <div className="mt-3 flex items-center justify-center gap-2">
              <span className="px-2 py-0.5 rounded bg-navy-100 text-[10px] font-bold text-navy-600 uppercase">
                {previewImages[selectedImage].category}
              </span>
              <p className="text-sm text-neutral-500">{previewImages[selectedImage].caption}</p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
