import React from 'react';
import { Link } from 'react-router-dom';

const FormationsParticuliersPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Formations pour Particuliers</h1>
      
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">
          Prenez votre avenir en main avec nos formations en IA
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Que vous soyez en reconversion, en recherche d'emploi ou en poste, nos formations vous aident 
          à prendre une longueur d'avance sur le marché du travail. Accédez à des compétences recherchées, 
          quel que soit votre niveau de départ.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-4">Pour changer de métier</h3>
            <p className="text-gray-600">
              Apprenez à utiliser l'intelligence artificielle pour devenir plus autonome, polyvalent 
              ou viser un nouveau secteur.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="text-3xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold mb-4">Formations accessibles</h3>
            <p className="text-gray-600">
              Modules adaptés aux débutants, financement personnel ou CPF, accompagnement pédagogique humain. 
              Certificat de réalisation délivré en fin de formation.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="text-3xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-4">Apprendre à votre rythme</h3>
            <p className="text-gray-600">
              Sessions 100% e-learning, vidéos à la demande, ou coaching en direct selon vos besoins 
              et disponibilités.
            </p>
          </div>
        </div>

        <Link 
          to="/contact"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
        >
          ✍️ Commencer mon inscription
        </Link>
      </section>
    </div>
  );
};

export default FormationsParticuliersPage;