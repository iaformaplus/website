import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { getPageSEO } from '../config/seo';
import { OrganizationSchema, CourseSchema, FAQSchema } from '../components/common/StructuredData';
import { TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FormationIAMarketingPage: React.FC = () => {
  useSEO(getPageSEO('formationIAMarketing'));

  const faqs = [
    {
      question: "L'IA va-t-elle remplacer les marketeurs ?",
      answer: "Non, l'IA est un outil qui augmente vos capacités. Elle automatise les tâches répétitives pour vous concentrer sur la stratégie et la créativité."
    },
    {
      question: "Quels outils IA allons-nous utiliser ?",
      answer: "ChatGPT, Midjourney, Jasper, Copy.ai, et d'autres outils IA marketing selon vos besoins."
    }
  ];

  return (
    <>
      <OrganizationSchema type="educational" />
      <CourseSchema name="Formation IA Marketing" description="Maîtrisez l'IA pour le marketing digital" duration="P2D" />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Formation IA Marketing</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Révolutionnez votre marketing avec l'IA : création de contenu, copywriting, publicités, SEO.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
              Demander un devis <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Programme</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Content Marketing IA</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Rédaction d'articles de blog optimisés SEO</li>
                  <li>• Création de posts réseaux sociaux engageants</li>
                  <li>• Newsletters automatisées et personnalisées</li>
                  <li>• Génération d'idées de contenu viral</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Copywriting IA</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Pages de vente persuasives</li>
                  <li>• Accroches publicitaires</li>
                  <li>• Scripts vidéo</li>
                  <li>• Emails de conversion</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Publicité IA</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Campagnes Google Ads optimisées</li>
                  <li>• Publicités Facebook/Instagram IA</li>
                  <li>• A/B testing automatisé</li>
                  <li>• Analyse de performance prédictive</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Création visuelle IA</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Midjourney et DALL-E pour images marketing</li>
                  <li>• Canva IA pour designs rapides</li>
                  <li>• Vidéos marketing générées par IA</li>
                  <li>• Personnalisation visuelle à grande échelle</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-purple-50 p-8 rounded-2xl mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Objectifs</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Multiplier votre production de contenu par 10',
                'Optimiser vos campagnes publicitaires avec l\'IA',
                'Créer des visuels professionnels sans designer',
                'Personnaliser vos messages à grande échelle',
                'Améliorer votre ROI marketing',
                'Rester compétitif face à la concurrence'
              ].map((obj, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
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

          <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-12 rounded-2xl text-center">
            <TrendingUp className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Boostez votre marketing avec l'IA</h2>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold mt-6">
              Demander un devis <ArrowRight className="w-5 h-5" />
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default FormationIAMarketingPage;
