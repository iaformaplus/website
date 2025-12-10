import React from 'react';

interface OrganizationSchemaProps {
  type?: 'organization' | 'educational';
}

export const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({ type = 'educational' }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type === 'educational' ? "EducationalOrganization" : "Organization",
    "name": "IAFormaPlus",
    "alternateName": "IA FORMA PLUS",
    "url": "https://iaformaplus.fr",
    "logo": "https://iaformaplus.fr/images/Les%20assureurs%20experts.png",
    "description": "Organisme de formation certifié Qualiopi spécialisé en Intelligence Artificielle et formations professionnelles",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR",
      "addressLocality": "France"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "telephone": "+33-XXX-XXX-XXX",
      "email": "contact@iaformaplus.fr",
      "availableLanguage": ["French"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/iaformaplus",
      "https://www.facebook.com/iaformaplus"
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Qualiopi",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Ministère du Travail"
      }
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

interface CourseSchemaProps {
  name: string;
  description: string;
  provider?: string;
  duration?: string;
  courseMode?: 'online' | 'onsite' | 'blended';
  educationalLevel?: string;
  price?: number;
  currency?: string;
}

export const CourseSchema: React.FC<CourseSchemaProps> = ({
  name,
  description,
  provider = "IAFormaPlus",
  duration,
  courseMode = 'blended',
  educationalLevel,
  price,
  currency = "EUR"
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": name,
    "description": description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": provider,
      "sameAs": "https://iaformaplus.fr"
    },
    ...(duration && { "timeRequired": duration }),
    "courseMode": courseMode,
    ...(educationalLevel && { "educationalLevel": educationalLevel }),
    ...(price && {
      "offers": {
        "@type": "Offer",
        "price": price,
        "priceCurrency": currency,
        "availability": "https://schema.org/InStock"
      }
    }),
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": courseMode === 'online' ? 'https://schema.org/OnlineEventAttendanceMode' : 'https://schema.org/OfflineEventAttendanceMode',
      "courseWorkload": duration
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};
