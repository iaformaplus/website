import React, { useState, useMemo } from 'react';
import { Search, Filter, BookOpen, Clock, Users, ArrowRight, ChevronDown, X, Eye, EyeOff, Target, Calendar, MapPin } from 'lucide-react';
import Button from '../components/common/Button';
import AnimatedIcon from '../components/common/AnimatedIcon';

// Training categories with detailed information and specific images for each category
const formationsData = {
  bureautique: {
    name: "Bureautique",
    icon: "https://assets3.lottiefiles.com/packages/lf20_xyadoh9h.json",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
    formations: [
      { 
        title: "Word", 
        levels: ["Débutant", "Intermédiaire", "Avancé"], 
        duration: "14h", 
        format: "Présentiel",
        objectives: [
          "Maîtriser l'interface et les fonctionnalités de base",
          "Créer des documents professionnels structurés",
          "Utiliser les styles et modèles avancés",
          "Collaborer efficacement sur des documents"
        ],
        audience: ["Assistants", "Secrétaires", "Tous professionnels", "Étudiants"],
        modalities: ["Formation en salle", "Exercices pratiques", "Support de cours", "Certification TOSA"]
      },
      { 
        title: "Excel", 
        levels: ["Débutant", "Intermédiaire", "Avancé"], 
        duration: "21h", 
        format: "Mixte",
        objectives: [
          "Créer et gérer des tableaux de données",
          "Utiliser les formules et fonctions avancées",
          "Créer des graphiques et tableaux croisés dynamiques",
          "Automatiser avec les macros VBA"
        ],
        audience: ["Comptables", "Analystes", "Contrôleurs de gestion", "Managers"],
        modalities: ["Sessions présentielles", "E-learning", "Cas pratiques métier", "Certification Microsoft"]
      },
      { 
        title: "PowerPoint", 
        levels: ["Débutant", "Intermédiaire", "Avancé"], 
        duration: "14h", 
        format: "Distanciel",
        objectives: [
          "Concevoir des présentations impactantes",
          "Maîtriser les animations et transitions",
          "Intégrer multimédia et interactivité",
          "Optimiser pour différents supports"
        ],
        audience: ["Commerciaux", "Formateurs", "Managers", "Consultants"],
        modalities: ["Classes virtuelles", "Projets créatifs", "Templates professionnels", "Feedback personnalisé"]
      },
      { 
        title: "Outlook", 
        levels: ["Débutant", "Intermédiaire", "Avancé"], 
        duration: "7h", 
        format: "E-learning",
        objectives: [
          "Optimiser la gestion des emails",
          "Organiser calendrier et tâches",
          "Collaborer avec les équipes",
          "Automatiser les processus"
        ],
        audience: ["Tous professionnels", "Assistants", "Managers", "Équipes projet"],
        modalities: ["Modules interactifs", "Simulations", "Astuces productivité", "Support technique"]
      },
      { 
        title: "Access", 
        levels: ["Débutant", "Intermédiaire", "Avancé"], 
        duration: "21h", 
        format: "Présentiel",
        objectives: [
          "Concevoir des bases de données relationnelles",
          "Créer des formulaires et états",
          "Développer des requêtes complexes",
          "Automatiser avec VBA"
        ],
        audience: ["Développeurs", "Analystes", "Gestionnaires de données", "IT"],
        modalities: ["Formation intensive", "Projets base de données", "Mentorat technique", "Certification"]
      },
      { 
        title: "FileMaker Pro", 
        levels: ["Débutant", "Avancé"], 
        duration: "28h", 
        format: "Présentiel",
        objectives: [
          "Développer des solutions métier",
          "Créer des interfaces utilisateur",
          "Intégrer avec d'autres systèmes",
          "Déployer sur différentes plateformes"
        ],
        audience: ["Développeurs", "Consultants", "PME", "Startups"],
        modalities: ["Projets réels", "Développement guidé", "Best practices", "Support post-formation"]
      },
      { 
        title: "Essentiel de la bureautique", 
        levels: ["Débutant"], 
        duration: "35h", 
        format: "Mixte",
        objectives: [
          "Découvrir l'environnement Windows",
          "Maîtriser Word, Excel, PowerPoint",
          "Gérer emails et internet",
          "Organiser ses fichiers"
        ],
        audience: ["Débutants", "Reconversion", "Seniors", "Demandeurs d'emploi"],
        modalities: ["Parcours progressif", "Accompagnement personnalisé", "Certification TOSA", "Suivi post-formation"]
      }
    ]
  },
  webDigital: {
    name: "Web & Digital",
    icon: "https://assets8.lottiefiles.com/packages/lf20_qp1q7sce.json",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    formations: [
      { 
        title: "WordPress", 
        levels: ["Débutant", "Avancé"], 
        duration: "21h", 
        format: "Mixte",
        objectives: [
          "Créer et gérer un site WordPress",
          "Personnaliser thèmes et plugins",
          "Optimiser pour le SEO",
          "Sécuriser et maintenir le site"
        ],
        audience: ["Entrepreneurs", "Marketeurs", "Communicants", "Freelances"],
        modalities: ["Création de site réel", "Hébergement inclus", "Templates premium", "Support technique"]
      },
      { 
        title: "SEO", 
        levels: ["Débutant", "Intermédiaire"], 
        duration: "14h", 
        format: "Distanciel",
        objectives: [
          "Comprendre les algorithmes de recherche",
          "Optimiser le contenu et la technique",
          "Développer une stratégie de netlinking",
          "Analyser et améliorer les performances"
        ],
        audience: ["Marketeurs", "Rédacteurs web", "E-commerçants", "Agences"],
        modalities: ["Audit SEO inclus", "Outils professionnels", "Cas d'études", "Suivi de positionnement"]
      },
      { 
        title: "Google Ads", 
        levels: ["Débutant", "Avancé"], 
        duration: "21h", 
        format: "Distanciel",
        objectives: [
          "Créer des campagnes performantes",
          "Optimiser les budgets et enchères",
          "Analyser les conversions",
          "Automatiser avec les scripts"
        ],
        audience: ["Marketeurs", "E-commerçants", "Agences", "Consultants"],
        modalities: ["Comptes de test", "Budgets d'entraînement", "Certification Google", "ROI tracking"]
      },
      { 
        title: "Réseaux sociaux", 
        levels: ["Débutant", "Avancé"], 
        duration: "14h", 
        format: "Mixte",
        objectives: [
          "Élaborer une stratégie social media",
          "Créer du contenu engageant",
          "Gérer les communautés",
          "Mesurer l'impact et le ROI"
        ],
        audience: ["Community managers", "Marketeurs", "Entrepreneurs", "Communicants"],
        modalities: ["Création de contenus", "Outils de planification", "Analytics", "Veille concurrentielle"]
      },
      { 
        title: "Python", 
        levels: ["Débutant", "Intermédiaire"], 
        duration: "35h", 
        format: "Présentiel",
        objectives: [
          "Apprendre la syntaxe Python",
          "Développer des applications web",
          "Automatiser des tâches",
          "Analyser des données"
        ],
        audience: ["Développeurs", "Analystes", "Data scientists", "Étudiants"],
        modalities: ["Coding bootcamp", "Projets pratiques", "Code review", "Portfolio GitHub"]
      },
      { 
        title: "GitHub", 
        levels: ["Débutant"], 
        duration: "7h", 
        format: "Distanciel",
        objectives: [
          "Comprendre Git et le versioning",
          "Collaborer sur des projets",
          "Gérer les branches et merges",
          "Utiliser GitHub Actions"
        ],
        audience: ["Développeurs", "Équipes techniques", "Project managers", "Étudiants"],
        modalities: ["Projets collaboratifs", "Repositories d'entraînement", "Best practices", "Workflow automation"]
      }
    ]
  },
  cao: {
    name: "CAO / DAO / BIM",
    icon: "https://assets3.lottiefiles.com/packages/lf20_vd2uluct.json",
    image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800",
    formations: [
      { 
        title: "AutoCAD", 
        levels: ["Débutant", "Intermédiaire", "Avancé"], 
        duration: "35h", 
        format: "Présentiel",
        objectives: [
          "Maîtriser les outils de dessin 2D/3D",
          "Créer des plans techniques précis",
          "Gérer les calques et blocs",
          "Optimiser les workflows de production"
        ],
        audience: ["Dessinateurs", "Architectes", "Ingénieurs", "Techniciens"],
        modalities: ["Stations CAO professionnelles", "Projets techniques", "Bibliothèques de blocs", "Certification Autodesk"]
      },
      { 
        title: "CATIA", 
        levels: ["Débutant", "Avancé"], 
        duration: "42h", 
        format: "Présentiel",
        objectives: [
          "Modéliser des pièces complexes",
          "Créer des assemblages",
          "Générer des plans de fabrication",
          "Simuler et analyser"
        ],
        audience: ["Ingénieurs", "Concepteurs", "Industriels", "Aéronautique"],
        modalities: ["Logiciels industriels", "Projets sectoriels", "Simulation avancée", "Certification Dassault"]
      },
      { 
        title: "Revit", 
        levels: ["Débutant", "Intermédiaire", "Avancé"], 
        duration: "35h", 
        format: "Mixte",
        objectives: [
          "Modéliser en BIM",
          "Créer des familles paramétriques",
          "Collaborer en équipe",
          "Produire des livrables"
        ],
        audience: ["Architectes", "Ingénieurs BTP", "Économistes", "BIM managers"],
        modalities: ["Projets BIM réels", "Collaboration cloud", "Standards BIM", "Certification Autodesk"]
      },
      { 
        title: "SolidWorks", 
        levels: ["Débutant", "Avancé"], 
        duration: "35h", 
        format: "Présentiel",
        objectives: [
          "Concevoir des pièces mécaniques",
          "Réaliser des assemblages",
          "Simuler les contraintes",
          "Créer des animations"
        ],
        audience: ["Ingénieurs mécaniques", "Concepteurs", "Industriels", "Prototypeurs"],
        modalities: ["Conception mécanique", "Simulation FEA", "Rendu photoréaliste", "Certification SolidWorks"]
      },
      { 
        title: "SketchUp", 
        levels: ["Débutant", "Intermédiaire"], 
        duration: "21h", 
        format: "Distanciel",
        objectives: [
          "Modéliser rapidement en 3D",
          "Créer des présentations visuelles",
          "Utiliser les extensions",
          "Exporter vers d'autres logiciels"
        ],
        audience: ["Architectes", "Designers", "Paysagistes", "Décorateurs"],
        modalities: ["Modélisation rapide", "Rendu V-Ray", "Bibliothèques 3D", "Portfolio projets"]
      },
      { 
        title: "Cinema 4D", 
        levels: ["Débutant", "Avancé"], 
        duration: "35h", 
        format: "Présentiel",
        objectives: [
          "Créer des animations 3D",
          "Maîtriser l'éclairage et les matériaux",
          "Utiliser les effets spéciaux",
          "Intégrer avec After Effects"
        ],
        audience: ["Motion designers", "Animateurs 3D", "Vidéastes", "Créatifs"],
        modalities: ["Studio 3D", "Projets créatifs", "Rendu GPU", "Showreel final"]
      }
    ]
  },
  design: {
    name: "Design / PAO / Graphisme",
    icon: "https://assets4.lottiefiles.com/packages/lf20_vvpbtksi.json",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    formations: [
      { 
        title: "Photoshop", 
        levels: ["Débutant", "Intermédiaire", "Avancé"], 
        duration: "28h", 
        format: "Mixte",
        objectives: [
          "Maîtriser la retouche photo",
          "Créer des montages complexes",
          "Optimiser pour le web et l'impression",
          "Automatiser avec les actions"
        ],
        audience: ["Graphistes", "Photographes", "Marketeurs", "Créatifs"],
        modalities: ["Projets créatifs", "Banque d'images", "Plugins professionnels", "Portfolio final"]
      },
      { 
        title: "Illustrator", 
        levels: ["Débutant", "Intermédiaire", "Avancé"], 
        duration: "28h", 
        format: "Mixte",
        objectives: [
          "Créer des illustrations vectorielles",
          "Concevoir des logos et identités",
          "Maîtriser la typographie",
          "Préparer pour différents supports"
        ],
        audience: ["Graphistes", "Illustrateurs", "Designers", "Communicants"],
        modalities: ["Création d'identité", "Techniques vectorielles", "Typographie avancée", "Charte graphique"]
      },
      { 
        title: "InDesign", 
        levels: ["Débutant", "Intermédiaire", "Avancé"], 
        duration: "28h", 
        format: "Mixte",
        objectives: [
          "Mettre en page des documents",
          "Gérer la typographie avancée",
          "Préparer pour l'impression",
          "Créer des publications numériques"
        ],
        audience: ["Maquettistes", "Éditeurs", "Communicants", "Graphistes"],
        modalities: ["Projets éditoriaux", "Chaîne graphique", "Prépresse", "Publications interactives"]
      },
      { 
        title: "Premiere Pro", 
        levels: ["Débutant", "Avancé"], 
        duration: "35h", 
        format: "Présentiel",
        objectives: [
          "Monter des vidéos professionnelles",
          "Maîtriser les effets et transitions",
          "Optimiser les workflows",
          "Exporter pour différents formats"
        ],
        audience: ["Vidéastes", "Monteurs", "Créateurs de contenu", "Communicants"],
        modalities: ["Studio de montage", "Projets vidéo", "Workflow professionnel", "Diffusion multi-supports"]
      },
      { 
        title: "After Effects", 
        levels: ["Débutant", "Avancé"], 
        duration: "35h", 
        format: "Présentiel",
        objectives: [
          "Créer des animations motion design",
          "Maîtriser les effets visuels",
          "Composer des scènes complexes",
          "Intégrer avec la suite Adobe"
        ],
        audience: ["Motion designers", "Animateurs", "VFX artists", "Créatifs"],
        modalities: ["Projets motion design", "Effets spéciaux", "Compositing", "Reel de démonstration"]
      }
    ]
  },
  langues: {
    name: "Langues",
    icon: "https://assets5.lottiefiles.com/packages/lf20_zwph1fkn.json",
    image: "https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=800",
    formations: [
      { 
        title: "Anglais", 
        levels: ["Débutant", "Intermédiaire", "Avancé"], 
        duration: "40h", 
        format: "Mixte",
        objectives: [
          "Communiquer en contexte professionnel",
          "Maîtriser l'anglais des affaires",
          "Présenter et négocier",
          "Rédiger des documents professionnels"
        ],
        audience: ["Tous professionnels", "Commerciaux", "Managers", "Expatriés"],
        modalities: ["Cours conversationnels", "Business English", "E-learning", "Certification TOEIC"]
      },
      { 
        title: "Espagnol", 
        levels: ["Débutant", "Intermédiaire", "Avancé"], 
        duration: "40h", 
        format: "Mixte",
        objectives: [
          "Acquérir les bases de la communication",
          "Développer l'expression orale",
          "Comprendre la culture hispanique",
          "Utiliser l'espagnol en contexte professionnel"
        ],
        audience: ["Tous professionnels", "Commerciaux", "Tourisme", "International"],
        modalities: ["Immersion culturelle", "Jeux de rôle", "Supports authentiques", "Certification DELE"]
      },
      { 
        title: "Allemand", 
        levels: ["Débutant", "Intermédiaire", "Avancé"], 
        duration: "40h", 
        format: "Mixte",
        objectives: [
          "Maîtriser la grammaire allemande",
          "Communiquer dans un contexte professionnel",
          "Comprendre la culture germanophone",
          "Négocier et présenter en allemand"
        ],
        audience: ["Tous professionnels", "Ingénieurs", "Commerciaux", "International"],
        modalities: ["Méthode communicative", "Business Deutsch", "Culture d'entreprise", "Certification Goethe"]
      },
      { 
        title: "FLE", 
        levels: ["Débutant", "Intermédiaire", "Avancé"], 
        duration: "40h", 
        format: "Présentiel",
        objectives: [
          "Apprendre le français de base",
          "Développer l'expression écrite et orale",
          "S'intégrer dans la culture française",
          "Préparer aux examens officiels"
        ],
        audience: ["Étrangers", "Expatriés", "Demandeurs d'emploi", "Étudiants"],
        modalities: ["Immersion française", "Ateliers culturels", "Sorties pédagogiques", "Certification DELF/DALF"]
      }
    ]
  },
  communication: {
    name: "Communication & Management",
    icon: "https://assets9.lottiefiles.com/packages/lf20_6aYlBl.json",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    formations: [
      { 
        title: "Leadership", 
        levels: ["Intermédiaire", "Avancé"], 
        duration: "21h", 
        format: "Présentiel",
        objectives: [
          "Développer son style de leadership",
          "Motiver et fédérer les équipes",
          "Gérer le changement",
          "Prendre des décisions stratégiques"
        ],
        audience: ["Managers", "Dirigeants", "Chefs d'équipe", "Futurs leaders"],
        modalities: ["Coaching individuel", "Mises en situation", "360° feedback", "Plan de développement"]
      },
      { 
        title: "Gestion de conflit", 
        levels: ["Intermédiaire"], 
        duration: "14h", 
        format: "Présentiel",
        objectives: [
          "Identifier les sources de conflit",
          "Utiliser les techniques de médiation",
          "Transformer les conflits en opportunités",
          "Prévenir les situations difficiles"
        ],
        audience: ["Managers", "RH", "Médiateurs", "Équipes"],
        modalities: ["Jeux de rôle", "Études de cas", "Techniques de communication", "Outils de médiation"]
      },
      { 
        title: "Prise de parole", 
        levels: ["Débutant", "Avancé"], 
        duration: "14h", 
        format: "Présentiel",
        objectives: [
          "Vaincre le trac et le stress",
          "Structurer ses interventions",
          "Captiver son auditoire",
          "Gérer les questions difficiles"
        ],
        audience: ["Tous professionnels", "Commerciaux", "Formateurs", "Dirigeants"],
        modalities: ["Entraînements filmés", "Techniques théâtrales", "Storytelling", "Feedback personnalisé"]
      },
      { 
        title: "Gestion du stress", 
        levels: ["Débutant"], 
        duration: "14h", 
        format: "Mixte",
        objectives: [
          "Comprendre les mécanismes du stress",
          "Développer des techniques de relaxation",
          "Organiser son travail efficacement",
          "Maintenir l'équilibre vie pro/perso"
        ],
        audience: ["Tous professionnels", "Managers", "Équipes sous pression", "Burnout"],
        modalities: ["Techniques de relaxation", "Mindfulness", "Organisation personnelle", "Suivi individuel"]
      }
    ]
  },
  marketing: {
    name: "Marketing / Vente",
    icon: "https://assets8.lottiefiles.com/packages/lf20_qp1q7sce.json",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
    formations: [
      { 
        title: "Techniques de vente", 
        levels: ["Débutant", "Avancé"], 
        duration: "21h", 
        format: "Mixte",
        objectives: [
          "Maîtriser le processus de vente",
          "Développer l'écoute active",
          "Traiter les objections",
          "Conclure efficacement"
        ],
        audience: ["Commerciaux", "Entrepreneurs", "Managers", "Consultants"],
        modalities: ["Jeux de rôle", "Simulations de vente", "Techniques de closing", "Suivi terrain"]
      },
      { 
        title: "Prospection", 
        levels: ["Débutant", "Intermédiaire"], 
        duration: "14h", 
        format: "Distanciel",
        objectives: [
          "Identifier et qualifier les prospects",
          "Utiliser les outils digitaux",
          "Créer des messages percutants",
          "Organiser son plan de prospection"
        ],
        audience: ["Commerciaux", "Entrepreneurs", "Business developers", "Freelances"],
        modalities: ["Outils CRM", "Social selling", "Email marketing", "Métriques de performance"]
      },
      { 
        title: "Stratégie marketing", 
        levels: ["Intermédiaire", "Avancé"], 
        duration: "28h", 
        format: "Présentiel",
        objectives: [
          "Analyser le marché et la concurrence",
          "Définir le positionnement",
          "Élaborer le mix marketing",
          "Mesurer le ROI des actions"
        ],
        audience: ["Marketeurs", "Chefs de produit", "Dirigeants", "Consultants"],
        modalities: ["Études de marché", "Business cases", "Plan marketing", "Outils d'analyse"]
      },
      { 
        title: "Marché public", 
        levels: ["Intermédiaire"], 
        duration: "21h", 
        format: "Présentiel",
        objectives: [
          "Comprendre la réglementation",
          "Analyser les appels d'offres",
          "Rédiger des réponses gagnantes",
          "Gérer la relation client public"
        ],
        audience: ["Commerciaux BtoB", "Dirigeants", "Consultants", "Secteur public"],
        modalities: ["Réglementation", "Cas pratiques", "Rédaction d'offres", "Soutenance"]
      }
    ]
  },
  comptabilite: {
    name: "Comptabilité & Gestion",
    icon: "https://assets3.lottiefiles.com/packages/lf20_vd2uluct.json",
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
    formations: [
      { 
        title: "Sage", 
        levels: ["Débutant", "Intermédiaire", "Avancé"], 
        duration: "28h", 
        format: "Présentiel",
        objectives: [
          "Paramétrer le logiciel Sage",
          "Saisir les écritures comptables",
          "Éditer les états financiers",
          "Gérer la TVA et les déclarations"
        ],
        audience: ["Comptables", "Assistants comptables", "Entrepreneurs", "Gestionnaires"],
        modalities: ["Logiciel Sage complet", "Dossiers d'entraînement", "Cas d'entreprise", "Certification Sage"]
      },
      { 
        title: "EBP", 
        levels: ["Débutant", "Intermédiaire"], 
        duration: "21h", 
        format: "Présentiel",
        objectives: [
          "Utiliser EBP Comptabilité",
          "Gérer la facturation",
          "Suivre la trésorerie",
          "Produire les documents légaux"
        ],
        audience: ["PME", "Artisans", "Commerçants", "Associations"],
        modalities: ["Suite EBP", "Paramétrage PME", "Gestion commerciale", "Support technique"]
      },
      { 
        title: "Ciel Paye", 
        levels: ["Débutant", "Avancé"], 
        duration: "21h", 
        format: "Présentiel",
        objectives: [
          "Paramétrer les bulletins de paie",
          "Gérer les variables de paie",
          "Éditer les déclarations sociales",
          "Optimiser les processus RH"
        ],
        audience: ["Gestionnaires paie", "RH", "Comptables", "Dirigeants"],
        modalities: ["Logiciel Ciel Paye", "Législation sociale", "DSN", "Cas pratiques paie"]
      },
      { 
        title: "Analyse des coûts", 
        levels: ["Intermédiaire"], 
        duration: "14h", 
        format: "Distanciel",
        objectives: [
          "Calculer les coûts de revient",
          "Analyser la rentabilité",
          "Utiliser les outils de contrôle",
          "Optimiser la performance"
        ],
        audience: ["Contrôleurs de gestion", "Managers", "Dirigeants", "Analystes"],
        modalities: ["Méthodes de calcul", "Tableaux de bord", "Indicateurs clés", "Business cases"]
      }
    ]
  },
  metiersBouche: {
    name: "Métiers de bouche & Hygiène",
    icon: "https://assets4.lottiefiles.com/packages/lf20_vvpbtksi.json",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    formations: [
      { 
        title: "HACCP", 
        levels: ["Débutant"], 
        duration: "14h", 
        format: "Présentiel",
        objectives: [
          "Comprendre les principes HACCP",
          "Identifier les dangers alimentaires",
          "Mettre en place un plan HACCP",
          "Assurer la traçabilité"
        ],
        audience: ["Restaurateurs", "Cuisiniers", "Boulangers", "Agroalimentaire"],
        modalities: ["Réglementation", "Audit pratique", "Plan HACCP", "Certification obligatoire"]
      },
      { 
        title: "Pâtisserie", 
        levels: ["Débutant", "Avancé"], 
        duration: "35h", 
        format: "Présentiel",
        objectives: [
          "Maîtriser les techniques de base",
          "Créer des pâtisseries complexes",
          "Développer la créativité",
          "Gérer un laboratoire"
        ],
        audience: ["Pâtissiers", "Boulangers", "Reconversion", "Passionnés"],
        modalities: ["Laboratoire équipé", "Techniques professionnelles", "Créations originales", "Portfolio sucré"]
      },
      { 
        title: "Chocolaterie", 
        levels: ["Débutant", "Avancé"], 
        duration: "28h", 
        format: "Présentiel",
        objectives: [
          "Travailler le chocolat",
          "Créer des bonbons et pralines",
          "Maîtriser le tempérage",
          "Développer ses propres recettes"
        ],
        audience: ["Chocolatiers", "Pâtissiers", "Artisans", "Créateurs"],
        modalities: ["Atelier chocolat", "Techniques artisanales", "Dégustation", "Créations personnalisées"]
      },
      { 
        title: "Gestes & postures", 
        levels: ["Débutant"], 
        duration: "7h", 
        format: "Présentiel",
        objectives: [
          "Prévenir les troubles musculaires",
          "Adopter les bons gestes",
          "Aménager son poste de travail",
          "Réduire la pénibilité"
        ],
        audience: ["Tous secteurs", "Manutentionnaires", "Bureautique", "Industrie"],
        modalities: ["Exercices pratiques", "Ergonomie", "Prévention santé", "Attestation formation"]
      }
    ]
  }
};

const FormationsProfessionnellesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [expandedFormation, setExpandedFormation] = useState<string | null>(null);

  // Fonction pour gérer les erreurs d'images avec fallback spécialisé par catégorie
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, categoryKey: string) => {
    const target = e.target as HTMLImageElement;
    
    // Images de fallback spécialisées par catégorie
    const fallbackImages: { [key: string]: string } = {
      bureautique: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      webDigital: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      cao: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      design: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      langues: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=800',
      communication: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      marketing: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      comptabilite: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      metiersBouche: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
    };
    
    const fallbackImage = fallbackImages[categoryKey] || 'https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=800';
    
    if (target.src !== fallbackImage) {
      target.src = fallbackImage;
    }
  };

  // Get all unique levels and formats
  const { levels, formats } = useMemo(() => {
    const levelsSet = new Set();
    const formatsSet = new Set();
    
    Object.values(formationsData).forEach(category => {
      category.formations.forEach(formation => {
        formation.levels.forEach(level => levelsSet.add(level));
        formatsSet.add(formation.format);
      });
    });
    
    return {
      levels: Array.from(levelsSet),
      formats: Array.from(formatsSet)
    };
  }, []);

  // Filter formations based on search and filters
  const filteredFormations = useMemo(() => {
    return Object.entries(formationsData).filter(([key, category]) => {
      if (selectedCategory && key !== selectedCategory) return false;
      
      const hasMatchingFormations = category.formations.some(formation => {
        const matchesSearch = formation.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLevel = !selectedLevel || formation.levels.includes(selectedLevel);
        const matchesFormat = !selectedFormat || formation.format === selectedFormat;
        return matchesSearch && matchesLevel && matchesFormat;
      });
      
      return hasMatchingFormations;
    });
  }, [searchTerm, selectedCategory, selectedLevel, selectedFormat]);

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedLevel("");
    setSelectedFormat("");
    setSearchTerm("");
  };

  const toggleFormationDetails = (formationId: string) => {
    setExpandedFormation(expandedFormation === formationId ? null : formationId);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-secondary text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Catalogue des formations professionnelles
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Plus de 200 formations certifiantes pour développer vos compétences et celles de vos équipes.
              Toutes nos formations sont éligibles au financement OPCO.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher une formation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-0 z-30 bg-white border-b shadow-sm">
        <div className="container py-4">
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              <Filter size={20} />
              Filtres
              <ChevronDown size={16} className={`transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>

            {(selectedCategory || selectedLevel || selectedFormat || searchTerm) && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100"
              >
                <X size={16} />
                Réinitialiser les filtres
              </button>
            )}

            <div className="flex-grow" />

            <div className="text-sm text-gray-500">
              {filteredFormations.reduce((count, [_, category]) => 
                count + category.formations.length, 0
              )} formations trouvées
            </div>
          </div>

          {isFilterOpen && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Catégorie</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Toutes les catégories</option>
                  {Object.entries(formationsData).map(([key, category]) => (
                    <option key={key} value={key}>{category.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Niveau</label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Tous les niveaux</option>
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
                <select
                  value={selectedFormat}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Tous les formats</option>
                  {formats.map(format => (
                    <option key={format} value={format}>{format}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Formations Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          {filteredFormations.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-6">
                <AnimatedIcon 
                  src="https://assets9.lottiefiles.com/packages/lf20_ydo1amjm.json"
                  loop={true}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Aucune formation trouvée</h3>
              <p className="text-gray-600 mb-4">
                Essayez de modifier vos critères de recherche ou contactez-nous pour une formation sur mesure.
              </p>
              <Button to="/contact" variant="primary">
                Demander un devis personnalisé
              </Button>
            </div>
          ) : (
            filteredFormations.map(([key, category]) => (
              <div key={key} className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover"
                      onError={(e) => handleImageError(e, key)}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                    <p className="text-gray-600">Formations certifiantes et éligibles OPCO</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.formations.filter(formation => {
                    const matchesSearch = formation.title.toLowerCase().includes(searchTerm.toLowerCase());
                    const matchesLevel = !selectedLevel || formation.levels.includes(selectedLevel);
                    const matchesFormat = !selectedFormat || formation.format === selectedFormat;
                    return matchesSearch && matchesLevel && matchesFormat;
                  }).map((formation, index) => {
                    const formationId = `${key}-${index}`;
                    const isExpanded = expandedFormation === formationId;
                    
                    return (
                      <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                        {/* Formation Image */}
                        <div className="h-48 rounded-t-xl overflow-hidden">
                          <img 
                            src={category.image} 
                            alt={formation.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            onError={(e) => handleImageError(e, key)}
                            loading="lazy"
                          />
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-4">{formation.title}</h3>
                          
                          <div className="space-y-3 mb-6">
                            <div className="flex items-center text-gray-600">
                              <Clock size={18} className="mr-2 text-primary" />
                              <span>{formation.duration}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Users size={18} className="mr-2 text-primary" />
                              <span>{formation.levels.join(", ")}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <BookOpen size={18} className="mr-2 text-primary" />
                              <span>{formation.format}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Award size={18} className="mr-2 text-primary" />
                              <span className="text-sm">Certificat de réalisation</span>
                            </div>
                          </div>

                          {/* Expanded Details */}
                          {isExpanded && (
                            <div className="border-t pt-6 mt-6 space-y-6 animate-slide-down">
                              {/* Objectives */}
                              <div>
                                <h4 className="flex items-center font-semibold mb-3">
                                  <Target size={16} className="mr-2 text-primary" />
                                  Objectifs
                                </h4>
                                <ul className="space-y-2">
                                  {formation.objectives.map((objective, idx) => (
                                    <li key={idx} className="flex items-start text-sm">
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                      <span>{objective}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Audience */}
                              <div>
                                <h4 className="flex items-center font-semibold mb-3">
                                  <Users size={16} className="mr-2 text-primary" />
                                  Public visé
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {formation.audience.map((audience, idx) => (
                                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                      {audience}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Modalities */}
                              <div>
                                <h4 className="flex items-center font-semibold mb-3">
                                  <Calendar size={16} className="mr-2 text-primary" />
                                  Modalités
                                </h4>
                                <ul className="space-y-1">
                                  {formation.modalities.map((modality, idx) => (
                                    <li key={idx} className="flex items-center text-sm">
                                      <MapPin size={12} className="mr-2 text-gray-400" />
                                      <span>{modality}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}

                          <div className="flex gap-2 mt-6">
                            <button
                              onClick={() => toggleFormationDetails(formationId)}
                              className="flex items-center gap-2 px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors flex-1 justify-center"
                            >
                              {isExpanded ? <EyeOff size={16} /> : <Eye size={16} />}
                              {isExpanded ? 'Masquer' : 'Découvrir'}
                            </button>
                            <Button
                              to="/contact"
                              variant="primary"
                              className="flex-1"
                              rightIcon={<ArrowRight size={16} />}
                            >
                              Devis
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
            
            <div className="space-y-6">
              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold">Comment financer ma formation ?</h3>
                  <ChevronDown className="transform group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    Nos formations sont éligibles aux financements OPCO, CPF, plan de développement des compétences, 
                    et autres dispositifs. Notre équipe vous accompagne dans le montage de votre dossier de financement.
                  </p>
                </div>
              </details>

              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold">Les formations sont-elles certifiantes ?</h3>
                  <ChevronDown className="transform group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    Oui, toutes nos formations sont certifiées Qualiopi et donnent lieu à une attestation 
                    de fin de formation. Certaines formations permettent également d'obtenir une certification 
                    reconnue par l'État.
                  </p>
                </div>
              </details>

              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold">Puis-je avoir une formation sur mesure ?</h3>
                  <ChevronDown className="transform group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    Absolument ! Nous adaptons nos programmes à vos besoins spécifiques. Contactez-nous 
                    pour définir ensemble un parcours de formation personnalisé pour vous ou vos équipes.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - "Besoin d'aide pour choisir votre formation ?" */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Besoin d'aide pour choisir votre formation ?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Nos conseillers sont à votre disposition pour vous guider et vous proposer 
                la formation la plus adaptée à vos besoins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#1877F2] hover:bg-[#166fe5] rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Demander un devis
                </Link>
                <a
                  href="tel:0162177770"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#1877F2] hover:bg-[#166fe5] rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Appelez-nous
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormationsProfessionnellesPage;