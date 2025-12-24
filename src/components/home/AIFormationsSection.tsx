import React, { useState } from 'react';
import { ArrowRight, Users, Target, Clock, Award, ChevronDown, CheckCircle, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * SECTION FORMATIONS IA - AFFICHAGE INLINE SANS NAVIGATION
 *
 * Affiche les détails de formation directement sur la page d'accueil
 * au clic, sans aucune redirection.
 * Comportement accordéon/expand pour l'interaction.
 */

// Données complètes avec TOUT le contenu détaillé
const formationsStables = [
  {
    id: 'ia-productivite-quotidien',
    titre: "IA & Productivité au quotidien",
    description: "Automatisations, rédaction, organisation",
    details: "Maîtrisez ChatGPT, Notion AI et autres outils IA pour automatiser vos tâches répétitives, rédiger vos emails et documents, et organiser votre travail. Gagnez plusieurs heures par jour.",
    publicCible: "Tous professionnels, TPE/PME, indépendants",
    duree: "7h",
    format: "E-learning ou Distanciel",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    objectifs: [
      "Utiliser ChatGPT et les assistants IA pour automatiser les tâches répétitives",
      "Rédiger rapidement emails, documents et rapports avec l'IA",
      "Organiser et structurer votre travail avec Notion AI",
      "Gagner plusieurs heures par jour grâce à l'automatisation"
    ],
    prerequis: [
      "Utilisation basique d'un ordinateur et d'Internet",
      "Aucune compétence technique particulière requise",
      "Motivation pour gagner en efficacité"
    ],
    programme: [
      "Découverte des outils IA (ChatGPT, Claude, Gemini)",
      "Rédaction et communication professionnelle",
      "Organisation et productivité avec Notion AI",
      "Automatisations pratiques et templates réutilisables",
      "Plan d'action personnalisé post-formation"
    ]
  },
  {
    id: 'ia-marketing-vente',
    titre: "IA pour Marketing & Vente",
    description: "Ads, contenus, CRM, prospection",
    details: "Boostez vos performances commerciales et marketing. Créez des campagnes performantes, générez du contenu engageant, automatisez votre prospection et optimisez votre CRM avec l'IA.",
    publicCible: "Marketeurs, commerciaux, entrepreneurs",
    duree: "14h",
    format: "Présentiel ou Distanciel",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    objectifs: [
      "Créer des campagnes publicitaires optimisées avec l'IA",
      "Générer du contenu marketing engageant pour tous les canaux",
      "Automatiser et personnaliser la prospection commerciale",
      "Optimiser le CRM et le parcours client avec l'IA"
    ],
    prerequis: [
      "Connaissances de base en marketing ou vente",
      "Utilisation d'outils digitaux",
      "Expérience en prospection ou marketing digital recommandée"
    ],
    programme: [
      "IA pour la création de contenu (posts, landing pages, newsletters)",
      "IA pour la publicité (Google Ads, Facebook, Instagram)",
      "IA pour la prospection (automatisation, scoring, séquences)",
      "IA pour le CRM (intégration HubSpot, Salesforce, prédictions)",
      "Analyse des performances et optimisation continue"
    ]
  },
  {
    id: 'ia-automatisation-process',
    titre: "IA & Automatisation des process",
    description: "Process internes, reporting, support",
    details: "Optimisez la productivité de vos équipes. Automatisez les workflows, le reporting et déployez un support client intelligent avec les outils IA et no-code.",
    publicCible: "Managers, chefs de projet, Ops",
    duree: "14h",
    format: "Intra-entreprise ou Distanciel",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    objectifs: [
      "Identifier et automatiser les processus à faible valeur ajoutée",
      "Créer des workflows intelligents avec Make, Zapier et n8n",
      "Automatiser la génération de rapports et tableaux de bord",
      "Mettre en place un support client intelligent et automatisé"
    ],
    prerequis: [
      "Connaissances des processus de l'entreprise",
      "Utilisation d'outils web et SaaS",
      "Aucune compétence de programmation requise"
    ],
    programme: [
      "Cartographie et identification des processus automatisables",
      "Automatisation no-code avec Make et Zapier",
      "Reporting automatisé avec génération IA",
      "Support client IA (chatbot, réponses automatiques)",
      "Mesure de performance et optimisation"
    ]
  },
  {
    id: 'ia-dirigeants-strategie',
    titre: "IA pour Dirigeants & Stratégie",
    description: "Cas d'usage, décisions, roadmap",
    details: "Intégrez l'IA dans votre stratégie d'entreprise. Identifiez les opportunités business, prenez des décisions éclairées et définissez votre roadmap de transformation IA.",
    publicCible: "Dirigeants, décideurs, consultants",
    duree: "7h",
    format: "Sur-mesure ou Présentiel",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
    objectifs: [
      "Comprendre les enjeux stratégiques de l'IA pour votre secteur",
      "Identifier les cas d'usage à fort impact business",
      "Utiliser l'IA pour l'aide à la décision stratégique",
      "Définir et piloter une roadmap de transformation IA"
    ],
    prerequis: [
      "Fonction de direction ou management stratégique",
      "Compréhension des enjeux business de l'entreprise",
      "Aucune compétence technique requise"
    ],
    programme: [
      "IA et stratégie d'entreprise (panorama, impact secteur, ROI)",
      "Identifier les cas d'usage stratégiques",
      "IA pour la prise de décision (analyse données, scénarios)",
      "Roadmap et mise en œuvre (gouvernance, changement)",
      "Mesure et pilotage de la performance"
    ]
  }
];

const AIFormationsSection: React.FC = () => {
  // État pour gérer quelle carte est étendue (null = aucune)
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Toggle l'expansion d'une carte
  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Fonction de gestion d'erreur image
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.style.opacity = '1';
    target.style.display = 'block';
    target.style.visibility = 'visible';
    target.src = 'https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=800';
  };

  return (
    <section
      className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      style={{
        position: 'relative',
        zIndex: 1,
        display: 'block',
        visibility: 'visible',
        opacity: 1
      }}
    >
      <div className="container mx-auto px-4">
        {/* En-tête de section - TOUJOURS VISIBLE */}
        <div
          className="text-center mb-12"
          style={{
            display: 'block',
            visibility: 'visible',
            opacity: 1
          }}
        >
          {/* Icône décorative */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Titre principal - VERROUILLÉ */}
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            style={{
              display: 'block',
              visibility: 'visible',
              opacity: 1
            }}
          >
            Formations IA les plus demandées
          </h2>

          {/* Sous-titre - VERROUILLÉ */}
          <p
            className="text-gray-600 max-w-3xl mx-auto text-lg"
            style={{
              display: 'block',
              visibility: 'visible',
              opacity: 1
            }}
          >
            Découvrez nos formations en intelligence artificielle les plus populaires, conçues pour transformer
            votre façon de travailler et booster votre productivité au quotidien. Formations certifiées Qualiopi.
          </p>
        </div>

        {/* GRILLE DE 4 CARTES AVEC EXPAND INLINE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {formationsStables.map((formation) => {
            const isExpanded = expandedId === formation.id;

            return (
            <div
              key={formation.id}
              className={`bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border ${
                isExpanded ? 'border-blue-500 lg:col-span-2' : 'border-gray-100 hover:border-blue-400'
              }`}
            >
              {/* PARTIE TOUJOURS VISIBLE - CLIQUABLE POUR EXPAND */}
              <div
                onClick={() => toggleExpand(formation.id)}
                className="cursor-pointer"
              >
                {/* IMAGE - TOUJOURS VISIBLE AVEC FOND DE SECOURS */}
                <div
                  className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-100"
                  style={{
                    display: 'block',
                    visibility: 'visible',
                    opacity: 1,
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={formation.image}
                    alt={formation.titre}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading="eager"
                    onError={handleImageError}
                    style={{
                      opacity: 1,
                      display: 'block',
                      visibility: 'visible'
                    }}
                  />

                  {/* Overlay au hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Badge IA - TOUJOURS VISIBLE */}
                  <div
                    className="absolute top-4 left-4"
                    style={{
                      zIndex: 10,
                      display: 'block',
                      visibility: 'visible',
                      opacity: 1
                    }}
                  >
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
                      IA
                    </span>
                  </div>

                  {/* Badge Populaire - TOUJOURS VISIBLE */}
                  <div
                    className="absolute top-4 right-4"
                    style={{
                      zIndex: 10,
                      display: 'block',
                      visibility: 'visible',
                      opacity: 1
                    }}
                  >
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-bold bg-red-500 text-white shadow-lg">
                      Top
                    </span>
                  </div>
                </div>

                {/* CONTENU TEXTUEL - VERROUILLÉ ET TOUJOURS VISIBLE */}
                <div
                  className="p-6"
                  style={{
                    display: 'block',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  {/* Titre de la formation - TOUJOURS VISIBLE */}
                  <h3
                    className="text-lg font-bold mb-3 text-gray-900 leading-tight min-h-[56px] hover:text-blue-600 transition-colors"
                    style={{
                      display: 'block',
                      visibility: 'visible',
                      opacity: 1
                    }}
                  >
                    {formation.titre}
                  </h3>

                  {/* Description courte - TOUJOURS VISIBLE */}
                  <p
                    className="text-sm text-blue-600 font-bold mb-3"
                    style={{
                      display: 'block',
                      visibility: 'visible',
                      opacity: 1
                    }}
                  >
                    {formation.description}
                  </p>

                  {/* Détails - TOUJOURS VISIBLES */}
                  <p
                    className="text-sm text-gray-700 mb-4 leading-relaxed"
                    style={{
                      display: 'block',
                      visibility: 'visible',
                      opacity: 1
                    }}
                  >
                    {formation.details}
                  </p>

                  {/* Infos pratiques - TOUJOURS VISIBLES */}
                  <div
                    className="space-y-2 mb-4"
                    style={{
                      display: 'block',
                      visibility: 'visible',
                      opacity: 1
                    }}
                  >
                    {/* Public cible */}
                    <div
                      className="flex items-start text-xs text-gray-600"
                      style={{
                        display: 'flex',
                        visibility: 'visible',
                        opacity: 1
                      }}
                    >
                      <Users size={14} className="mr-2 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Pour :</strong> {formation.publicCible}</span>
                    </div>

                    {/* Durée */}
                    <div
                      className="flex items-start text-xs text-gray-600"
                      style={{
                        display: 'flex',
                        visibility: 'visible',
                        opacity: 1
                      }}
                    >
                      <Clock size={14} className="mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Durée :</strong> {formation.duree}</span>
                    </div>

                    {/* Format */}
                    <div
                      className="flex items-start text-xs text-gray-600"
                      style={{
                        display: 'flex',
                        visibility: 'visible',
                        opacity: 1
                      }}
                    >
                      <Target size={14} className="mr-2 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Format :</strong> {formation.format}</span>
                    </div>

                    {/* Certification */}
                    <div
                      className="flex items-start text-xs text-gray-600"
                      style={{
                        display: 'flex',
                        visibility: 'visible',
                        opacity: 1
                      }}
                    >
                      <Award size={14} className="mr-2 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Certificat Qualiopi</strong></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION DÉTAILLÉE - AFFICHÉE QUAND EXPANDED */}
              {isExpanded && (
                <div className="border-t border-gray-200 bg-gray-50 p-6 animate-slide-down">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Colonne gauche - Objectifs et Programme */}
                    <div className="space-y-4">
                      {/* Objectifs */}
                      <div>
                        <h4 className="flex items-center font-bold text-lg mb-3 text-gray-900">
                          <Target size={18} className="mr-2 text-blue-600" />
                          Objectifs pédagogiques
                        </h4>
                        <ul className="space-y-2">
                          {formation.objectifs.map((obj, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-700">
                              <CheckCircle size={16} className="mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Programme */}
                      <div>
                        <h4 className="flex items-center font-bold text-lg mb-3 text-gray-900">
                          <Award size={18} className="mr-2 text-blue-600" />
                          Mini-programme
                        </h4>
                        <ul className="space-y-2">
                          {formation.programme.map((module, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-700">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span>{module}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Colonne droite - Infos pratiques et CTA */}
                    <div className="space-y-4">
                      {/* Prérequis */}
                      <div>
                        <h4 className="flex items-center font-bold text-lg mb-3 text-gray-900">
                          <Users size={18} className="mr-2 text-blue-600" />
                          Prérequis
                        </h4>
                        <ul className="space-y-2">
                          {formation.prerequis.map((prereq, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-700">
                              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span>{prereq}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Infos pratiques */}
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <h4 className="font-bold text-sm mb-3 text-gray-900">Informations pratiques</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center text-gray-700">
                            <Clock size={14} className="mr-2 text-blue-600" />
                            <span><strong>Durée :</strong> {formation.duree}</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <Users size={14} className="mr-2 text-blue-600" />
                            <span><strong>Public :</strong> {formation.publicCible}</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <Target size={14} className="mr-2 text-blue-600" />
                            <span><strong>Format :</strong> {formation.format}</span>
                          </div>
                        </div>
                      </div>

                      {/* Tarifs */}
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h4 className="font-bold text-sm mb-3 text-gray-900">Tarifs</h4>
                        <div className="space-y-2 text-xs text-gray-700">
                          <p className="font-semibold text-blue-600">Tarifs à partir de (sur devis).</p>
                          <p>Le prix varie selon :</p>
                          <ul className="space-y-1 ml-3">
                            <li className="flex items-start">
                              <span className="inline-block w-1 h-1 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                              <span>le format, la durée, le niveau</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-1 h-1 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                              <span>le nombre de participants, le lieu</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-1 h-1 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                              <span>les besoins spécifiques</span>
                            </li>
                          </ul>
                          <p className="mt-2">Le tarif définitif est celui indiqué sur la proposition commerciale et/ou la convention de formation.</p>
                          <p>Des frais spécifiques peuvent s'ajouter si nécessaire (déplacements, licences, matériel).</p>
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="space-y-2">
                        <Link
                          to="/contact"
                          className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold w-full"
                        >
                          Demander un devis
                        </Link>
                        <a
                          href="tel:0162177770"
                          className="flex items-center justify-center px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-semibold w-full"
                        >
                          <Phone size={16} className="mr-2" />
                          Être rappelé
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Bouton pour replier */}
                  <div className="mt-4 text-center">
                    <button
                      onClick={() => setExpandedId(null)}
                      className="text-sm text-gray-600 hover:text-gray-900 flex items-center mx-auto"
                    >
                      Replier
                      <ChevronDown size={16} className="ml-1 rotate-180" />
                    </button>
                  </div>
                </div>
              )}

              {/* FOOTER - BOUTON POUR EXPAND SI NON EXPANDED */}
              {!isExpanded && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <button
                    onClick={() => toggleExpand(formation.id)}
                    className="flex justify-between items-center w-full group"
                  >
                    <span className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-bold text-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-blue-600">
                      Voir les détails
                    </span>
                    <ChevronDown size={18} className="text-blue-600 group-hover:translate-y-1 transition-transform" />
                  </button>
                </div>
              )}
            </div>
            );
          })}
        </div>

        {/* BOUTON "VOIR TOUTES LES FORMATIONS" - TOUJOURS VISIBLE */}
        <div
          className="text-center mt-12"
          style={{
            display: 'block',
            visibility: 'visible',
            opacity: 1
          }}
        >
          <Link
            to="/formations-ia"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            style={{
              backgroundColor: '#1877F2',
              display: 'inline-flex',
              visibility: 'visible',
              opacity: 1,
              textDecoration: 'none'
            }}
          >
            Voir toutes nos formations IA
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIFormationsSection;
