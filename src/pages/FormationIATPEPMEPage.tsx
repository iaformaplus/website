import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { getPageSEO } from '../config/seo';
import { OrganizationSchema, CourseSchema, FAQSchema } from '../components/common/StructuredData';
import { Building2, Target, Users, CheckCircle, Clock, Award, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const FormationIATPEPMEPage: React.FC = () => {
  useSEO(getPageSEO('formationIATPEPME'));

  const faqs = [
    {
      question: "Pourquoi une TPE/PME devrait-elle se former à l'IA ?",
      answer: "L'IA permet d'automatiser des tâches répétitives, gagner en productivité et rester compétitif face aux grandes entreprises. ChatGPT et les outils IA sont accessibles à tous, sans prérequis technique."
    },
    {
      question: "La formation est-elle finançable par l'OPCO ?",
      answer: "Oui, nos formations sont certifiées Qualiopi et éligibles au financement OPCO. Nous vous accompagnons dans les démarches administratives."
    },
    {
      question: "Quels sont les prérequis pour cette formation ?",
      answer: "Aucun prérequis technique. Une connaissance de base de l'informatique suffit. La formation est adaptée aux débutants."
    },
    {
      question: "Combien de temps dure la formation ?",
      answer: "De 1 à 3 jours selon vos besoins, en présentiel ou distanciel. Nous adaptons le programme à votre secteur d'activité."
    }
  ];

  return (
    <>
      <OrganizationSchema type="educational" />
      <CourseSchema
        name="Formation IA pour TPE/PME"
        description="Formation complète à l'Intelligence Artificielle adaptée aux petites et moyennes entreprises"
        duration="P1D"
        courseMode="blended"
        educationalLevel="Débutant à Intermédiaire"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              Formation Spéciale TPE/PME
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Formation IA pour TPE/PME
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Transformez votre petite entreprise avec l'Intelligence Artificielle.
              Formation pratique adaptée aux TPE/PME, sans prérequis technique.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Demander un devis
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+33XXXXXXXXX"
                className="inline-flex items-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                Nous appeler
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Durée flexible</h3>
              <p className="text-slate-600">1 à 3 jours selon vos besoins</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Organisme certifié Qualiopi</h3>
              <p className="text-slate-600">Financement OPCO disponible</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Sur-mesure</h3>
              <p className="text-slate-600">Adapté à votre secteur</p>
            </div>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Objectifs de la formation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Comprendre les bases de l\'IA et son impact sur les TPE/PME',
                'Maîtriser ChatGPT et les outils IA pour gagner du temps',
                'Automatiser les tâches répétitives de votre entreprise',
                'Améliorer votre communication client avec l\'IA',
                'Créer du contenu marketing rapidement',
                'Optimiser votre gestion administrative'
              ].map((objectif, index) => (
                <div key={index} className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">{objectif}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 bg-slate-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Programme détaillé</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Module 1 : Introduction à l'IA pour TPE/PME</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Qu'est-ce que l'IA et comment peut-elle aider ma petite entreprise ?</li>
                  <li>• Les outils IA gratuits et accessibles</li>
                  <li>• ChatGPT : présentation et premiers pas</li>
                  <li>• Cas d'usage concrets dans votre secteur</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Module 2 : ChatGPT pour la productivité</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Rédiger des emails professionnels rapidement</li>
                  <li>• Créer du contenu pour vos réseaux sociaux</li>
                  <li>• Générer des documents administratifs</li>
                  <li>• Brainstorming et génération d'idées</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Module 3 : IA pour la communication client</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Répondre aux clients plus rapidement</li>
                  <li>• Créer des FAQ automatiques</li>
                  <li>• Personnaliser vos messages clients</li>
                  <li>• Gérer les avis et retours clients</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Module 4 : Marketing et visibilité avec l'IA</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Créer des visuels attractifs (Canva IA, DALL-E)</li>
                  <li>• Optimiser votre présence en ligne</li>
                  <li>• Rédiger des articles de blog SEO</li>
                  <li>• Automatiser vos campagnes marketing</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Module 5 : Atelier pratique sur vos cas réels</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Application directe sur vos besoins métier</li>
                  <li>• Création de templates personnalisés</li>
                  <li>• Plan d'action pour intégrer l'IA dans votre quotidien</li>
                  <li>• Conseils pour rester à jour</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Modalités</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold mb-4">Format</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Présentiel ou distanciel</li>
                  <li>• Intra-entreprise (dans vos locaux)</li>
                  <li>• Inter-entreprise (sessions collectives)</li>
                  <li>• Groupes de 2 à 8 personnes</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold mb-4">Matériel fourni</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Support de cours PDF</li>
                  <li>• Templates et prompts prêts à l'emploi</li>
                  <li>• Accès à des ressources exclusives</li>
                  <li>• Certificat de formation</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16 bg-blue-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Financement OPCO</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-slate-700 mb-4">
                  Cette formation est <strong>certifiée Qualiopi</strong> et donc <strong>éligible aux financements OPCO</strong>.
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    Prise en charge jusqu'à 100% selon votre OPCO
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    Nous gérons les démarches administratives
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    Devis et convention sous 48h
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">OPCO partenaires</h3>
                <p className="text-slate-600 mb-4">OPCO EP, AFDAS, AKTO, ATLAS, Constructys, Uniformation, Ocapiat...</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Vérifier mon éligibilité
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
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
            <TrendingUp className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Prêt à transformer votre entreprise avec l'IA ?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Contactez-nous pour un devis personnalisé et gratuit
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                Demander un devis
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+33XXXXXXXXX"
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
              >
                Appeler maintenant
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default FormationIATPEPMEPage;
