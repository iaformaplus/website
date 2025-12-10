import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building, User, Mail, Phone, MapPin, Shield, FileText, Globe } from 'lucide-react';

/**
 * Page Mentions Légales - Conforme organisme de formation
 *
 * Contient toutes les informations légales obligatoires pour un site web
 * et un organisme de formation en France.
 */

const MentionsLegalesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container">
          <Link
            to="/"
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Retour à l'accueil
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mentions légales
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Informations légales et réglementaires conformes à la législation française
            pour les organismes de formation professionnelle.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-10">

            {/* Résumé juridique */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border-l-4 border-primary rounded-lg p-6">
              <p className="text-gray-900 font-semibold text-lg leading-relaxed">
                IA FORMA PLUS – SAS au capital de 1 000 € – SIRET : 941 565 988 00016 – RCS Paris 941 565 988 – Siège social : 138 boulevard Haussmann, 75008 Paris
              </p>
            </div>

            {/* 1. Éditeur du site */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Building size={24} className="mr-3 text-primary" />
                1. Éditeur du site
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                <p className="text-gray-700">
                  <strong>Dénomination :</strong> IA FORMA PLUS – SAS au capital de 1 000 €
                </p>
                <p className="text-gray-700">
                  <strong>Forme juridique :</strong> SAS (Société par Actions Simplifiée)
                </p>
                <p className="text-gray-700">
                  <strong>Capital social :</strong> 1 000 €
                </p>
                <p className="text-gray-700 flex items-start">
                  <MapPin size={18} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Siège social :</strong> 138 boulevard Haussmann, 75008 Paris</span>
                </p>
                <p className="text-gray-700">
                  <strong>SIREN :</strong> 941 565 988
                </p>
                <p className="text-gray-700">
                  <strong>SIRET :</strong> 941 565 988 00016
                </p>
                <p className="text-gray-700">
                  <strong>RCS :</strong> 941 565 988 R.C.S. Paris
                </p>
                <p className="text-gray-700">
                  <strong>N° TVA intracommunautaire :</strong> FR67941565988
                </p>
                <p className="text-gray-700">
                  <strong>Code APE/NAF :</strong> 85.59B – Autres enseignements
                </p>
                <p className="text-gray-700">
                  <strong>Date de création :</strong> 26 février 2025
                </p>
                <p className="text-gray-700 flex items-start">
                  <Phone size={18} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Téléphone :</strong> 01 62 17 77 70</span>
                </p>
                <p className="text-gray-700 flex items-start">
                  <Mail size={18} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Email :</strong> contact@iaformaplus.fr</span>
                </p>
              </div>
            </div>

            {/* 2. Directeur de la publication */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <User size={24} className="mr-3 text-primary" />
                2. Directeur de la publication
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">
                  <strong>Nom :</strong> Didier Krief
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Qualité :</strong> Président
                </p>
              </div>
            </div>

            {/* 3. Hébergement du site */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Globe size={24} className="mr-3 text-primary" />
                3. Hébergement du site
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                <p className="text-gray-700">
                  <strong>Hébergeur :</strong> Bolt (opéré par StackBlitz, Inc.)
                </p>
                <p className="text-gray-700">
                  <strong>Adresse :</strong> 2443 Fillmore Street, Suite 380-7122, San Francisco, CA 94115, USA
                </p>
                <p className="text-gray-700">
                  <strong>Contact :</strong> support@bolt.new
                </p>
              </div>
            </div>

            {/* 4. Déclaration d'activité - NDA */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText size={24} className="mr-3 text-primary" />
                4. Déclaration d'activité (Organisme de formation)
              </h2>
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <p className="text-gray-700 mb-3">
                  <strong>Numéro de déclaration d'activité (NDA) :</strong>
                </p>
                <p className="text-blue-900 font-bold text-xl bg-white px-4 py-3 rounded inline-block">
                  11757219975
                </p>
                <p className="text-gray-600 text-sm mt-4">
                  Enregistrement auprès de la DRIEETS Île-de-France. Cet enregistrement ne vaut pas agrément de l'État.
                </p>
              </div>
            </div>

            {/* 5. Certification Qualiopi */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield size={24} className="mr-3 text-primary" />
                5. Certification Qualiopi
              </h2>
              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                <p className="text-gray-700 mb-3">
                  <strong>Statut de la certification :</strong>
                </p>
                <p className="text-green-900 font-bold text-lg bg-white px-4 py-3 rounded inline-block mb-4 flex items-center gap-2">
                  <span className="text-2xl">✅</span> Organisme certifié Qualiopi
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Catégories d'actions concernées :</strong>
                </p>
                <p className="text-green-900 font-medium bg-white px-4 py-2 rounded inline-block mb-4 flex items-center gap-2">
                  <span className="text-xl">✅</span> Actions de formation
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  La certification qualité Qualiopi atteste de la conformité de nos actions de formation aux exigences du Référentiel National Qualité (RNQ) et facilite la mobilisation de financements publics et mutualisés, notamment via les OPCO, selon conditions.
                </p>
              </div>
            </div>

            {/* 6. Formation SST - Partenariat FORPREV */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield size={24} className="mr-3 text-primary" />
                6. Formation SST - Partenariat FORPREV
              </h2>
              <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                <p className="text-gray-700 leading-relaxed">
                  Pour la formation <strong>SST (Sauveteur Secouriste du Travail)</strong>, IA FORMA PLUS intervient dans le cadre de l'agrément/partenariat <strong>FORPREV</strong>, selon le dispositif applicable.
                </p>
              </div>
            </div>

            {/* 7. OPCO et financements */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                7. Financements - OPCO
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Financement par OPCO</strong>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nos formations peuvent être prises en charge par les Opérateurs de Compétences (OPCO)
                  selon votre branche professionnelle et votre situation. Nous vous accompagnons dans vos
                  démarches de financement et le montage de votre dossier auprès de votre OPCO.
                </p>
                <p className="text-gray-700 mt-3 leading-relaxed">
                  Les OPCO concernés incluent : OPCO EP, AFDAS, AKTO, Atlas, Constructys, L'Opcommerce,
                  OCAPIAT, Opco Mobilités, Opco Santé, Opco 2i, et Uniformation.
                </p>
                <p className="text-gray-600 text-sm mt-4 italic">
                  Note : Nos formations ne sont actuellement pas éligibles au CPF (Compte Personnel de Formation).
                </p>
              </div>
            </div>

            {/* 8. Propriété intellectuelle */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                8. Propriété intellectuelle
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, icônes,
                  logiciels, programmes, etc.) est la propriété exclusive d'IA FORMA PLUS ou de ses
                  partenaires, et est protégé par les lois françaises et internationales relatives à
                  la propriété intellectuelle.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou
                  partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite,
                  sauf autorisation écrite préalable d'IA FORMA PLUS.
                </p>
              </div>
            </div>

            {/* 9. Responsabilité */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                9. Limitation de responsabilité
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                <p className="text-gray-700 leading-relaxed">
                  IA FORMA PLUS s'efforce d'assurer l'exactitude et la mise à jour des informations
                  diffusées sur ce site, mais ne peut garantir l'exactitude, la précision ou l'exhaustivité
                  des informations mises à disposition.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  IA FORMA PLUS ne pourra être tenu responsable des dommages directs ou indirects résultant
                  de l'accès au site ou de l'utilisation du site, y compris l'inaccessibilité, les pertes
                  de données, détériorations, destructions ou virus.
                </p>
              </div>
            </div>

            {/* 10. Données personnelles - RGPD */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                10. Protection des données personnelles (RGPD)
              </h2>
              <div className="bg-blue-50 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Responsable du traitement</h3>
                  <p className="text-gray-700">
                    IA FORMA PLUS, 138 boulevard Haussmann, 75008 Paris<br />
                    Email : contact@iaformaplus.fr
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Collecte et utilisation des données</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Les données personnelles collectées sur ce site (nom, prénom, email, téléphone, entreprise)
                    sont destinées à :
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>Traiter vos demandes de contact et devis</li>
                    <li>Gérer les inscriptions aux formations</li>
                    <li>Assurer le suivi pédagogique et administratif</li>
                    <li>Vous envoyer des informations sur nos formations (avec votre consentement)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Base légale du traitement</h3>
                  <p className="text-gray-700">
                    Les traitements sont fondés sur l'exécution d'un contrat, votre consentement,
                    et nos obligations légales en tant qu'organisme de formation.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Vos droits</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
                    Informatique et Libertés, vous disposez des droits suivants :
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Droit d'accès à vos données personnelles</li>
                    <li>Droit de rectification de vos données</li>
                    <li>Droit à l'effacement (droit à l'oubli)</li>
                    <li>Droit à la limitation du traitement</li>
                    <li>Droit à la portabilité de vos données</li>
                    <li>Droit d'opposition au traitement</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Exercer vos droits</h3>
                  <p className="text-gray-700">
                    Pour exercer vos droits, contactez-nous :<br />
                    <strong>Email :</strong> contact@iaformaplus.fr<br />
                    <strong>Courrier :</strong> IA FORMA PLUS - 138 boulevard Haussmann, 75008 Paris
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    Vous pouvez également introduire une réclamation auprès de la CNIL :
                    <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                      www.cnil.fr
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Conservation des données</h3>
                  <p className="text-gray-700">
                    Vos données sont conservées pendant la durée nécessaire aux finalités pour lesquelles
                    elles ont été collectées, et conformément aux obligations légales applicables aux
                    organismes de formation.
                  </p>
                </div>
              </div>
            </div>

            {/* 11. Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                11. Gestion des cookies
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Ce site utilise des cookies pour améliorer votre expérience de navigation,
                  réaliser des statistiques de visites et vous proposer des contenus adaptés.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Vous pouvez accepter ou refuser l'utilisation des cookies via le bandeau de
                  consentement affiché lors de votre première visite.
                </p>
                <p className="text-gray-700">
                  Pour plus d'informations sur notre utilisation des cookies, consultez notre
                  <Link to="/politique-cookies" className="text-primary hover:underline ml-1">
                    politique de cookies
                  </Link>.
                </p>
              </div>
            </div>

            {/* 12. Droit applicable et juridiction */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                12. Droit applicable et juridiction
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  Les présentes mentions légales sont régies par le droit français. En cas de litige,
                  et à défaut d'accord amiable, les tribunaux français seront seuls compétents.
                </p>
              </div>
            </div>

            {/* 13. Médiation et réclamation */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                13. Médiation et réclamation
              </h2>
              <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Conformément aux articles L.612-1 et suivants du Code de la consommation, nous proposons
                  un dispositif de médiation de la consommation.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  En cas de litige, vous pouvez déposer votre réclamation sur la plateforme de Résolution
                  en Ligne des Litiges (RLL) de la Commission Européenne :
                </p>
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                <p className="text-gray-700 mt-4">
                  <strong>Contact réclamation :</strong><br />
                  Email : contact@iaformaplus.fr<br />
                  Téléphone : 01 62 17 77 70
                </p>
              </div>
            </div>

            {/* Dernière mise à jour */}
            <div className="border-t border-gray-200 pt-6">
              <p className="text-gray-500 text-sm">
                <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>

          </div>

          {/* CTA Contact */}
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
            >
              <Mail size={20} className="mr-2" />
              Contactez-nous pour toute question
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentionsLegalesPage;
