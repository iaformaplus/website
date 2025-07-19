import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Calendar, Users, Award, BookOpen, User, ArrowRight, CheckCircle, FileText, Phone, Mail } from 'lucide-react';
import Button from '../components/common/Button';
import AnimatedIcon from '../components/common/AnimatedIcon';

// Mock data for formations
const formationsData = [
  {
    slug: "habilitation-vehicules-electriques-b1vl-b2vl",
    title: "Habilitation véhicules électriques B1VL-B2VL",
    category: "Technique",
    duration: "21 heures (3 jours)",
    format: "Présentiel",
    level: "Intermédiaire",
    price: "1450",
    icon: "https://assets10.lottiefiles.com/packages/lf20_Ht6xCY9yVm.json",
    image: "/ChatGPT Image 23 juin 2025, 23_27_02.png",
    certification: "Attestation d'habilitation électrique B1-B2",
    description: "Cette formation permet d'acquérir les compétences nécessaires pour intervenir en toute sécurité sur des véhicules électriques et hybrides, conformément à la norme NF C18-550.",
    audience: ["Mécaniciens", "Techniciens automobiles", "Carrossiers", "Responsables d'atelier"],
    objectives: [
      "Identifier les risques électriques liés aux véhicules électriques et hybrides",
      "Mettre en œuvre les mesures de sécurité adaptées lors des interventions",
      "Réaliser des opérations d'ordre électrique sur des véhicules électriques/hybrides",
      "Obtenir l'habilitation B1VL-B2VL"
    ],
    program: [
      {
        title: "Module 1: Fondamentaux de l'électricité automobile",
        duration: "7h",
        content: ["Principes de l'électricité", "Architecture des véhicules électriques et hybrides", "Composants haute tension", "Dangers du courant électrique"]
      },
      {
        title: "Module 2: Sécurité et prévention des risques",
        duration: "7h",
        content: ["Équipements de protection individuelle", "Procédures de consignation", "Conduite à tenir en cas d'accident", "Cadre réglementaire et normatif"]
      },
      {
        title: "Module 3: Interventions pratiques",
        duration: "7h",
        content: ["Identification des circuits haute tension", "Mise en sécurité des véhicules", "Mesures et vérifications", "Études de cas pratiques"]
      }
    ],
    prerequisites: "Connaissances de base en mécanique automobile",
    evaluation: "Évaluation théorique et pratique en fin de formation"
  },
  {
    slug: "marketing-digital-avance",
    title: "Marketing digital",
    category: "Marketing",
    duration: "14 heures (2 jours)",
    format: "Distanciel",
    level: "Avancé",
    price: "990",
    icon: "https://assets8.lottiefiles.com/packages/lf20_qp1q7sce.json",
    image: "/ChatGPT Image 23 juin 2025, 23_38_03.png",
    certification: "Certification professionnelle en Marketing Digital",
    description: "Formation avancée en marketing digital pour maîtriser les stratégies d'acquisition et de fidélisation client dans un environnement numérique en constante évolution.",
    audience: ["Responsables marketing", "Chefs de projet digital", "Consultants", "Entrepreneurs"],
    objectives: [
      "Élaborer une stratégie marketing digital cohérente et performante",
      "Optimiser les campagnes publicitaires sur les plateformes digitales",
      "Analyser et interpréter les données pour améliorer les performances",
      "Mettre en place des stratégies d'automatisation marketing"
    ],
    program: [
      {
        title: "Module 1: Stratégie marketing digital intégrée",
        duration: "3h",
        content: ["Audit de présence digitale", "Définition des objectifs SMART", "Personnalisation et segmentation", "Parcours client omnicanal"]
      },
      {
        title: "Module 2: Publicité digitale avancée",
        duration: "4h",
        content: ["Optimisation des campagnes Google Ads", "Facebook & Instagram Ads avancés", "LinkedIn Advertising", "Retargeting et audiences similaires"]
      },
      {
        title: "Module 3: Data & Analytics",
        duration: "4h",
        content: ["Google Analytics avancé", "Attribution multi-touch", "A/B testing et optimisation", "Tableaux de bord et KPIs"]
      },
      {
        title: "Module 4: Automatisation et growth hacking",
        duration: "3h",
        content: ["Marketing automation", "Email marketing avancé", "Techniques de growth hacking", "Optimisation de la conversion"]
      }
    ],
    prerequisites: "Connaissances de base en marketing digital",
    evaluation: "Projet final d'élaboration d'une stratégie marketing digital"
  },
  {
    slug: "automatisation-intelligence-artificielle",
    title: "Automatisation par l'intelligence artificielle",
    category: "IA",
    duration: "28 heures (4 jours)",
    format: "Mixte",
    level: "Débutant",
    price: "1890",
    icon: "https://assets3.lottiefiles.com/packages/lf20_vd2uluct.json",
    image: "/ChatGPT Image 23 juin 2025, 23_50_10.png",
    certification: "Certificat de compétence en Automatisation IA",
    description: "Cette formation permet aux professionnels de découvrir et maîtriser les outils d'intelligence artificielle pour automatiser leurs processus métier, optimiser leur productivité et transformer leur façon de travailler.",
    audience: ["Chefs d'entreprise", "Responsables opérationnels", "Consultants", "Managers", "Entrepreneurs", "Freelances"],
    objectives: [
      "Comprendre les principes fondamentaux de l'automatisation par l'IA",
      "Identifier les processus automatisables dans votre organisation",
      "Maîtriser les outils d'IA pour l'automatisation (ChatGPT, Make, Zapier)",
      "Concevoir et déployer des workflows automatisés intelligents",
      "Mesurer l'impact et optimiser les automatisations mises en place"
    ],
    program: [
      {
        title: "Module 1: Fondamentaux de l'automatisation IA",
        duration: "7h",
        content: [
          "Introduction à l'intelligence artificielle et à l'automatisation",
          "Panorama des outils d'automatisation IA disponibles",
          "Identification des processus automatisables",
          "ROI et bénéfices de l'automatisation",
          "Études de cas sectoriels"
        ]
      },
      {
        title: "Module 2: Maîtrise des outils d'IA générative",
        duration: "7h",
        content: [
          "ChatGPT pour l'automatisation : prompts avancés",
          "API ChatGPT et intégrations",
          "Autres outils d'IA générative (Claude, Gemini)",
          "Automatisation de la création de contenu",
          "Gestion des données et de la qualité"
        ]
      },
      {
        title: "Module 3: Plateformes d'automatisation no-code",
        duration: "7h",
        content: [
          "Make (ex-Integromat) : création de scénarios complexes",
          "Zapier : automatisations simples et efficaces",
          "Connexion avec les outils métier (CRM, ERP, etc.)",
          "Gestion des erreurs et monitoring",
          "Optimisation des performances"
        ]
      },
      {
        title: "Module 4: Projet pratique et déploiement",
        duration: "7h",
        content: [
          "Conception d'un projet d'automatisation personnalisé",
          "Développement et test des workflows",
          "Stratégies de déploiement et conduite du changement",
          "Formation des équipes et documentation",
          "Mesure des résultats et amélioration continue"
        ]
      }
    ],
    prerequisites: "Aucun prérequis technique. Connaissance de base des outils informatiques souhaitée",
    evaluation: "Projet pratique d'automatisation + présentation orale + QCM de validation des acquis"
  },
  {
    slug: "techniques-vente-management",
    title: "Techniques de vente et management",
    category: "Management",
    duration: "35 heures (5 jours)",
    format: "Présentiel",
    level: "Intermédiaire",
    price: "2190",
    icon: "https://assets4.lottiefiles.com/packages/lf20_vvpbtksi.json",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
    certification: "Certification en techniques de vente et management d'équipe",
    description: "Formation complète alliant techniques de vente avancées et compétences managériales pour les responsables commerciaux souhaitant développer leur performance et celle de leur équipe.",
    audience: ["Responsables commerciaux", "Managers d'équipe de vente", "Commerciaux expérimentés", "Entrepreneurs"],
    objectives: [
      "Maîtriser les techniques de vente consultative et solution selling",
      "Développer des compétences de leadership et de motivation d'équipe",
      "Mettre en place un système de suivi et d'amélioration continue",
      "Élaborer une stratégie commerciale efficace"
    ],
    program: [
      {
        title: "Module 1: Excellence commerciale",
        duration: "7h",
        content: ["Vente consultative", "Découverte des besoins clients", "Traitement des objections", "Techniques de closing"]
      },
      {
        title: "Module 2: Management d'équipe commerciale",
        duration: "7h",
        content: ["Styles de leadership", "Recrutement et intégration", "Fixation d'objectifs SMART", "Conduite de réunions commerciales"]
      },
      {
        title: "Module 3: Coaching et développement",
        duration: "7h",
        content: ["Techniques de coaching commercial", "Feedback constructif", "Plan de développement individuel", "Gestion des talents"]
      },
      {
        title: "Module 4: Pilotage de l'activité commerciale",
        duration: "7h",
        content: ["KPIs et tableaux de bord", "CRM et outils de suivi", "Prévisions de vente", "Analyse de pipeline"]
      },
      {
        title: "Module 5: Stratégie et plan d'action",
        duration: "7h",
        content: ["Élaboration d'une stratégie commerciale", "Plan d'action commercial", "Gestion des comptes clés", "Développement de nouveaux marchés"]
      }
    ],
    prerequisites: "Expérience commerciale de 2 ans minimum",
    evaluation: "Mise en situation, jeux de rôle et projet final"
  },
  {
    slug: "automatisation-taches-ia-nocode",
    title: "Automatisation des tâches avec l'IA (No Code / Low Code)",
    category: "IA",
    duration: "14 heures (2 jours)",
    format: "Mixte",
    level: "Débutant",
    price: "990",
    icon: "https://assets3.lottiefiles.com/packages/lf20_vd2uluct.json",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    certification: "Certificat de compétence en Automatisation IA",
    description: "Formation pratique pour automatiser vos processus métier avec des outils d'IA no-code. Idéale pour les TPE/PME, indépendants et fonctions support souhaitant gagner en productivité.",
    audience: ["TPE/PME", "Indépendants", "Fonctions support", "Entrepreneurs", "Assistants", "Managers"],
    objectives: [
      "Identifier les tâches automatisables dans votre organisation",
      "Maîtriser les outils no-code d'automatisation (Zapier, Make, ChatGPT)",
      "Créer des workflows automatisés intelligents",
      "Mesurer l'impact et optimiser les automatisations"
    ],
    program: [
      {
        title: "Module 1: Fondamentaux de l'automatisation IA",
        duration: "3h30",
        content: [
          "Introduction à l'automatisation intelligente",
          "Panorama des outils no-code disponibles",
          "Identification des processus automatisables",
          "ROI et bénéfices de l'automatisation"
        ]
      },
      {
        title: "Module 2: Maîtrise des outils",
        duration: "3h30",
        content: [
          "Zapier : automatisations simples et efficaces",
          "Make : scénarios complexes et conditionnels",
          "ChatGPT API : intégration dans les workflows",
          "Connexion avec vos outils métier"
        ]
      },
      {
        title: "Module 3: Création de workflows",
        duration: "3h30",
        content: [
          "Conception d'automatisations personnalisées",
          "Gestion des erreurs et monitoring",
          "Tests et optimisation des performances",
          "Documentation et maintenance"
        ]
      },
      {
        title: "Module 4: Projet pratique",
        duration: "3h30",
        content: [
          "Développement d'un projet d'automatisation",
          "Déploiement et formation des équipes",
          "Mesure des résultats",
          "Plan d'amélioration continue"
        ]
      }
    ],
    prerequisites: "Connaissances de base en informatique. Aucune compétence technique requise",
    evaluation: "Projet pratique d'automatisation + présentation + QCM"
  },
  {
    slug: "maitriser-chatgpt-productivite",
    title: "Maîtriser ChatGPT pour booster sa productivité",
    category: "IA",
    duration: "7 heures (1 jour)",
    format: "E-learning",
    level: "Débutant",
    price: "490",
    icon: "https://assets5.lottiefiles.com/packages/lf20_zwph1fkn.json",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    certification: "Certificat de maîtrise ChatGPT professionnel",
    description: "Formation complète pour utiliser ChatGPT efficacement dans votre travail quotidien. Apprenez à rédiger des prompts efficaces et à automatiser vos tâches répétitives.",
    audience: ["Tous secteurs", "Professionnels", "Entrepreneurs", "Managers", "Assistants", "Consultants"],
    objectives: [
      "Comprendre le fonctionnement et les capacités de ChatGPT",
      "Rédiger des prompts efficaces pour obtenir des résultats précis",
      "Automatiser la création de contenus professionnels",
      "Intégrer ChatGPT dans vos workflows quotidiens"
    ],
    program: [
      {
        title: "Module 1: Découverte de ChatGPT",
        duration: "2h",
        content: [
          "Qu'est-ce que ChatGPT et comment ça fonctionne",
          "Interface et fonctionnalités principales",
          "Limites et bonnes pratiques",
          "Versions et abonnements disponibles"
        ]
      },
      {
        title: "Module 2: Art du prompt engineering",
        duration: "2h",
        content: [
          "Techniques de rédaction de prompts efficaces",
          "Structuration des demandes complexes",
          "Gestion du contexte et de la mémoire",
          "Prompts templates pour différents usages"
        ]
      },
      {
        title: "Module 3: Applications professionnelles",
        duration: "2h",
        content: [
          "Rédaction d'emails et de documents",
          "Création de contenus marketing",
          "Analyse et synthèse de données",
          "Brainstorming et génération d'idées"
        ]
      },
      {
        title: "Module 4: Intégration et optimisation",
        duration: "1h",
        content: [
          "Intégration dans vos outils existants",
          "Automatisation avec des extensions",
          "Mesure de l'impact sur votre productivité",
          "Veille et évolutions futures"
        ]
      }
    ],
    prerequisites: "Aucun prérequis. Connaissances de base en informatique suffisantes",
    evaluation: "QCM de validation + exercices pratiques + projet personnel"
  },
  {
    slug: "creation-contenu-marketing-ia",
    title: "Création de contenu marketing avec l'IA (texte, visuel, vidéo)",
    category: "IA",
    duration: "21 heures (3 jours)",
    format: "Mixte",
    level: "Intermédiaire",
    price: "1490",
    icon: "https://assets10.lottiefiles.com/packages/lf20_Ht6xCY9yVm.json",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    certification: "Certificat de création de contenu IA",
    description: "Formation complète pour créer du contenu marketing professionnel avec l'IA. Maîtrisez les outils de création de texte, visuels et vidéos pour vos campagnes marketing.",
    audience: ["Marketing", "Communication", "Indépendants", "Créateurs de contenu", "Community managers", "Entrepreneurs"],
    objectives: [
      "Créer des visuels professionnels avec Canva IA et Midjourney",
      "Rédiger du contenu marketing optimisé avec ChatGPT",
      "Produire des vidéos engageantes avec des outils IA",
      "Développer une stratégie de contenu IA cohérente"
    ],
    program: [
      {
        title: "Module 1: Création de visuels IA",
        duration: "7h",
        content: [
          "Maîtrise de Canva IA et ses fonctionnalités",
          "Midjourney : prompts et techniques avancées",
          "DALL-E et alternatives pour la création d'images",
          "Optimisation des visuels pour différents supports"
        ]
      },
      {
        title: "Module 2: Rédaction de contenu IA",
        duration: "7h",
        content: [
          "ChatGPT pour le copywriting marketing",
          "Création de posts réseaux sociaux engageants",
          "Rédaction d'articles de blog optimisés SEO",
          "Newsletters et emails marketing automatisés"
        ]
      },
      {
        title: "Module 3: Production vidéo IA",
        duration: "7h",
        content: [
          "Outils de création vidéo IA (Synthesia, Pictory)",
          "Génération de scripts et voix off IA",
          "Montage automatisé et effets visuels",
          "Optimisation pour les plateformes sociales"
        ]
      }
    ],
    prerequisites: "Connaissances de base en marketing digital. Familiarité avec les réseaux sociaux",
    evaluation: "Portfolio de créations IA + stratégie de contenu + présentation"
  },
  {
    slug: "ia-commerciaux-script-relance-crm",
    title: "IA pour les commerciaux : Script, relance, objection, CRM intelligent",
    category: "IA",
    duration: "14 heures (2 jours)",
    format: "Présentiel",
    level: "Intermédiaire",
    price: "1190",
    icon: "https://assets4.lottiefiles.com/packages/lf20_vvpbtksi.json",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
    certification: "Certificat IA pour la vente",
    description: "Formation spécialisée pour les commerciaux souhaitant utiliser l'IA pour améliorer leurs performances. Apprenez à créer des scripts dynamiques, automatiser les relances et optimiser votre CRM.",
    audience: ["Vendeurs", "Téléprospecteurs", "Business developers", "Responsables commerciaux", "Entrepreneurs", "Consultants"],
    objectives: [
      "Créer des scripts de vente dynamiques avec l'IA",
      "Automatiser les relances et le suivi client",
      "Traiter les objections avec l'aide de l'IA",
      "Optimiser votre CRM avec des outils intelligents"
    ],
    program: [
      {
        title: "Module 1: Scripts de vente IA",
        duration: "3h30",
        content: [
          "Création de scripts personnalisés avec ChatGPT",
          "Adaptation automatique selon le profil client",
          "Techniques de questionnement assistées par IA",
          "Optimisation des argumentaires de vente"
        ]
      },
      {
        title: "Module 2: Automatisation des relances",
        duration: "3h30",
        content: [
          "Séquences d'emails automatisées intelligentes",
          "Personnalisation à grande échelle",
          "Timing optimal des relances avec IA",
          "Intégration avec votre CRM existant"
        ]
      },
      {
        title: "Module 3: Gestion des objections",
        duration: "3h30",
        content: [
          "Base de données d'objections et réponses IA",
          "Analyse des signaux d'achat avec IA",
          "Techniques de closing assistées",
          "Préparation d'entretiens avec IA"
        ]
      },
      {
        title: "Module 4: CRM intelligent",
        duration: "3h30",
        content: [
          "Enrichissement automatique des fiches prospects",
          "Scoring et qualification IA",
          "Prédiction des ventes et pipeline",
          "Tableaux de bord intelligents"
        ]
      }
    ],
    prerequisites: "Expérience en vente de 1 an minimum. Utilisation d'un CRM recommandée",
    evaluation: "Mise en situation commerciale + création de scripts IA + projet CRM"
  },
  {
    slug: "habilitation-vehicules-electriques-b1vl-b2vl",
    title: "Habilitation électrique véhicules légers B1VL-B2VL",
    category: "Sécurité",
    duration: "14 heures (2 jours)",
    format: "Présentiel",
    level: "Débutant",
    price: "890",
    icon: "https://assets3.lottiefiles.com/packages/lf20_u4qemvpl.json",
    image: "https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800",
    certification: "Habilitation électrique B1VL-B2VL",
    description: "Formation obligatoire pour intervenir en sécurité sur les véhicules électriques et hybrides selon la norme NF C18-550.",
    audience: ["Mécaniciens", "Techniciens automobiles", "Carrossiers", "Responsables d'atelier"],
    objectives: [
      "Identifier les risques électriques sur véhicules électriques/hybrides",
      "Appliquer les mesures de sécurité lors des interventions",
      "Réaliser des opérations d'ordre électrique en sécurité",
      "Obtenir l'habilitation B1VL-B2VL obligatoire"
    ],
    program: [
      {
        title: "Module 1: Fondamentaux électriques",
        duration: "3h30",
        content: ["Principes de l'électricité automobile", "Architecture véhicules électriques/hybrides", "Composants haute tension", "Dangers du courant électrique"]
      },
      {
        title: "Module 2: Sécurité et prévention",
        duration: "3h30",
        content: ["Équipements de protection individuelle", "Procédures de consignation", "Conduite à tenir en cas d'accident", "Réglementation NF C18-550"]
      },
      {
        title: "Module 3: Interventions pratiques",
        duration: "3h30",
        content: ["Identification circuits haute tension", "Mise en sécurité véhicules", "Mesures et vérifications", "Cas pratiques atelier"]
      },
      {
        title: "Module 4: Évaluation et certification",
        duration: "3h30",
        content: ["Évaluation théorique", "Évaluation pratique", "Délivrance habilitation", "Recyclage et maintien"]
      }
    ],
    prerequisites: "Connaissances de base en mécanique automobile et électricité",
    evaluation: "Évaluation théorique et pratique + délivrance titre d'habilitation"
  },
  {
    slug: "securite-incendie",
    title: "Sécurité incendie",
    category: "Sécurité",
    duration: "7 heures (1 jour)",
    format: "Présentiel",
    level: "Débutant",
    price: "350",
    icon: "https://assets3.lottiefiles.com/packages/lf20_u4qemvpl.json",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    certification: "Attestation de formation sécurité incendie",
    description: "Prévenir les risques et réagir efficacement en cas d'incendie. Formation obligatoire pour les équipiers de première intervention.",
    audience: ["Tous salariés", "Équipiers de première intervention", "Responsables sécurité", "Chefs d'équipe"],
    objectives: [
      "Identifier les risques d'incendie dans l'entreprise",
      "Utiliser les moyens de première intervention",
      "Évacuer en sécurité et donner l'alerte",
      "Appliquer les consignes de sécurité incendie"
    ],
    program: [
      {
        title: "Module 1: Théorie du feu",
        duration: "2h",
        content: ["Triangle du feu", "Classes de feu", "Modes de propagation", "Causes d'incendie"]
      },
      {
        title: "Module 2: Moyens d'extinction",
        duration: "2h",
        content: ["Types d'extincteurs", "Agents extincteurs", "Utilisation pratique", "Maintenance préventive"]
      },
      {
        title: "Module 3: Évacuation et alerte",
        duration: "2h",
        content: ["Procédures d'évacuation", "Rôle du guide-file", "Moyens d'alerte", "Point de rassemblement"]
      },
      {
        title: "Module 4: Exercices pratiques",
        duration: "1h",
        content: ["Manipulation extincteurs", "Simulation évacuation", "Mise en situation", "Évaluation pratique"]
      }
    ],
    prerequisites: "Aucun prérequis",
    evaluation: "Exercices pratiques + QCM + attestation de formation"
  },
  {
    slug: "sauveteur-secouriste-travail-sst",
    title: "Sauveteur Secouriste du Travail (SST)",
    category: "Sécurité",
    duration: "14 heures (2 jours)",
    format: "Présentiel",
    level: "Débutant",
    price: "450",
    icon: "https://assets3.lottiefiles.com/packages/lf20_u4qemvpl.json",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    certification: "Certificat SST (validité 2 ans)",
    description: "Formation SST certifiante pour porter secours en cas d'accident du travail. Minimum 4 stagiaires, maximum 10.",
    audience: ["Tous salariés", "Membres CHSCT", "Responsables sécurité", "Personnel désigné"],
    objectives: [
      "Porter secours en cas d'accident du travail",
      "Protéger, examiner, faire alerter, secourir",
      "Contribuer à la prévention des risques",
      "Obtenir le certificat SST"
    ],
    program: [
      {
        title: "Module 1: Rôle du SST",
        duration: "3h30",
        content: ["Cadre juridique", "Rôle et responsabilités", "Organisation des secours", "Prévention en entreprise"]
      },
      {
        title: "Module 2: Protéger et examiner",
        duration: "3h30",
        content: ["Analyse des risques", "Mise en sécurité", "Examen de la victime", "Recherche des signes"]
      },
      {
        title: "Module 3: Alerter et secourir",
        duration: "3h30",
        content: ["Procédures d'alerte", "Gestes de premiers secours", "Positions d'attente", "Surveillance victime"]
      },
      {
        title: "Module 4: Évaluation certificative",
        duration: "3h30",
        content: ["Cas concrets", "Évaluation continue", "Certification", "Recyclage obligatoire"]
      }
    ],
    prerequisites: "Aucun prérequis. Minimum 4 stagiaires",
    evaluation: "Évaluation certificative continue + délivrance certificat SST"
  },
  {
    slug: "hygiene-securite-travail",
    title: "Hygiène & Sécurité au travail",
    category: "Sécurité",
    duration: "14 heures (2 jours)",
    format: "Présentiel",
    level: "Intermédiaire",
    price: "650",
    icon: "https://assets3.lottiefiles.com/packages/lf20_u4qemvpl.json",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    certification: "Attestation hygiène et sécurité au travail",
    description: "Garantir des conditions de travail conformes et saines. Formation pour responsables sécurité et managers.",
    audience: ["Responsables sécurité", "Managers", "RH", "Membres CHSCT"],
    objectives: [
      "Maîtriser la réglementation hygiène et sécurité",
      "Évaluer et prévenir les risques professionnels",
      "Mettre en place un système de management sécurité",
      "Former et sensibiliser les équipes"
    ],
    program: [
      {
        title: "Module 1: Cadre réglementaire",
        duration: "3h30",
        content: ["Code du travail", "Responsabilités employeur", "Obligations salariés", "Sanctions et contrôles"]
      },
      {
        title: "Module 2: Évaluation des risques",
        duration: "3h30",
        content: ["Document unique", "Identification dangers", "Analyse des risques", "Plan de prévention"]
      },
      {
        title: "Module 3: Prévention et protection",
        duration: "3h30",
        content: ["EPI et EPC", "Signalisation sécurité", "Consignation", "Procédures de travail"]
      },
      {
        title: "Module 4: Management sécurité",
        duration: "3h30",
        content: ["Animation sécurité", "Formation du personnel", "Suivi indicateurs", "Amélioration continue"]
      }
    ],
    prerequisites: "Fonction d'encadrement ou responsabilité sécurité",
    evaluation: "Étude de cas + plan d'action sécurité + attestation"
  },
  {
    slug: "cybersecurite-professionnels",
    title: "Cybersécurité pour les professionnels",
    category: "Sécurité",
    duration: "21 heures (3 jours)",
    format: "Mixte",
    level: "Intermédiaire",
    price: "1290",
    icon: "https://assets3.lottiefiles.com/packages/lf20_u4qemvpl.json",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    certification: "Certificat de sensibilisation cybersécurité",
    description: "Protéger les données, systèmes et communications de l'entreprise. Formation essentielle à l'ère numérique.",
    audience: ["Dirigeants", "Responsables IT", "Tous utilisateurs", "Consultants"],
    objectives: [
      "Identifier les menaces cybersécurité actuelles",
      "Mettre en place des mesures de protection",
      "Réagir efficacement en cas d'incident",
      "Sensibiliser les équipes aux bonnes pratiques"
    ],
    program: [
      {
        title: "Module 1: Panorama des menaces",
        duration: "7h",
        content: ["Types de cyberattaques", "Phishing et ransomware", "Vulnérabilités courantes", "Veille sécurité"]
      },
      {
        title: "Module 2: Protection et prévention",
        duration: "7h",
        content: ["Sécurisation des postes", "Gestion des mots de passe", "Sauvegarde des données", "Mise à jour systèmes"]
      },
      {
        title: "Module 3: Gestion d'incident",
        duration: "7h",
        content: ["Plan de continuité", "Procédures d'urgence", "Communication de crise", "Récupération données"]
      }
    ],
    prerequisites: "Connaissances de base en informatique",
    evaluation: "Simulation d'attaque + plan de sécurité + certification"
  },
  {
    slug: "e-commerce",
    title: "Créer et gérer une boutique E-commerce performante",
    category: "E-commerce",
    duration: "35 heures (5 jours)",
    format: "Mixte",
    level: "Intermédiaire",
    price: "2490",
    icon: "https://assets8.lottiefiles.com/packages/lf20_qp1q7sce.json",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    certification: "Certificat de compétence en E-commerce et vente en ligne",
    description: "Formation pratique et complète pour créer, lancer et optimiser une boutique e-commerce rentable. Apprenez toutes les étapes de la création d'une activité en ligne, de la conception à la gestion quotidienne.",
    audience: ["Entrepreneurs", "Commerçants", "Porteurs de projet", "Responsables marketing", "Freelances", "Reconversion professionnelle"],
    objectives: [
      "Concevoir et créer une boutique e-commerce attractive et fonctionnelle",
      "Maîtriser les outils de gestion (CMS, paiement, logistique)",
      "Développer une stratégie marketing digital efficace",
      "Optimiser les conversions et fidéliser la clientèle",
      "Gérer les aspects juridiques et fiscaux du e-commerce"
    ],
    program: [
      {
        title: "Module 1: Stratégie et conception e-commerce",
        duration: "7h",
        content: [
          "Étude de marché et analyse concurrentielle",
          "Définition du business model et positionnement",
          "Choix de la plateforme e-commerce (Shopify, WooCommerce, PrestaShop)",
          "Architecture et ergonomie de la boutique",
          "Création de l'identité visuelle et charte graphique"
        ]
      },
      {
        title: "Module 2: Création et paramétrage technique",
        duration: "7h",
        content: [
          "Installation et configuration de la plateforme",
          "Création des fiches produits optimisées",
          "Paramétrage des moyens de paiement sécurisés",
          "Configuration de la logistique et livraison",
          "Optimisation SEO technique et référencement"
        ]
      },
      {
        title: "Module 3: Marketing digital et acquisition",
        duration: "7h",
        content: [
          "Stratégie de contenu et storytelling",
          "Publicité en ligne (Google Ads, Facebook Ads)",
          "Email marketing et automation",
          "Réseaux sociaux et influence marketing",
          "Partenariats et affiliation"
        ]
      },
      {
        title: "Module 4: Optimisation et conversion",
        duration: "7h",
        content: [
          "Analyse des performances avec Google Analytics",
          "Optimisation du taux de conversion (CRO)",
          "Gestion de la relation client et SAV",
          "Stratégies de fidélisation et rétention",
          "A/B testing et amélioration continue"
        ]
      },
      {
        title: "Module 5: Gestion et développement",
        duration: "7h",
        content: [
          "Aspects juridiques et RGPD",
          "Gestion comptable et fiscale",
          "Scaling et développement international",
          "Marketplace et multi-canal",
          "Projet final : lancement de votre boutique"
        ]
      }
    ],
    prerequisites: "Connaissances de base en informatique et navigation web. Projet e-commerce défini ou en cours de réflexion",
    evaluation: "Projet pratique de création d'une boutique e-commerce + présentation orale + QCM de validation des acquis"
  }
];

const FormationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [formation, setFormation] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch formation details
    const foundFormation = formationsData.find(f => f.slug === slug);
    setFormation(foundFormation || null);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="container py-20 text-center">
        <div className="w-20 h-20 mx-auto">
          <AnimatedIcon 
            src="https://assets9.lottiefiles.com/packages/lf20_x62chJ.json" 
            className="w-full h-full"
          />
        </div>
        <p className="mt-4 text-gray-600">Chargement en cours...</p>
      </div>
    );
  }

  if (!formation) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Formation non trouvée</h1>
        <p className="text-gray-600 mb-8">La formation que vous recherchez n'existe pas ou n'est plus disponible.</p>
        <Link to="/formations-professionnelles" className="btn-primary">
          Voir toutes nos formations
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-16">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src={formation.image} 
            alt={formation.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <div className="flex items-center mb-4">
                <span className="badge bg-primary text-white mr-2">{formation.category}</span>
                <span className="text-gray-300 text-sm">Ref: FOR-{formation.slug.substring(0, 4).toUpperCase()}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{formation.title}</h1>
              <p className="text-xl text-gray-200 mb-6">{formation.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center">
                  <Clock size={20} className="mr-2 text-primary" />
                  <span>{formation.duration}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={20} className="mr-2 text-primary" />
                  <span>{formation.format}</span>
                </div>
                <div className="flex items-center">
                  <User size={20} className="mr-2 text-primary" />
                  <span>Niveau {formation.level}</span>
                </div>
                <div className="flex items-center">
                  <Award size={20} className="mr-2 text-primary" />
                  <span>Certifié</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button to="/contact" variant="primary" size="lg">
                  Demander un devis
                </Button>
                <Button
                  href="#programme"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Voir le programme
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center items-center">
              <div className="bg-white/10 rounded-xl p-6 w-full">
                <div className="text-center mb-4">
                  <div className="inline-block w-24 h-24 mb-4">
                    <AnimatedIcon src={formation.icon} />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Tarif à partir de</h3>
                  <div className="text-3xl font-bold text-primary">{formation.price}€ HT</div>
                  <p className="text-sm text-gray-300 mt-1">par personne</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-primary mr-2" />
                    <span className="text-sm">Éligible au financement OPCO</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-primary mr-2" />
                    <span className="text-sm">Certificat de réalisation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-primary mr-2" />
                    <span className="text-sm">Support de cours fourni</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-primary mr-2" />
                    <span className="text-sm">Groupe de 4 à 12 personnes</span>
                  </div>
                </div>
                <Button to="/contact" variant="primary" fullWidth>
                  S'inscrire à cette formation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formation Details */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Objectives */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                  <Award size={24} className="text-primary mr-3" />
                  Objectifs pédagogiques
                </h2>
                <ul className="space-y-4">
                  {formation.objectives.map((objective: string, index: number) => (
                    <li key={index} className="flex">
                      <div className="bg-primary/10 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle size={16} className="text-primary" />
                      </div>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Public */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                  <Users size={24} className="text-primary mr-3" />
                  Public concerné
                </h2>
                <div className="flex flex-wrap gap-3">
                  {formation.audience.map((audience: string, index: number) => (
                    <span key={index} className="bg-gray-100 rounded-full px-4 py-2 text-sm">
                      {audience}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-primary/10 rounded-full p-1 mr-3 mt-1">
                      <FileText size={16} className="text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold">Prérequis :</span>
                      <p className="text-gray-700">{formation.prerequisites}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-1 mr-3 mt-1">
                      <Award size={16} className="text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold">Certification :</span>
                      <p className="text-gray-700">{formation.certification}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Programme */}
              <div id="programme">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                  <BookOpen size={24} className="text-primary mr-3" />
                  Programme de la formation
                </h2>
                <div className="space-y-6">
                  {formation.program.map((module: any, index: number) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 p-4 border-b flex justify-between items-center">
                        <h3 className="font-semibold">
                          <span className="text-primary mr-2">{index + 1}.</span>
                          {module.title}
                        </h3>
                        <span className="text-sm text-gray-500">{module.duration}</span>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-2">
                          {module.content.map((item: string, itemIndex: number) => (
                            <li key={itemIndex} className="flex items-start">
                              <div className="rounded-full bg-primary/10 p-1 mr-3 mt-0.5">
                                <ArrowRight size={12} className="text-primary" />
                              </div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <h3 className="font-semibold mb-2">Évaluation :</h3>
                  <p className="text-gray-700">{formation.evaluation}</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Vous avez des questions ?</h3>
                <p className="text-gray-600 mb-6">
                  Nos conseillers sont à votre disposition pour vous aider à choisir 
                  la formation adaptée à vos besoins.
                </p>
                <div className="space-y-4 mb-6">
                  <a href="tel:0162177770" className="flex items-center text-primary font-medium hover:underline">
                    <Phone size={18} className="mr-2" />
                    01 62 17 77 70
                  </a>
                  <a href="mailto:contact@iaformaplus.fr" className="flex items-center text-primary font-medium hover:underline">
                    <Mail size={18} className="mr-2" />
                    contact@iaformaplus.fr
                  </a>
                </div>
                <div className="border-t pt-6 mt-6">
                  <h3 className="font-semibold mb-4">Formules disponibles</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Inter-entreprise</span>
                      <span className="font-semibold">{formation.price}€ HT</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Intra-entreprise</span>
                      <span className="font-semibold">Sur devis</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>À distance</span>
                      <span className="font-semibold">
                        {formation.format.includes("Distanciel") || formation.format.includes("Mixte") 
                          ? "Disponible" 
                          : "Non disponible"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border-t pt-6 mt-6">
                  <h3 className="font-semibold mb-4">Sessions à venir</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Calendar size={16} className="text-primary mr-2" />
                      <span>15-17 Octobre 2025 (Paris)</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="text-primary mr-2" />
                      <span>22-24 Novembre 2025 (Lyon)</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="text-primary mr-2" />
                      <span>10-12 Décembre 2025 (Paris)</span>
                    </div>
                  </div>
                  <Button to="/contact" variant="outline" fullWidth className="mt-4">
                    Demander une session
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Formations */}
      <section className="py-16 bg-light">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Formations similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formationsData
              .filter(f => f.slug !== formation.slug && f.category === formation.category)
              .slice(0, 3)
              .map(relatedFormation => (
                <Link 
                  key={relatedFormation.slug} 
                  to={`/formations/${relatedFormation.slug}`}
                  className="card group hover:translate-y-[-5px]"
                >
                  <div className="p-6">
                    <div className="h-12 w-12 mb-4">
                      <AnimatedIcon src={relatedFormation.icon} />
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="badge bg-primary/10 text-primary">
                        {relatedFormation.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {relatedFormation.duration.split(' ')[0]}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {relatedFormation.title}
                    </h3>
                    <div className="flex justify-between mt-4 text-sm">
                      <span className="text-gray-600">Format: {relatedFormation.format}</span>
                      <span className="text-gray-600">Niveau: {relatedFormation.level}</span>
                    </div>
                  </div>
                  <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-primary font-medium">Voir détails</span>
                    <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="bg-primary rounded-xl overflow-hidden">
            <div className="p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Prêt à vous former ou à former votre équipe ?
              </h2>
              <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
                Contactez-nous dès aujourd'hui pour planifier votre formation ou obtenir un devis personnalisé.
                Nos conseillers sont à votre écoute pour répondre à toutes vos questions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  to="/contact" 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  size="lg"
                >
                  Demander un devis
                </Button>
                <a 
                  href="tel:0162177770"
                  className="btn bg-white text-primary hover:bg-white/90 focus:ring-white/50 text-lg px-8"
                >
                  <Phone size={20} className="mr-2" />
                  01 62 17 77 70
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