import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, CreditCard, Shield, FileText, Clock, Users } from 'lucide-react';

const CGVPage: React.FC = () => {
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
              <ShoppingCart size={24} className="text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Conditions Générales de Vente</h1>
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
              
              {/* Préambule */}
              <div className="mb-8 bg-blue-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Préambule</h2>
                <p className="text-gray-700 leading-relaxed">
                  Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre 
                  IA FORMA PLUS et ses clients dans le cadre de la vente de prestations de formation professionnelle.
                </p>
              </div>

              {/* Article 1 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mr-3">1</span>
                  Prestations proposées
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    IA FORMA PLUS propose des prestations de formation professionnelle dans les domaines suivants :
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Intelligence Artificielle</h3>
                        <p className="text-sm text-gray-600">ChatGPT, IA générative, automatisation</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Digital & Web</h3>
                        <p className="text-sm text-gray-600">Marketing digital, SEO, réseaux sociaux</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Bureautique</h3>
                        <p className="text-sm text-gray-600">Office, Excel, PowerPoint, Word</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Management</h3>
                        <p className="text-sm text-gray-600">Leadership, communication, gestion d'équipe</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Users size={18} className="mr-2 text-primary" />
                      Modalités de formation
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Présentiel</h4>
                        <p className="text-sm text-gray-600">Dans nos centres ou sur site client</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Distanciel</h4>
                        <p className="text-sm text-gray-600">Classes virtuelles en direct</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">E-learning</h4>
                        <p className="text-sm text-gray-600">Modules digitaux à votre rythme</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article 2 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mr-3">2</span>
                  Modalités d'inscription et de commande
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Processus d'inscription</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Demande de devis via notre site internet ou par contact direct</li>
                      <li>Envoi du devis personnalisé sous 48h ouvrées</li>
                      <li>Validation du devis par signature et retour du bon de commande</li>
                      <li>Confirmation d'inscription et envoi des modalités pratiques</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Documents contractuels</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Toute inscription est formalisée par la signature d'une convention de formation 
                      (pour les entreprises) ou d'un contrat de formation (pour les particuliers), 
                      accompagnée du programme détaillé et du règlement intérieur.
                    </p>
                  </div>
                </div>
              </div>

              {/* Article 3 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mr-3">3</span>
                  Tarifs et modalités de paiement
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CreditCard size={20} className="text-primary mr-3 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Tarification</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Les tarifs sont indiqués en euros hors taxes. La TVA au taux en vigueur (20%) 
                        s'applique pour les prestations non exonérées. Les formations peuvent bénéficier 
                        d'une exonération de TVA selon l'article 261-4-4° du CGI.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Modalités de paiement</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-700">
                        <li><strong>Entreprises :</strong> Paiement à 30 jours fin de mois par virement bancaire</li>
                        <li><strong>Particuliers :</strong> Paiement comptant par virement, chèque ou financement CPF</li>
                        <li><strong>OPCO :</strong> Paiement direct par l'organisme financeur selon ses modalités</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article 4 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mr-3">4</span>
                  Annulation et report
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                      <Clock size={18} className="mr-2 text-primary" />
                      Annulation par le client
                    </h3>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <ul className="space-y-1 text-gray-700">
                        <li><strong>Plus de 15 jours :</strong> Annulation gratuite</li>
                        <li><strong>Entre 8 et 15 jours :</strong> Retenue de 30% du montant</li>
                        <li><strong>Moins de 8 jours :</strong> Retenue de 100% du montant</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Report de formation</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Un report de formation est possible sans frais jusqu'à 8 jours avant le début de la formation, 
                      sous réserve de disponibilité sur les sessions ultérieures.
                    </p>
                  </div>
                </div>
              </div>

              {/* Article 5 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mr-3">5</span>
                  Droit de rétractation
                </h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Particuliers</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation 
                      ne s'applique pas aux prestations de formation professionnelle. Toutefois, 
                      IA FORMA PLUS s'engage à étudier toute demande motivée d'annulation.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Entreprises</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Les formations destinées aux entreprises ne sont pas soumises au droit de rétractation. 
                      Les conditions d'annulation sont celles définies dans l'article 4 des présentes CGV.
                    </p>
                  </div>
                </div>
              </div>

              {/* Article 6 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mr-3">6</span>
                  Supports et accès aux formations
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                      <FileText size={18} className="mr-2 text-primary" />
                      Supports de formation
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Chaque participant reçoit les supports pédagogiques adaptés à sa formation :
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Manuel de formation au format PDF</li>
                      <li>Exercices pratiques et corrigés</li>
                      <li>Accès aux ressources en ligne (si applicable)</li>
                      <li>Certificat de réalisation délivré en fin de formation</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Accès plateforme e-learning</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Pour les formations e-learning, l'accès à la plateforme est accordé pour une durée de 6 mois 
                      à compter de l'inscription. Les identifiants sont transmis par email sous 48h après validation de l'inscription.
                    </p>
                  </div>
                </div>
              </div>

              {/* Article 7 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mr-3">7</span>
                  Responsabilités
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Responsabilité d'IA FORMA PLUS</h3>
                    <p className="text-gray-700 leading-relaxed">
                      IA FORMA PLUS s'engage à mettre en œuvre tous les moyens nécessaires pour dispenser 
                      des formations de qualité conformes aux programmes annoncés. Notre responsabilité 
                      est limitée au montant de la prestation facturée.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Responsabilité du client</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Le client s'engage à respecter les prérequis techniques et pédagogiques, 
                      à participer activement aux formations et à respecter le règlement intérieur.
                    </p>
                  </div>
                </div>
              </div>

              {/* Article 8 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mr-3">8</span>
                  Protection des données
                </h2>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <div className="flex items-start">
                    <Shield size={20} className="text-green-600 mr-3 mt-1" />
                    <div>
                      <p className="text-gray-700 leading-relaxed">
                        IA FORMA PLUS s'engage à protéger les données personnelles de ses clients conformément 
                        au RGPD. Les données collectées sont utilisées uniquement dans le cadre de la relation 
                        de formation et ne sont jamais transmises à des tiers sans consentement explicite.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article 9 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mr-3">9</span>
                  Droit applicable et juridiction
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les présentes conditions générales de vente sont soumises au droit français. 
                  Tout litige relatif à leur interprétation et/ou à leur exécution relève des tribunaux français.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En cas de litige, les parties s'efforceront de trouver une solution amiable. 
                  À défaut, compétence expresse est attribuée aux tribunaux de Paris, 
                  même en cas de pluralité de défendeurs ou d'appel en garantie.
                </p>
              </div>

              {/* Contact */}
              <div className="border-t pt-8 mt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Contact</h2>
                <p className="text-gray-700 leading-relaxed">
                  Pour toute question relative aux présentes conditions générales de vente, 
                  contactez-nous :
                </p>
                <div className="mt-4 bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="font-semibold text-gray-900">IA FORMA PLUS</p>
                      <p className="text-gray-700">138 boulevard Haussmann, 75008 Paris</p>
                      <p className="text-gray-700">
                        Email : <a href="mailto:contact@iaformaplus.fr" className="text-primary hover:underline">contact@iaformaplus.fr</a>
                      </p>
                      <p className="text-gray-700">Téléphone : 01 62 17 77 70</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CGVPage;