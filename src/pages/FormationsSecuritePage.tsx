import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle, Clock, Users, Target, BookOpen, Award, Phone, Mail, AlertTriangle, Zap } from 'lucide-react';

/**
 * Page Formations Sécurité
 *
 * Présente l'offre de formations sécurité avec focus SST (Forprev)
 * et autres formations sécurité courantes.
 */

const FormationsSecuritePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50/30">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMC0yMGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00em0yMCAyMGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00em0wLTIwYzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6TTM2IDU0YzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6bTIwIDBjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHpNMTYgMzRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMC0yMGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00em0wIDQwYzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <Shield size={40} className="text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Formations Sécurité
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Formations obligatoires et certifiantes pour garantir la sécurité de vos équipes
              et la conformité de votre entreprise aux réglementations en vigueur.
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center text-white/90">
              <div className="flex items-center">
                <CheckCircle size={20} className="mr-2" />
                <span>Formations obligatoires</span>
              </div>
              <div className="w-px h-6 bg-white/30"></div>
              <div className="flex items-center">
                <CheckCircle size={20} className="mr-2" />
                <span>Certifications reconnues</span>
              </div>
              <div className="w-px h-6 bg-white/30"></div>
              <div className="flex items-center">
                <CheckCircle size={20} className="mr-2" />
                <span>Formateurs experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formation SST - Principale avec partenariat Forprev */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">

            {/* Bandeau partenariat Forprev */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-6 mb-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <Shield size={32} className="mr-4" />
                  <div>
                    <h3 className="text-xl font-bold">Formation SST Certifiante</h3>
                    <p className="text-white/90">En partenariat avec Forprev</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={24} className="mr-2" />
                  <span className="font-semibold">Agréé & Certifié</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

              {/* Image d'en-tête */}
              <div className="relative h-80 bg-gradient-to-br from-green-100 to-emerald-100">
                <img
                  src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Formation SST - Sauveteur Secouriste du Travail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-4 py-2 bg-green-500 text-white rounded-full text-sm font-semibold mb-3">
                    Formation certifiante obligatoire
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Sauveteur Secouriste du Travail (SST)
                  </h2>
                  <p className="text-white/90 text-lg">
                    Formation agréée en partenariat avec Forprev
                  </p>
                </div>
              </div>

              {/* Contenu de la formation SST */}
              <div className="p-8 md:p-12">

                {/* Bandeau important */}
                <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded">
                  <div className="flex items-start">
                    <AlertTriangle size={24} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Formation réalisée avec l'agrément Forprev</h3>
                      <p className="text-gray-700">
                        Nos formations SST sont dispensées en partenariat avec Forprev, organisme agréé
                        par l'INRS (Institut National de Recherche et de Sécurité). Cette certification
                        garantit la conformité de la formation aux exigences réglementaires et la validité
                        du certificat SST délivré.
                      </p>
                      <p className="text-gray-700 mt-2">
                        <strong>Minimum 4 stagiaires requis</strong> pour l'organisation d'une session.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Résumé */}
                <div className="mb-8">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    La formation SST permet à tout salarié de devenir Sauveteur Secouriste du Travail,
                    capable d'intervenir efficacement face à une situation d'accident et de contribuer
                    à la prévention des risques professionnels dans l'entreprise.
                  </p>
                </div>

                {/* Objectifs pédagogiques */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Target size={24} className="mr-3 text-green-600" />
                    Objectifs pédagogiques
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Intervenir efficacement face à une situation d'accident",
                      "Mettre en application ses compétences de SST au service de la prévention",
                      "Situer le cadre juridique de son intervention",
                      "Réaliser une protection adaptée",
                      "Examiner la victime avant et pour la mise en œuvre de l'action choisie",
                      "Faire alerter ou alerter en fonction des procédures",
                      "Secourir la victime de manière appropriée"
                    ].map((objectif, index) => (
                      <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                        <CheckCircle size={20} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{objectif}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Public et prérequis */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Users size={20} className="mr-2 text-green-600" />
                      Public concerné
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start text-gray-700">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Tout salarié d'entreprise</span>
                      </li>
                      <li className="flex items-start text-gray-700">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Personnel désigné par l'employeur</span>
                      </li>
                      <li className="flex items-start text-gray-700">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Minimum 4 participants par session</span>
                      </li>
                      <li className="flex items-start text-gray-700">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Maximum 10 participants par session</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <BookOpen size={20} className="mr-2 text-green-600" />
                      Prérequis
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start text-gray-700">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Aucun prérequis de diplôme ou de certification</span>
                      </li>
                      <li className="flex items-start text-gray-700">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Aucune connaissance préalable en secourisme nécessaire</span>
                      </li>
                      <li className="flex items-start text-gray-700">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Aptitude physique permettant les mises en situation</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Durée et format */}
                <div className="bg-blue-50 rounded-xl p-6 mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center">
                      <Clock size={24} className="text-blue-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900">Durée</div>
                        <div className="text-gray-700">14 heures (2 jours)</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users size={24} className="text-blue-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900">Format</div>
                        <div className="text-gray-700">Présentiel obligatoire</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Award size={24} className="text-blue-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900">Validité</div>
                        <div className="text-gray-700">2 ans (recyclage)</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Programme détaillé */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <BookOpen size={24} className="mr-3 text-green-600" />
                    Programme de formation
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        titre: "Situer le cadre juridique de son intervention",
                        points: ["Rôle du SST dans l'entreprise", "Cadre réglementaire"]
                      },
                      {
                        titre: "Protéger - Examiner - Alerter",
                        points: ["Supprimer ou isoler le danger", "Examiner la victime", "Faire alerter ou alerter les secours"]
                      },
                      {
                        titre: "Secourir : gestes de premiers secours",
                        points: ["La victime saigne abondamment", "La victime s'étouffe", "La victime se plaint d'un malaise", "La victime se plaint de brûlures", "La victime se plaint d'une douleur empêchant certains mouvements", "La victime ne répond pas mais respire", "La victime ne répond pas et ne respire pas"]
                      },
                      {
                        titre: "Situations inhérentes aux risques spécifiques de l'entreprise",
                        points: ["Adaptation au contexte de l'entreprise"]
                      }
                    ].map((module, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-bold text-lg text-gray-900 mb-3">{module.titre}</h4>
                        <ul className="space-y-2">
                          {module.points.map((point, idx) => (
                            <li key={idx} className="flex items-start text-gray-700">
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modalités pédagogiques */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Modalités pédagogiques
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Méthodes</h4>
                      <p className="text-gray-700">Formation essentiellement pratique avec mises en situation réelles sur mannequins et matériel de simulation.</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Supports</h4>
                      <p className="text-gray-700">Mannequins adulte, enfant et nourrisson, défibrillateur de formation (DAE), matériel de simulation.</p>
                    </div>
                  </div>
                </div>

                {/* Évaluation et certification */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Award size={24} className="mr-3 text-green-600" />
                    Évaluation et certification
                  </h3>
                  <div className="bg-green-50 rounded-lg p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start text-gray-700">
                        <CheckCircle size={20} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Évaluation continue tout au long de la formation</span>
                      </li>
                      <li className="flex items-start text-gray-700">
                        <CheckCircle size={20} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Épreuves certificatives selon le référentiel INRS</span>
                      </li>
                      <li className="flex items-start text-gray-700">
                        <CheckCircle size={20} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span><strong>Certificat SST national</strong> délivré par le réseau INRS/Forprev, valable 24 mois</span>
                      </li>
                      <li className="flex items-start text-gray-700">
                        <CheckCircle size={20} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Recyclage obligatoire tous les 2 ans (MAC SST - 7 heures)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Accessibilité */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Accessibilité
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 leading-relaxed">
                      Nos formations sont accessibles aux personnes en situation de handicap. Pour toute
                      demande d'adaptation, merci de nous contacter afin d'étudier les aménagements possibles
                      (support pédagogique, durée, lieu, assistance, etc.).
                    </p>
                  </div>
                </div>

                {/* Financement */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Financement
                  </h3>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Cette formation SST est <strong>éligible aux financements OPCO</strong> selon votre branche
                      professionnelle et votre situation.
                    </p>
                    <p className="text-gray-700">
                      Notre équipe vous accompagne dans vos démarches de prise en charge et le montage de votre
                      dossier de financement.
                    </p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors shadow-lg"
                  >
                    <Mail size={20} className="mr-2" />
                    Demander un devis
                  </Link>
                  <a
                    href="tel:0162177770"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-green-600 border-2 border-green-600 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    <Phone size={20} className="mr-2" />
                    01 62 17 77 70
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Autres formations sécurité */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Autres formations sécurité
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complétez vos obligations réglementaires avec nos formations sécurité complémentaires
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Sécurité incendie */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48">
                <img
                  src="https://images.pexels.com/photos/280076/pexels-photo-280076.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Sécurité incendie"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-red-500 text-white rounded-full text-sm font-semibold">
                    Obligatoire
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Sécurité incendie
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Formation aux consignes de sécurité incendie et à l'évacuation. Manipulation d'extincteurs
                  et procédures d'alerte.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock size={16} className="mr-2" />
                  <span>3h30 - Présentiel</span>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-red-600 font-semibold hover:text-red-700"
                >
                  En savoir plus
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Gestes et postures */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48">
                <img
                  src="https://images.pexels.com/photos/3768582/pexels-photo-3768582.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Gestes et postures"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-semibold">
                    Recommandée
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Gestes et postures
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Prévention des troubles musculo-squelettiques (TMS). Techniques de manutention manuelle
                  et port de charges.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock size={16} className="mr-2" />
                  <span>7h - Présentiel</span>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700"
                >
                  En savoir plus
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Habilitation électrique */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48">
                <img
                  src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Habilitation électrique"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-yellow-500 text-white rounded-full text-sm font-semibold">
                    Habilitation
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Habilitation électrique
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Formation aux risques électriques selon la norme NF C18-510. Différents niveaux
                  d'habilitation (H0B0, BS BE, BR, B1 B2, etc.).
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock size={16} className="mr-2" />
                  <span>7h à 21h - Présentiel</span>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700"
                >
                  En savoir plus
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16">
        <div className="container">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Besoin d'une formation sécurité ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Notre équipe vous conseille et vous accompagne dans le choix de vos formations
              obligatoires et leur mise en place au sein de votre entreprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Mail size={20} className="mr-2" />
                Demander un devis gratuit
              </Link>
              <a
                href="tel:0162177770"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors"
              >
                <Phone size={20} className="mr-2" />
                Nous appeler
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FormationsSecuritePage;
