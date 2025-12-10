import React from 'react';
import { ArrowRight, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * SECTION ULTRA-STABLE - FORMATIONS IA LES PLUS DEMANDÉES
 *
 * Cette section est VERROUILLÉE et STATIQUE.
 * Aucun carrousel, aucun état dynamique, aucune logique qui pourrait masquer le contenu.
 * Tous les textes, images et boutons sont TOUJOURS VISIBLES.
 */

// Données hardcodées et stables - NE PAS MODIFIER SANS RAISON
const formationsStables = [
  {
    id: 'ia-quotidien-1',
    titre: "IA pour gagner du temps au quotidien",
    description: "Automatisations, rédaction, organisation",
    details: "Apprenez à utiliser ChatGPT, Notion AI et autres outils pour automatiser vos tâches répétitives et gagner plusieurs heures par jour",
    publicCible: "Tous professionnels, TPE/PME, indépendants",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "ia-quotidien-productivite"
  },
  {
    id: 'ia-marketing-2',
    titre: "IA pour le marketing & la vente",
    description: "Ads, contenus, CRM, prospection",
    details: "Créez des campagnes marketing performantes, générez du contenu engageant et optimisez votre prospection commerciale avec l'IA",
    publicCible: "Marketeurs, commerciaux, entrepreneurs",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "ia-marketing-vente"
  },
  {
    id: 'ia-equipe-3',
    titre: "IA pour la productivité d'équipe",
    description: "Process internes, reporting, support",
    details: "Optimisez la collaboration de vos équipes avec des outils IA pour la gestion de projet, le reporting automatisé et le support client",
    publicCible: "Managers, chefs de projet, RH",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "ia-productivite-equipe"
  },
  {
    id: 'ia-strategie-4',
    titre: "IA pour dirigeants & stratégie",
    description: "Cas d'usage, décisions, roadmap",
    details: "Intégrez l'IA dans votre stratégie d'entreprise, identifiez les opportunités et prenez des décisions éclairées grâce à l'analyse de données",
    publicCible: "Dirigeants, décideurs, consultants",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "ia-dirigeants-strategie"
  }
];

const AIFormationsSection: React.FC = () => {
  // Fonction de gestion d'erreur image ultra-sécurisée
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    // Forcer l'affichage même en cas d'erreur
    target.style.opacity = '1';
    target.style.display = 'block';
    target.style.visibility = 'visible';
    // Image de secours ultra-fiable
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
            votre façon de travailler et booster votre productivité au quotidien.
          </p>
        </div>

        {/* GRILLE DE 4 CARTES - STATIQUE ET STABLE - PAS DE SLIDER */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{
            display: 'grid',
            visibility: 'visible',
            opacity: 1
          }}
        >
          {formationsStables.map((formation) => (
            <div
              key={formation.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-300"
              style={{
                display: 'block',
                visibility: 'visible',
                opacity: 1,
                position: 'relative'
              }}
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
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="eager"
                  onError={handleImageError}
                  style={{
                    opacity: 1,
                    display: 'block',
                    visibility: 'visible'
                  }}
                />

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
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md">
                    🧠 IA
                  </span>
                </div>

                {/* Badge Tendance - TOUJOURS VISIBLE */}
                <div
                  className="absolute top-4 right-4"
                  style={{
                    zIndex: 10,
                    display: 'block',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-red-500 text-white shadow-md">
                    🔥 Populaire
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
                  className="text-lg font-bold mb-3 text-gray-900 leading-tight min-h-[56px]"
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
                  className="text-sm text-gray-600 mb-3 font-medium"
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
                  className="text-sm text-gray-600 mb-4 leading-relaxed"
                  style={{
                    display: 'block',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  {formation.details}
                </p>

                {/* Public cible - TOUJOURS VISIBLE */}
                <div
                  className="flex items-start mb-4 bg-blue-50 p-3 rounded-lg"
                  style={{
                    display: 'flex',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  <Users size={16} className="mr-2 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span
                    className="text-xs text-gray-700"
                    style={{
                      display: 'block',
                      visibility: 'visible',
                      opacity: 1
                    }}
                  >
                    <strong>Pour :</strong> {formation.publicCible}
                  </span>
                </div>
              </div>

              {/* FOOTER AVEC BOUTON CTA - TOUJOURS VISIBLE */}
              <div
                className="px-6 py-4 bg-gray-50 border-t border-gray-100"
                style={{
                  display: 'block',
                  visibility: 'visible',
                  opacity: 1
                }}
              >
                <Link
                  to="/contact"
                  className="flex justify-between items-center w-full group"
                  style={{
                    display: 'flex',
                    visibility: 'visible',
                    opacity: 1,
                    textDecoration: 'none'
                  }}
                >
                  {/* BOUTON CTA - VERROUILLÉ ET TOUJOURS VISIBLE */}
                  <span
                    className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-bold text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    style={{
                      backgroundColor: '#1877F2',
                      display: 'inline-flex',
                      visibility: 'visible',
                      opacity: 1
                    }}
                  >
                    Voir le programme
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-blue-600 group-hover:translate-x-1 transition-transform"
                    style={{
                      display: 'block',
                      visibility: 'visible',
                      opacity: 1
                    }}
                  />
                </Link>
              </div>
            </div>
          ))}
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
            <span className="mr-2">🧠</span>
            Voir toutes nos formations IA
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIFormationsSection;
