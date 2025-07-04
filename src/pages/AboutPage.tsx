import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">À propos</h1>
      
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">
          IA Forma Plus, bien plus qu'un organisme de formation
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Fondé par des experts en pédagogie et en nouvelles technologies, IA Forma Plus 
          forme chaque année des centaines de professionnels à l'usage concret de 
          l'intelligence artificielle dans leur métier.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-4">Notre mission</h3>
            <p className="text-gray-600">
              Rendre l'IA accessible à tous les métiers et toutes les tailles d'entreprise, 
              en toute simplicité.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="text-3xl mb-4">📜</div>
            <h3 className="text-xl font-semibold mb-4">Nos engagements</h3>
            <p className="text-gray-600">
              Certification Qualiopi, pédagogie humaine, accompagnement personnalisé, 
              transparence sur les résultats.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="text-3xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold mb-4">RSE & Éthique</h3>
            <p className="text-gray-600">
              Formations éco-conçues, inclusion numérique, IA éthique, accessibilité 
              renforcée sur notre plateforme.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;