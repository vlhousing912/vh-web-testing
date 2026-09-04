import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import PageHero from '@/components/ui/PageHero';
import { faqs, faqCategories, searchFaqs, getFaqsByCategory } from '@/data/faqs';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>(null);

  const displayedFaqs = searchQuery
    ? searchFaqs(searchQuery)
    : getFaqsByCategory(activeCategory);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  usePageMeta({
    title: 'FAQ',
    description: 'Frequently asked questions about VARALAKSHMI HOUSING INFRA LLP projects, site visits, plot availability, documentation, pricing and the property buying process.',
    canonical: 'https://varalakshmihousing.com/faq',
  });

  // FAQ structured data for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* FAQ structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        label="FAQ"
        title={<>Frequently Asked <span className="text-gold-400">Questions</span></>}
        description="Find answers to common questions about our projects, processes and services."
      />

      {/* FAQ Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto section-padding">
          {/* Search */}
          <ScrollReveal>
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions..."
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-neutral-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-colors"
                aria-label="Search FAQ"
              />
            </div>
          </ScrollReveal>

          {/* Category filters */}
          {!searchQuery && (
            <ScrollReveal>
              <div className="flex flex-wrap gap-2 mb-10">
                {['All', ...faqCategories].map((cat) => (
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
          )}

          {/* Accordion */}
          <div className="space-y-3">
            {displayedFaqs.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-neutral-400">No questions match your search.</p>
              </div>
            ) : (
              displayedFaqs.map((faq, i) => (
                <ScrollReveal key={faq.id} delay={i * 50}>
                  <div className="border border-neutral-200/60 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-neutral-50 transition-colors min-h-[56px]"
                      aria-expanded={openId === faq.id}
                    >
                      <span className="text-sm font-semibold text-neutral-900 pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-300 ${
                          openId === faq.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-300 ease-out ${
                        openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      } overflow-hidden`}
                    >
                      <div className="px-5 pb-5 pt-0">
                        <p className="text-sm text-neutral-600 leading-relaxed">{faq.answer}</p>
                        <span className="inline-block mt-3 text-xs text-neutral-400 bg-neutral-50 px-2.5 py-1 rounded-full">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
