import ScrollReveal from '@/components/ui/ScrollReveal';
import { ReactNode } from 'react';

interface PageHeroProps {
  label: string;
  title: ReactNode;
  description?: string;
  compact?: boolean;
}

export default function PageHero({ label, title, description, compact }: PageHeroProps) {
  return (
    <section className={`relative pt-28 ${compact ? 'pb-16 lg:pb-20' : 'pb-20 lg:pb-28'} bg-navy-500`}>
      <div className="section-max section-padding">
        <ScrollReveal>
          <span className="section-label text-gold-400 block mb-4">{label}</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
          <div className={`w-12 h-0.5 bg-gold-500 ${compact ? 'mt-6' : 'mt-8'}`} />
        </ScrollReveal>
      </div>
    </section>
  );
}
