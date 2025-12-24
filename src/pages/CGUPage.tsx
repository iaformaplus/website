import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, ArrowUp, Building2, Phone, Mail, MapPin, Hash } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const CGUPage: React.FC = () => {
  useSEO({
    title: 'CGU – IA FORMA PLUS',
    description: 'Conditions générales d\'utilisation du site internet et de la plateforme de formation à distance IA FORMA PLUS.',
    keywords: 'CGU, conditions générales utilisation, IA FORMA PLUS, formation à distance, plateforme formation',
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    { id: 'section-1', title: 'Identification de l\'organisme' },
    { id: 'section-2', title: 'Champ d\'application' },
    { id: 'section-3', title: 'Définitions' },
    { id: 'section-4', title: 'Accès au site et aux services' },
    { id: 'section-5', title: 'Création et gestion du compte utilisateur' },
    { id: 'section-6', title: 'Engagements de l\'utilisateur' },
    { id: 'section-7', title: 'Utilisation pédagogique et éthique' },
    { id: 'section-8', title: 'Propriété intellectuelle' },
    { id: 'section-9', title: 'Responsabilité de l\'utilisateur' },
    { id: 'section-10', title: 'Responsabilité de IA FORMA PLUS' },
    { id: 'section-11', title: 'Données personnelles' },
    { id: 'section-12', title: 'Évolution des CGU' },
    { id: 'section-13', title: 'Droit applicable et juridiction compétente' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link
              to="/"
              className="flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Retour à l'accueil
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <FileText size={24} className="text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Conditions Générales d'Utilisation (CGU)</h1>
              <p className="text-gray-600 mt-1">Site internet & Plateforme de formation à distance (en cours de construction)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-[900px] mx-auto">

            {/* Encart identité organisme */}
            <div className="bg-blue-50 border-l-4 border-primary rounded-lg p-6 mb-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Building2 size={20} className="mr-2 text-primary" />
                Identité de l'organisme
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-900">IA FORMA PLUS</p>
                  <p className="text-gray-700">SAS au capital de 1 000 €</p>
                </div>
                <div>
                  <p className="text-gray-700"><span className="font-semibold">SIRET:</span> 941 565 988 00016</p>
                  <p className="text-gray-700"><span className="font-semibold">NDA:</span> 11757219975</p>
                </div>
                <div className="flex items-start">
                  <MapPin size={16} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">138 boulevard Haussmann<br />75008 Paris</p>
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <Phone size={16} className="mr-2 text-primary" />
                    <a href="tel:0162177770" className="text-gray-700 hover:text-primary transition-colors">01 62 17 77 70</a>
                  </div>
                  <div className="flex items-center mb-1">
                    <Phone size={16} className="mr-2 text-primary" />
                    <a href="https://wa.me/33749625335" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors">07 49 62 53 35 (WhatsApp)</a>
                  </div>
                  <div className="flex items-center">
                    <Mail size={16} className="mr-2 text-primary" />
                    <a href="mailto:contact@iaformaplus.com" className="text-gray-700 hover:text-primary transition-colors">contact@iaformaplus.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Table des matières */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Hash size={20} className="mr-2 text-primary" />
                Table des matières
              </h2>
              <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="text-left text-primary hover:text-primary-dark hover:underline transition-colors text-sm py-1"
                  >
                    {index + 1}. {section.title}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contenu principal */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-10">

              {/* Section 1 */}
              <section id="section-1" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Identification de l'organisme</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    IA FORMA PLUS est un organisme de formation professionnelle dont l'activité consiste à concevoir et
                    dispenser des actions de formation destinées aux adultes, dans une logique de développement des
                    compétences, d'adaptation professionnelle et de montée en qualification.
                  </p>
                  <p>
                    Les formations proposées tiennent compte des objectifs individuels et professionnels des apprenants, ainsi
                    que de leurs contraintes organisationnelles.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="section-2" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Champ d'application</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») ont pour objet de définir les modalités
                    d'accès, de navigation et d'utilisation du site internet et des outils numériques de formation mis à disposition
                    par IA FORMA PLUS.
                  </p>
                  <p>
                    Toute consultation du site ou utilisation de la plateforme implique l'adhésion pleine et entière aux présentes
                    CGU, ainsi qu'aux documents juridiques associés (mentions légales, politique de confidentialité et conditions
                    générales de vente).
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section id="section-3" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Définitions</h2>
                <ul className="space-y-3 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Organisme :</strong> IA FORMA PLUS.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Utilisateur :</strong> toute personne accédant au site ou à la plateforme, qu'elle soit simple visiteur ou titulaire d'un compte.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Client :</strong> personne physique ou morale contractant avec IA FORMA PLUS pour une action de formation.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Apprenant :</strong> personne physique inscrite à une formation, quel que soit le mode de réalisation (présentiel, distanciel ou mixte).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Formation à distance :</strong> action de formation reposant sur des outils numériques accessibles en ligne, permettant un apprentissage encadré ou autonome.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Plateforme :</strong> environnement numérique de formation permettant l'accès aux contenus pédagogiques, hébergé par un prestataire technique tiers.</span>
                  </li>
                </ul>
              </section>

              {/* Section 4 */}
              <section id="section-4" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Accès au site et aux services</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    Le site internet est accessible librement à tout utilisateur disposant d'un accès à Internet.
                  </p>
                  <p>
                    L'accès aux formations et aux contenus pédagogiques est réservé aux utilisateurs disposant d'un compte
                    actif et, le cas échéant, d'une inscription validée à une action de formation.
                  </p>
                  <p>
                    IA FORMA PLUS se réserve la possibilité de restreindre ou de suspendre l'accès à tout ou partie des
                    services, notamment pour des raisons techniques, de maintenance ou de sécurité.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="section-5" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Création et gestion du compte utilisateur</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    Pour accéder aux services de formation, l'utilisateur doit créer un compte personnel en renseignant des
                    informations exactes, complètes et à jour.
                  </p>
                  <p>
                    Chaque compte est strictement personnel.
                  </p>
                  <p>
                    L'utilisateur est responsable de la conservation et de la confidentialité de ses identifiants.
                  </p>
                  <p>
                    Toute action réalisée depuis un compte est réputée effectuée par son titulaire.
                  </p>
                  <p>
                    En cas de suspicion d'utilisation frauduleuse, l'utilisateur doit informer IA FORMA PLUS sans délai.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="section-6" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Engagements de l'utilisateur</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    L'utilisateur s'engage à utiliser le site et la plateforme conformément aux lois et règlements en vigueur.
                  </p>
                  <p>Il s'interdit notamment de :</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>tenter d'accéder à des données ou comptes non autorisés,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>perturber le fonctionnement technique de la plateforme,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>diffuser des contenus illicites, mensongers ou portant atteinte aux droits d'autrui,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>porter atteinte à la réputation de l'organisme ou de tiers,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>contourner les dispositifs d'évaluation ou de contrôle pédagogique.</span>
                    </li>
                  </ul>
                  <p>
                    Tout comportement contraire pourra entraîner des mesures de suspension ou de suppression d'accès.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section id="section-7" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Utilisation pédagogique et éthique</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    Les outils et contenus mis à disposition ont une finalité exclusivement pédagogique.
                  </p>
                  <p>L'utilisateur s'engage à :</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>suivre les formations de manière loyale,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>réaliser les évaluations sans fraude,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>ne pas diffuser les supports, corrigés ou réponses aux évaluations,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>respecter les autres utilisateurs et intervenants.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 8 */}
              <section id="section-8" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Propriété intellectuelle</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    L'ensemble des contenus accessibles sur le site et la plateforme (supports de cours, vidéos, textes,
                    graphismes, logos, marques) est protégé par le droit de la propriété intellectuelle.
                  </p>
                  <p>
                    Toute reproduction, modification, diffusion ou exploitation sans autorisation écrite préalable d'IA FORMA
                    PLUS est strictement interdite.
                  </p>
                  <p>
                    Les contenus sont réservés à un usage personnel et non commercial.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section id="section-9" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Responsabilité de l'utilisateur</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>L'utilisateur est responsable :</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>de son matériel informatique,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>de son accès Internet,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>de la protection de ses données personnelles.</span>
                    </li>
                  </ul>
                  <p>
                    IA FORMA PLUS ne saurait être tenue responsable des dommages résultant d'un usage inapproprié du site
                    ou des contenus.
                  </p>
                </div>
              </section>

              {/* Section 10 */}
              <section id="section-10" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Responsabilité de IA FORMA PLUS</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    IA FORMA PLUS met en œuvre les moyens nécessaires pour assurer l'accessibilité des services, sans
                    garantir une disponibilité permanente.
                  </p>
                  <p>Sa responsabilité ne saurait être engagée en cas :</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>d'interruption temporaire liée à la maintenance,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>de dysfonctionnement imputable à des prestataires techniques,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>de force majeure ou événement extérieur.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 11 */}
              <section id="section-11" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Données personnelles</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    Les données personnelles collectées sont traitées conformément à la réglementation en vigueur.
                  </p>
                  <p>Elles sont utilisées notamment pour :</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>la gestion administrative et pédagogique des formations,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>le suivi des parcours,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>l'édition d'attestations ou certificats,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>le respect des obligations légales et réglementaires.</span>
                    </li>
                  </ul>
                  <p>
                    Les données sont conservées pendant la durée strictement nécessaire aux finalités poursuivies.
                  </p>
                </div>
              </section>

              {/* Section 12 */}
              <section id="section-12" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Évolution des CGU</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    IA FORMA PLUS se réserve le droit de modifier les présentes CGU à tout moment.
                  </p>
                  <p>
                    La version applicable est celle publiée sur le site à la date de consultation ou d'utilisation.
                  </p>
                </div>
              </section>

              {/* Section 13 */}
              <section id="section-13" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Droit applicable et juridiction compétente</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    Les présentes CGU sont soumises au droit français.
                  </p>
                  <p>
                    Tout litige relatif à leur interprétation ou à leur exécution relève de la compétence des juridictions françaises.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <div className="border-t pt-8 mt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Contact</h2>
                <p className="text-gray-700 leading-relaxed">
                  Pour toute question relative aux présentes conditions générales d'utilisation,
                  vous pouvez nous contacter à l'adresse :
                  <a href="mailto:contact@iaformaplus.com" className="text-primary hover:underline ml-1">
                    contact@iaformaplus.com
                  </a>
                </p>
              </div>
            </div>

            {/* Bouton Retour en haut */}
            <div className="mt-6 text-center">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors shadow-sm"
              >
                <ArrowUp size={20} className="mr-2" />
                Retour en haut
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CGUPage;
