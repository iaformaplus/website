import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, Laptop, Building, Award, Zap, CheckCircle, Clock, Globe, Phone, Mail, BookOpen } from 'lucide-react';

// Format data with detailed information
const formatsData = {
  "presentiel": {
    title: "Formations en Présentiel",
    icon: Users,
    color: "blue",
    definition: "Sessions de formation organisées dans nos centres ou dans vos locaux, avec un formateur présent physiquement pour un accompagnement personnalisé et des échanges directs.",
    advantages: [
      "Interaction directe avec le formateur",
      "Échanges enrichissants entre participants",
      "Manipulation d'équipements réels",
      "Concentration optimale sans distractions",
      "Networking et création de liens professionnels"
    ],
    useCases: [
      "Formations techniques nécessitant de la pratique",
      "Apprentissage de logiciels complexes",
      "Formations sécurité avec manipulation",
      "Développement de compétences relationnelles",
      "Formations certifiantes exigeantes"
    ],
    functioning: "Sessions organisées dans nos centres équipés ou dans vos locaux. Groupes de 4 à 12 participants maximum. Matériel pédagogique fourni. Pauses et déjeuner inclus selon la durée.",
    qualiopi: "Toutes nos formations présentielles sont certifiées Qualiopi. Elles bénéficient d'un suivi pédagogique renforcé et sont éligibles à tous les dispositifs de financement (OPCO, CPF, plan de formation)."
  },
  "distanciel": {
    title: "Formations en Distanciel",
    icon: Laptop,
    color: "green",
    definition: "Classes virtuelles en direct avec un formateur expert, utilisant des outils collaboratifs modernes pour recréer l'expérience d'une formation présentielle.",
    advantages: [
      "Pas de déplacement nécessaire",
      "Flexibilité géographique totale",
      "Outils collaboratifs modernes",
      "Enregistrement des sessions disponible",
      "Coût réduit (pas de frais de déplacement)"
    ],
    useCases: [
      "Équipes dispersées géographiquement",
      "Contraintes de déplacement",
      "Formations théoriques et conceptuelles",
      "Mise à jour de compétences rapide",
      "Formations en langues étrangères"
    ],
    functioning: "Classes virtuelles via plateforme dédiée (Zoom, Teams). Sessions interactives avec partage d'écran, tableaux blancs collaboratifs, salles de sous-groupes. Support technique inclus.",
    qualiopi: "Nos formations distancielles sont certifiées Qualiopi avec traçabilité complète des connexions et interactions. Éligibles aux mêmes financements que le présentiel."
  },
  "elearning": {
    title: "Formations E-learning",
    icon: BookOpen,
    color: "purple",
    definition: "Modules de formation 100% autonomes, accessibles 24h/24 sur notre plateforme LMS, avec contenus interactifs, quiz et suivi personnalisé de progression.",
    advantages: [
      "Apprentissage à votre rythme",
      "Accès 24h/24, 7j/7",
      "Répétition illimitée des modules",
      "Suivi détaillé de la progression",
      "Coût très compétitif"
    ],
    useCases: [
      "Emplois du temps très contraints",
      "Apprentissage en autonomie",
      "Remise à niveau rapide",
      "Formations de masse en entreprise",
      "Préparation à une certification"
    ],
    functioning: "Plateforme LMS accessible via navigateur. Modules vidéo HD, documents PDF, exercices interactifs, quiz d'évaluation. Support pédagogique par email ou chat.",
    qualiopi: "Modules e-learning certifiés Qualiopi avec traçabilité complète du parcours. Temps de connexion et résultats aux quiz enregistrés. Éligibles CPF et financements OPCO."
  },
  "mixte": {
    title: "Formations Mixtes (Blended Learning)",
    icon: Zap,
    color: "orange",
    definition: "Combinaison optimale de présentiel, distanciel et e-learning pour maximiser l'efficacité pédagogique selon les objectifs de chaque module.",
    advantages: [
      "Flexibilité maximale d'organisation",
      "Pédagogie adaptée à chaque contenu",
      "Optimisation des coûts et du temps",
      "Suivi continu et personnalisé",
      "Meilleur taux de réussite"
    ],
    useCases: [
      "Formations longues et complexes",
      "Alternance théorie/pratique",
      "Contraintes organisationnelles variées",
      "Parcours de professionnalisation",
      "Formations diplômantes"
    ],
    functioning: "Parcours personnalisé combinant sessions présentielles pour la pratique, classes virtuelles pour les échanges, et modules e-learning pour la théorie. Planning adapté à vos contraintes.",
    qualiopi: "Parcours mixtes certifiés Qualiopi avec traçabilité de toutes les modalités. Évaluation continue et finale. Financement possible selon la répartition des modalités."
  },
  "inter-entreprise": {
    title: "Formations Inter-entreprises",
    icon: Users,
    color: "blue",
    definition: "Sessions de formation ouvertes à tous, regroupant des participants de différentes entreprises dans nos centres de formation ou en classe virtuelle.",
    advantages: [
      "Coût optimisé par participant",
      "Échange d'expériences entre professionnels",
      "Planning fixe et régulier",
      "Networking et partage de bonnes pratiques",
      "Formateurs experts spécialisés"
    ],
    useCases: [
      "Montée en compétences individuelle",
      "Formation de 1 à 3 collaborateurs",
      "Découverte de nouvelles technologies",
      "Certification professionnelle",
      "Développement personnel"
    ],
    functioning: "Inscription sur sessions programmées, groupes de 4 à 12 participants, supports fournis, certificat de réalisation délivré.",
    qualiopi: "Toutes nos formations inter-entreprises sont certifiées Qualiopi et éligibles aux financements OPCO, CPF et plan de développement des compétences."
  },
  "intra-entreprise": {
    title: "Formations Intra-entreprise",
    icon: Building,
    color: "purple",
    definition: "Formations organisées exclusivement pour vos équipes, dans vos locaux ou en classe virtuelle dédiée, aux dates de votre choix.",
    advantages: [
      "Contenu adapté à vos besoins spécifiques",
      "Confidentialité et cohésion d'équipe",
      "Flexibilité des dates et horaires",
      "Optimisation des coûts pour groupes",
      "Suivi personnalisé post-formation"
    ],
    useCases: [
      "Formation d'équipes complètes",
      "Projets de transformation",
      "Mise en place de nouveaux outils",
      "Harmonisation des pratiques",
      "Formation de 4 à 15 personnes"
    ],
    functioning: "Analyse des besoins, programme sur-mesure, animation dans vos locaux, évaluation et suivi des acquis.",
    qualiopi: "Formations intra-entreprise certifiées Qualiopi, éligibles aux financements OPCO et plan de formation entreprise."
  },
  "sur-mesure": {
    title: "Formations sur-mesure",
    icon: Award,
    color: "green",
    definition: "Accompagnement personnalisé conçu spécifiquement pour vos objectifs, votre secteur d'activité et vos enjeux métiers.",
    advantages: [
      "Programme 100% personnalisé",
      "Prise en compte de votre contexte métier",
      "Formateurs experts de votre secteur",
      "Méthodes pédagogiques adaptées",
      "ROI optimisé et mesurable"
    ],
    useCases: [
      "Besoins très spécifiques",
      "Secteurs d'activité particuliers",
      "Projets stratégiques",
      "Transformation digitale",
      "Accompagnement au changement"
    ],
    functioning: "Audit des besoins, co-construction du programme, animation experte, évaluation des résultats et plan d'amélioration.",
    qualiopi: "Formations sur-mesure certifiées Qualiopi, financement possible via OPCO selon les modalités définies ensemble."
  },
  "e-learning": {
    title: "Formations E-learning",
    icon: Laptop,
    color: "orange",
    definition: "Modules de formation 100% digitaux, accessibles 24h/24 sur tous supports, avec contenus interactifs et suivi pédagogique.",
    advantages: [
      "Flexibilité totale d'apprentissage",
      "Rythme personnalisé",
      "Accès multi-supports (PC, mobile, tablette)",
      "Coût réduit",
      "Suivi des progrès en temps réel"
    ],
    useCases: [
      "Contraintes géographiques",
      "Emplois du temps chargés",
      "Formation continue",
      "Mise à niveau rapide",
      "Apprentissage autonome"
    ],
    functioning: "Plateforme LMS dédiée, vidéos HD, exercices interactifs, quiz d'évaluation, support pédagogique à distance.",
    qualiopi: "Modules e-learning certifiés Qualiopi, traçabilité complète des apprentissages, éligibles CPF et financements OPCO."
  },
  "digital-learning": {
    title: "Digital Learning & Innovation",
    icon: Zap,
    color: "indigo",
    definition: "Nouvelles méthodes d'apprentissage combinant classes virtuelles, réalité virtuelle, IA et outils immersifs pour une expérience pédagogique innovante.",
    advantages: [
      "Technologies pédagogiques de pointe",
      "Engagement et mémorisation renforcés",
      "Simulations réalistes",
      "Apprentissage collaboratif",
      "Mesure précise des acquis"
    ],
    useCases: [
      "Formations techniques complexes",
      "Simulation de situations dangereuses",
      "Apprentissage immersif",
      "Formation de nouvelle génération",
      "Innovation pédagogique"
    ],
    functioning: "Classes virtuelles interactives, modules VR/AR, IA adaptive, gamification, analytics d'apprentissage avancés.",
    qualiopi: "Méthodes digital learning certifiées Qualiopi, innovation pédagogique reconnue, financement possible selon modalités."
  }
};

