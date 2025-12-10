import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { getPageSEO } from '../config/seo';
import { OrganizationSchema, CourseSchema, FAQSchema } from '../components/common/StructuredData';
import { Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FormationIARHPage: React.FC = () => {
  useSEO(getPageSEO('formationIARH'));

  const faqs = [
    {
      question: "L'IA peut-elle vraiment aider au recrutement ?",
      answer: "Oui, l'IA accélère le screening de CV, génère des offres d'emploi optimisées, et prépare des questions d'entretien pertinentes."
    },
    {
      question: "Comment l'IA respecte-t-elle la confidentialité RH ?",
      answer: "Nous formons aux bonnes pratiques : anonymisation des données, respect du RGPD, et utilisation d'outils sécurisés."
    }
  ];

  return (
    <>
      <OrganizationSchema type="educational" />
      <CourseSchema name="Formation IA RH" description="IA pour les Ressources Humaines" duration="P2D" />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Formation IA RH</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Transformez vos processus RH avec l'Intelligence Artificielle : recrutement, onboarding, gestion des talents.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-cyan-600 text-white px-8 py-4 rounded-lg hover:bg-cyan-700 transition-colors font-semibold">
              Demander un devis <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Programme RH IA</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Recrutement augmenté par l'IA</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Rédaction d'offres d'emploi attractives et inclusives</li>
                  <li>• Screening automatique de CV</li>
                  <li>• Génération de questions d'entretien ciblées</li>
                  <li>• Analyse de soft skills via IA</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Onboarding et Formation</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Parcours d'intégration personnalisés</li>
                  <li>• Chatbots RH pour répondre aux nouveaux collaborateurs</li>
                  <li>• Création de contenu de formation automatisé</li>
                  <li>• Suivi et engagement des nouvelles recrues</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Gestion des talents</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Plans de développement individuels</li>
                  <li>• Identification des high potentials</li>
                  <li>• Feedbacks constructifs assistés par IA</li>
                  <li>• Prédiction des risques de turnover</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Communication RH</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Emails RH professionnels et empathiques</li>
                  <li>• Politiques d'entreprise claires</li>
                  <li>• Newsletters internes engageantes</li>
                  <li>• Gestion des situations délicates</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-cyan-50 p-8 rounded-2xl mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Bénéfices pour la fonction RH</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Réduire le temps de recrutement de 50%',
                'Améliorer la qualité des embauches',
                'Automatiser les tâches administratives',
                'Offrir une expérience candidat exceptionnelle',
                'Prendre des décisions RH data-driven',
                'Libérer du temps pour l\'humain'
              ].map((obj, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
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

          <section className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white p-12 rounded-2xl text-center">
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Modernisez vos RH avec l'IA</h2>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-colors font-semibold mt-6">
              Demander un devis <ArrowRight className="w-5 h-5" />
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default FormationIARHPage;
