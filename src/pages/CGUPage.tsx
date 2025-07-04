import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Shield, Mail, MapPin } from 'lucide-react';

const CGUPage: React.FC = () => {
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
              <h1 className="text-3xl font-bold text-gray-900">Conditions Générales d'Utilisation</h1>
              <p className="text-gray-600">Dernière mise à jour : Janvier 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
              
              {/* Article 1 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mr-3">1</span>
                  Objet du site
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Le site internet <strong>iaformaplus.fr</strong> est édité par IA FORMA PLUS, organisme de formation certifié Qualiopi, 
                  spécialisé dans les formations en intelligence artificielle, digital, professionnelles et sur mesure.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Notre mission est de proposer des formations de qualité adaptées aux besoins des entreprises et des particuliers, 
                  dans les domaines de l'IA, du digital, de la bureautique, du management et de nombreux autres secteurs professionnels.
                </p>
              </div>

              {/* Article 2 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mr-3">2</span>
                  Éditeur du site
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Raison sociale</h3>
                      <p className="text-gray-700">IA FORMA PLUS</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">SIREN</h3>
                      <p className="text-gray-700">En cours d'attribution</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <MapPin size={16} className="mr-2 text-primary" />
                        Adresse
                      </h3>
                      <p className="text-gray-700">138 boulevard Haussmann<br />75008 Paris, France</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Mail size={16} className="mr-2 text-primary" />
                        Contact
                      </h3>
                      <p className="text-gray-700">
                        <a href="mailto:contact@iaformaplus.fr" className="text-primary hover:underline">
                          contact@iaformaplus.fr
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article 3 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mr-3">3</span>
                  Propriété intellectuelle
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  L'ensemble des contenus présents sur le site iaformaplus.fr (textes, images, vidéos, logos, graphismes, 
                  icônes, sons, logiciels, etc.) sont la propriété exclusive d'IA FORMA PLUS ou de ses partenaires, 
                  et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments 
                  du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable d'IA FORMA PLUS.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée 
                  comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants 
                  du Code de Propriété Intellectuelle.
                </p>
              </div>

              {/* Article 4 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mr-3">4</span>
                  Données personnelles et cookies
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                      <Shield size={18} className="mr-2 text-primary" />
                      Protection des données personnelles
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi "Informatique et Libertés", 
                      IA FORMA PLUS s'engage à protéger la vie privée des utilisateurs de son site internet.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Collecte des données</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Les données personnelles collectées via les formulaires de contact, d'inscription ou de demande de devis 
                      sont utilisées uniquement dans le cadre de la relation commerciale et de la fourniture de nos services de formation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Utilisation des cookies</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Le site utilise des cookies pour améliorer l'expérience utilisateur, analyser le trafic et personnaliser le contenu. 
                      L'utilisateur peut paramétrer l'utilisation des cookies via le bandeau de consentement présent sur le site.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Vos droits</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Vous disposez d'un droit d'accès, de rectification, de suppression, de portabilité et d'opposition concernant 
                      vos données personnelles. Pour exercer ces droits, contactez-nous à : 
                      <a href="mailto:contact@iaformaplus.fr" className="text-primary hover:underline ml-1">
                        contact@iaformaplus.fr
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Article 5 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mr-3">5</span>
                  Acceptation des conditions
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  L'utilisation du site iaformaplus.fr implique l'acceptation pleine et entière des conditions générales d'utilisation 
                  décrites ci-dessus. Ces conditions d'utilisation peuvent être modifiées ou complétées à tout moment, 
                  les utilisateurs du site sont donc invités à les consulter de manière régulière.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Si vous n'acceptez pas ces conditions, nous vous invitons à ne pas utiliser notre site internet.
                </p>
              </div>

              {/* Article 6 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mr-3">6</span>
                  Responsabilité et garanties
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  IA FORMA PLUS s'efforce de fournir sur le site iaformaplus.fr des informations aussi précises que possible. 
                  Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, 
                  qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Tous les informations indiquées sur le site iaformaplus.fr sont données à titre indicatif, 
                  et sont susceptibles d'évoluer. Par ailleurs, les renseignements figurant sur le site ne sont pas exhaustifs.
                </p>
              </div>

              {/* Article 7 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mr-3">7</span>
                  Droit applicable et juridiction
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Tout litige en relation avec l'utilisation du site iaformaplus.fr est soumis au droit français. 
                  Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
                </p>
              </div>

              {/* Contact */}
              <div className="border-t pt-8 mt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Contact</h2>
                <p className="text-gray-700 leading-relaxed">
                  Pour toute question relative aux présentes conditions générales d'utilisation, 
                  vous pouvez nous contacter à l'adresse : 
                  <a href="mailto:contact@iaformaplus.fr" className="text-primary hover:underline ml-1">
                    contact@iaformaplus.fr
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CGUPage;