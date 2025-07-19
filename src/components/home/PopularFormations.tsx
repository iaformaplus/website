import React from 'react';
import { ArrowRight, Clock, User, BookOpen, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const formationData = [
  {
    id: 1,
    title: "Habilitation véhicules électriques B1VL-B2VL",
    category: "Technique",
    duration: "21h",
    format: "Présentiel",
    level: "Intermédiaire",
    image: "https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800",
    fallbackImage: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "habilitation-vehicules-electriques-b1-b2",
    excerpt: "Formation certifiante pour intervenir en sécurité sur les véhicules électriques et hybrides selon la norme NF C18-550.",
    price: "1450€ HT"
  },
  {
    id: 2,
    title: "Marketing digital avancé",
    category: "Marketing",
    duration: "14h",
    format: "Distanciel",
    level: "Avancé",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    fallbackImage: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "marketing-digital-avance",
    excerpt: "Maîtrisez les stratégies d'acquisition et de fidélisation client dans l'environnement numérique.",
    price: "990€ HT"
  },
  {
    id: 3,
    title: "Créer et gérer une boutique E-commerce performante",
    category: "E-commerce",
    duration: "35h",
    format: "Présentiel",
    level: "Intermédiaire",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    fallbackImage: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "e-commerce",
    excerpt: "Formation pratique pour lancer et optimiser votre activité en ligne. Apprenez à créer, gérer et développer une boutique e-commerce rentable.",
    price: "2490€ HT"
  },
  {
    id: 4,
    title: "Techniques de vente et management",
    category: "Management",
    duration: "35h",
    format: "Présentiel",
    level: "Intermédiaire",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    fallbackImage: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "techniques-vente-management",
    excerpt: "Formation complète alliant techniques de vente avancées et compétences managériales pour les responsables commerciaux.",
    price: "2190€ HT"
  }
];

const PopularFormations: React.FC = () => {
  // Fonction pour gérer les erreurs d'images avec fallback multiple
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackImage: string) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== fallbackImage) {
      target.src = fallbackImage;
    } else {
      // Si même le fallback échoue, utiliser une image par défaut très fiable
      target.src = 'https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=800';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Formations populaires</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Découvrez nos formations les plus demandées, conçues pour répondre aux besoins actuels du marché
            et certifiées Qualiopi pour garantir leur qualité.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {formationData.map((formation) => (
            <Link 
              key={formation.id} 
              to={`/formations/${formation.slug}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/20 hover:translate-y-[-2px]"
            >
              {/* Image container with overlay */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={formation.image} 
                  alt={formation.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => handleImageError(e, formation.fallbackImage)}
                  onLoad={(e) => {
                    // Assurer que l'image est bien chargée
                    const target = e.target as HTMLImageElement;
                    target.style.opacity = '1';
                  }}
                  style={{ opacity: '0', transition: 'opacity 0.3s ease-in-out' }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-800 shadow-sm">
                    {formation.category}
                  </span>
                </div>
                
                {/* Duration badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-black/70 backdrop-blur-sm text-white">
                    <Clock size={12} className="mr-1" />
                    {formation.duration}
                  </span>
                </div>

                {/* Price overlay on hover */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-primary text-white shadow-lg">
                    À partir de {formation.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                <span className="block leading-tight">
                  {formation.title}
                </span>
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {formation.excerpt}
                </p>
                
                {/* Formation details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <BookOpen size={14} className="mr-2 text-primary" />
                    <span>Format: {formation.format}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <User size={14} className="mr-2 text-primary" />
                    <span>Niveau: {formation.level}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Award size={14} className="mr-2 text-primary" />
                    <span>Certificat de réalisation</span>
                  </div>
                </div>
              </div>

              {/* Footer with CTA */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 group-hover:bg-primary/5 transition-colors">
                <div className="flex justify-between items-center">
                  <span className="text-primary font-medium group-hover:text-primary/80 transition-colors">
                    Voir les détails
                  </span>
                  <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button to="/formations-professionnelles" variant="outline">
            Voir toutes les formations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularFormations;