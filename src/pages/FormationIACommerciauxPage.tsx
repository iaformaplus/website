import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { getPageSEO } from '../config/seo';
import { OrganizationSchema, CourseSchema, FAQSchema } from '../components/common/StructuredData';
import { Target, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FormationIACommerciauxPage: React.FC = () => {
  useSEO(getPageSEO('formationIACommerciaux'));

  const faqs = [
    {
      question: "L'IA peut-elle vraiment m'aider à vendre plus ?",
      answer: "Oui, l'IA permet de personnaliser vos approches commerciales, automatiser la prospection, et gagner du temps sur les tâches administratives pour se concentrer sur la relation client."
    },
    {
      question: "Est-ce que l'IA va remplacer les commerciaux ?",
      answer: "Non, l'IA est un outil pour augmenter vos performances. La relation humaine reste au cœur de la vente."
    }
  ];

  return (
    <>
      <OrganizationSchema type="educational" />
      <CourseSchema name="Formation IA Commercial" description="IA pour commerciaux et forces de vente" duration="P2D" />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Formation IA Commercial</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Boostez vos ventes avec l'IA : prospection intelligente, pitch personnalisés, CRM automatisé.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
              Demander un devis <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Programme Commercial IA</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Prospection intelligente avec l'IA</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Identifier les prospects à fort potentiel</li>
                  <li>• Personnaliser les messages de prospection</li>
                  <li>• Automatiser les relances</li>
                  <li>• Enrichir les données prospects avec l'IA</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Rédaction commerciale IA</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Emails de prospection qui convertissent</li>
                  <li>• Propositions commerciales persuasives</li>
                  <li>• Scripts de vente adaptés à chaque persona</li>
                  <li>• Réponses aux objections clients</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Pitch et présentation IA</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Créer des présentations commerciales impactantes</li>
                  <li>• Préparer des argumentaires sur-mesure</li>
                  <li>• Anticiper les questions et objections</li>
                  <li>• Générer des études de cas convaincantes</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">CRM et suivi automatisé</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Comptes-rendus de rendez-vous automatiques</li>
                  <li>• Prédiction des opportunités à fort potentiel</li>
                  <li>• Alertes intelligentes de suivi</li>
                  <li>• Analyse de performance commerciale</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-orange-50 p-8 rounded-2xl mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Résultats attendus</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Augmenter votre taux de conversion',
                'Gagner 10h par semaine sur l\'administratif',
                'Personnaliser vos approches commerciales',
                'Identifier les meilleurs leads rapidement',
                'Améliorer la qualité de vos propositions',
                'Conclure plus de deals'
              ].map((obj, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">{obj}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-12 rounded-2xl text-center">
            <Target className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Vendez plus, vendez mieux avec l'IA</h2>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors font-semibold mt-6">
              Demander un devis <ArrowRight className="w-5 h-5" />
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default FormationIACommerciauxPage;