const FormatPage: React.FC = () => {
  const { format } = useParams<{ format: string }>();
  const formatData = format ? formatsData[format as keyof typeof formatsData] : null;

  if (!formatData) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Format non trouvé</h1>
        <p className="text-gray-600 mb-8">Le format de formation que vous recherchez n'existe pas.</p>
        <Link to="/" className="btn-primary">
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  const IconComponent = formatData.icon;
  const colorClasses = {
    blue: "from-blue-500 to-blue-600 text-blue-600 bg-blue-50 border-blue-200",
    purple: "from-purple-500 to-purple-600 text-purple-600 bg-purple-50 border-purple-200",
    green: "from-green-500 to-green-600 text-green-600 bg-green-50 border-green-200",
    orange: "from-orange-500 to-orange-600 text-orange-600 bg-orange-50 border-orange-200",
    indigo: "from-indigo-500 to-indigo-600 text-indigo-600 bg-indigo-50 border-indigo-200"
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-secondary text-white py-16">
        <div className="container">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              to="/" 
              className="flex items-center text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Retour à l'accueil
            </Link>
          </div>
          <div className="flex items-center gap-6 mb-8">
            <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses[formatData.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[formatData.color as keyof typeof colorClasses].split(' ')[1]} rounded-2xl flex items-center justify-center`}>
              <IconComponent size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{formatData.title}</h1>
              <p className="text-gray-200 text-lg">Format de formation adapté à vos besoins</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            
            {/* Definition */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <div className={`w-8 h-8 bg-gradient-to-br ${colorClasses[formatData.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[formatData.color as keyof typeof colorClasses].split(' ')[1]} rounded-full flex items-center justify-center mr-3`}>
                  <span className="text-white font-bold text-sm">?</span>
                </div>
                Qu'est-ce que c\'est ?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">{formatData.definition}</p>
            </div>

            {/* Advantages */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <CheckCircle size={24} className={`mr-3 ${colorClasses[formatData.color as keyof typeof colorClasses].split(' ')[2]}`} />
                Avantages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formatData.advantages.map((advantage, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${colorClasses[formatData.color as keyof typeof colorClasses].split(' ')[3]} ${colorClasses[formatData.color as keyof typeof colorClasses].split(' ')[4]}`}>
                    <div className="flex items-start">
                      <div className={`w-6 h-6 bg-gradient-to-br ${colorClasses[formatData.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[formatData.color as keyof typeof colorClasses].split(' ')[1]} rounded-full flex items-center justify-center mr-3 mt-1`}>
                        <CheckCircle size={14} className="text-white" />
                      </div>
                      <span className="text-gray-700">{advantage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Users size={24} className={`mr-3 ${colorClasses[formatData.color as keyof typeof colorClasses].split(' ')[2]}`} />
                Cas d'usage
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {formatData.useCases.map((useCase, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 bg-gradient-to-br ${colorClasses[formatData.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[formatData.color as keyof typeof colorClasses].split(' ')[1]} rounded-full mr-3`}></div>
                      <span className="text-gray-700 font-medium">{useCase}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Functioning */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Clock size={24} className={`mr-3 ${colorClasses[formatData.color as keyof typeof colorClasses].split(' ')[2]}`} />
                Comment ça fonctionne ?
              </h2>
              <div className={`p-6 rounded-lg border ${colorClasses[formatData.color as keyof typeof colorClasses].split(' ')[3]} ${colorClasses[formatData.color as keyof typeof colorClasses].split(' ')[4]}`}>
                <p className="text-gray-700 leading-relaxed">{formatData.functioning}</p>
              </div>
            </div>

            {/* Qualiopi */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Globe size={24} className={`mr-3 ${colorClasses[formatData.color as keyof typeof colorClasses].split(' ')[2]}`} />
                Certification Qualiopi
              </h2>
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <div className="flex items-start">
                  <img 
                    src="/Screenshot 2025-06-22 204332.png" 
                    alt="Logo Qualiopi" 
                    className="h-12 w-auto object-contain mr-4"
                  />
                  <p className="text-gray-700 leading-relaxed">{formatData.qualiopi}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Intéressé par ce format ?</h3>
                <p className="text-gray-600 mb-6">
                  Contactez nos conseillers pour définir ensemble la solution de formation 
                  la plus adaptée à vos besoins.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="btn-primary"
                  >
                    Demander un devis
                  </Link>
                  <a 
                    href="tel:0162177770"
                    className="flex items-center justify-center px-6 py-3 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                  >
                    <Phone size={20} className="mr-2" />
                    01 62 17 77 70
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormatPage;