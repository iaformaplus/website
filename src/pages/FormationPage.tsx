import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, MapPin, Award, CheckCircle, Target, Calendar, Phone, Mail, Download, Star } from 'lucide-react';

// Données des formations avec contenu détaillé
const formationsData = {
  "habilitation-vehicules-electriques-b1-b2": {
    title: "Habilitation véhicules électriques B1VL-B2VL",
    category: "Technique",
    duration: "21h",
    format: "Présentiel",
    level: "Intermédiaire",
    price: "1450€ HT",
    image: "https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Formation certifiante pour intervenir en sécurité sur les véhicules électriques et hybrides selon la norme NF C18-550.",
    objectives: [
      "Acquérir les connaissances théoriques sur les véhicules électriques",
      "Maîtriser les procédures de sécurité lors des interventions",
      "Obtenir l'habilitation B1VL et B2VL selon la norme NF C18-550",
      "Savoir identifier et prévenir les risques électriques"
    ],
    program: [
      {
        module: "Module 1 : Fondamentaux de l'électricité",
        duration: "3h",
        content: [
          "Notions de base en électricité",
          "Courant continu et alternatif",
          "Loi d'Ohm et puissance électrique",
          "Dangers de l'électricité"
        ]
      },
      {
        module: "Module 2 : Technologies des véhicules électriques",
        duration: "6h",
        content: [
          "Architecture des véhicules électriques et hybrides",
          "Batteries haute tension",
          "Moteurs électriques et onduleurs",
          "Systèmes de charge"
        ]
      },
      {
        module: "Module 3 : Sécurité et habilitation",
        duration: "6h",
        content: [
          "Norme NF C18-550",
          "Procédures de consignation",
          "Équipements de protection individuelle",
          "Conduite à tenir en cas d'accident"
        ]
      },
      {
        module: "Module 4 : Travaux pratiques",
        duration: "6h",
        content: [
          "Mise en sécurité d'un véhicule électrique",
          "Utilisation des outils de mesure",
          "Procédures d'intervention",
          "Évaluation pratique"
        ]
      }
    ],
    prerequisites: [
      "Être titulaire d'un CAP/BEP dans le domaine automobile ou électrique",
      "Avoir des notions de base en électricité",
      "Être apte médicalement aux travaux électriques"
    ],
    audience: [
      "Mécaniciens automobiles",
      "Électriciens automobiles",
      "Techniciens de maintenance",
      "Responsables d'atelier"
    ],
    certification: "Habilitation B1VL et B2VL selon la norme NF C18-550",
    validityPeriod: "3 ans",
    location: "Centre de formation agréé avec véhicules électriques",
    groupSize: "8 participants maximum",
    instructor: "Formateur certifié habilitation électrique automobile"
  },
  "marketing-digital-avance": {
    title: "Marketing digital avancé",
    category: "Marketing",
    duration: "14h",
    format: "Distanciel",
    level: "Avancé",
    price: "990€ HT",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Maîtrisez les stratégies d'acquisition et de fidélisation client dans l'environnement numérique.",
    objectives: [
      "Élaborer une stratégie marketing digital complète",
      "Maîtriser les outils d'acquisition payante (Google Ads, Facebook Ads)",
      "Optimiser le parcours client et les conversions",
      "Analyser et mesurer la performance des campagnes"
    ],
    program: [
      {
        module: "Module 1 : Stratégie marketing digital",
        duration: "4h",
        content: [
          "Audit digital et analyse concurrentielle",
          "Définition des personas et parcours client",
          "Stratégie omnicanale",
          "KPIs et objectifs SMART"
        ]
      },
      {
        module: "Module 2 : Acquisition payante",
        duration: "5h",
        content: [
          "Google Ads : Search, Display, Shopping",
          "Facebook et Instagram Ads",
          "LinkedIn Ads pour le B2B",
          "Optimisation des enchères et budgets"
        ]
      },
      {
        module: "Module 3 : Conversion et fidélisation",
        duration: "3h",
        content: [
          "Optimisation du taux de conversion",
          "Email marketing et automation",
          "Retargeting et remarketing",
          "Programme de fidélisation"
        ]
      },
      {
        module: "Module 4 : Analytics et ROI",
        duration: "2h",
        content: [
          "Google Analytics 4",
          "Tableaux de bord et reporting",
          "Calcul du ROI et attribution",
          "Optimisation continue"
        ]
      }
    ],
    prerequisites: [
      "Connaissances de base en marketing",
      "Maîtrise des outils informatiques",
      "Expérience en marketing digital recommandée"
    ],
    audience: [
      "Responsables marketing",
      "Chefs de projet digital",
      "Entrepreneurs",
      "Consultants marketing"
    ],
    certification: "Certificat de réalisation + Certification Google Ads (optionnelle)",
    validityPeriod: "Permanent",
    location: "Formation 100% distanciel",
    groupSize: "12 participants maximum",
    instructor: "Expert marketing digital certifié Google Partner"
  },
  "e-commerce": {
    title: "Créer et gérer une boutique E-commerce performante",
    category: "E-commerce",
    duration: "35h",
    format: "Présentiel",
    level: "Intermédiaire",
    price: "2490€ HT",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Formation pratique pour lancer et optimiser votre activité en ligne. Apprenez à créer, gérer et développer une boutique e-commerce rentable.",
    objectives: [
      "Créer une boutique e-commerce de A à Z",
      "Maîtriser les aspects techniques et marketing",
      "Optimiser les conversions et la rentabilité",
      "Gérer les aspects logistiques et juridiques"
    ],
    program: [
      {
        module: "Module 1 : Fondamentaux du e-commerce",
        duration: "7h",
        content: [
          "Étude de marché et business plan",
          "Choix de la plateforme (Shopify, WooCommerce, Prestashop)",
          "Aspects juridiques et réglementaires",
          "Stratégie produit et pricing"
        ]
      },
      {
        module: "Module 2 : Création de la boutique",
        duration: "14h",
        content: [
          "Installation et configuration",
          "Design et ergonomie",
          "Catalogue produits et fiches détaillées",
          "Moyens de paiement et sécurité"
        ]
      },
      {
        module: "Module 3 : Marketing et acquisition",
        duration: "7h",
        content: [
          "SEO pour e-commerce",
          "Publicité en ligne (Google Shopping, Facebook)",
          "Email marketing et automation",
          "Réseaux sociaux et influence"
        ]
      },
      {
        module: "Module 4 : Gestion et optimisation",
        duration: "7h",
        content: [
          "Logistique et gestion des stocks",
          "Service client et SAV",
          "Analytics et optimisation des conversions",
          "Évolution et développement"
        ]
      }
    ],
    prerequisites: [
      "Connaissances de base en informatique",
      "Projet e-commerce défini",
      "Notions de marketing recommandées"
    ],
    audience: [
      "Entrepreneurs",
      "Commerçants",
      "Responsables e-commerce",
      "Créateurs d'entreprise"
    ],
    certification: "Certificat de réalisation + Boutique e-commerce fonctionnelle",
    validityPeriod: "Permanent",
    location: "Centre de formation avec ordinateurs équipés",
    groupSize: "8 participants maximum",
    instructor: "Expert e-commerce avec 10+ ans d'expérience"
  },
  "techniques-vente-management": {
    title: "Techniques de vente et management",
    category: "Management",
    duration: "35h",
    format: "Présentiel",
    level: "Intermédiaire",
    price: "2190€ HT",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Formation complète alliant techniques de vente avancées et compétences managériales pour les responsables commerciaux.",
    objectives: [
      "Maîtriser les techniques de vente avancées",
      "Développer ses compétences de manager commercial",
      "Motiver et animer une équipe de vente",
      "Optimiser les performances commerciales"
    ],
    program: [
      {
        module: "Module 1 : Techniques de vente avancées",
        duration: "14h",
        content: [
          "Prospection et qualification",
          "Découverte des besoins et écoute active",
          "Argumentation et traitement des objections",
          "Techniques de closing et négociation"
        ]
      },
      {
        module: "Module 2 : Management commercial",
        duration: "14h",
        content: [
          "Leadership et styles de management",
          "Motivation et animation d'équipe",
          "Fixation d'objectifs et suivi des performances",
          "Gestion des conflits et coaching"
        ]
      },
      {
        module: "Module 3 : Outils et méthodes",
        duration: "7h",
        content: [
          "CRM et outils de pilotage",
          "Tableaux de bord commerciaux",
          "Techniques de formation et accompagnement",
          "Plan d'action et amélioration continue"
        ]
      }
    ],
    prerequisites: [
      "Expérience en vente ou management",
      "Encadrement d'équipe souhaité",
      "Motivation pour le développement commercial"
    ],
    audience: [
      "Managers commerciaux",
      "Responsables des ventes",
      "Directeurs commerciaux",
      "Entrepreneurs"
    ],
    certification: "Certificat de réalisation + Plan d'action personnalisé",
    validityPeriod: "Permanent",
    location: "Centre de formation avec salles de simulation",
    groupSize: "10 participants maximum",
    instructor: "Expert en vente et management avec 15+ ans d'expérience"
  },
  "securite-incendie": {
    title: "Sécurité incendie",
    category: "Sécurité",
    duration: "7h",
    format: "Présentiel",
    level: "Débutant",
    price: "350€ HT",
    image: "https://images.pexels.com/photos/280076/pexels-photo-280076.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Formation obligatoire pour prévenir les risques d'incendie et réagir efficacement en cas d'urgence.",
    objectives: [
      "Identifier les risques d'incendie dans l'entreprise",
      "Utiliser les moyens de première intervention",
      "Évacuer en sécurité et guider les personnes",
      "Alerter les secours et rendre compte"
    ],
    program: [
      {
        module: "Module 1 : Théorie du feu",
        duration: "2h",
        content: [
          "Triangle du feu et classes de feux",
          "Modes de propagation",
          "Causes d'incendie les plus fréquentes",
          "Prévention des risques"
        ]
      },
      {
        module: "Module 2 : Moyens d'extinction",
        duration: "2h",
        content: [
          "Types d'extincteurs et leur utilisation",
          "Robinets d'incendie armés (RIA)",
          "Systèmes de détection et d'alarme",
          "Désenfumage"
        ]
      },
      {
        module: "Module 3 : Évacuation",
        duration: "2h",
        content: [
          "Procédures d'évacuation",
          "Rôle des guides et serre-files",
          "Points de rassemblement",
          "Personnes à mobilité réduite"
        ]
      },
      {
        module: "Module 4 : Exercices pratiques",
        duration: "1h",
        content: [
          "Manipulation d'extincteurs",
          "Simulation d'évacuation",
          "Mise en situation",
          "Évaluation des acquis"
        ]
      }
    ],
    prerequisites: [
      "Aucun prérequis particulier",
      "Aptitude physique pour la manipulation des extincteurs"
    ],
    audience: [
      "Tous salariés",
      "Équipiers de première intervention",
      "Guides et serre-files",
      "Responsables sécurité"
    ],
    certification: "Attestation de formation sécurité incendie",
    validityPeriod: "3 ans (recyclage obligatoire)",
    location: "Sur site avec matériel de formation",
    groupSize: "12 participants maximum",
    instructor: "Formateur certifié sécurité incendie"
  },
  "sauveteur-secouriste-travail-sst": {
    title: "Sauveteur Secouriste du Travail (SST)",
    category: "Sécurité",
    duration: "14h",
    format: "Présentiel",
    level: "Débutant",
    price: "250€ HT",
    image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Formation certifiante SST pour porter secours et prévenir les risques dans l'entreprise. Minimum 4 stagiaires requis.",
    objectives: [
      "Maîtriser la conduite à tenir en cas d'accident",
      "Appliquer les gestes de premiers secours",
      "Contribuer à la prévention des risques",
      "Informer les personnes désignées dans l'entreprise"
    ],
    program: [
      {
        module: "Module 1 : Le sauvetage secourisme du travail",
        duration: "2h",
        content: [
          "Cadre juridique et responsabilités",
          "Rôle du SST dans l'entreprise",
          "Chaîne des secours",
          "Conduite à tenir en cas d'accident"
        ]
      },
      {
        module: "Module 2 : Rechercher les risques",
        duration: "2h",
        content: [
          "Identifier les dangers dans l'entreprise",
          "Supprimer ou isoler le danger",
          "Soustraire la victime au danger",
          "Examiner la victime"
        ]
      },
      {
        module: "Module 3 : Faire alerter ou alerter",
        duration: "2h",
        content: [
          "Qui alerter selon l'organisation",
          "Numéros d'urgence",
          "Message d'alerte",
          "Accueil des secours"
        ]
      },
      {
        module: "Module 4 : Secourir",
        duration: "8h",
        content: [
          "Victime saigne abondamment",
          "Victime s'étouffe",
          "Victime se plaint de malaise",
          "Victime se plaint de brûlures",
          "Victime se plaint d'une douleur",
          "Victime ne répond pas mais respire",
          "Victime ne répond pas et ne respire pas",
          "Situations inhérentes aux risques spécifiques"
        ]
      }
    ],
    prerequisites: [
      "Aucun prérequis particulier",
      "Aptitude physique pour les gestes de secours"
    ],
    audience: [
      "Salariés désignés SST",
      "Membres du CHSCT",
      "Responsables sécurité",
      "Toute personne volontaire"
    ],
    certification: "Certificat SST délivré par l'INRS (valable 24 mois)",
    validityPeriod: "24 mois (recyclage obligatoire)",
    location: "Sur site ou en centre avec mannequins SST",
    groupSize: "4 à 10 participants",
    instructor: "Formateur SST certifié INRS"
  },
  "hygiene-securite-travail": {
    title: "Hygiène & Sécurité au travail",
    category: "Sécurité",
    duration: "14h",
    format: "Présentiel",
    level: "Débutant",
    price: "490€ HT",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Formation pour garantir des conditions de travail conformes et saines selon la réglementation.",
    objectives: [
      "Connaître la réglementation hygiène et sécurité",
      "Identifier et évaluer les risques professionnels",
      "Mettre en place des mesures de prévention",
      "Organiser la sécurité dans l'entreprise"
    ],
    program: [
      {
        module: "Module 1 : Cadre réglementaire",
        duration: "3h",
        content: [
          "Code du travail et obligations",
          "Responsabilités employeur/salarié",
          "Instances représentatives",
          "Contrôles et sanctions"
        ]
      },
      {
        module: "Module 2 : Évaluation des risques",
        duration: "4h",
        content: [
          "Document unique d'évaluation",
          "Identification des dangers",
          "Analyse des risques",
          "Hiérarchisation et plan d'action"
        ]
      },
      {
        module: "Module 3 : Prévention",
        duration: "4h",
        content: [
          "Équipements de protection",
          "Formation et information",
          "Consignation et signalisation",
          "Maintenance préventive"
        ]
      },
      {
        module: "Module 4 : Organisation",
        duration: "3h",
        content: [
          "Plan de prévention",
          "Protocole de sécurité",
          "Gestion des accidents",
          "Amélioration continue"
        ]
      }
    ],
    prerequisites: [
      "Fonction d'encadrement ou de responsabilité",
      "Connaissances de base de l'entreprise"
    ],
    audience: [
      "Responsables sécurité",
      "Managers",
      "Membres CHSCT/CSE",
      "Chefs d'équipe"
    ],
    certification: "Attestation de formation hygiène et sécurité",
    validityPeriod: "Permanent avec mise à jour réglementaire",
    location: "En entreprise ou centre de formation",
    groupSize: "8 à 12 participants",
    instructor: "Expert en prévention des risques professionnels"
  },
  "cybersecurite-professionnels": {
    title: "Cybersécurité pour les professionnels",
    category: "Sécurité",
    duration: "14h",
    format: "Distanciel",
    level: "Intermédiaire",
    price: "790€ HT",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Formation pour protéger les données, systèmes et communications de l'entreprise contre les cybermenaces.",
    objectives: [
      "Identifier les menaces cybersécurité",
      "Mettre en place des mesures de protection",
      "Réagir en cas d'incident de sécurité",
      "Sensibiliser les équipes aux bonnes pratiques"
    ],
    program: [
      {
        module: "Module 1 : Panorama des menaces",
        duration: "3h",
        content: [
          "Types d'attaques (phishing, ransomware, etc.)",
          "Vecteurs d'intrusion",
          "Motivations des cybercriminels",
          "Coût des cyberattaques"
        ]
      },
      {
        module: "Module 2 : Protection des données",
        duration: "4h",
        content: [
          "RGPD et obligations légales",
          "Chiffrement et sauvegarde",
          "Gestion des accès et mots de passe",
          "Sécurisation des communications"
        ]
      },
      {
        module: "Module 3 : Sécurité des systèmes",
        duration: "4h",
        content: [
          "Mise à jour et antivirus",
          "Pare-feu et filtrage",
          "Sécurité Wi-Fi et VPN",
          "Surveillance et détection"
        ]
      },
      {
        module: "Module 4 : Gestion des incidents",
        duration: "3h",
        content: [
          "Plan de réponse aux incidents",
          "Isolation et analyse",
          "Communication de crise",
          "Retour d'expérience"
        ]
      }
    ],
    prerequisites: [
      "Connaissances informatiques de base",
      "Utilisation professionnelle des outils numériques"
    ],
    audience: [
      "RSSI et responsables IT",
      "Managers",
      "Utilisateurs avancés",
      "Consultants"
    ],
    certification: "Certificat de sensibilisation cybersécurité",
    validityPeriod: "2 ans (mise à jour recommandée)",
    location: "Formation 100% distanciel sécurisée",
    groupSize: "8 à 15 participants",
    instructor: "Expert cybersécurité certifié"
  },
  "ia-productivite-quotidien": {
    title: "IA & Productivité au quotidien",
    category: "Intelligence Artificielle",
    duration: "7h",
    format: "E-learning ou Distanciel",
    level: "Débutant",
    price: "490€ HT",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Maîtrisez les outils d'IA pour automatiser vos tâches quotidiennes, gagner du temps et augmenter votre efficacité professionnelle. Formation pratique avec ChatGPT, Notion AI et autres assistants intelligents.",
    objectives: [
      "Utiliser ChatGPT et les assistants IA pour automatiser les tâches répétitives",
      "Rédiger rapidement emails, documents et rapports avec l'IA",
      "Organiser et structurer votre travail avec Notion AI et outils similaires",
      "Gagner plusieurs heures par jour grâce à l'automatisation intelligente"
    ],
    program: [
      {
        module: "Module 1 : Découverte des outils IA",
        duration: "2h",
        content: [
          "Panorama des assistants IA disponibles (ChatGPT, Claude, Gemini)",
          "Création de comptes et premières manipulations",
          "Comprendre les forces et limites de chaque outil",
          "Cas d'usage concrets par métier"
        ]
      },
      {
        module: "Module 2 : Rédaction et communication",
        duration: "2h",
        content: [
          "Rédiger des emails professionnels efficaces",
          "Créer des documents, rapports et synthèses",
          "Adapter le ton et le style selon le contexte",
          "Correction, reformulation et amélioration de textes"
        ]
      },
      {
        module: "Module 3 : Organisation et productivité",
        duration: "2h",
        content: [
          "Structurer son travail avec Notion AI",
          "Créer des to-do lists intelligentes",
          "Automatiser la prise de notes et comptes-rendus",
          "Gérer son agenda et ses priorités avec l'IA"
        ]
      },
      {
        module: "Module 4 : Automatisations pratiques",
        duration: "1h",
        content: [
          "Créer des templates réutilisables",
          "Intégrer l'IA dans vos workflows existants",
          "Exemples d'automatisations métier",
          "Plan d'action personnalisé post-formation"
        ]
      }
    ],
    prerequisites: [
      "Utilisation basique d'un ordinateur et d'Internet",
      "Aucune compétence technique particulière requise",
      "Motivation pour gagner en efficacité"
    ],
    audience: [
      "Tous professionnels souhaitant gagner du temps",
      "Entrepreneurs et indépendants",
      "Assistants et collaborateurs",
      "TPE et PME"
    ],
    certification: "Certificat de réalisation IA & Productivité",
    validityPeriod: "Permanent avec mises à jour régulières",
    location: "100% E-learning ou classes virtuelles",
    groupSize: "12 participants maximum",
    instructor: "Expert certifié en outils IA et productivité"
  },
  "ia-marketing-vente": {
    title: "IA pour Marketing & Vente",
    category: "Intelligence Artificielle",
    duration: "14h",
    format: "Présentiel ou Distanciel",
    level: "Intermédiaire",
    price: "990€ HT",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Boostez vos performances commerciales et marketing avec l'IA. Créez des campagnes performantes, générez du contenu engageant, automatisez votre prospection et optimisez votre CRM avec l'intelligence artificielle.",
    objectives: [
      "Créer des campagnes publicitaires optimisées avec l'IA",
      "Générer du contenu marketing engageant pour tous les canaux",
      "Automatiser et personnaliser la prospection commerciale",
      "Optimiser le CRM et le parcours client avec l'IA"
    ],
    program: [
      {
        module: "Module 1 : IA pour la création de contenu",
        duration: "4h",
        content: [
          "Générer des posts réseaux sociaux impactants",
          "Créer des landing pages et pages de vente",
          "Rédiger des newsletters et séquences email",
          "Produire des visuels avec Midjourney et DALL-E"
        ]
      },
      {
        module: "Module 2 : IA pour la publicité",
        duration: "3h",
        content: [
          "Optimiser les campagnes Google Ads avec l'IA",
          "Créer des publicités Facebook/Instagram performantes",
          "Analyser les données et ajuster les budgets",
          "A/B testing automatisé et optimisation continue"
        ]
      },
      {
        module: "Module 3 : IA pour la prospection",
        duration: "4h",
        content: [
          "Automatiser la recherche de prospects qualifiés",
          "Personnaliser les messages de prospection à grande échelle",
          "Scorer et prioriser les leads avec l'IA",
          "Créer des séquences de suivi automatisées"
        ]
      },
      {
        module: "Module 4 : IA pour le CRM",
        duration: "3h",
        content: [
          "Intégrer l'IA dans votre CRM (HubSpot, Salesforce, etc.)",
          "Automatiser la qualification et le suivi clients",
          "Prédire les opportunités de vente",
          "Analyser les performances et optimiser la stratégie"
        ]
      }
    ],
    prerequisites: [
      "Connaissances de base en marketing ou vente",
      "Utilisation d'outils digitaux",
      "Expérience en prospection ou marketing digital recommandée"
    ],
    audience: [
      "Responsables marketing et commerciaux",
      "Growth hackers et traffic managers",
      "Entrepreneurs et freelances",
      "Équipes marketing et vente"
    ],
    certification: "Certificat de réalisation IA Marketing & Vente",
    validityPeriod: "Permanent avec accès aux mises à jour",
    location: "Présentiel dans nos centres ou 100% distanciel",
    groupSize: "10 participants maximum",
    instructor: "Expert marketing digital et IA certifié"
  },
  "ia-automatisation-process": {
    title: "IA & Automatisation des process",
    category: "Intelligence Artificielle",
    duration: "14h",
    format: "Intra-entreprise ou Distanciel",
    level: "Intermédiaire",
    price: "990€ HT",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Optimisez la productivité de vos équipes en automatisant les process internes. Maîtrisez les outils no-code pour créer des workflows intelligents, automatiser le reporting et déployer un support client IA.",
    objectives: [
      "Identifier et automatiser les processus à faible valeur ajoutée",
      "Créer des workflows intelligents avec Make, Zapier et n8n",
      "Automatiser la génération de rapports et tableaux de bord",
      "Mettre en place un support client intelligent et automatisé"
    ],
    program: [
      {
        module: "Module 1 : Cartographie et identification",
        duration: "3h",
        content: [
          "Analyser les processus actuels de l'entreprise",
          "Identifier les tâches automatisables",
          "Prioriser selon l'impact business",
          "Définir les indicateurs de succès"
        ]
      },
      {
        module: "Module 2 : Automatisation no-code",
        duration: "4h",
        content: [
          "Créer des automatisations avec Make (ex-Integromat)",
          "Connecter vos outils avec Zapier",
          "Intégrer l'IA dans vos workflows (GPT, Claude)",
          "Gérer les erreurs et optimiser les performances"
        ]
      },
      {
        module: "Module 3 : Reporting automatisé",
        duration: "3h",
        content: [
          "Automatiser la collecte de données",
          "Générer des rapports et dashboards avec l'IA",
          "Créer des alertes et notifications intelligentes",
          "Diffuser automatiquement les rapports aux équipes"
        ]
      },
      {
        module: "Module 4 : Support client IA",
        duration: "4h",
        content: [
          "Créer un chatbot intelligent pour le support",
          "Automatiser les réponses aux questions fréquentes",
          "Qualifier et router les demandes complexes",
          "Mesurer la satisfaction et optimiser en continu"
        ]
      }
    ],
    prerequisites: [
      "Connaissances des processus de l'entreprise",
      "Utilisation d'outils web et SaaS",
      "Aucune compétence de programmation requise"
    ],
    audience: [
      "Managers et responsables d'équipe",
      "Chefs de projet et product owners",
      "Responsables des opérations",
      "Équipes RH et administration"
    ],
    certification: "Certificat de réalisation IA & Automatisation",
    validityPeriod: "Permanent avec support technique 6 mois",
    location: "Formation sur site en intra ou classes virtuelles",
    groupSize: "8 participants maximum",
    instructor: "Expert en automatisation et transformation digitale"
  },
  "ia-dirigeants-strategie": {
    title: "IA pour Dirigeants & Stratégie",
    category: "Intelligence Artificielle",
    duration: "7h",
    format: "Sur-mesure ou Présentiel",
    level: "Direction",
    price: "1290€ HT",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Intégrez l'IA dans votre stratégie d'entreprise. Identifiez les opportunités business, prenez des décisions éclairées grâce à l'analyse de données, et définissez votre roadmap de transformation IA.",
    objectives: [
      "Comprendre les enjeux stratégiques de l'IA pour votre secteur",
      "Identifier les cas d'usage à fort impact business",
      "Utiliser l'IA pour l'aide à la décision stratégique",
      "Définir et piloter une roadmap de transformation IA"
    ],
    program: [
      {
        module: "Module 1 : IA et stratégie d'entreprise",
        duration: "2h",
        content: [
          "Panorama des technologies IA et leurs applications",
          "Impact de l'IA sur votre secteur d'activité",
          "Opportunités et menaces concurrentielles",
          "ROI et business cases de l'IA"
        ]
      },
      {
        module: "Module 2 : Identifier les cas d'usage",
        duration: "2h",
        content: [
          "Méthodologie d'identification des opportunités IA",
          "Analyse de la chaîne de valeur",
          "Priorisation des projets selon l'impact",
          "Exemples de cas d'usage par fonction (RH, finance, ops, commercial)"
        ]
      },
      {
        module: "Module 3 : IA pour la prise de décision",
        duration: "2h",
        content: [
          "Analyser les données avec l'IA (tendances, prévisions)",
          "Simuler des scénarios business",
          "Utiliser l'IA comme assistant stratégique",
          "Limites et biais à connaître"
        ]
      },
      {
        module: "Module 4 : Roadmap et mise en œuvre",
        duration: "1h",
        content: [
          "Définir votre stratégie et feuille de route IA",
          "Organiser la gouvernance et les compétences",
          "Gérer le changement et accompagner les équipes",
          "Mesurer et piloter la performance"
        ]
      }
    ],
    prerequisites: [
      "Fonction de direction ou management stratégique",
      "Compréhension des enjeux business de l'entreprise",
      "Aucune compétence technique requise"
    ],
    audience: [
      "Dirigeants et comités de direction",
      "Directeurs métiers (DSI, DG, DAF, DRH)",
      "Consultants en stratégie",
      "Managers de la transformation"
    ],
    certification: "Certificat de réalisation IA Stratégique",
    validityPeriod: "Permanent avec accès privilégié à nos experts",
    location: "Formation executive sur-mesure ou séminaire",
    groupSize: "6 à 8 participants (format intimiste)",
    instructor: "Expert en transformation digitale et stratégie IA"
  }
};

const FormationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const formation = slug ? formationsData[slug as keyof typeof formationsData] : null;

  if (!formation) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Formation non trouvée</h1>
          <p className="text-gray-600 mb-8">La formation que vous recherchez n'existe pas ou a été déplacée.</p>
          <Link to="/formations-professionnelles" className="btn-primary">
            Retour aux formations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-secondary text-white py-16">
        <div className="container">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              to="/formations-professionnelles" 
              className="flex items-center text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Retour aux formations
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {formation.category}
                </span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {formation.level}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{formation.title}</h1>
              <p className="text-xl text-gray-200 mb-6">{formation.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Clock size={24} className="mx-auto mb-2" />
                  <div className="text-sm text-gray-300">Durée</div>
                  <div className="font-semibold">{formation.duration}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Users size={24} className="mx-auto mb-2" />
                  <div className="text-sm text-gray-300">Format</div>
                  <div className="font-semibold">{formation.format}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Award size={24} className="mx-auto mb-2" />
                  <div className="text-sm text-gray-300">Certification</div>
                  <div className="font-semibold">Certificat de réalisation</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Star size={24} className="mx-auto mb-2" />
                  <div className="text-sm text-gray-300">Prix</div>
                  <div className="font-semibold">{formation.price}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="btn-action"
                >
                  S'inscrire à cette formation
                </Link>
                <a 
                  href="tel:0162177770"
                  className="btn-outline"
                >
                  <Phone size={20} className="mr-2" />
                  01 62 17 77 70
                </a>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src={formation.image} 
                alt={formation.title}
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Objectives */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Target size={24} className="mr-3 text-primary" />
                  Objectifs de la formation
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {formation.objectives.map((objective, index) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{objective}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Program */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Calendar size={24} className="mr-3 text-primary" />
                  Programme détaillé
                </h2>
                <div className="space-y-6">
                  {formation.program.map((module, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 p-4 border-b">
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-semibold">{module.module}</h3>
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                            {module.duration}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-2">
                          {module.content.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prerequisites */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Award size={24} className="mr-3 text-primary" />
                  Prérequis
                </h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <ul className="space-y-3">
                    {formation.prerequisites.map((prerequisite, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle size={18} className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{prerequisite}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Formation Info */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-6">Informations pratiques</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock size={20} className="text-primary mr-3 mt-1" />
                    <div>
                      <div className="font-semibold">Durée</div>
                      <div className="text-gray-600">{formation.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users size={20} className="text-primary mr-3 mt-1" />
                    <div>
                      <div className="font-semibold">Format</div>
                      <div className="text-gray-600">{formation.format}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin size={20} className="text-primary mr-3 mt-1" />
                    <div>
                      <div className="font-semibold">Lieu</div>
                      <div className="text-gray-600">{formation.location}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users size={20} className="text-primary mr-3 mt-1" />
                    <div>
                      <div className="font-semibold">Groupe</div>
                      <div className="text-gray-600">{formation.groupSize}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award size={20} className="text-primary mr-3 mt-1" />
                    <div>
                      <div className="font-semibold">Certification</div>
                      <div className="font-semibold">Certificat de réalisation</div>
                      <div className="text-gray-600">{formation.certification}</div>
                    </div>
                  </div>
                  {formation.validityPeriod && (
                    <div className="flex items-start">
                      <Calendar size={20} className="text-primary mr-3 mt-1" />
                      <div>
                        <div className="font-semibold">Validité</div>
                        <div className="text-gray-600">{formation.validityPeriod}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Public visé */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Public visé</h3>
                <div className="space-y-2">
                  {formation.audience.map((audience, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-700">{audience}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & CTA */}
              <div className="bg-primary text-white rounded-xl p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">{formation.price}</div>
                  <div className="text-primary-light mb-6">Formation certifiante</div>
                  <Link 
                    to="/contact" 
                    className="btn bg-white text-primary hover:bg-gray-100 w-full mb-4"
                  >
                    Demander un devis
                  </Link>
                  <a 
                    href="tel:0162177770"
                    className="btn-outline border-white text-white hover:bg-white hover:text-primary w-full"
                  >
                    <Phone size={20} className="mr-2" />
                    Nous appeler
                  </a>
                </div>
              </div>

              {/* Qualiopi */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <img
                    src="/Screenshot 2025-06-22 204332.png"
                    alt="Logo Qualiopi"
                    className="h-12 w-auto object-contain mr-4"
                  />
                  <div>
                    <div className="font-semibold text-amber-800">Certification Qualiopi</div>
                    <div className="text-sm text-amber-600">En cours de formalisation interne</div>
                  </div>
                </div>
                <p className="text-amber-700 text-sm">
                  Cette formation peut être financée par les OPCO et le plan de développement des compétences selon votre situation.
                  Non éligible au CPF.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Prêt à vous former ?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Contactez nos conseillers pour organiser cette formation dans votre entreprise 
                ou vous inscrire à une session inter-entreprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn bg-white text-primary hover:bg-gray-100"
                >
                  Demander un devis personnalisé
                </Link>
                <a
                  href="mailto:contact@iaformaplus.fr"
                  className="btn-outline border-white text-white hover:bg-white hover:text-primary"
                >
                  <Mail size={20} className="mr-2" />
                  Nous écrire
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormationPage;