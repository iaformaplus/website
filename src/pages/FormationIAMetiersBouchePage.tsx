import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { getPageSEO } from '../config/seo';
import { OrganizationSchema, CourseSchema, FAQSchema } from '../components/common/StructuredData';
import { ChefHat, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FormationIAMetiersBouchePage: React.FC = () => {
  useSEO(getPageSEO('formationIAMetiersBouche'));

  const faqs = [
    {
      question: "L'IA est-elle adaptée à mon métier artisanal ?",
      answer: "Absolument ! L'IA vous aide sur la gestion administrative, le marketing local, et la relation client, tout en préservant votre savoir-faire artisanal."
    },
    {
      question: "Faut-il être à l'aise avec l'informatique ?",
      answer: "Non, la formation est accessible à tous. Nous utilisons des outils simples et intuitifs adaptés aux artisans."
    }
  ];

  return (
    <>
      <OrganizationSchema type="educational" />
      <CourseSchema name="Formation IA Métiers de Bouche" description="IA pour restaurateurs, boulangers, traiteurs" duration="P1D" />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Formation IA Métiers de Bouche</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              L'Intelligence Artificielle au service des restaurateurs, boulangers, pâtissiers, traiteurs.
              Modernisez votre métier sans perdre votre âme artisanale.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-semibold">
              Demander un devis <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Programme adapté aux artisans</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Gestion des menus et recettes</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Créer des descriptions de plats appétissantes</li>
                  <li>• Adapter vos menus selon les saisons et produits</li>
                  <li>• Traduire vos cartes en plusieurs langues</li>
                  <li>• Générer des variantes de recettes créatives</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Marketing local avec l'IA</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Posts Facebook/Instagram engageants pour votre établissement</li>
                  <li>• Photos de plats sublimées avec IA</li>
                  <li>• Réponse aux avis Google intelligente</li>
                  <li>• Promotions et événements attractifs</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Relation client optimisée</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Répondre rapidement aux messages clients</li>
                  <li>• Gérer les réservations et commandes</li>
                  <li>• Créer des newsletters pour fidéliser</li>
                  <li>• Offres personnalisées selon les préférences clients</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Administratif simplifié</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Générer des documents administratifs rapidement</li>
                  <li>• Gérer les plannings et équipes</li>
                  <li>• Suivre vos stocks et approvisionnements</li>
                  <li>• Préparer vos déclarations et rapports</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-amber-50 p-8 rounded-2xl mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Bénéfices pour votre activité</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Gagner du temps sur l\'administratif',
                'Attirer plus de clients localement',
                'Améliorer votre présence en ligne',
                'Fidéliser votre clientèle',
                'Gérer les avis et votre e-réputation',
                'Rester compétitif face aux chaînes'
              ].map((obj, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">{obj}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 bg-white p-8 rounded-2xl border-2 border-amber-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">💡 Format adapté aux artisans</h2>
            <ul className="space-y-3 text-slate-700">
              <li>• <strong>Durée :</strong> 1 journée intensive (adaptable demi-journées)</li>
              <li>• <strong>Lieu :</strong> Dans votre établissement ou à proximité</li>
              <li>• <strong>Horaires :</strong> Flexibles selon votre activité</li>
              <li>• <strong>Groupe :</strong> 2 à 6 artisans maximum</li>
              <li>• <strong>Financement :</strong> OPCO, FAF (Fonds d'Assurance Formation)</li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Questions fréquentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-12 rounded-2xl text-center">
            <ChefHat className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Modernisez votre métier avec l'IA</h2>
            <p className="text-xl mb-8 text-amber-100">Formation sur-mesure pour artisans • Financement OPCO</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-lg hover:bg-amber-50 transition-colors font-semibold">
              Demander un devis gratuit <ArrowRight className="w-5 h-5" />
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default FormationIAMetiersBouchePage;
