import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Thomas Dubois",
    position: "Directeur Technique, Électro Innov",
    company: "Électro Innov",
    logo: "https://images.pexels.com/photos/5849559/pexels-photo-5849559.jpeg?auto=compress&cs=tinysrgb&w=1600",
    content: "La formation sur l'habilitation véhicules électriques a transformé notre atelier. Nos techniciens sont maintenant certifiés et travaillent en toute sécurité. Une vraie valeur ajoutée pour notre entreprise.",
    rating: 5
  },
  {
    id: 2,
    name: "Marie Laurent",
    position: "Responsable Marketing, DigiGrowth",
    company: "DigiGrowth",
    logo: "https://images.pexels.com/photos/6774917/pexels-photo-6774917.jpeg?auto=compress&cs=tinysrgb&w=1600",
    content: "La formation en marketing digital avancé a permis à mon équipe de maîtriser les dernières stratégies d'acquisition. Nos campagnes sont désormais 40% plus performantes.",
    rating: 5
  },
  {
    id: 3,
    name: "Alexandre Moreau",
    position: "Chef de Chantier, BâtiPlus",
    company: "BâtiPlus",
    logo: "https://images.pexels.com/photos/9636396/pexels-photo-9636396.jpeg?auto=compress&cs=tinysrgb&w=1600",
    content: "Grâce à IAFORMAPLUS, nous avons intégré des outils d'IA dans notre gestion de projet. Les délais sont respectés et la planification optimisée. Une révolution dans notre secteur.",
    rating: 4
  },
  {
    id: 4,
    name: "Sophie Girard",
    position: "Directrice Commerciale, TechSolutions",
    company: "TechSolutions",
    logo: "https://images.pexels.com/photos/5650037/pexels-photo-5650037.jpeg?auto=compress&cs=tinysrgb&w=1600",
    content: "La formation en techniques de vente a boosté notre équipe commerciale. Approche structurée, exercices pratiques et suivi personnalisé. Nos résultats ont augmenté de 25% en trois mois.",
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-16 bg-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que nos clients disent</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages de professionnels qui ont transformé leur carrière et leur entreprise 
            grâce à nos formations certifiées.
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-md p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <img 
                          src={testimonial.logo} 
                          alt={testimonial.company} 
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">{testimonial.position}</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Voir témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          <img 
            src="https://images.pexels.com/photos/5849559/pexels-photo-5849559.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Client logo" 
            className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img 
            src="https://images.pexels.com/photos/6774917/pexels-photo-6774917.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Client logo" 
            className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img 
            src="https://images.pexels.com/photos/9636396/pexels-photo-9636396.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Client logo" 
            className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img 
            src="https://images.pexels.com/photos/5650037/pexels-photo-5650037.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Client logo" 
            className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;