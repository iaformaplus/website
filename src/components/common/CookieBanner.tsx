import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieStudentIcon = () => (
  <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cookieGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <linearGradient id="capGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <filter id="softShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="0" dy="4" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Cookie shadow */}
    <ellipse cx="70" cy="95" rx="38" ry="8" fill="rgba(0,0,0,0.12)" />

    {/* Cookie body - main circle */}
    <circle cx="70" cy="78" r="42" fill="url(#cookieGradient)" filter="url(#softShadow)" />
    <circle cx="70" cy="78" r="40" fill="#f59e0b" />

    {/* Cookie highlight for depth */}
    <ellipse cx="70" cy="65" rx="35" ry="28" fill="rgba(251, 191, 36, 0.4)" />
    <ellipse cx="58" cy="60" rx="18" ry="14" fill="rgba(255, 255, 255, 0.2)" />

    {/* Cookie chips - 7 chocolate chips */}
    <circle cx="55" cy="65" r="4" fill="#78350f" opacity="0.9" />
    <circle cx="85" cy="68" r="3.5" fill="#78350f" opacity="0.85" />
    <circle cx="62" cy="88" r="3" fill="#78350f" opacity="0.9" />
    <circle cx="82" cy="82" r="4" fill="#78350f" opacity="0.8" />
    <circle cx="50" cy="82" r="3" fill="#78350f" opacity="0.85" />
    <circle cx="70" cy="92" r="2.5" fill="#78350f" opacity="0.9" />
    <circle cx="75" cy="75" r="3" fill="#78350f" opacity="0.85" />

    {/* Face - Eyes */}
    <g>
      {/* Left eye */}
      <circle cx="60" cy="72" r="5" fill="#ffffff" />
      <circle cx="60" cy="72" r="4" fill="#422006" />
      <circle cx="61" cy="71" r="1.5" fill="#ffffff" opacity="0.8" />

      {/* Right eye */}
      <circle cx="80" cy="72" r="5" fill="#ffffff" />
      <circle cx="80" cy="72" r="4" fill="#422006" />
      <circle cx="81" cy="71" r="1.5" fill="#ffffff" opacity="0.8" />
    </g>

    {/* Rosy cheeks */}
    <ellipse cx="48" cy="80" rx="6" ry="4" fill="#fda4af" opacity="0.6" />
    <ellipse cx="92" cy="80" rx="6" ry="4" fill="#fda4af" opacity="0.6" />

    {/* Happy smile */}
    <path
      d="M 58 82 Q 70 90 82 82"
      stroke="#78350f"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      opacity="0.9"
    />

    {/* Graduation Cap (Mortier) */}
    <g transform="rotate(-8 70 38)">
      {/* Cap shadow on cookie */}
      <ellipse cx="70" cy="48" rx="26" ry="4" fill="rgba(0,0,0,0.15)" />

      {/* Bandeau (cylindrical band) - 3D effect */}
      <ellipse cx="70" cy="40" rx="22" ry="5" fill="#334155" />
      <rect x="48" y="40" width="44" height="10" fill="url(#capGradient)" />
      <ellipse cx="70" cy="50" rx="22" ry="5" fill="#0f172a" />

      {/* Inner detail bandeau */}
      <ellipse cx="70" cy="40" rx="20" ry="4" fill="#475569" opacity="0.5" />

      {/* Square plateau (board) - Large and very visible */}
      <rect
        x="42"
        y="22"
        width="56"
        height="56"
        rx="2"
        fill="#0f172a"
        transform="translate(0, -36)"
        stroke="#334155"
        strokeWidth="1.5"
      />

      {/* Top of plateau with highlight - 3D depth */}
      <rect
        x="42"
        y="20"
        width="56"
        height="6"
        rx="2"
        fill="#1e293b"
        transform="translate(0, -36)"
      />
      <rect
        x="45"
        y="20"
        width="50"
        height="3"
        rx="1"
        fill="#475569"
        transform="translate(0, -36)"
        opacity="0.6"
      />

      {/* Bottom edge shadow */}
      <rect
        x="42"
        y="26"
        width="56"
        height="2"
        fill="#020617"
        transform="translate(0, -36)"
      />
    </g>

    {/* Tassel (pompon) - hanging from cap */}
    <g>
      {/* Tassel cord */}
      <line
        x1="90"
        y1="28"
        x2="102"
        y2="42"
        stroke="#fbbf24"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Main pompom sphere */}
      <circle cx="102" cy="42" r="7" fill="#fbbf24" />
      <circle cx="102" cy="42" r="6" fill="#fcd34d" />
      <ellipse cx="100" cy="40" rx="3" ry="2.5" fill="#fef3c7" opacity="0.7" />

      {/* Pompom threads hanging */}
      <line x1="102" y1="46" x2="102" y2="52" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="98" y1="47" x2="96" y2="52" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="106" y1="47" x2="108" y2="52" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="100" y1="47" x2="99" y2="53" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <line x1="104" y1="47" x2="105" y2="53" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    </g>

    {/* Star badge detail (subtle humor) */}
    <g transform="translate(28, 54)">
      <circle cx="0" cy="0" r="8" fill="#3b82f6" opacity="0.95" />
      <circle cx="0" cy="0" r="6.5" fill="#60a5fa" />
      <text
        x="0"
        y="0"
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        fontSize="10"
        fontWeight="bold"
      >
        A+
      </text>
    </g>
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