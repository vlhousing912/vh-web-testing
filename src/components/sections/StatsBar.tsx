import { useRef, useState, useEffect } from 'react';
import { stats } from './Hero';

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

export default function StatsBar() {
  return (
    <div className="relative bg-navy-950 border-t border-b border-white/10">
      <div className="section-max section-padding py-8 lg:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display transition-transform duration-300 group-hover:scale-105">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-[11px] sm:text-xs text-white/40 font-medium tracking-[0.15em] uppercase">
                {stat.label}
              </p>
              <div className="w-6 h-px bg-gold-500/30 mx-auto mt-3 group-hover:w-10 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
