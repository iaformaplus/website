import React, { useState } from 'react';
import { Search, ArrowRight, Send } from 'lucide-react';
import Button from '../components/common/Button';

// Blog categories and their videos
const blogData = {
  comprendre: {
    title: "Comprendre l'IA",
    description: "Les concepts fondamentaux de l'intelligence artificielle expliqués simplement",
    videos: [
      {
        id: "jkdMHfZP8Nk",
        title: "L'IA expliquée en 5 minutes",
        description: "Une introduction simple et claire aux concepts de base de l'intelligence artificielle."
      },
      {
        id: "aircAruvnKk",
        title: "Comment fonctionne le Deep Learning ?",
        description: "Découvrez les mécanismes derrière l'apprentissage profond et les réseaux de neurones."
      },
      {
        id: "8HrYM3dF4Ak",
        title: "ChatGPT : Révolution ou Danger ?",
        description: "Analyse des opportunités et des risques liés aux modèles de langage."
      }
    ]
  },
  creer: {
    title: "Créer avec l'IA",
    description: "Tutoriels et démonstrations pour créer du contenu avec l'IA",
    videos: [
      {
        id: "kVeOpcw4GWY",
        title: "Créer des images avec DALL·E",
        description: "Guide pas à pas pour générer des images professionnelles avec DALL·E."
      },
      {
        id: "w4XA2IHv7eI",
        title: "Midjourney pour les débutants",
        description: "Apprenez à utiliser Midjourney pour vos projets créatifs."
      },
      {
        id: "L_Guz73e6fw",
        title: "Stable Diffusion en pratique",
        description: "Techniques avancées pour la génération d'images avec Stable Diffusion."
      }
    ]
  },
  automatiser: {
    title: "Automatiser avec l'IA",
    description: "Optimisez votre productivité grâce à l'automatisation intelligente",
    videos: [
      {
        id: "mBY62jtbMYo",
        title: "Automatiser son workflow avec l'IA",
        description: "Découvrez comment intégrer l'IA dans vos processus quotidiens."
      },
      {
        id: "1YU8rcGntwY",
        title: "ChatGPT + Zapier : Guide complet",
        description: "Créez des automatisations puissantes avec ChatGPT et Zapier."
      },
      {
        id: "u9TgXXrI6wk",
        title: "No-code et IA : Le duo gagnant",
        description: "Combinez les outils no-code avec l'IA pour plus d'efficacité."
      }
    ]
  },
  analyser: {
    title: "Analyser les données avec l'IA",
    description: "Exploitez la puissance de l'IA pour l'analyse de données",
    videos: [
      {
        id: "9GzpyEFb_oM",
        title: "Python et IA : Analyse de données",
        description: "Introduction à l'analyse de données avec Python et les bibliothèques IA."
      },
      {
        id: "aircAruvnKk",
        title: "Power BI + IA : Cas pratique",
        description: "Intégrez l'IA dans vos tableaux de bord Power BI."
      },
      {
        id: "8HrYM3dF4Ak",
        title: "Machine Learning pour l'analyse",
        description: "Applications concrètes du ML dans l'analyse de données."
      }
    ]
  },
  metiers: {
    title: "L'IA dans les métiers",
    description: "Applications concrètes de l'IA dans différents secteurs professionnels",
    videos: [
      {
        id: "mBY62jtbMYo",
        title: "IA pour les commerciaux",
        description: "Comment l'IA transforme les métiers de la vente."
      },
      {
        id: "1YU8rcGntwY",
        title: "IA dans le marketing digital",
        description: "Applications pratiques de l'IA en marketing."
      },
      {
        id: "u9TgXXrI6wk",
        title: "IA pour les créatifs",
        description: "L'IA comme assistant créatif au quotidien."
      }
    ]
  }
};

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter videos based on search term
  const filteredCategories = Object.entries(blogData).filter(([_, category]) =>
    category.videos.some(video =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-secondary text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog IA Forma Plus
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Découvrez nos tutoriels vidéo, guides pratiques et actualités sur l'intelligence artificielle. 
              Apprenez à utiliser l'IA dans votre métier avec nos experts.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher une vidéo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="sticky top-0 z-30 bg-white border-b shadow-sm">
        <div className="container py-4">
          <div className="flex overflow-x-auto gap-4 pb-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                !selectedCategory ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Toutes les vidéos
            </button>
            {Object.entries(blogData).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === key ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          {(selectedCategory ? [[selectedCategory, blogData[selectedCategory]]] : filteredCategories)
            .map(([key, category]) => (
              <div key={key} className="mb-12">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.videos
                    .filter(video =>
                      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      video.description.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((video, index) => (
                      <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                        <div className="aspect-video">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                          <p className="text-gray-600 mb-4">{video.description}</p>
                          <Button
                            to={`/formations`}
                            variant="outline"
                            rightIcon={<ArrowRight size={16} />}
                          >
                            Formation associée
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                  <Button variant="outline">
                    Voir plus de vidéos
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Suggest Video Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Proposez une vidéo</h2>
            <p className="text-gray-600 mb-8">
              Vous avez une idée de tutoriel ou un sujet que vous aimeriez voir traité ? 
              Partagez votre suggestion avec nous !
            </p>
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              rightIcon={<Send size={20} />}
            >
              Soumettre une proposition
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section - "Prêt à passer à l'action ?" */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Prêt à passer à l'action ?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Transformez ces connaissances en compétences concrètes avec nos formations 
                certifiantes en intelligence artificielle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  to="/formations-ia"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  size="lg"
                >
                  Voir les formations IA
                </Button>
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#1877F2] hover:bg-[#166fe5] rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Demander un devis
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;