import React from 'react';
import { Building, MapPin, Phone, Mail, FileText, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-gray-900 to-secondary text-white py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos d'IA FORMA PLUS</h1>
            <p className="text-xl text-gray-200">
              Organisme de formation spécialisé dans l'intelligence artificielle et les nouvelles technologies
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <section className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">
                IA Forma Plus, bien plus qu'un organisme de formation
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                Fondé par des experts en pédagogie et en nouvelles technologies, IA Forma Plus
                forme chaque année des centaines de professionnels à l'usage concret de
                l'intelligence artificielle dans leur métier.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="text-3xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-4">Notre mission</h3>
                  <p className="text-gray-600">
                    Rendre l'IA accessible à tous les métiers et toutes les tailles d'entreprise,
                    en toute simplicité.
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="text-3xl mb-4">📜</div>
                  <h3 className="text-xl font-semibold mb-4">Nos engagements</h3>
                  <p className="text-gray-600">
                    Pédagogie humaine, accompagnement personnalisé,
                    transparence sur les résultats.
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="text-3xl mb-4">🌱</div>
                  <h3 className="text-xl font-semibold mb-4">RSE & Éthique</h3>
                  <p className="text-gray-600">
                    Formations éco-conçues, inclusion numérique, IA éthique, accessibilité
                    renforcée sur notre plateforme.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Informations légales
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <Building className="text-primary mr-3" size={24} />
                    <h3 className="text-lg font-semibold">Identité de l'organisme</h3>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Dénomination :</strong> IA FORMA PLUS</p>
                    <p><strong>Forme juridique :</strong> SAS</p>
                    <p><strong>Capital social :</strong> 1 000 €</p>
                    <p><strong>Date de création :</strong> 26 février 2025</p>
                    <p><strong>Président :</strong> Didier Krief</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <FileText className="text-primary mr-3" size={24} />
                    <h3 className="text-lg font-semibold">Identification</h3>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>SIREN :</strong> 941 565 988</p>
                    <p><strong>SIRET :</strong> 941 565 988 00016</p>
                    <p><strong>RCS :</strong> 941 565 988 R.C.S. Paris</p>
                    <p><strong>TVA :</strong> FR67941565988</p>
                    <p><strong>Code APE/NAF :</strong> 85.59B</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <MapPin className="text-primary mr-3" size={24} />
                    <h3 className="text-lg font-semibold">Siège social</h3>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p>138 boulevard Haussmann</p>
                    <p>75008 Paris</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <Phone className="text-primary mr-3" size={24} />
                    <h3 className="text-lg font-semibold">Contact</h3>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Téléphone :</strong></p>
                    <a href="tel:0162177770" className="text-primary hover:underline">01 62 17 77 70</a>
                    <p className="mt-3"><strong>Email :</strong></p>
                    <a href="mailto:contact@iaformaplus.fr" className="text-primary hover:underline">
                      contact@iaformaplus.fr
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Calendar className="text-amber-600 mr-3" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900">Certification Qualiopi</h3>
                </div>
                <p className="text-gray-700">
                  Certification Qualiopi : en cours de formalisation interne
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Catégories d'actions : actions de formation
                </p>
              </div>

              <div className="mt-8 text-center">
                <Link
                  to="/mentions-legales"
                  className="inline-flex items-center justify-center px-6 py-3 text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-medium"
                >
                  <FileText size={20} className="mr-2" />
                  Voir les mentions légales complètes
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;