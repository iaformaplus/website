import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { getPageSEO } from '../config/seo';
import { OrganizationSchema, CourseSchema, FAQSchema } from '../components/common/StructuredData';
import { Zap, Shield, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HabilitationElectriquePage: React.FC = () => {
  useSEO(getPageSEO('habilitationElectrique'));

  const faqs = [
    {
      question: "Quelle est la durée de validité de l'habilitation électrique ?",
      answer: "L'habilitation électrique est valable 3 ans. Un recyclage est obligatoire avant l'expiration pour maintenir l'habilitation."
    },
    {
      question: "Qui doit suivre cette formation ?",
      answer: "Tous les professionnels travaillant sur ou à proximité de véhicules électriques et hybrides : mécaniciens, carrossiers, dépanneurs, contrôleurs techniques."
    },
    {
      question: "La formation est-elle finançable par l'OPCO ?",
      answer: "Oui, formation certifiée Qualiopi et éligible au financement OPCO pour les entreprises."
    }
  ];

  return (
    <>
      <OrganizationSchema type="educational" />
      <CourseSchema
        name="Habilitation Électrique Véhicules Électriques B1 B2"
        description="Formation habilitation électrique pour véhicules électriques et hybrides conforme NF C18-510"
        duration="P2D"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-yellow-100 border-l-4 border-yellow-600 p-4 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <p className="text-yellow-800">
                <strong>Obligation légale :</strong> Toute intervention sur véhicule électrique ou hybride nécessite une habilitation électrique (norme NF C18-510).
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Formation Habilitation Électrique Certifiée
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Habilitation Électrique Véhicules Électriques B1-B2
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Formation conforme NF C18-510 pour travailler en sécurité sur véhicules électriques et hybrides.
              Initial et recyclage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-yellow-600 text-white px-8 py-4 rounded-lg hover:bg-yellow-700 transition-colors font-semibold"
              >
                Demander un devis
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <Zap className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
              <p className="font-semibold">B0L - B1L - B2VL</p>
              <p className="text-sm text-slate-600">Niveaux disponibles</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <Shield className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
              <p className="font-semibold">NF C18-510</p>
              <p className="text-sm text-slate-600">Conforme norme</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <CheckCircle className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
              <p className="font-semibold">2 jours</p>
              <p className="text-sm text-slate-600">Initial / 1,5j recyclage</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <ArrowRight className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
              <p className="font-semibold">Intra-entreprise</p>
              <p className="text-sm text-slate-600">Dans vos locaux</p>
            </div>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Public concerné</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Mécaniciens automobiles',
                'Carrossiers et peintres',
                'Électriciens automobiles',
                'Techniciens de maintenance',
                'Dépanneurs et remorqueurs',
                'Contrôleurs techniques',
                'Formateurs auto',
                'Personnel des flottes électriques'
              ].map((public_item, i) => (
                <div key={i} className="flex items-start gap-3 bg-yellow-50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">{public_item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 bg-slate-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Programme de formation</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Module 1 : Notions fondamentales</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Électricité : tension, courant, résistance, puissance</li>
                  <li>• Les différents types de courant (AC/DC)</li>
                  <li>• Effets du courant électrique sur le corps humain</li>
                  <li>• Les mesures de protection contre les chocs électriques</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Module 2 : Véhicules électriques et hybrides</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Architecture des véhicules électriques et hybrides</li>
                  <li>• Les batteries haute tension (Lithium-ion)</li>
                  <li>• Les moteurs électriques et onduleurs</li>
                  <li>• Circuits de charge et infrastructures</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Module 3 : Réglementation et habilitation</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Norme NF C18-510 appliquée aux véhicules</li>
                  <li>• Niveaux d'habilitation : B0L, B1L, B2VL, BCL, BRL</li>
                  <li>• Rôle et responsabilités des habilités</li>
                  <li>• Procédures de consignation et déconsignation</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Module 4 : Prévention des risques</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Analyse des risques électriques sur véhicules</li>
                  <li>• Équipements de protection individuelle (EPI)</li>
                  <li>• Outils et matériels isolés</li>
                  <li>• Conduite à tenir en cas d'accident électrique</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Module 5 : Travaux pratiques</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Identification des zones à risques sur véhicule</li>
                  <li>• Utilisation du VAT (Vérificateur d'Absence de Tension)</li>
                  <li>• Mise en œuvre de la consignation</li>
                  <li>• Exercices pratiques sur véhicules écoles</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-yellow-600">
                <h3 className="text-xl font-bold text-slate-900 mb-4">✅ Évaluation finale</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Test théorique (QCM)</li>
                  <li>• Évaluation pratique sur véhicule</li>
                  <li>• Délivrance du titre d'habilitation</li>
                  <li>• Attestation de formation</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Modalités pratiques</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold mb-4">Formation initiale</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• <strong>Durée :</strong> 2 jours (14 heures)</li>
                  <li>• <strong>Prérequis :</strong> Aucun</li>
                  <li>• <strong>Participants :</strong> 4 à 10 personnes</li>
                  <li>• <strong>Lieu :</strong> Intra-entreprise de préférence</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold mb-4">Recyclage (tous les 3 ans)</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• <strong>Durée :</strong> 1,5 jour (10,5 heures)</li>
                  <li>• <strong>Prérequis :</strong> Habilitation en cours de validité</li>
                  <li>• <strong>Programme :</strong> Actualisation des connaissances</li>
                  <li>• <strong>Évaluation :</strong> Théorique et pratique</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16 bg-yellow-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Financement OPCO</h2>
            <p className="text-lg text-slate-700 mb-4">
              Cette formation est <strong>certifiée Qualiopi</strong> et donc <strong>éligible aux financements OPCO</strong>.
            </p>
            <ul className="space-y-3 text-slate-700 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                Prise en charge selon votre OPCO (AKTO, ATLAS, Mobilités, etc.)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                Accompagnement administratif complet
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                Devis et convention de formation rapides
              </li>
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors font-semibold"
            >
              Demander un devis OPCO
              <ArrowRight className="w-5 h-5" />
            </Link>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Questions fréquentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white p-12 rounded-2xl text-center">
            <Zap className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Habilitation Électrique Véhicules Électriques</h2>
            <p className="text-xl mb-8 text-yellow-100">
              Conforme NF C18-510 • Financement OPCO • Sessions intra-entreprise
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-yellow-600 px-8 py-4 rounded-lg hover:bg-yellow-50 transition-colors font-semibold"
            >
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default HabilitationElectriquePage;
