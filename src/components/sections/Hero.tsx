import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { COMPANY_NAME, scrollToTop } from '@/lib/utils';

/* ── Animated floating shapes (premium background depth) ── */
function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large soft orb — top right */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-gold-500/[0.04] blur-[100px] animate-[float1_25s_ease-in-out_infinite]" />
      {/* Medium orb — bottom left */}
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-navy-400/[0.06] blur-[80px] animate-[float2_20s_ease-in-out_infinite]" />
      {/* Small accent orb — center */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-gold-400/[0.03] blur-[60px] animate-[float3_18s_ease-in-out_infinite]" />
      {/* Floating geometric diamond */}
      <div className="absolute top-[20%] right-[15%] w-16 h-16 rotate-45 border border-gold-500/10 animate-[float1_15s_ease-in-out_infinite]" />
      <div className="absolute bottom-[25%] left-[10%] w-10 h-10 rotate-12 border border-white/[0.06] animate-[float2_12s_ease-in-out_infinite]" />
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(200,169,81,0.4) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  );
}

/* ── Animated counter stats (exported separately) ── */
export const stats = [
  { value: 500, suffix: '+', label: 'Plots Delivered' },
  { value: 15, suffix: '+', label: 'Years of Trust' },
  { value: 50, suffix: '+', label: 'Happy Families' },
  { value: 100, suffix: '%', label: 'Transparency' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2200;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const parallaxOffset = scrollY * 0.35;
  const opacity = Math.max(0, 1 - scrollY / 700);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" role="banner">
      {/* ── Background with parallax ── */}
      <div
        className="absolute inset-[-10%] will-change-transform"
        style={{
          backgroundImage: 'url(https://i.ibb.co/Jwcvscjd/HOME-PAGE-BACKGROUND-2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          transform: `translateY(${-parallaxOffset * 0.5}px)`,
        }}
        aria-hidden="true"
      />



      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/75 via-navy-950/55 to-navy-950/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/50 via-transparent to-navy-950/50" />
      {/* Subtle warm tint at horizon */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-navy-950/30" />

      {/* Architectural grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(200,169,81,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,81,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Floating shapes */}
      <FloatingShapes />

      {/* Decorative corner accents */}
      <div className="absolute top-20 left-8 w-24 h-24 border-l-2 border-t-2 border-gold-500/20 hidden md:block" />
      <div className="absolute bottom-32 right-8 w-24 h-24 border-r-2 border-b-2 border-gold-500/20 hidden md:block" />

      {/* ── Main content ── */}
      <div
        className="relative z-10 flex-1 flex items-center justify-center section-max section-padding text-center pt-2 pb-8 -mt-4"
        style={{ opacity }}
      >
        <div>
          {/* Animated badge */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.05s' }}>
            <span className="inline-flex items-center gap-2.5 px-6 py-2.5 border border-gold-500/30 rounded-full text-gold-400 text-[11px] font-semibold tracking-[0.3em] uppercase bg-gold-500/[0.06] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
              </span>
              {COMPANY_NAME}
            </span>
          </div>

          {/* Headline — staggered reveal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-white leading-[1.05] tracking-tight">
            <span className="block overflow-hidden">
              <span className="block animate-fade-up" style={{ animationDelay: '0.15s' }}>
                BUILDING TRUST.
              </span>
            </span>
            <span className="block mt-2 overflow-hidden">
              <span className="block animate-fade-up" style={{ animationDelay: '0.3s' }}>
                CREATING{' '}
                <span className="relative inline-block">
                  <span className="text-gold-400">VALUE.</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-500 to-gold-400/0 animate-[scaleX_0.8s_ease-out_forwards]" style={{ animationDelay: '0.7s', transformOrigin: 'left', transform: 'scaleX(0)' }} />
                </span>
              </span>
            </span>

          </h1>

          {/* Decorative horizontal line */}
          <div className="flex items-center justify-center gap-3 mt-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="w-8 h-px bg-gold-500/40" />
            <div className="w-1.5 h-1.5 rotate-45 border border-gold-500/50" />
            <div className="w-8 h-px bg-gold-500/40" />
          </div>

          {/* Subtext */}
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.55s' }}>
            Thoughtfully planned residential plotted developments designed around location, connectivity, transparency and long-term value.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.7s' }}>
            <Link to="/projects" onClick={scrollToTop}>
              <Button variant="primary" size="lg" showArrow>
                EXPLORE OUR PROJECTS
              </Button>
            </Link>
            <Link to="/site-visit" onClick={scrollToTop}>
              <Button variant="ghost" size="lg" className="!text-white !border-white/20 hover:!bg-white/10 backdrop-blur-sm">
                SCHEDULE A SITE VISIT
              </Button>
            </Link>
          </div>
        </div>
      </div>



      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <a
          href="#trust-strip"
          className="flex flex-col items-center text-white/30 hover:text-white/60 transition-colors group"
          aria-label="Scroll down"
        >
          <span className="text-[9px] tracking-[0.4em] uppercase mb-2 font-medium">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5 group-hover:border-white/40 transition-colors">
            <div className="w-1 h-1.5 rounded-full bg-white/50 animate-[scrollDot_2s_ease-in-out_infinite]" />
          </div>
        </a>
      </div>
    </section>
  );
}
