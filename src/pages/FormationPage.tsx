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