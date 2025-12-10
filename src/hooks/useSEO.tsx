import { useEffect } from 'react';
import type { SEOMetadata } from '../config/seo';

export const useSEO = (metadata: SEOMetadata) => {
  useEffect(() => {
    document.title = metadata.title;

    const updateMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateOGTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMetaTag('description', metadata.description);
    if (metadata.keywords) {
      updateMetaTag('keywords', metadata.keywords);
    }

    updateOGTag('og:title', metadata.title);
    updateOGTag('og:description', metadata.description);
    updateOGTag('og:type', 'website');
    if (metadata.canonical) {
      updateOGTag('og:url', metadata.canonical);
    }
    if (metadata.ogImage) {
      updateOGTag('og:image', metadata.ogImage);
    }

    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', metadata.title);
    updateMetaTag('twitter:description', metadata.description);

    if (metadata.canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = metadata.canonical;
    }
  }, [metadata]);
};
