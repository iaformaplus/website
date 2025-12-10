import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieStudentIcon = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="50" fill="#F4A460" />
    <circle cx="60" cy="60" r="45" fill="#DEB887" />
    <circle cx="45" cy="55" r="4" fill="#8B4513" />
    <circle cx="75" cy="55" r="4" fill="#8B4513" />
    <path d="M 45 70 Q 60 80 75 70" stroke="#8B4513" strokeWidth="3" fill="none" strokeLinecap="round" />
    <ellipse cx="35" cy="60" rx="8" ry="12" fill="#CD853F" />
    <ellipse cx="85" cy="60" rx="8" ry="12" fill="#CD853F" />
    <circle cx="50" cy="45" r="3" fill="#D2691E" />
    <circle cx="70" cy="50" r="2.5" fill="#D2691E" />
    <circle cx="55" cy="75" r="2" fill="#D2691E" />
    <path d="M 30 25 L 60 15 L 90 25 L 60 35 Z" fill="#1e40af" />
    <rect x="57" y="15" width="6" height="25" fill="#1e40af" />
    <path d="M 30 25 L 35 30 L 60 20 L 85 30 L 90 25 L 60 15 Z" fill="#2563eb" />
    <rect x="54" y="10" width="12" height="8" rx="4" fill="#fbbf24" />
  </svg>
);

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setTimeout(() => setIsVisible(true), 500);
    } else {
      const savedPreferences = localStorage.getItem('cookiePreferences');
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences));
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
    };

    setPreferences(allAccepted);
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    setIsVisible(false);
    initializeTracking(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      marketing: false,
    };

    setPreferences(onlyEssential);
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookiePreferences', JSON.stringify(onlyEssential));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', 'customized');
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setIsVisible(false);
    setShowPreferences(false);
    initializeTracking(preferences);
  };

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === 'essential') return; // Les cookies essentiels ne peuvent pas être désactivés
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const initializeTracking = (prefs: CookiePreferences) => {
    if (prefs.analytics) {
      console.log('Analytics cookies enabled');
    }
    if (prefs.marketing) {
      console.log('Marketing cookies enabled');
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in"
        onClick={() => !showPreferences && null}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-lg w-full pointer-events-auto animate-scale-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-title"
        >
          {!showPreferences ? (
            <div className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <CookieStudentIcon />
              </div>

              <h2
                id="cookie-title"
                className="text-2xl font-bold text-gray-900 mb-3"
              >
                On a un petit cookie studieux 🍪🎓
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Pour t'offrir la meilleure expérience et mesurer l'audience, on utilise quelques cookies. Tu choisis ?
              </p>

              <div className="flex flex-col gap-3 mb-4">
                <button
                  onClick={handleAcceptAll}
                  className="w-full px-6 py-3 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Accepter
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleRejectAll}
                    className="px-4 py-3 text-base font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-gray-300"
                  >
                    Refuser
                  </button>

                  <button
                    onClick={() => setShowPreferences(true)}
                    className="px-4 py-3 text-base font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-gray-300"
                  >
                    Personnaliser
                  </button>
                </div>
              </div>

              <Link
                to="/cgu"
                className="text-sm text-blue-600 hover:text-blue-700 underline focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
              >
                Politique de cookies
              </Link>
            </div>
          ) : (
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Personnaliser les cookies
                </h3>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
                  aria-label="Retour"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-3 mb-6 max-h-[50vh] overflow-y-auto">
                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Nécessaires</h4>
                      <p className="text-sm text-gray-600">
                        Essentiels au fonctionnement du site. Toujours actifs.
                      </p>
                    </div>
                    <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1 flex-shrink-0">
                      <div className="w-4 h-4 bg-white rounded-full shadow"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 p-4 rounded-xl hover:border-gray-300 transition-colors">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Statistiques</h4>
                      <p className="text-sm text-gray-600">
                        Mesure d'audience pour améliorer le site.
                      </p>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('analytics')}
                      className={`w-12 h-6 rounded-full flex items-center transition-all flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 ${
                        preferences.analytics ? 'bg-blue-500 justify-end' : 'bg-gray-300 justify-start'
                      }`}
                      aria-label="Activer/désactiver les cookies statistiques"
                    >
                      <div className="w-4 h-4 bg-white rounded-full mx-1 shadow"></div>
                    </button>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 p-4 rounded-xl hover:border-gray-300 transition-colors">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Marketing</h4>
                      <p className="text-sm text-gray-600">
                        Publicités personnalisées et remarketing.
                      </p>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('marketing')}
                      className={`w-12 h-6 rounded-full flex items-center transition-all flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 ${
                        preferences.marketing ? 'bg-blue-500 justify-end' : 'bg-gray-300 justify-start'
                      }`}
                      aria-label="Activer/désactiver les cookies marketing"
                    >
                      <div className="w-4 h-4 bg-white rounded-full mx-1 shadow"></div>
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSavePreferences}
                className="w-full px-6 py-3 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Enregistrer mes choix
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CookieBanner;