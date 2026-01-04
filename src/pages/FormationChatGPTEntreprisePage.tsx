import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { getPageSEO } from '../config/seo';
import { OrganizationSchema, CourseSchema, FAQSchema } from '../components/common/StructuredData';
import { MessageSquare, Target, CheckCircle, Clock, Award, ArrowRight, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const FormationChatGPTEntreprisePage: React.FC = () => {
  useSEO(getPageSEO('formationChatGPTEntreprise'));

  const faqs = [
    {
      question: "ChatGPT est-il sécurisé pour une utilisation en entreprise ?",
      answer: "Oui, avec ChatGPT Enterprise ou Team, vos données ne sont pas utilisées pour entraîner le modèle. Nous vous formons aux bonnes pratiques de sécurité et confidentialité."
    },
    {
      question: "Faut-il des compétences techniques pour utiliser ChatGPT ?",
      answer: "Non, aucune compétence technique n'est requise. La formation est accessible à tous les collaborateurs, quel que soit leur niveau."
    },
    {
      question: "Puis-je personnaliser la formation selon mon secteur ?",
      answer: "Absolument. Nous adaptons les cas d'usage et exemples à votre secteur d'activité et vos besoins métiers spécifiques."
    },
    {
      question: "La formation est-elle éligible OPCO ?",
      answer: "Oui, certification Qualiopi. Financement OPCO possible jusqu'à 100%. Nous vous accompagnons dans les démarches."
    }
  ];

  return (
    <>
      <OrganizationSchema type="educational" />
      <CourseSchema
        name="Formation ChatGPT Entreprise"
        description="Formation complète à ChatGPT pour entreprises : maîtrisez l'IA générative dans votre métier"
        duration="P1D"
        courseMode="blended"
        educationalLevel="Tous niveaux"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              Formation ChatGPT Professionnelle
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Formation ChatGPT Entreprise
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Maîtrisez ChatGPT et l'IA générative pour booster la productivité de vos équipes.
              Formation pratique avec cas d'usage métiers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
              >
                Demander un devis
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <Clock className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
              <p className="font-semibold">1 à 3 jours</p>
              <p className="text-sm text-slate-600">Selon niveau</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <Award className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
              <p className="font-semibold">Attestation remise</p>
              <p className="text-sm text-slate-600">Certificat de réalisation</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <Users className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
              <p className="font-semibold">2-12 pers.</p>
              <p className="text-sm text-slate-600">Groupe optimal</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <Sparkles className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
              <p className="font-semibold">100% pratique</p>
              <p className="text-sm text-slate-600">Cas réels</p>
            </div>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Objectifs pédagogiques</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Comprendre les capacités et limites de ChatGPT',
                'Maîtriser le prompt engineering pour des résultats optimaux',
                'Automatiser des tâches répétitives avec ChatGPT',
                'Intégrer ChatGPT dans vos workflows quotidiens',
                'Appliquer ChatGPT à vos cas d\'usage métiers',
                'Respecter la sécurité et confidentialité des données'
              ].map((objectif, index) => (
                <div key={index} className="flex items-start gap-3 bg-emerald-50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">{objectif}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 bg-slate-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Programme détaillé</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Jour 1 : Fondamentaux ChatGPT</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Matin : Introduction</h4>
                    <ul className="space-y-1 text-slate-700 ml-4">
                      <li>• Qu'est-ce que ChatGPT et l'IA générative ?</li>
                      <li>• Différences GPT-3.5, GPT-4, GPT-4 Turbo</li>
                      <li>• ChatGPT gratuit vs Plus vs Enterprise</li>
                      <li>• Premiers prompts et meilleures pratiques</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Après-midi : Prompt Engineering</h4>
                    <ul className="space-y-1 text-slate-700 ml-4">
                      <li>• Anatomie d'un bon prompt</li>
                      <li>• Techniques : Few-shot, Chain-of-thought, Roleplay</li>
                      <li>• Gérer le contexte et les conversations longues</li>
                      <li>• Atelier pratique : créer vos prompts métiers</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Jour 2 : Applications métiers (optionnel)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Marketing & Communication</h4>
                    <ul className="space-y-1 text-slate-700 text-sm">
                      <li>• Rédaction de contenus</li>
                      <li>• Social media posts</li>
                      <li>• Emails marketing</li>
                      <li>• SEO et articles de blog</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Commercial & Vente</h4>
                    <ul className="space-y-1 text-slate-700 text-sm">
                      <li>• Prospection intelligente</li>
                      <li>• Scripts de vente</li>
                      <li>• Réponses objections</li>
                      <li>• Propositions commerciales</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">RH & Recrutement</h4>
                    <ul className="space-y-1 text-slate-700 text-sm">
                      <li>• Rédaction offres d'emploi</li>
                      <li>• Screening CV</li>
                      <li>• Questions d'entretien</li>
                      <li>• Onboarding automatisé</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Support & Service Client</h4>
                    <ul className="space-y-1 text-slate-700 text-sm">
                      <li>• Réponses clients rapides</li>
                      <li>• Base de connaissances</li>
                      <li>• Chatbots intelligents</li>
                      <li>• Gestion des réclamations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Jour 3 : Avancé & Intégrations (optionnel)</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Custom GPTs : créer vos assistants personnalisés</li>
                  <li>• Plugins et intégrations tierces</li>
                  <li>• API ChatGPT pour automatisations avancées</li>
                  <li>• Veille et évolution de l'IA générative</li>
                  <li>• Plan d'action personnalisé pour votre entreprise</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Modalités pratiques</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold mb-3">📍 Format</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• Présentiel ou distanciel</li>
                  <li>• Intra-entreprise</li>
                  <li>• Inter-entreprise</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold mb-3">👥 Public</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• Tous collaborateurs</li>
                  <li>• Managers et dirigeants</li>
                  <li>• Équipes marketing, RH, vente</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold mb-3">📦 Inclus</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• Support de cours</li>
                  <li>• 100+ prompts prêts à l'emploi</li>
                  <li>• Certificat de formation</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16 bg-emerald-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Financement OPCO</h2>
            <div className="flex items-center gap-4 mb-6">
              <Award className="w-12 h-12 text-emerald-600" />
              <p className="text-lg text-slate-700">
                Formation <strong>certifiée Qualiopi</strong>, finançable par votre OPCO jusqu'à <strong>100%</strong>.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
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

          <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-12 rounded-2xl text-center">
            <MessageSquare className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Formez vos équipes à ChatGPT dès aujourd'hui</h2>
            <p className="text-xl mb-8 text-emerald-100">
              Devis gratuit sous 24h • Financement OPCO • Sessions sur-mesure
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors font-semibold"
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

export default FormationChatGPTEntreprisePage;
