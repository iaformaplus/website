import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, AlertTriangle, CheckCircle, ArrowRight, Calendar, TrendingUp } from 'lucide-react';

const EInvoicingSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTE4IDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBzdHJva2U9IiMzYjgyZjYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
              <FileText size={28} className="text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              La facturation électronique devient obligatoire en 2026
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Toutes les entreprises françaises devront progressivement adopter la facturation électronique.
              Anticipez dès maintenant pour éviter les blocages administratifs.
            </p>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800 font-medium mb-1">À partir de septembre 2026</p>
                    <p className="text-sm text-gray-600">
                      La réforme fiscale imposera à toutes les entreprises d'être capables de recevoir et d'émettre
                      des factures électroniques via des plateformes agréées.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800 font-medium mb-1">Beaucoup d'entreprises ne sont pas prêtes</p>
                    <p className="text-sm text-gray-600">
                      Logiciels incompatibles, procédures internes non adaptées, manque de formation des équipes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800 font-medium mb-1">Nos experts vous accompagnent</p>
                    <p className="text-sm text-gray-600">
                      Pour comprendre la réforme et mettre en place les bons outils rapidement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border-l-4 border-amber-500 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500 rounded-full p-2 flex-shrink-0">
                  <AlertTriangle size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Réforme obligatoire</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Les entreprises qui ne seront pas prêtes risquent des retards de facturation et des problèmes administratifs.
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/formation/facturation-electronique"
              className="btn-action group inline-flex items-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative flex items-center">
                Se former à la facturation électronique
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>

              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Factures électroniques</p>
                      <p className="text-sm text-gray-600">Conformes à la réglementation 2026</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Plateformes agréées</p>
                      <p className="text-sm text-gray-600">Intégration et conformité garanties</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Formation des équipes</p>
                      <p className="text-sm text-gray-600">Maîtrise complète du processus</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Mise en conformité rapide</p>
                      <p className="text-sm text-gray-600">Évitez les blocages administratifs</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl border border-gray-200 text-center">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Échéance : Septembre 2026</p>
                  <p className="text-xs text-gray-600">Ne prenez pas de retard sur cette obligation légale</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-400/30 to-orange-400/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EInvoicingSection;
