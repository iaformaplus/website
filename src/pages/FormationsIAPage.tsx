import React, { useState, useMemo } from 'react';
import { Search, Filter, BookOpen, Clock, Users, ArrowRight, ChevronDown, X, Eye, EyeOff, Target, Calendar, MapPin, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import AnimatedIcon from '../components/common/AnimatedIcon';
import JobAIHelper from '../components/common/JobAIHelper';
import BugReportWidget from '../components/common/BugReportWidget';
import MessengerButton from '../components/common/MessengerButton';

// Training data with detailed information
const formationsData = {
  generative: {
    name: "IA Générative & Assistants",
    icon: "https://assets5.lottiefiles.com/packages/lf20_zwph1fkn.json",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    formations: [
      {
        title: "Utiliser ChatGPT au travail",
        description: "Maîtrisez ChatGPT pour automatiser vos tâches quotidiennes et booster votre productivité",
        duration: "7h",
        format: "E-learning",
        level: "Débutant",
        price: "490",
        objectives: [
          "Comprendre le fonctionnement de ChatGPT et ses capacités",
          "Rédiger des prompts efficaces pour obtenir des résultats précis",
          "Automatiser la création de contenus professionnels",
          "Intégrer ChatGPT dans vos workflows quotidiens"
        ],
        audience: ["Tous professionnels", "Entrepreneurs", "Managers", "Assistants"],
        modalities: ["Modules vidéo interactifs", "Exercices pratiques", "Support PDF", "Accès 6 mois"]
      },
      {
        title: "Créer un chatbot avec ChatGPT API",
        description: "Développez votre assistant IA personnalisé avec l'API ChatGPT et Dialogflow",
        duration: "14h",
        format: "Blended",
        level: "Intermédiaire",
        price: "990",
        objectives: [
          "Maîtriser l'API ChatGPT et ses paramètres",
          "Concevoir l'architecture d'un chatbot intelligent",
          "Intégrer le chatbot sur différentes plateformes",
          "Optimiser les performances et gérer les coûts"
        ],
        audience: ["Développeurs", "Chefs de projet", "Responsables IT", "Entrepreneurs tech"],
        modalities: ["Sessions live", "Travaux pratiques", "Projet final", "Mentorat individuel"]
      },
      {
        title: "Notion AI & Microsoft Copilot",
        description: "Optimisez votre organisation avec les assistants IA de Notion et Microsoft",
        duration: "7h",
        format: "E-learning",
        level: "Débutant",
        price: "490",
        objectives: [
          "Configurer et personnaliser Notion AI",
          "Utiliser Microsoft Copilot dans Office 365",
          "Automatiser la gestion documentaire",
          "Créer des workflows intelligents"
        ],
        audience: ["Assistants", "Managers", "Équipes projet", "Consultants"],
        modalities: ["Tutoriels vidéo", "Templates prêts à l'emploi", "Cas d'usage métier", "Support technique"]
      },
      {
        title: "Jasper AI & Copy.ai",
        description: "Créez du contenu optimisé avec les meilleurs outils d'IA générative",
        duration: "14h",
        format: "Distanciel",
        level: "Intermédiaire",
        price: "790",
        objectives: [
          "Maîtriser Jasper AI pour le copywriting",
          "Utiliser Copy.ai pour différents formats de contenu",
          "Optimiser le contenu pour le SEO",
          "Créer une stratégie de contenu IA"
        ],
        audience: ["Rédacteurs", "Marketeurs", "Community managers", "Entrepreneurs"],
        modalities: ["Classes virtuelles", "Ateliers pratiques", "Révision de contenus", "Certification"]
      },
      {
        title: "Assistant vocal IA",
        description: "Créez des assistants vocaux avec Whisper et ElevenLabs",
        duration: "21h",
        format: "Présentiel",
        level: "Avancé",
        price: "1490",
        objectives: [
          "Développer un assistant vocal multilingue",
          "Intégrer la reconnaissance vocale Whisper",
          "Utiliser ElevenLabs pour la synthèse vocale",
          "Déployer l'assistant sur différents supports"
        ],
        audience: ["Développeurs", "Ingénieurs IA", "Product managers", "Innovateurs"],
        modalities: ["Formation intensive", "Projets hands-on", "Mentorat expert", "Certification avancée"]
      }
    ]
  },
  automation: {
    name: "Automatisation & Productivité",
    icon: "https://assets3.lottiefiles.com/packages/lf20_vd2uluct.json",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    formations: [
      {
        title: "Make + Zapier + GPT",
        description: "Automatisez vos workflows avec l'IA et les outils no-code",
        duration: "14h",
        format: "Blended",
        level: "Intermédiaire",
        price: "990",
        objectives: [
          "Créer des automatisations complexes avec Make",
          "Connecter vos outils via Zapier",
          "Intégrer l'IA dans vos workflows",
          "Optimiser et monitorer vos automatisations"
        ],
        audience: ["Entrepreneurs", "Ops managers", "Consultants", "Freelances"],
        modalities: ["Sessions live", "Ateliers pratiques", "Templates d'automatisation", "Support communauté"]
      },
      {
        title: "Emails & documents automatisés",
        description: "Générez et automatisez vos communications avec l'IA",
        duration: "7h",
        format: "E-learning",
        level: "Débutant",
        price: "490",
        objectives: [
          "Automatiser la rédaction d'emails",
          "Générer des documents personnalisés",
          "Créer des templates intelligents",
          "Mettre en place des workflows de validation"
        ],
        audience: ["Assistants", "Commerciaux", "RH", "Managers"],
        modalities: ["Modules interactifs", "Templates prêts à l'emploi", "Cas pratiques", "Support email"]
      },
      {
        title: "No-code & IA",
        description: "Créez des applications IA sans coder avec Bubble, Tally et Glide",
        duration: "21h",
        format: "Blended",
        level: "Intermédiaire",
        price: "1290",
        objectives: [
          "Développer des apps no-code avec IA",
          "Intégrer des APIs d'intelligence artificielle",
          "Créer des interfaces utilisateur intelligentes",
          "Déployer et monétiser vos applications"
        ],
        audience: ["Entrepreneurs", "Product managers", "Designers", "Consultants"],
        modalities: ["Projets guidés", "Mentorat individuel", "Communauté d'entraide", "Certification"]
      }
    ]
  },
  marketing: {
    name: "IA Marketing & Communication",
    icon: "https://assets8.lottiefiles.com/packages/lf20_qp1q7sce.json",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    formations: [
      {
        title: "IA pour marketing digital",
        description: "Optimisez vos campagnes marketing avec l'IA",
        duration: "21h",
        format: "Blended",
        level: "Intermédiaire",
        price: "1290",
        objectives: [
          "Analyser les données clients avec l'IA",
          "Personnaliser les campagnes marketing",
          "Optimiser les budgets publicitaires",
          "Prédire les tendances et comportements"
        ],
        audience: ["Marketeurs", "Growth hackers", "Data analysts", "CMO"],
        modalities: ["Cas d'études réels", "Outils IA marketing", "Projets pratiques", "Certification"]
      },
      {
        title: "Contenus IA pour réseaux sociaux",
        description: "Créez du contenu viral avec l'aide de l'IA",
        duration: "14h",
        format: "Distanciel",
        level: "Débutant",
        price: "790",
        objectives: [
          "Générer du contenu engageant avec l'IA",
          "Optimiser les posts pour chaque plateforme",
          "Automatiser la publication et l'engagement",
          "Analyser les performances avec l'IA"
        ],
        audience: ["Community managers", "Influenceurs", "Marketeurs", "Entrepreneurs"],
        modalities: ["Ateliers créatifs", "Templates de contenu", "Outils IA gratuits", "Suivi personnalisé"]
      },
      {
        title: "SEO IA",
        description: "Optimisez votre référencement avec GPT et Surfer SEO",
        duration: "14h",
        format: "E-learning",
        level: "Intermédiaire",
        price: "890",
        objectives: [
          "Rechercher des mots-clés avec l'IA",
          "Optimiser le contenu pour Google",
          "Automatiser l'analyse SEO",
          "Créer une stratégie SEO IA"
        ],
        audience: ["SEO specialists", "Rédacteurs web", "Marketeurs", "Webmasters"],
        modalities: ["Modules spécialisés", "Outils SEO IA", "Audits pratiques", "Certification SEO"]
      }
    ]
  },
  dataScience: {
    name: "Data Science & Analyse",
    icon: "https://assets4.lottiefiles.com/packages/lf20_vvpbtksi.json",
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
    formations: [
      {
        title: "Python + Google Colab",
        description: "Initiez-vous à la data science avec Python",
        duration: "35h",
        format: "Blended",
        level: "Débutant",
        price: "1990",
        objectives: [
          "Maîtriser les bases de Python pour la data",
          "Utiliser Google Colab efficacement",
          "Analyser et visualiser des données",
          "Créer vos premiers modèles prédictifs"
        ],
        audience: ["Analystes", "Consultants", "Managers", "Étudiants"],
        modalities: ["Cours interactifs", "Projets data réels", "Notebooks Colab", "Mentorat expert"]
      },
      {
        title: "AutoML + Teachable Machine",
        description: "Créez des modèles ML sans coder",
        duration: "14h",
        format: "Distanciel",
        level: "Débutant",
        price: "890",
        objectives: [
          "Comprendre l'AutoML et ses applications",
          "Utiliser Teachable Machine de Google",
          "Créer des modèles de classification",
          "Déployer vos modèles en production"
        ],
        audience: ["Non-développeurs", "Managers", "Entrepreneurs", "Consultants"],
        modalities: ["Démonstrations live", "Projets guidés", "Templates de modèles", "Support technique"]
      },
      {
        title: "Power BI & IA",
        description: "Analysez vos données avec l'IA dans Power BI",
        duration: "21h",
        format: "Présentiel",
        level: "Intermédiaire",
        price: "1490",
        objectives: [
          "Intégrer l'IA dans Power BI",
          "Créer des tableaux de bord intelligents",
          "Utiliser les insights automatiques",
          "Prédire les tendances business"
        ],
        audience: ["Analystes BI", "Contrôleurs de gestion", "Managers", "Consultants"],
        modalities: ["Formation intensive", "Cas d'usage métier", "Projets entreprise", "Certification Microsoft"]
      }
    ]
  },
  deepLearning: {
    name: "Deep Learning & Modèles",
    icon: "https://assets9.lottiefiles.com/packages/lf20_6aYlBl.json",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
    formations: [
      {
        title: "TensorFlow 2 + Keras",
        description: "Créez des modèles de deep learning performants",
        duration: "35h",
        format: "Présentiel",
        level: "Avancé",
        price: "2490",
        objectives: [
          "Maîtriser TensorFlow 2 et Keras",
          "Développer des réseaux de neurones complexes",
          "Optimiser les performances des modèles",
          "Déployer en production avec TensorFlow Serving"
        ],
        audience: ["Data scientists", "Ingénieurs ML", "Développeurs", "Chercheurs"],
        modalities: ["Formation intensive", "Projets avancés", "GPU cloud inclus", "Certification TensorFlow"]
      },
      {
        title: "GANs avec PyTorch",
        description: "Maîtrisez les réseaux antagonistes génératifs",
        duration: "28h",
        format: "Présentiel",
        level: "Avancé",
        price: "1990",
        objectives: [
          "Comprendre l'architecture des GANs",
          "Implémenter des GANs avec PyTorch",
          "Générer des images et contenus réalistes",
          "Optimiser l'entraînement des GANs"
        ],
        audience: ["Ingénieurs IA", "Chercheurs", "Développeurs avancés", "Data scientists"],
        modalities: ["Cours magistraux", "Labs pratiques", "Projets créatifs", "Recherche appliquée"]
      },
      {
        title: "LangChain + GPT mémoire",
        description: "Développez des agents IA avec mémoire",
        duration: "21h",
        format: "Blended",
        level: "Avancé",
        price: "1490",
        objectives: [
          "Maîtriser le framework LangChain",
          "Créer des agents IA conversationnels",
          "Implémenter la mémoire persistante",
          "Intégrer des sources de données externes"
        ],
        audience: ["Développeurs IA", "Architects", "Product managers", "Innovateurs"],
        modalities: ["Sessions techniques", "Code reviews", "Projets collaboratifs", "Mentorat expert"]
      }
    ]
  },
  creative: {
    name: "Création IA & Audiovisuel",
    icon: "https://assets10.lottiefiles.com/packages/lf20_Ht6xCY9yVm.json",
    image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800",
    formations: [
      {
        title: "Midjourney + DALL·E",
        description: "Créez des visuels professionnels avec l'IA",
        duration: "14h",
        format: "Distanciel",
        level: "Débutant",
        price: "790",
        objectives: [
          "Maîtriser Midjourney et DALL·E",
          "Créer des prompts visuels efficaces",
          "Produire des images pour différents usages",
          "Respecter les droits d'auteur et l'éthique"
        ],
        audience: ["Designers", "Marketeurs", "Créatifs", "Entrepreneurs"],
        modalities: ["Ateliers créatifs", "Galerie de projets", "Prompts templates", "Communauté créative"]
      },
      {
        title: "Doublage IA multilingue",
        description: "Créez des vidéos multilingues avec HeyGen et ElevenLabs",
        duration: "14h",
        format: "Blended",
        level: "Intermédiaire",
        price: "990",
        objectives: [
          "Cloner et synthétiser des voix",
          "Créer des avatars IA réalistes",
          "Produire du contenu multilingue",
          "Optimiser la qualité audio/vidéo"
        ],
        audience: ["Créateurs de contenu", "Formateurs", "Marketeurs", "Entrepreneurs"],
        modalities: ["Studios virtuels", "Projets vidéo", "Outils professionnels", "Portfolio final"]
      },
      {
        title: "Motion design IA",
        description: "Animez vos créations avec Kaiber et Genmo",
        duration: "21h",
        format: "Présentiel",
        level: "Intermédiaire",
        price: "1490",
        objectives: [
          "Créer des animations avec l'IA",
          "Maîtriser Kaiber et Genmo",
          "Produire du motion design professionnel",
          "Intégrer l'IA dans votre workflow créatif"
        ],
        audience: ["Motion designers", "Vidéastes", "Créatifs", "Agences"],
        modalities: ["Studio créatif", "Projets clients", "Outils premium", "Showcase final"]
      }
    ]
  },
  security: {
    name: "Cybersécurité & IA",
    icon: "https://assets3.lottiefiles.com/packages/lf20_u4qemvpl.json",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    formations: [
      {
        title: "IA & cybersécurité",
        description: "Protégez votre entreprise avec l'IA",
        duration: "28h",
        format: "Blended",
        level: "Avancé",
        price: "1990",
        objectives: [
          "Détecter les menaces avec l'IA",
          "Automatiser la réponse aux incidents",
          "Analyser les vulnérabilités",
          "Implémenter une stratégie de sécurité IA"
        ],
        audience: ["RSSI", "Ingénieurs sécurité", "IT managers", "Consultants"],
        modalities: ["Labs sécurisés", "Simulations d'attaques", "Outils professionnels", "Certification sécurité"]
      }
    ]
  }
};

const FormationsIAPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [expandedFormation, setExpandedFormation] = useState<string | null>(null);

  // Fonction pour gérer les erreurs d'images avec fallback multiple
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    // Image de fallback très fiable pour l'automatisation
    target.src = 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800';
  };

  // Get unique levels and formats
  const { levels, formats } = useMemo(() => {
    const levelsSet = new Set();
    const formatsSet = new Set();
    
    Object.values(formationsData).forEach(category => {
      category.formations.forEach(formation => {
        levelsSet.add(formation.level);
        formatsSet.add(formation.format);
      });
    });
    
    return {
      levels: Array.from(levelsSet),
      formats: Array.from(formatsSet)
    };
  }, []);

  // Filter formations
  const filteredFormations = useMemo(() => {
    return Object.entries(formationsData).filter(([key, category]) => {
      if (selectedDomain && key !== selectedDomain) return false;
      
      const hasMatchingFormations = category.formations.some(formation => {
        const matchesSearch = formation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            formation.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLevel = !selectedLevel || formation.level === selectedLevel;
        const matchesFormat = !selectedFormat || formation.format === selectedFormat;
        return matchesSearch && matchesLevel && matchesFormat;
      });
      
      return hasMatchingFormations;
    });
  }, [searchTerm, selectedDomain, selectedLevel, selectedFormat]);

  const clearFilters = () => {
    setSelectedDomain("");
    setSelectedLevel("");
    setSelectedFormat("");
    setSearchTerm("");
  };

  const toggleFormationDetails = (formationId: string) => {
    setExpandedFormation(expandedFormation === formationId ? null : formationId);
  };

  return (
    <>
      {/* Bug Reports - FormationsIAPage */}
      <BugReportWidget
        bugId="FIA001"
        description="Certaines images de formations peuvent ne pas se charger"
        severity="medium"
        location="FormationsIAPage - Cartes de formations"
        type="content"
        className="top-[50vh] right-4"
      />
      
      <BugReportWidget
        bugId="FIA002"
        description="Filtres peuvent ne pas fonctionner correctement sur mobile"
        severity="high"
        location="FormationsIAPage - Section filtres"
        type="responsive"
        className="top-[25vh] right-16"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-secondary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center"></div>
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Formez-vous aux outils IA les plus puissants du marché
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Boostez votre carrière avec nos 30 formations IA les plus demandées en 2025. 
              Utilisation concrète, pédagogie claire, certifiables.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#1877F2] hover:bg-[#166fe5] rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Je veux me former
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#1877F2] hover:bg-[#166fe5] rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Je veux former mon équipe
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="sticky top-0 z-30 bg-white border-b shadow-sm">
        <div className="container py-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative flex-grow max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher une formation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              <Filter size={20} />
              Filtres
              <ChevronDown size={16} className={`transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>

            {(selectedDomain || selectedLevel || selectedFormat || searchTerm) && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100"
              >
                <X size={16} />
                Réinitialiser les filtres
              </button>
            )}
          </div>

          {isFilterOpen && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Domaine</label>
                <select
                  value={selectedDomain}
                  onChange={(e) => setSelectedDomain(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Tous les domaines</option>
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
                      onError={handleImageError}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                    <p className="text-gray-600">Formations spécialisées et certifiantes</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.formations.filter(formation => {
                    const matchesSearch = (formation.title + formation.description).toLowerCase().includes(searchTerm.toLowerCase());
                    const matchesLevel = !selectedLevel || formation.level === selectedLevel;
                    const matchesFormat = !selectedFormat || formation.format === selectedFormat;
                    return matchesSearch && matchesLevel && matchesFormat;
                  }).map((formation, index) => {
                    const formationId = `${key}-${index}`;
                    const isExpanded = expandedFormation === formationId;
                    
                    return (
                      <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                        {/* Formation Image */}
                        <div className="h-48 rounded-t-xl overflow-hidden">
                          <img 
                            src={category.image} 
                            alt={formation.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            onError={handleImageError}
                            loading="lazy"
                          />
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{formation.title}</h3>
                          <p className="text-gray-600 mb-4 line-clamp-2">{formation.description}</p>
                          
                          <div className="space-y-3 mb-6">
                            <div className="flex items-center text-gray-600">
                              <Clock size={18} className="mr-2 text-primary" />
                              <span>{formation.duration}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Users size={18} className="mr-2 text-primary" />
                              <span>{formation.level}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <BookOpen size={18} className="mr-2 text-primary" />
                              <span>{formation.format}</span>
                            </div>
                            <div className="flex items-center text-primary font-semibold">
                              <Star size={18} className="mr-2" />
                              <span>À partir de {formation.price}€ HT</span>
                            </div>
                            <div className="flex items-center text-gray-600 mt-2">
                              <Award size={16} className="mr-2 text-primary" />
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
                              S'inscrire
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

      {/* Add JobAIHelper section before the FAQ */}
      <JobAIHelper />

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
            
            <div className="space-y-6">
              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold">Faut-il des connaissances en programmation ?</h3>
                  <ChevronDown className="transform group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    Non, la plupart de nos formations sont accessibles aux débutants. Nous proposons des 
                    parcours adaptés à tous les niveaux, avec ou sans compétences techniques préalables.
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
                    de compétences. Certaines formations permettent également d'obtenir une certification 
                    professionnelle reconnue.
                  </p>
                </div>
              </details>

              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold">Comment se déroule une formation en ligne ?</h3>
                  <ChevronDown className="transform group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    Nos formations en ligne combinent des vidéos, des exercices pratiques et un suivi 
                    personnalisé. Vous avez accès à une plateforme dédiée et pouvez échanger avec votre 
                    formateur et les autres participants.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - "Besoin d'un programme sur mesure ?" */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Besoin d'un programme sur mesure ?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Nos experts sont à votre disposition pour créer un parcours de formation 
                adapté à vos objectifs et contraintes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#1877F2] hover:bg-[#166fe5] rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Demander un devis sur mesure
                </Link>
                <a
                  href="tel:0162177770"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#1877F2] hover:bg-[#166fe5] rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Award size={20} className="mr-2" />
                  Parler à un expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Messenger Button */}
      <MessengerButton />
    </>
  );
};

export default FormationsIAPage;