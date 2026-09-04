import { useEffect } from 'react';

interface PageMeta {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const SITE_NAME = 'VARALAKSHMI HOUSING INFRA LLP';
const BASE_URL = 'https://varalakshmihousing.com';

export function usePageMeta({ title, description, canonical, ogImage }: PageMeta) {
  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', `${title} | ${SITE_NAME}`, true);
    setMeta('og:description', description, true);

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    if (ogImage) {
      setMeta('og:image', ogImage, true);
      setMeta('twitter:image', ogImage);
    }

    setMeta('twitter:title', `${title} | ${SITE_NAME}`);
    setMeta('twitter:description', description);

    window.scrollTo(0, 0);
  }, [title, description, canonical, ogImage]);
}
