import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { getPageSEO } from '../config/seo';
import { OrganizationSchema, CourseSchema, FAQSchema } from '../components/common/StructuredData';
import { FileText, Target, CheckCircle, Clock, Award, ArrowRight, AlertCircle, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const FormationFacturationElectroniquePage: React.FC = () => {
  useSEO(getPageSEO('formationFacturationElectronique'));

  const faqs = [
    {
      question: "Quand la facturation électronique devient-elle obligatoire ?",
      answer: "La réforme sera déployée progressivement à partir de septembre 2026. Toutes les entreprises devront être capables de recevoir des factures électroniques dès cette date, puis progressivement émettre des factures électroniques selon un calendrier défini."
    },
    {
      question: "Quelles entreprises sont concernées ?",
      answer: "Toutes les entreprises françaises assujetties à la TVA sont concernées par cette obligation, quels que soient leur taille et leur secteur d'activité."
    },
    {
      question: "Qu'est-ce qu'une plateforme de dématérialisation (PDP) ?",
      answer: "Une PDP est une plateforme certifiée par l'État qui permet de transmettre et recevoir des factures électroniques conformes à la réglementation. Vous devrez choisir une PDP ou utiliser le Portail Public de Facturation (PPF)."
    },
    {
      question: "La formation est-elle éligible au financement OPCO ?",
      answer: "Oui, cette formation est certifiée Qualiopi et peut être financée jusqu'à 100% par votre OPCO. Nous vous accompagnons dans les démarches administratives."
    }
  ];

  return (
    <>
      <OrganizationSchema type="educational" />
      <CourseSchema
        name="Formation Facturation Électronique Obligatoire 2026"
        description="Anticipez l'obligation légale de facturation électronique prévue pour septembre 2026 et préparez votre entreprise dès maintenant"
        duration="P1D"
        courseMode="blended"
        educationalLevel="Tous niveaux"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Formation Professionnelle
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Formation – Comprendre et mettre en place la facturation électronique obligatoire
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Anticipez l'obligation légale de facturation électronique prévue pour septembre 2026 et préparez votre entreprise dès maintenant.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg max-w-3xl mx-auto mb-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-bold text-slate-900 mb-2">⚠️ Important</h3>
                  <p className="text-slate-700">
                    À partir de 2026, toutes les entreprises devront être capables de <strong>recevoir des factures électroniques</strong> et progressivement d'<strong>en émettre</strong>. Anticipez dès maintenant pour éviter les blocages administratifs.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                ➡️ Réserver un rendez-vous pour cette formation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <Clock className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <p className="font-semibold">1 jour</p>
              <p className="text-sm text-slate-600">7 heures</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <Award className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <p className="font-semibold">Attestation remise</p>
              <p className="text-sm text-slate-600">Certificat de réalisation</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <Users className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <p className="font-semibold">Tous publics</p>
              <p className="text-sm text-slate-600">Dirigeants, comptables, gestionnaires</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <Calendar className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <p className="font-semibold">Réforme 2026</p>
              <p className="text-sm text-slate-600">Anticipez maintenant</p>
            </div>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Objectifs de la formation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Comprendre la réforme de la facturation électronique en France',
                'Connaître le calendrier officiel de mise en conformité',
                'Identifier les plateformes de dématérialisation partenaires (PDP)',
                'Adapter son organisation comptable et administrative',
                'Éviter les erreurs et les sanctions',
                'Mettre en place les bons outils pour rester conforme'
              ].map((objectif, index) => (
                <div key={index} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">{objectif}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 bg-slate-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Programme pédagogique</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Module 1 – Comprendre la réforme fiscale</h3>
                <ul className="space-y-2 text-slate-700 ml-4">
                  <li>• Pourquoi l'État impose la facturation électronique</li>
                  <li>• Les objectifs de la réforme (lutte contre la fraude TVA)</li>
                  <li>• Impact sur les entreprises et les relations B2B</li>
                  <li>• Définition : facture électronique vs facture PDF</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Module 2 – Calendrier et entreprises concernées</h3>
                <ul className="space-y-2 text-slate-700 ml-4">
                  <li>• Dates clés de la réforme (septembre 2026 et au-delà)</li>
                  <li>• Entreprises obligées de s'adapter</li>
                  <li>• Calendrier progressif selon la taille de l'entreprise</li>
                  <li>• Sanctions en cas de non-conformité</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Module 3 – Fonctionnement de la facturation électronique</h3>
                <ul className="space-y-2 text-slate-700 ml-4">
                  <li>• Différence entre e-invoicing et e-reporting</li>
                  <li>• Les plateformes de dématérialisation partenaires (PDP)</li>
                  <li>• Le Portail Public de Facturation (PPF)</li>
                  <li>• Formats de factures électroniques acceptés</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Module 4 – Mise en place dans l'entreprise</h3>
                <ul className="space-y-2 text-slate-700 ml-4">
                  <li>• Choisir un logiciel de facturation compatible</li>
                  <li>• Adapter ses processus internes (comptabilité, administration)</li>
                  <li>• Former ses équipes aux nouveaux outils</li>
                  <li>• Gérer la transition avec les clients et fournisseurs</li>
                  <li>• Archivage et conservation des factures électroniques</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Module 5 – Cas pratiques et outils</h3>
                <ul className="space-y-2 text-slate-700 ml-4">
                  <li>• Exemples de factures électroniques conformes</li>
                  <li>• Démonstration de plateformes de dématérialisation</li>
                  <li>• Automatisation et intégration avec les logiciels comptables</li>
                  <li>• Plan d'action personnalisé pour votre entreprise</li>
                  <li>• Questions / Réponses et cas spécifiques</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Public cible</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold mb-3">👔 Dirigeants</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• Chefs d'entreprise</li>
                  <li>• Gérants de PME/TPE</li>
                  <li>• Entrepreneurs</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold mb-3">📊 Responsables</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• Responsables administratifs</li>
                  <li>• Responsables comptables</li>
                  <li>• Directeurs financiers</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold mb-3">💼 Métiers</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• Comptables</li>
                  <li>• Gestionnaires</li>
                  <li>• Commerçants</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Modalités de formation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center">
                <FileText className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Présentiel</h3>
                <p className="text-sm text-blue-100">Dans vos locaux ou les nôtres</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center">
                <Target className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Distanciel</h3>
                <p className="text-sm text-blue-100">En visioconférence</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">E-learning</h3>
                <p className="text-sm text-blue-100">À votre rythme</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center">
                <ArrowRight className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Mix</h3>
                <p className="text-sm text-blue-100">Distanciel + E-learning</p>
              </div>
            </div>
          </section>

          <section className="mb-16 bg-blue-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Financement OPCO</h2>
            <div className="flex items-center gap-4 mb-6">
              <Award className="w-12 h-12 text-blue-600" />
              <p className="text-lg text-slate-700">
                Formation <strong>certifiée Qualiopi</strong>, finançable par votre OPCO jusqu'à <strong>100%</strong>.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Vérifier mon éligibilité OPCO
              <ArrowRight className="w-5 h-5" />
            </Link>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Questions fréquentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-12 rounded-2xl text-center">
            <FileText className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Préparez votre entreprise dès maintenant</h2>
            <p className="text-xl mb-8 text-blue-100">
              Formation complète • Financement OPCO • Mise en conformité garantie
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              ➡️ Réserver un rendez-vous pour cette formation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default FormationFacturationElectroniquePage;
