import { useState } from 'react';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import PageHero from '@/components/ui/PageHero';
import { blogPosts, blogCategories } from '@/data/blog';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  usePageMeta({
    title: 'Insights',
    description: 'Articles and guides on residential plot buying, property documentation, location advantages and real estate investment insights from VARALAKSHMI HOUSING INFRA LLP.',
    canonical: 'https://varalakshmihousing.com/insights',
  });

  return (
    <>
      <PageHero
        label="INSIGHTS"
        title={<>Knowledge & <span className="text-gold-400">Guidance</span></>}
        description="Articles and guides to help you make informed property decisions."
      />

      {/* Articles */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="section-max section-padding">
          {/* Filters */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-10">                {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-navy-500 text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-neutral-400">No articles in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post, i) => (
                <ScrollReveal key={post.id} delay={i * 80}>
                  <article className="premium-card overflow-hidden h-full flex flex-col group">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-navy-500 bg-navy-50 px-2.5 py-1 rounded-full">
                          <Tag className="w-3 h-3" />
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-neutral-400">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug group-hover:text-navy-500 transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm text-neutral-500 leading-relaxed flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 pt-4 border-t border-neutral-100">
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-500 group-hover:gap-2.5 transition-all duration-300">
                          Read More
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
