import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, ArrowUp, Building2, Phone, Mail, MapPin, Hash, User } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const ReglementInterieurPage: React.FC = () => {
  useSEO({
    title: 'Règlement intérieur – IA FORMA PLUS',
    description: 'Règlement intérieur applicable aux stagiaires des formations professionnelles IA FORMA PLUS (hygiène, sécurité, discipline, sanctions, droits et devoirs).',
    keywords: 'règlement intérieur, stagiaires, formation professionnelle, IA FORMA PLUS, discipline, sécurité',
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

  const articles = [
    { id: 'article-1', title: 'Objet et champ d\'application' },
    { id: 'article-2', title: 'Conditions générales d\'hygiène et de sécurité' },
    { id: 'article-3', title: 'Discipline générale' },
    { id: 'article-4', title: 'Tenue, comportement et image' },
    { id: 'article-5', title: 'Horaires, assiduité, absences et retards' },
    { id: 'article-6', title: 'Utilisation du matériel et des supports' },
    { id: 'article-7', title: 'Sanctions disciplinaires' },
    { id: 'article-8', title: 'Représentation des stagiaires' },
    { id: 'article-9', title: 'Responsabilité et assurance' },
    { id: 'article-10', title: 'Données personnelles et confidentialité' },
    { id: 'article-11', title: 'Entrée en vigueur et diffusion' },
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
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Règlement intérieur applicable aux stagiaires</h1>
              <p className="text-gray-600 mt-1">Formation professionnelle</p>
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
                  <p className="font-semibold text-gray-900">Organisme de formation :</p>
                  <p className="text-gray-700">IA FORMA PLUS</p>
                </div>
                <div>
                  <p className="text-gray-700"><span className="font-semibold">SIRET:</span> 941 565 988 00016</p>
                  <p className="text-gray-700"><span className="font-semibold">NDA:</span> 11757219975</p>
                </div>
                <div className="flex items-start">
                  <MapPin size={16} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">138 boulevard Haussmann<br />75008 Paris</p>
                </div>
                <div className="flex items-start">
                  <User size={16} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Représenté par :</p>
                    <p className="text-gray-700">Didier KRIEF</p>
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
                {articles.map((article, index) => (
                  <button
                    key={article.id}
                    onClick={() => scrollToSection(article.id)}
                    className="text-left text-primary hover:text-primary-dark hover:underline transition-colors text-sm py-1"
                  >
                    Article {index + 1} – {article.title}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contenu principal */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-10">

              {/* Article 1 */}
              <section id="article-1" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 1 – Objet et champ d'application</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    Le présent règlement intérieur est établi conformément aux dispositions des articles L.6352-3 à
                    L.6352-5 et R.6352-1 à R.6352-15 du Code du travail.
                  </p>
                  <p>Il a pour objet :</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>de fixer les règles générales d'hygiène, de sécurité et de discipline applicables aux stagiaires,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>de préciser les modalités de représentation des stagiaires,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>et de rappeler les droits et devoirs de chacun durant la formation.</span>
                    </li>
                  </ul>
                  <p>
                    Ce règlement s'applique à toutes les actions de formation organisées par IA FORMA PLUS,
                    qu'elles soient :
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>dispensées en visioconférence,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>ou en intra-entreprise, dans les locaux du client.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Article 2 */}
              <section id="article-2" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 2 – Conditions générales d'hygiène et de sécurité</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">2.1. Formations en visioconférence</h3>
                    <p>
                      Le stagiaire s'engage à suivre la formation dans un environnement calme, adapté et sécurisé, à
                      l'aide d'un matériel en bon état de fonctionnement (ordinateur, micro, webcam, connexion Internet
                      stable).
                    </p>
                    <p className="mt-3">
                      Il doit veiller à préserver la confidentialité de ses accès et à ne pas communiquer ses identifiants de
                      connexion à des tiers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">2.2. Formations en intra-entreprise</h3>
                    <p>
                      IA FORMA PLUS, siège social est situé à 138 BOULEVARD HAUSSMANN, 75008 PARIS, immatriculé sous le numéro
                      94156598800016, déclaration d'activité est enregistrée sous le numéro 11757219975 auprès du préfet de la région d'Ile-de-France.
                    </p>
                    <p className="mt-3">
                      Lorsque la formation se déroule dans les locaux d'une entreprise cliente, les règles d'hygiène et de
                      sécurité de cette entreprise s'appliquent.
                    </p>
                    <p className="mt-3">
                      Chaque stagiaire est tenu de s'y conformer.
                    </p>
                    <p className="mt-3">
                      En cas d'incident, IA FORMA PLUS ne pourra être tenue pour responsable si les consignes
                      internes n'ont pas été respectées.
                    </p>
                  </div>
                </div>
              </section>

              {/* Article 3 */}
              <section id="article-3" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 3 – Discipline générale</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    Les stagiaires doivent adopter un comportement respectueux et professionnel à l'égard des autres
                    stagiaires, des formateurs et de tout personnel lié à la formation.
                  </p>
                  <p>Sont notamment interdits :</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>tout comportement violent, injurieux, discriminatoire ou à caractère sexiste/raciste,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>les enregistrements audio/vidéo sans autorisation écrite,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>l'utilisation de matériel non autorisé à des fins personnelles,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>les absences ou retards répétés non justifiés,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>la consommation ou la présence sous l'emprise d'alcool ou de stupéfiants.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Article 4 */}
              <section id="article-4" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 4 – Tenue, comportement et image</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    Les stagiaires doivent se présenter dans une tenue correcte et adaptée.
                  </p>
                  <p>
                    En visioconférence, la caméra doit être activée sauf instruction contraire, et l'identification doit se
                    faire sous le nom réel du participant.
                  </p>
                  <p>
                    Tout comportement perturbant ou manquant de respect pourra donner lieu à une sanction
                    disciplinaire.
                  </p>
                </div>
              </section>

              {/* Article 5 */}
              <section id="article-5" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 5 – Horaires, assiduité, absences et retards</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    Les horaires de formation sont communiqués par convocation ou mail avant le démarrage.
                  </p>
                  <p>
                    Toute absence ou tout retard doit être signalé à l'organisme de formation ou au formateur.
                  </p>
                  <p>Les absences injustifiées peuvent entraîner :</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>la non-délivrance de l'attestation de fin de formation,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>un signalement au financeur (OPCO, CPF, entreprise cliente).</span>
                    </li>
                  </ul>
                  <p>
                    IA FORMA PLUS, siège social est situé à 138 BOULEVARD HAUSSMANN, 75008 PARIS, immatriculé sous le numéro
                    94156598800016, déclaration d'activité est enregistrée sous le numéro 11757219975 auprès du préfet de la région d'Ile-de-France.
                  </p>
                  <p>
                    L'assiduité est une condition essentielle au financement de la formation.
                  </p>
                </div>
              </section>

              {/* Article 6 */}
              <section id="article-6" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 6 – Utilisation du matériel et des supports</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    Les supports de formation (documents, vidéos, présentations, outils numériques, etc.) sont protégés
                    par le droit d'auteur.
                  </p>
                  <p>
                    Toute reproduction, diffusion ou réutilisation, même partielle, sans l'accord écrit d'IA FORMA
                    PLUS est interdite.
                  </p>
                  <p>
                    Les stagiaires doivent utiliser le matériel mis à disposition (physique ou numérique) exclusivement
                    pour les besoins de la formation.
                  </p>
                </div>
              </section>

              {/* Article 7 */}
              <section id="article-7" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 7 – Sanctions disciplinaires</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    Tout manquement au présent règlement pourra faire l'objet d'une sanction disciplinaire pouvant
                    aller de l'avertissement à l'exclusion définitive de la formation.
                  </p>
                  <p>
                    Avant toute sanction (sauf avertissement), le stagiaire sera convoqué à un entretien préalable,
                    conformément aux articles R6352-4 à R6352-8 du Code du travail.
                  </p>
                </div>
              </section>

              {/* Article 8 */}
              <section id="article-8" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 8 – Représentation des stagiaires</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    Pour les formations d'une durée supérieure à 500 heures, les stagiaires peuvent élire un représentant
                    et un suppléant.
                  </p>
                  <p>
                    Leur rôle est de présenter toute suggestion ou réclamation relative au déroulement de la formation.
                  </p>
                  <p>
                    Les modalités d'élection sont précisées en début de formation.
                  </p>
                </div>
              </section>

              {/* Article 9 */}
              <section id="article-9" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 9 – Responsabilité et assurance</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    Chaque stagiaire est responsable des dommages qu'il pourrait causer au matériel mis à disposition.
                  </p>
                  <p>
                    Il est recommandé de disposer d'une assurance responsabilité civile couvrant sa participation aux
                    formations.
                  </p>
                </div>
              </section>

              {/* Article 10 */}
              <section id="article-10" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 10 – Données personnelles et confidentialité</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    Les informations recueillies dans le cadre des formations sont traitées par IA FORMA PLUS dans
                    le respect du Règlement Général sur la Protection des Données (RGPD).
                  </p>
                  <p>
                    Les stagiaires s'engagent à respecter la confidentialité des informations échangées durant la
                    formation (contenus, témoignages, discussions, supports…).
                  </p>
                </div>
              </section>

              {/* Article 11 */}
              <section id="article-11" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 11 – Entrée en vigueur et diffusion</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    Le présent règlement entre en vigueur à compter du 14/04/2025.
                  </p>
                  <p>
                    Il est consultable sur simple demande, transmis à chaque stagiaire avant le début de la formation, et
                    annexé au livret d'accueil de l'organisme.
                  </p>
                  <p>
                    IA FORMA PLUS, siège social est situé à 138 BOULEVARD HAUSSMANN, 75008 PARIS, immatriculé sous le numéro
                    94156598800016, déclaration d'activité est enregistrée sous le numéro 11757219975 auprès du préfet de la région d'Ile-de-France.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <div className="border-t pt-8 mt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Contact</h2>
                <p className="text-gray-700 leading-relaxed">
                  Pour toute question relative au présent règlement intérieur,
                  vous pouvez nous contacter à l'adresse :
                  <a href="mailto:contact@iaformaplus.com" className="text-primary hover:underline ml-1">
                    contact@iaformaplus.com
                  </a>
                </p>
              </div>

              {/* Documents juridiques associés */}
              <div className="border-t pt-8 mt-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Documents juridiques associés</h2>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/cgu"
                    className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    <FileText size={16} className="mr-2" />
                    Conditions Générales d'Utilisation
                  </Link>
                  <Link
                    to="/cgv"
                    className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    <FileText size={16} className="mr-2" />
                    Conditions Générales de Vente
                  </Link>
                  <Link
                    to="/mentions-legales"
                    className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    <FileText size={16} className="mr-2" />
                    Mentions Légales
                  </Link>
                </div>
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

export default ReglementInterieurPage;
