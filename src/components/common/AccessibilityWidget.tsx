import React, { useState, useEffect } from 'react';
import { X, Accessibility, Type, Eye, RotateCcw } from 'lucide-react';

interface AccessibilitySettings {
  fontSize: number;
  grayscale: boolean;
  highContrast: boolean;
  negativeContrast: boolean;
  lightBackground: boolean;
  underlineLinks: boolean;
  readableFont: boolean;
}

const AccessibilityWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 100,
    grayscale: false,
    highContrast: false,
    negativeContrast: false,
    lightBackground: false,
    underlineLinks: false,
    readableFont: false,
  });

  // Charger les paramètres sauvegardés au démarrage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      applySettings(parsed);
    }
  }, []);

  // Sauvegarder et appliquer les paramètres
  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    localStorage.setItem('accessibilitySettings', JSON.stringify(updatedSettings));
    applySettings(updatedSettings);
  };

  // Appliquer les paramètres au DOM
  const applySettings = (currentSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    const body = document.body;

    // Taille de police
    root.style.fontSize = `${currentSettings.fontSize}%`;

    // Niveaux de gris
    if (currentSettings.grayscale) {
      body.style.filter = 'grayscale(100%)';
    } else {
      body.style.filter = '';
    }

    // Haut contraste
    if (currentSettings.highContrast) {
      body.classList.add('accessibility-high-contrast');
    } else {
      body.classList.remove('accessibility-high-contrast');
    }

    // Contraste négatif
    if (currentSettings.negativeContrast) {
      body.classList.add('accessibility-negative-contrast');
    } else {
      body.classList.remove('accessibility-negative-contrast');
    }

    // Arrière-plan clair
    if (currentSettings.lightBackground) {
      body.classList.add('accessibility-light-background');
    } else {
      body.classList.remove('accessibility-light-background');
    }

    // Liens soulignés
    if (currentSettings.underlineLinks) {
      body.classList.add('accessibility-underline-links');
    } else {
      body.classList.remove('accessibility-underline-links');
    }

    // Police lisible
    if (currentSettings.readableFont) {
      body.classList.add('accessibility-readable-font');
    } else {
      body.classList.remove('accessibility-readable-font');
    }
  };

  // Réinitialiser tous les paramètres
  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      fontSize: 100,
      grayscale: false,
      highContrast: false,
      negativeContrast: false,
      lightBackground: false,
      underlineLinks: false,
      readableFont: false,
    };
    
    setSettings(defaultSettings);
    localStorage.removeItem('accessibilitySettings');
    applySettings(defaultSettings);
  };

  // Gestion du clavier
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Bouton flottant en haut à gauche - Position fixe */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className={`group bg-[#007BFF]/90 backdrop-blur-sm hover:bg-[#007BFF] text-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-[#007BFF]/50 focus:ring-offset-2 ${
            isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          style={{ 
            width: '48px',
            height: '48px',
            minWidth: '48px',
            minHeight: '48px'
          }}
          aria-label="Ouvrir les outils d'accessibilité"
          title="Outils d'accessibilité"
          tabIndex={0}
        >
          {/* Pictogramme accessibilité universel */}
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-white mx-auto"
            aria-hidden="true"
          >
            {/* Tête */}
            <circle cx="12" cy="6" r="2" fill="currentColor"/>
            {/* Corps */}
            <path d="M12 10c-2 0-4 1-4 3v7h2v-7c0-1 1-1 2-1s2 0 2 1v7h2v-7c0-2-2-3-4-3z" fill="currentColor"/>
            {/* Bras étendus */}
            <path d="M8 12h8M6 14l2-2M18 14l-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Panel d'accessibilité */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Widget d'accessibilité - Position depuis la gauche */}
          <div 
            className="fixed top-20 left-6 z-50 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 w-[320px] max-w-[90vw] border border-gray-200/50 animate-slide-in-left"
            onKeyDown={handleKeyDown}
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#007BFF]/10 rounded-xl flex items-center justify-center mr-3">
                  <Accessibility className="text-[#007BFF]" size={18} />
                </div>
                <h2 
                  id="accessibility-title"
                  className="text-lg font-semibold text-gray-800"
                  style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}
                >
                  Accessibilité
                </h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100/50 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#007BFF]/50"
                aria-label="Fermer les outils d'accessibilité"
                tabIndex={0}
              >
                <X size={18} />
              </button>
            </div>

            {/* Outils d'accessibilité */}
            <div className="space-y-4">
              {/* Taille du texte */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    <Type size={16} className="text-gray-500 mr-2" />
                    Taille du texte
                  </label>
                  <span className="text-sm text-gray-500">{settings.fontSize}%</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => updateSettings({ fontSize: Math.max(80, settings.fontSize - 10) })}
                    className="flex-1 py-2 px-3 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#007BFF]/50"
                    aria-label="Diminuer la taille du texte"
                    disabled={settings.fontSize <= 80}
                  >
                    A-
                  </button>
                  <button
                    onClick={() => updateSettings({ fontSize: Math.min(150, settings.fontSize + 10) })}
                    className="flex-1 py-2 px-3 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#007BFF]/50"
                    aria-label="Augmenter la taille du texte"
                    disabled={settings.fontSize >= 150}
                  >
                    A+
                  </button>
                </div>
              </div>

              {/* Options visuelles */}
              <div className="space-y-3">
                <h3 className="flex items-center text-sm font-medium text-gray-700">
                  <Eye size={16} className="text-gray-500 mr-2" />
                  Options visuelles
                </h3>
                
                <div className="grid grid-cols-1 gap-2">
                  {/* Niveaux de gris */}
                  <button
                    onClick={() => updateSettings({ grayscale: !settings.grayscale })}
                    className={`w-full py-2.5 px-3 text-sm text-left rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#007BFF]/50 ${
                      settings.grayscale 
                        ? 'bg-[#007BFF]/10 text-[#007BFF] border border-[#007BFF]/20' 
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200'
                    }`}
                    aria-pressed={settings.grayscale}
                    role="switch"
                  >
                    Niveaux de gris
                  </button>

                  {/* Haut contraste */}
                  <button
                    onClick={() => updateSettings({ highContrast: !settings.highContrast })}
                    className={`w-full py-2.5 px-3 text-sm text-left rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#007BFF]/50 ${
                      settings.highContrast 
                        ? 'bg-[#007BFF]/10 text-[#007BFF] border border-[#007BFF]/20' 
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200'
                    }`}
                    aria-pressed={settings.highContrast}
                    role="switch"
                  >
                    Haut contraste
                  </button>

                  {/* Contraste négatif */}
                  <button
                    onClick={() => updateSettings({ negativeContrast: !settings.negativeContrast })}
                    className={`w-full py-2.5 px-3 text-sm text-left rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#007BFF]/50 ${
                      settings.negativeContrast 
                        ? 'bg-[#007BFF]/10 text-[#007BFF] border border-[#007BFF]/20' 
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200'
                    }`}
                    aria-pressed={settings.negativeContrast}
                    role="switch"
                  >
                    Contraste négatif
                  </button>

                  {/* Arrière-plan clair */}
                  <button
                    onClick={() => updateSettings({ lightBackground: !settings.lightBackground })}
                    className={`w-full py-2.5 px-3 text-sm text-left rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#007BFF]/50 ${
                      settings.lightBackground 
                        ? 'bg-[#007BFF]/10 text-[#007BFF] border border-[#007BFF]/20' 
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200'
                    }`}
                    aria-pressed={settings.lightBackground}
                    role="switch"
                  >
                    Arrière-plan clair
                  </button>

                  {/* Liens soulignés */}
                  <button
                    onClick={() => updateSettings({ underlineLinks: !settings.underlineLinks })}
                    className={`w-full py-2.5 px-3 text-sm text-left rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#007BFF]/50 ${
                      settings.underlineLinks 
                        ? 'bg-[#007BFF]/10 text-[#007BFF] border border-[#007BFF]/20' 
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200'
                    }`}
                    aria-pressed={settings.underlineLinks}
                    role="switch"
                  >
                    Liens soulignés
                  </button>

                  {/* Police lisible */}
                  <button
                    onClick={() => updateSettings({ readableFont: !settings.readableFont })}
                    className={`w-full py-2.5 px-3 text-sm text-left rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#007BFF]/50 ${
                      settings.readableFont 
                        ? 'bg-[#007BFF]/10 text-[#007BFF] border border-[#007BFF]/20' 
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200'
                    }`}
                    aria-pressed={settings.readableFont}
                    role="switch"
                  >
                    Police lisible
                  </button>
                </div>
              </div>

              {/* Bouton de réinitialisation */}
              <div className="pt-4 border-t border-gray-200/50">
                <button
                  onClick={resetSettings}
                  className="w-full flex items-center justify-center py-2.5 px-4 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#007BFF]/50"
                  aria-label="Réinitialiser tous les paramètres d'accessibilité"
                >
                  <RotateCcw size={16} className="mr-2" />
                  Réinitialiser les réglages
                </button>
              </div>
            </div>

            {/* Footer conformité */}
            <div className="mt-6 pt-4 border-t border-gray-200/50">
              <p className="text-xs text-gray-500 text-center" style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}>
                Conforme RGAA 4.1 / WCAG 2.1 AA
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AccessibilityWidget;