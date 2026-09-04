import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const count = testimonials.length;

  const goTo = useCallback((idx: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(idx);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const next = useCallback(() => goTo((current + 1) % count), [current, count, goTo]);
  const prev = useCallback(() => goTo((current - 1 + count) % count), [current, count, goTo]);

  useEffect(() => {
    if (isPaused || count <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next, count]);

  if (count === 0) return null;

  const t = testimonials[current];
  const initials = t.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2);

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="section-max section-padding">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="section-label block mb-4">TESTIMONIALS</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
              What Our <span className="text-navy-500">Customers Say</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="w-12 h-0.5 bg-gold-500" />
              <div className="w-2 h-2 rotate-45 border border-gold-500/50" />
              <div className="w-12 h-0.5 bg-gold-500" />
            </div>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Large quote icon */}
          <div className="absolute -top-4 left-0 sm:left-8 opacity-[0.06] pointer-events-none" aria-hidden="true">
            <Quote className="w-24 h-24 sm:w-32 sm:h-32 text-navy-500" />
          </div>

          {/* Testimonial card */}
          <div className="relative bg-gradient-to-br from-neutral-50 to-white rounded-2xl border border-neutral-200/60 p-8 sm:p-12 lg:p-16 text-center min-h-[280px] sm:min-h-[320px] flex flex-col items-center justify-center">
            {/* Stars */}
            <div className="flex items-center gap-1 mb-6" aria-label={`Rating: ${t.rating} out of 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className={`w-4 h-4 ${i < t.rating ? 'text-gold-500' : 'text-neutral-200'}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote text */}
            <blockquote className="text-lg sm:text-xl lg:text-2xl text-neutral-700 leading-relaxed font-light max-w-2xl transition-all duration-500">
              "{t.text}"
            </blockquote>

            {/* Author */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-navy-500 flex items-center justify-center text-white font-bold text-sm">
                {initials}
              </div>
              <div className="text-left">
                <p className="font-semibold text-neutral-900 text-sm">{t.name}</p>
                <p className="text-xs text-neutral-500">{t.location}</p>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          {count > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute top-1/2 -left-2 sm:-left-5 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-card border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-navy-500 hover:shadow-elevated transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute top-1/2 -right-2 sm:-right-5 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-card border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-navy-500 hover:shadow-elevated transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Dot indicators */}
        {count > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-navy-500 w-8' : 'bg-neutral-300 hover:bg-neutral-400 w-2'
                }`}
                role="tab"
                aria-selected={i === current}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
