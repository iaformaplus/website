import React, { useState, useEffect } from 'react';
import { Shield, Settings, X } from 'lucide-react';
import Button from './Button';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
}

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Toujours activé
    analytics: false,
    marketing: false,
    personalization: false,
  });

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
      // Bloquer le scroll tant que le choix n'est pas fait
      document.body.style.overflow = 'hidden';
    } else {
      // Charger les préférences sauvegardées
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
      personalization: true,
    };
    
    setPreferences(allAccepted);
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    
    // Réactiver le scroll
    document.body.style.overflow = 'unset';
    setIsVisible(false);
    
    // Ici vous pourrez déclencher vos scripts de tracking
    initializeTracking(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      marketing: false,
      personalization: false,
    };
    
    setPreferences(onlyEssential);
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookiePreferences', JSON.stringify(onlyEssential));
    
    // Réactiver le scroll
    document.body.style.overflow = 'unset';
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', 'customized');
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    
    // Réactiver le scroll
    document.body.style.overflow = 'unset';
    setIsVisible(false);
    setShowPreferences(false);
    
    // Initialiser le tracking selon les préférences
    initializeTracking(preferences);
  };

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === 'essential') return; // Les cookies essentiels ne peuvent pas être désactivés
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  // Fonction pour initialiser le tracking (à adapter selon vos besoins)
  const initializeTracking = (prefs: CookiePreferences) => {
    if (prefs.analytics) {
      // Initialiser Google Analytics, etc.
      console.log('Analytics cookies enabled');
    }
    if (prefs.marketing) {
      // Initialiser Meta Pixel, Google Ads, etc.
      console.log('Marketing cookies enabled');
    }
    if (prefs.personalization) {
      // Initialiser les cookies de personnalisation
      console.log('Personalization cookies enabled');
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay bloquant */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
      
      {/* Bandeau principal */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl animate-slide-up">
        <div className="container py-6">
          {!showPreferences ? (
            /* Vue principale */
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <Shield size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Nous respectons votre vie privée
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
                      Nous utilisons des cookies pour améliorer votre expérience sur notre site, 
                      personnaliser le contenu, analyser notre trafic et vous proposer des publicités pertinentes. 
                      Vous pouvez accepter tous les cookies, les refuser ou personnaliser vos préférences.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      En continuant à naviguer, vous acceptez notre 
                      <a href="/politique-confidentialite" className="text-blue-600 hover:underline ml-1">
                        politique de confidentialité
                      </a>.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Button 
                  variant="outline" 
                  onClick={handleRejectAll}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Refuser tout
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowPreferences(true)}
                  className="border-blue-300 text-blue-700 hover:bg-blue-50"
                  leftIcon={<Settings size={16} />}
                >
                  Personnaliser
                </Button>
                <Button 
                  variant="primary" 
                  onClick={handleAcceptAll}
                  className="bg-green-600 hover:bg-green-700 focus:ring-green-500/50"
                >
                  Accepter tout
                </Button>
              </div>
            </div>
          ) : (
            /* Vue des préférences détaillées */
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Personnaliser mes préférences cookies
                </h3>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
                  aria-label="Retour"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-6">
                {/* Cookies essentiels */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Cookies essentiels
                      </h4>
                      <p className="text-sm text-gray-600">
                        Nécessaires au fonctionnement du site (sécurité, navigation, formulaires).
                        Ces cookies ne peuvent pas être désactivés.
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cookies analytiques */}
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Cookies analytiques
                      </h4>
                      <p className="text-sm text-gray-600">
                        Nous aident à comprendre comment vous utilisez notre site pour l'améliorer 
                        (Google Analytics, statistiques de visite).
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => handlePreferenceChange('analytics')}
                        className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                          preferences.analytics ? 'bg-green-500 justify-end' : 'bg-gray-300 justify-start'
                        }`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Cookies marketing */}
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Cookies marketing
                      </h4>
                      <p className="text-sm text-gray-600">
                        Permettent de vous proposer des publicités personnalisées sur notre site 
                        et d'autres sites (Meta Pixel, Google Ads).
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => handlePreferenceChange('marketing')}
                        className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                          preferences.marketing ? 'bg-green-500 justify-end' : 'bg-gray-300 justify-start'
                        }`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Cookies de personnalisation */}
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Cookies de personnalisation
                      </h4>
                      <p className="text-sm text-gray-600">
                        Mémorisent vos préférences (langue, région, paramètres d'affichage) 
                        pour personnaliser votre expérience.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => handlePreferenceChange('personalization')}
                        className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                          preferences.personalization ? 'bg-green-500 justify-end' : 'bg-gray-300 justify-start'
                        }`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-200">
                <Button 
                  variant="outline" 
                  onClick={handleRejectAll}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Refuser tout
                </Button>
                <Button 
                  variant="primary" 
                  onClick={handleSavePreferences}
                  className="bg-blue-600 hover:bg-blue-700 focus:ring-blue-500/50"
                >
                  Enregistrer mes préférences
                </Button>
                <Button 
                  variant="primary" 
                  onClick={handleAcceptAll}
                  className="bg-green-600 hover:bg-green-700 focus:ring-green-500/50"
                >
                  Accepter tout
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CookieBanner;