import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { scrollToTop } from '@/lib/utils';

export default function BackToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
          setProgress(pct);
          setVisible(scrollTop > 400);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-4 sm:right-6 bottom-24 sm:bottom-6 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-elevated border border-neutral-200 flex items-center justify-center transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      {/* Progress ring */}
      <svg
        className="absolute inset-0 -rotate-90"
        viewBox="0 0 40 40"
        aria-hidden="true"
      >
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-neutral-100"
        />
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-navy-500"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 150ms ease-out' }}
        />
      </svg>
      <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-navy-500 relative z-10" />
    </button>
  );
}
