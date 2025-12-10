import React from 'react';
import { ArrowRight, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const aiFormationsData = [
  {
    id: 1,
    title: "Automatisation des tâches avec l'IA (No Code / Low Code)",
    publicCible: "TPE/PME, indépendants, fonctions support",
    objectif: "Automatiser des processus avec Zapier, Make, ChatGPT, etc.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    fallbackImage: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "automatisation-taches-ia-nocode"
  },
  {
    id: 2,
    title: "Maîtriser ChatGPT pour booster sa productivité",
    publicCible: "Tous secteurs",
    objectif: "Utiliser ChatGPT pour mails, idées, synthèses, relances",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    fallbackImage: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "maitriser-chatgpt-productivite"
  },
  {
    id: 3,
    title: "Création de contenu marketing avec l'IA (texte, visuel, vidéo)",
    publicCible: "Marketing, communication, indépendants",
    objectif: "Créer visuels, pubs, vidéos avec Canva IA, Midjourney, ChatGPT",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    fallbackImage: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "creation-contenu-marketing-ia"
  },
  {
    id: 4,
    title: "IA pour les commerciaux : Script, relance, objection, CRM intelligent",
    publicCible: "Vendeurs, téléprospecteurs, business dev",
    objectif: "Gagner du temps, améliorer ses relances, créer des scripts IA dynamiques",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
    fallbackImage: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "ia-commerciaux-script-relance-crm"
  }
];

const AIFormationsSection: React.FC = () => {
  // Fonction pour gérer les erreurs d'images avec fallback multiple - STABLE ET FIABLE
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackImage: string) => {
    const target = e.target as HTMLImageElement;
    // Assurer que l'image reste visible même en cas d'erreur
    target.style.opacity = '1';

    if (target.src !== fallbackImage) {
      target.src = fallbackImage;
    } else {
      // Si même le fallback échoue, utiliser une image par défaut très fiable
      target.src = 'https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=800';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🧠 Formations IA les plus demandées
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Découvrez nos formations en intelligence artificielle les plus populaires, conçues pour transformer 
            votre façon de travailler et booster votre productivité au quotidien.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiFormationsData.map((formation) => (
            <div 
              key={formation.id} 
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 hover:translate-y-[-2px]"
            >
              {/* Image container with overlay - CONTENU TOUJOURS VISIBLE */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-100 to-indigo-100">
                <img
                  src={formation.image}
                  alt={formation.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="eager"
                  onError={(e) => handleImageError(e, formation.fallbackImage)}
                  style={{ opacity: '1' }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* IA badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-sm">
                    🧠 IA
                  </span>
                </div>

                {/* Trending badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-red-500/90 backdrop-blur-sm text-white">
                    🔥 Tendance
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                  {formation.title}
                </h3>
                
                {/* Public cible */}
                <div className="flex items-start mb-3">
                  <Users size={14} className="mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 line-clamp-2">
                    <strong>Public :</strong> {formation.publicCible}
                  </span>
                </div>
                
                {/* Objectif */}
                <div className="flex items-start mb-4">
                  <Target size={14} className="mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 line-clamp-2">
                    <strong>Objectif :</strong> {formation.objectif}
                  </span>
                </div>
              </div>

              {/* Footer with CTA */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 group-hover:bg-blue-50/50 transition-colors">
                <Link 
                  to={`/formations/${formation.slug}`}
                  className="flex justify-between items-center w-full"
                >
                  <span 
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105 group-hover:translate-x-1"
                    style={{ backgroundColor: '#1877F2' }}
                  >
                    Voir détails
                  </span>
                  <ArrowRight size={16} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/formations-ia" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            style={{ backgroundColor: '#1877F2' }}
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