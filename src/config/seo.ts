export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

export const seoConfig: Record<string, SEOMetadata> = {
  home: {
    title: 'IAFormaPlus | Formation IA & Professionnelle Certifiée Qualiopi',
    description: 'Organisme de formation certifié Qualiopi spécialisé en Intelligence Artificielle. Formations ChatGPT, bureautique, cybersécurité pour entreprises et particuliers. Financement OPCO.',
    keywords: 'formation IA, formation ChatGPT, formation intelligence artificielle, Qualiopi, OPCO, formation professionnelle',
    canonical: 'https://iaformaplus.fr',
  },

  formationsIA: {
    title: 'Formations Intelligence Artificielle | ChatGPT & IA Générative',
    description: 'Formations IA sur-mesure : ChatGPT entreprise, IA générative, automatisation. Certifiées Qualiopi. Financement OPCO. Formez vos équipes à l\'IA en 2025.',
    keywords: 'formation IA, ChatGPT entreprise, IA générative, formation intelligence artificielle, OPCO IA',
    canonical: 'https://iaformaplus.fr/formations-ia',
  },

  formationsPro: {
    title: 'Formations Professionnelles | Bureautique, Web, CAO/DAO',
    description: 'Formations professionnelles certifiées Qualiopi : bureautique Office 365, web & digital, CAO/DAO, data science. Financement OPCO. Inter ou intra-entreprise.',
    keywords: 'formation professionnelle, bureautique, Office 365, CAO/DAO, web digital, Qualiopi',
    canonical: 'https://iaformaplus.fr/formations-professionnelles',
  },

  formationsParticuliers: {
    title: 'Formations pour Particuliers | IA, Bureautique, Reconversion',
    description: 'Formations accessibles aux particuliers : IA, bureautique, web, reconversion professionnelle. Financement CPF. Accompagnement personnalisé.',
    keywords: 'formation particulier, CPF, reconversion, bureautique particulier, formation IA particulier',
    canonical: 'https://iaformaplus.fr/formations-particuliers',
  },

  formationsSecurite: {
    title: 'Formations Sécurité | Habilitation Électrique B1 B2 BR BS BE',
    description: 'Formations sécurité certifiées : habilitations électriques véhicules électriques B1, B2, BR, BS, BE. Conformes NF C18-510. Sessions intra-entreprise.',
    keywords: 'habilitation électrique, B1 B2 BR BS BE, véhicules électriques, formation sécurité, NF C18-510',
    canonical: 'https://iaformaplus.fr/formations-securite',
  },

  webinaires: {
    title: 'Webinaires Gratuits | IA, ChatGPT, Transformation Digitale',
    description: 'Webinaires gratuits sur l\'IA en entreprise, ChatGPT, automatisation. Sessions live avec experts. Inscrivez-vous gratuitement.',
    keywords: 'webinaire IA, webinaire gratuit, ChatGPT webinaire, transformation digitale',
    canonical: 'https://iaformaplus.fr/webinaires',
  },

  blog: {
    title: 'Blog IA & Transformation Digitale | Actualités & Guides',
    description: 'Actualités IA, guides pratiques, cas d\'usage ChatGPT en entreprise, OPCO, transformation digitale. Conseils d\'experts en formation professionnelle.',
    keywords: 'blog IA, actualités intelligence artificielle, ChatGPT entreprise, OPCO guide',
    canonical: 'https://iaformaplus.fr/blog',
  },

  about: {
    title: 'À Propos | IAFormaPlus - Organisme Certifié Qualiopi',
    description: 'IAFormaPlus, organisme de formation certifié Qualiopi spécialisé en IA et formations professionnelles. Notre mission : former les entreprises de demain.',
    keywords: 'IAFormaPlus, Qualiopi, organisme formation, certification Qualiopi',
    canonical: 'https://iaformaplus.fr/a-propos',
  },

  contact: {
    title: 'Contact | Demande de Devis Formation IA & Professionnelle',
    description: 'Contactez IAFormaPlus pour un devis personnalisé. Réponse sous 24h. Formations IA, bureautique, sécurité. Financement OPCO disponible.',
    keywords: 'contact formation, devis formation, IAFormaPlus contact, demande devis OPCO',
    canonical: 'https://iaformaplus.fr/contact',
  },

  // Nouvelles pages SEO
  formationIATPEPME: {
    title: 'Formation IA pour TPE/PME | Intelligence Artificielle Entreprise',
    description: 'Formation IA adaptée aux TPE/PME : ChatGPT, automatisation, productivité. Financement OPCO. Formez vos équipes à l\'IA sans prérequis technique.',
    keywords: 'formation IA TPE, formation IA PME, ChatGPT PME, IA petite entreprise, OPCO IA',
    canonical: 'https://iaformaplus.fr/formation-ia-tpe-pme',
  },

  formationChatGPTEntreprise: {
    title: 'Formation ChatGPT Entreprise | Maîtriser l\'IA Générative au Travail',
    description: 'Formation ChatGPT pour entreprises : prompt engineering, cas d\'usage métier, automatisation. 1 à 3 jours. Certification. Financement OPCO.',
    keywords: 'formation ChatGPT, ChatGPT entreprise, prompt engineering, formation IA entreprise',
    canonical: 'https://iaformaplus.fr/formation-chatgpt-entreprise',
  },

  formationIAMarketing: {
    title: 'Formation IA Marketing | Content, Copywriting, Publicité IA',
    description: 'Formation IA pour marketeurs : création de contenu, copywriting IA, publicités, SEO avec IA. ChatGPT, Midjourney, outils marketing IA. OPCO.',
    keywords: 'formation IA marketing, ChatGPT marketing, copywriting IA, content marketing IA',
    canonical: 'https://iaformaplus.fr/formation-ia-marketing',
  },

  formationIARH: {
    title: 'Formation IA RH | Recrutement, Onboarding, Gestion Talents IA',
    description: 'Formation IA pour RH : recrutement augmenté, rédaction offres d\'emploi, onboarding, chatbots RH. Optimisez vos processus RH avec l\'IA. OPCO.',
    keywords: 'formation IA RH, recrutement IA, ChatGPT RH, IA ressources humaines',
    canonical: 'https://iaformaplus.fr/formation-ia-rh',
  },

  formationIACommerciaux: {
    title: 'Formation IA Commercial | Prospection, Pitch, CRM Automatisé',
    description: 'Formation IA pour commerciaux : prospection intelligente, rédaction emails, pitch personnalisés, CRM automatisé. Boostez vos ventes avec l\'IA. OPCO.',
    keywords: 'formation IA commercial, prospection IA, ChatGPT vente, IA commerciaux',
    canonical: 'https://iaformaplus.fr/formation-ia-commerciaux',
  },

  formationIAMetiersBouche: {
    title: 'Formation IA Métiers de Bouche | Restauration, Boulangerie IA',
    description: 'Formation IA pour restaurateurs, boulangers, traiteurs : gestion menus, recettes IA, marketing local, relation client. Modernisez votre métier. OPCO.',
    keywords: 'formation IA restaurant, IA boulangerie, ChatGPT métiers bouche, formation restaurateur',
    canonical: 'https://iaformaplus.fr/formation-ia-metiers-bouche',
  },

  habilitationElectrique: {
    title: 'Habilitation Électrique Véhicules Électriques B1 B2 | Formation NF',
    description: 'Formation habilitation électrique B1-B2 pour véhicules électriques et hybrides. Conforme NF C18-510. Recyclage disponible. Intra-entreprise. OPCO.',
    keywords: 'habilitation électrique, B1 B2, véhicules électriques, NF C18-510, formation électrique',
    canonical: 'https://iaformaplus.fr/habilitation-electrique-vehicules-electriques',
  },
};

export const getPageSEO = (pageKey: string): SEOMetadata => {
  return seoConfig[pageKey] || seoConfig.home;
};
