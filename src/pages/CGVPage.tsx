import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, ArrowUp, Building2, Phone, Mail, MapPin, Hash } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const CGVPage: React.FC = () => {
  useSEO({
    title: 'CGV – IA FORMA PLUS',
    description: 'Conditions générales de vente des formations professionnelles IA FORMA PLUS (B2B), modalités d\'inscription, tarifs, annulation, RGPD.',
    keywords: 'CGV, conditions générales vente, IA FORMA PLUS, formations professionnelles, B2B, OPCO',
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
    { id: 'article-2', title: 'Cadre réglementaire et conformité Qualiopi' },
    { id: 'article-3', title: 'Modalités d\'inscription et constitution du dossier' },
    { id: 'article-4', title: 'Analyse des besoins et individualisation de la formation' },
    { id: 'article-5', title: 'Organisation pédagogique et suivi des stagiaires' },
    { id: 'article-6', title: 'Obligations du client' },
    { id: 'article-7', title: 'Tarifs et modalités financières' },
    { id: 'article-8', title: 'Annulation, report et remplacement' },
    { id: 'article-9', title: 'Protection des données personnelles (RGPD)' },
    { id: 'article-10', title: 'Droits des personnes' },
    { id: 'article-11', title: 'Sécurité et confidentialité' },
    { id: 'article-12', title: 'Réclamation et autorité compétente' },
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
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Conditions Générales de Vente (CGV)</h1>
              <p className="text-gray-600 mt-1">Formations professionnelles B2B</p>
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
                    Les présentes Conditions Générales de Vente (ci-après « CGV ») définissent les conditions dans lesquelles
                    IA FORMA PLUS, organisme de formation professionnelle déclaré et référencé, propose et met en œuvre
                    des actions de formation à destination exclusive des entreprises.
                  </p>
                  <p>
                    Toute commande de formation implique l'adhésion pleine et entière du client aux présentes CGV, qui
                    prévalent sur tout autre document, sauf conditions particulières formalisées par écrit.
                  </p>
                  <p>
                    Les caractéristiques spécifiques de chaque action de formation (objectifs, programme, durée, modalités
                    pédagogiques, modalités d'évaluation, conditions financières) sont précisées dans la proposition
                    commerciale et/ou la convention de formation.
                  </p>
                </div>
              </section>

              {/* Article 2 */}
              <section id="article-2" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 2 – Cadre réglementaire et conformité Qualiopi</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>IA FORMA PLUS exerce son activité conformément :</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>au Code du travail (articles L.6311-1 et suivants),</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>au Référentiel National Qualité (RNQ – décret n°2019-564),</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>aux exigences des financeurs publics et mutualisés (OPCO).</span>
                    </li>
                  </ul>
                  <p>
                    Les processus décrits dans les présentes CGV s'inscrivent dans une démarche qualité conforme à la
                    certification Qualiopi, notamment en matière :
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>d'information du public,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>d'analyse des besoins,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>d'adaptation des prestations,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>de suivi et d'évaluation des actions,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>de traçabilité administrative.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Article 3 */}
              <section id="article-3" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 3 – Modalités d'inscription et constitution du dossier</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    L'inscription à une formation est considérée comme définitive uniquement après réception par IA FORMA
                    PLUS d'un dossier complet, comprenant notamment :
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>la convention de formation signée,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <span>en cas de financement par un OPCO :</span>
                        <ul className="space-y-2 ml-6 mt-2">
                          <li className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>la demande de prise en charge,</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>tout document exigé par l'OPCO concerné.</span>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                  <p>
                    Les documents peuvent être transmis par voie électronique ou via un dispositif de signature électronique
                    sécurisé.
                  </p>
                  <p>
                    Aucune action de formation ne débute sans validation administrative préalable.
                  </p>
                </div>
              </section>

              {/* Article 4 */}
              <section id="article-4" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 4 – Analyse des besoins et individualisation de la formation</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    Avant le démarrage de la formation, IA FORMA PLUS organise une analyse des besoins formalisée,
                    réalisée par un formateur ou un référent pédagogique.
                  </p>
                  <p>Cette analyse vise à :</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>identifier les objectifs professionnels attendus,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>vérifier les prérequis éventuels,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>adapter le contenu, le rythme et les modalités pédagogiques,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>définir les dates et conditions de réalisation.</span>
                    </li>
                  </ul>
                  <p>
                    À l'issue de cette phase, le programme définitif est validé et transmis au client.
                  </p>
                </div>
              </section>

              {/* Article 5 */}
              <section id="article-5" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 5 – Organisation pédagogique et suivi des stagiaires</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    Les formations peuvent être réalisées en présentiel, à distance ou en format hybride.
                  </p>
                  <p>Pour chaque session :</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>la présence des stagiaires est attestée par des feuilles d'émargement (papier ou électroniques),</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>les acquis sont évalués selon les modalités prévues au programme,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>une attestation ou un certificat de réalisation est délivré à l'issue de la formation.</span>
                    </li>
                  </ul>
                  <p>
                    Les éléments de suivi et d'évaluation sont conservés conformément aux obligations réglementaires et aux
                    exigences des financeurs.
                  </p>
                </div>
              </section>

              {/* Article 6 */}
              <section id="article-6" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 6 – Obligations du client</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>Le client s'engage à :</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>communiquer des informations exactes et complètes,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>être à jour de ses obligations sociales,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>informer IA FORMA PLUS du nom exact de l'OPCO compétent.</span>
                    </li>
                  </ul>
                  <p>
                    Toute erreur ou omission engage la responsabilité exclusive du client, notamment en cas de refus ou de
                    rejet de financement.
                  </p>
                  <p>
                    IA FORMA PLUS ne saurait être tenue responsable d'un changement de règles ou de critères d'éligibilité
                    décidé par un financeur après validation du dossier.
                  </p>
                </div>
              </section>

              {/* Article 7 */}
              <section id="article-7" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 7 – Tarifs et modalités financières</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    Les tarifs sont ceux indiqués dans la proposition commerciale acceptée par le client.
                  </p>
                  <p>
                    Ils sont exprimés toutes taxes comprises, hors frais spécifiques éventuellement nécessaires (matériel,
                    licences, déplacements).
                  </p>
                  <div className="mt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Financement avec subrogation</h3>
                    <p>
                      Lorsque la subrogation est accordée, la facture est transmise directement à l'OPCO.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Financement sans subrogation</h3>
                    <p>
                      La facture est adressée au client, qui s'engage à en assurer le règlement, indépendamment du délai de
                      remboursement par l'OPCO.
                    </p>
                  </div>
                </div>
              </section>

              {/* Article 8 */}
              <section id="article-8" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 8 – Annulation, report et remplacement</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    Toute demande d'annulation ou de report doit être formulée par écrit au minimum 10 jours ouvrés avant le
                    début de la formation.
                  </p>
                  <p>Passé ce délai :</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>les frais engagés (mobilisation du formateur, déplacements, hébergement) peuvent être facturés,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>les frais pédagogiques ne sont pas dus si la formation n'a pas débuté (intra-entreprise).</span>
                    </li>
                  </ul>
                  <p>Le remplacement d'un stagiaire est possible sous réserve :</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>d'information préalable,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>du respect des conditions d'éligibilité.</span>
                    </li>
                  </ul>
                  <p>
                    Les sommes versées à titre de dédommagement ne peuvent être imputées sur les contributions légales à la
                    formation professionnelle et ne sont pas finançables par un OPCO.
                  </p>
                </div>
              </section>

              {/* Article 9 */}
              <section id="article-9" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 9 – Protection des données personnelles (RGPD)</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    IA FORMA PLUS agit en qualité de responsable du traitement des données personnelles collectées dans le
                    cadre de ses activités de formation.
                  </p>
                  <p>Les données sont traitées exclusivement pour :</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>la gestion administrative et pédagogique,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>le suivi des actions de formation,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>les obligations légales et réglementaires.</span>
                    </li>
                  </ul>
                  <p>
                    Les données sont conservées pour la durée strictement nécessaire aux finalités poursuivies.
                  </p>
                </div>
              </section>

              {/* Article 10 */}
              <section id="article-10" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 10 – Droits des personnes</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    Conformément au Règlement (UE) 2016/679 – RGPD, toute personne dispose des droits suivants :
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>accès,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>rectification,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>effacement,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>limitation,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>opposition.</span>
                    </li>
                  </ul>
                  <p>
                    Les demandes doivent être formulées par écrit, accompagnées d'un justificatif d'identité, à l'adresse
                    suivante :
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 mt-3">
                    <p className="font-semibold text-gray-900">IA FORMA PLUS</p>
                    <p>138, boulevard Haussmann 75008 PARIS</p>
                    <p>Contact [@] iaformaplus.com</p>
                  </div>
                </div>
              </section>

              {/* Article 11 */}
              <section id="article-11" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 11 – Sécurité et confidentialité</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    IA FORMA PLUS met en œuvre toutes les mesures techniques et organisationnelles nécessaires afin
                    d'assurer la sécurité, l'intégrité et la confidentialité des données personnelles.
                  </p>
                  <p>
                    En cas de violation avérée, les autorités compétentes et les personnes concernées seront informées
                    conformément à la réglementation en vigueur.
                  </p>
                </div>
              </section>

              {/* Article 12 */}
              <section id="article-12" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 12 – Réclamation et autorité compétente</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  <p>
                    Toute réclamation relative au traitement des données personnelles peut être adressée à l'autorité de
                    contrôle compétente :
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 mt-3">
                    <p className="font-semibold text-gray-900">CNIL – Commission Nationale de l'Informatique et des Libertés</p>
                    <p>3 place de Fontenoy – TSA 80715</p>
                    <p>75334 Paris Cedex 07</p>
                  </div>
                </div>
              </section>

              {/* Signature */}
              <div className="border-t pt-8 mt-8">
                <div className="text-right">
                  <p className="text-gray-700 mb-2">Fait à Paris</p>
                  <p className="font-semibold text-gray-900">IA FORMA PLUS</p>
                  <p className="text-gray-700">Didier KRIEF</p>
                </div>
              </div>

              {/* Contact */}
              <div className="border-t pt-8 mt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Contact</h2>
                <p className="text-gray-700 leading-relaxed">
                  Pour toute question relative aux présentes conditions générales de vente,
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

export default CGVPage;
