import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';

const WebinairsPage = () => {
  const webinars = [
    {
      title: "IA & Marketing Digital",
      date: "Jeudi 6 juin à 14h",
      description: "Découvrez comment l'IA révolutionne le marketing digital et comment l'intégrer dans votre stratégie.",
      speaker: "Marie Laurent",
      role: "Experte Marketing Digital"
    },
    {
      title: "Gagner du temps avec ChatGPT",
      date: "Lundi 10 juin à 11h",
      description: "Apprenez à utiliser ChatGPT efficacement pour automatiser vos tâches quotidiennes.",
      speaker: "Thomas Dubois",
      role: "Consultant IA"
    },
    {
      title: "Réussir sa reconversion avec l'IA",
      date: "Vendredi 14 juin à 17h",
      description: "Comment l'IA peut vous aider à accélérer votre reconversion professionnelle.",
      speaker: "Sophie Girard",
      role: "Coach en Transition Professionnelle"
    }
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-gray-900 to-secondary text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Participez à nos webinaires gratuits et interactifs
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Chaque mois, nos experts IA et formateurs professionnels vous proposent des sessions 
              en ligne pour découvrir les dernières innovations, poser vos questions en direct, 
              et repartir avec des outils concrets.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="badge bg-primary/10 text-primary">Webinaire gratuit</span>
                    <Calendar size={20} className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{webinar.title}</h3>
                  <p className="text-primary font-medium mb-4">{webinar.date}</p>
                  <p className="text-gray-600 mb-4">{webinar.description}</p>
                  <div className="border-t pt-4 mt-4">
                    <p className="font-medium">{webinar.speaker}</p>
                    <p className="text-sm text-gray-500">{webinar.role}</p>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-100 border-t">
                  <Button 
                    to="/contact" 
                    variant="primary" 
                    fullWidth
                    rightIcon={<ArrowRight size={16} />}
                  >
                    Je m'inscris
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Pourquoi participer à nos webinaires ?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="p-4">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-semibold mb-2">Gratuit et accessible</h3>
                <p className="text-gray-600">Sessions en ligne interactives avec nos experts</p>
              </div>
              <div className="p-4">
                <div className="text-2xl mb-2">💡</div>
                <h3 className="font-semibold mb-2">Cas concrets</h3>
                <p className="text-gray-600">Exemples pratiques et applications métier</p>
              </div>
              <div className="p-4">
                <div className="text-2xl mb-2">🤝</div>
                <h3 className="font-semibold mb-2">Networking</h3>
                <p className="text-gray-600">Échangez avec d'autres professionnels</p>
              </div>
              <div className="p-4">
                <div className="text-2xl mb-2">📱</div>
                <h3 className="font-semibold mb-2">Replay disponible</h3>
                <p className="text-gray-600">Accès aux enregistrements pendant 30 jours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebinairsPage;