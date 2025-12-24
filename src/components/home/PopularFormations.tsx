import React from 'react';
import { ArrowRight, Clock, User, BookOpen, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * SECTION ULTRA-STABLE - FORMATIONS POPULAIRES
 *
 * Cette section est VERROUILLÉE et STATIQUE.
 * Aucune logique dynamique qui pourrait masquer le contenu.
 * Tous les textes, images et boutons sont TOUJOURS VISIBLES.
 */

// Données hardcodées et stables - NE PAS MODIFIER SANS RAISON
const formationsPopulaires = [
  {
    id: 'formation-1',
    title: "Habilitation véhicules électriques B1VL-B2VL",
    category: "Technique",
    duration: "21h",
    format: "Présentiel",
    level: "Intermédiaire",
    image: "https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "habilitation-vehicules-electriques-b1-b2",
    excerpt: "Formation certifiante pour intervenir en sécurité sur les véhicules électriques et hybrides selon la norme NF C18-550.",
  },
  {
    id: 'formation-2',
    title: "Marketing digital avancé",
    category: "Marketing",
    duration: "14h",
    format: "Distanciel",
    level: "Avancé",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "marketing-digital-avance",
    excerpt: "Maîtrisez les stratégies d'acquisition et de fidélisation client dans l'environnement numérique.",
  },
  {
    id: 'formation-3',
    title: "Créer et gérer une boutique E-commerce performante",
    category: "E-commerce",
    duration: "35h",
    format: "Présentiel",
    level: "Intermédiaire",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "e-commerce",
    excerpt: "Formation pratique pour lancer et optimiser votre activité en ligne. Apprenez à créer, gérer et développer une boutique e-commerce rentable.",
  },
  {
    id: 'formation-4',
    title: "Techniques de vente et management",
    category: "Management",
    duration: "35h",
    format: "Présentiel",
    level: "Intermédiaire",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "techniques-vente-management",
    excerpt: "Formation complète alliant techniques de vente avancées et compétences managériales pour les responsables commerciaux.",
  }
];

const PopularFormations: React.FC = () => {
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
      className="py-16 bg-white"
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
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            style={{
              display: 'block',
              visibility: 'visible',
              opacity: 1
            }}
          >
            Formations populaires
          </h2>
          <p
            className="text-gray-600 max-w-3xl mx-auto"
            style={{
              display: 'block',
              visibility: 'visible',
              opacity: 1
            }}
          >
            Découvrez nos formations les plus demandées, conçues pour répondre aux besoins actuels du marché
            et certifiées Qualiopi pour garantir leur qualité.
          </p>
        </div>

        {/* GRILLE DE 4 CARTES - STATIQUE ET STABLE */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{
            display: 'grid',
            visibility: 'visible',
            opacity: 1
          }}
        >
          {formationsPopulaires.map((formation) => (
            <Link
              key={formation.id}
              to={`/formations/${formation.slug}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-300 block"
              style={{
                display: 'block',
                visibility: 'visible',
                opacity: 1,
                textDecoration: 'none',
                position: 'relative'
              }}
            >
              {/* IMAGE - TOUJOURS VISIBLE AVEC FOND DE SECOURS */}
              <div
                className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200"
                style={{
                  display: 'block',
                  visibility: 'visible',
                  opacity: 1,
                  overflow: 'hidden'
                }}
              >
                <img
                  src={formation.image}
                  alt={formation.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="eager"
                  onError={handleImageError}
                  style={{
                    opacity: 1,
                    display: 'block',
                    visibility: 'visible'
                  }}
                />

                {/* Badge catégorie - TOUJOURS VISIBLE */}
                <div
                  className="absolute top-4 left-4"
                  style={{
                    zIndex: 10,
                    display: 'block',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-800 shadow-sm">
                    {formation.category}
                  </span>
                </div>

                {/* Badge durée - TOUJOURS VISIBLE */}
                <div
                  className="absolute top-4 right-4"
                  style={{
                    zIndex: 10,
                    display: 'block',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-black/70 backdrop-blur-sm text-white">
                    <Clock size={12} className="mr-1" />
                    {formation.duration}
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
                <h3
                  className="text-xl font-bold mb-3 text-gray-900 leading-tight min-h-[56px]"
                  style={{
                    display: 'block',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  {formation.title}
                </h3>

                <p
                  className="text-gray-600 text-sm mb-4 leading-relaxed"
                  style={{
                    display: 'block',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  {formation.excerpt}
                </p>

                {/* Détails formation - TOUJOURS VISIBLES */}
                <div
                  className="space-y-2 mb-4"
                  style={{
                    display: 'block',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  <div
                    className="flex items-center text-sm text-gray-500"
                    style={{
                      display: 'flex',
                      visibility: 'visible',
                      opacity: 1
                    }}
                  >
                    <BookOpen size={14} className="mr-2 text-blue-600" />
                    <span>Format: {formation.format}</span>
                  </div>
                  <div
                    className="flex items-center text-sm text-gray-500"
                    style={{
                      display: 'flex',
                      visibility: 'visible',
                      opacity: 1
                    }}
                  >
                    <User size={14} className="mr-2 text-blue-600" />
                    <span>Niveau: {formation.level}</span>
                  </div>
                  <div
                    className="flex items-center text-sm text-gray-500"
                    style={{
                      display: 'flex',
                      visibility: 'visible',
                      opacity: 1
                    }}
                  >
                    <Award size={14} className="mr-2 text-blue-600" />
                    <span>Certificat de réalisation</span>
                  </div>
                </div>
              </div>

              {/* FOOTER AVEC CTA - TOUJOURS VISIBLE */}
              <div
                className="px-6 py-4 bg-gray-50 border-t border-gray-100"
                style={{
                  display: 'block',
                  visibility: 'visible',
                  opacity: 1
                }}
              >
                <div
                  className="flex justify-between items-center"
                  style={{
                    display: 'flex',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  <span
                    className="text-blue-600 font-bold"
                    style={{
                      display: 'block',
                      visibility: 'visible',
                      opacity: 1
                    }}
                  >
                    Voir les détails
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-blue-600"
                    style={{
                      display: 'block',
                      visibility: 'visible',
                      opacity: 1
                    }}
                  />
                </div>
              </div>
            </Link>
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
            to="/formations-professionnelles"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            style={{
              backgroundColor: '#1877F2',
              display: 'inline-flex',
              visibility: 'visible',
              opacity: 1,
              textDecoration: 'none'
            }}
          >
            Voir toutes les formations
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularFormations;
