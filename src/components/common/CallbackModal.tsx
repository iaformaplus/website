import React, { useState, useEffect } from 'react';
import { X, Phone } from 'lucide-react';
import Button from './Button';

const CallbackModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    preferredTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already seen the modal today
    const modalShown = localStorage.getItem('callbackModalShown');
    const today = new Date().toDateString();
    
    if (modalShown !== today) {
      // Show modal after 20 seconds delay - allowing users to explore content first
      const timer = setTimeout(() => {
        setIsVisible(true);
        // Disable body scroll when modal appears
        document.body.style.overflow = 'hidden';
      }, 20000); // 20 seconds delay for better user experience

      // Cleanup timer if component unmounts before 20 seconds
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Re-enable body scroll IMMEDIATELY
    document.body.style.overflow = 'unset';
    // Mark as shown for today
    localStorage.setItem('callbackModalShown', new Date().toDateString());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Auto-close after 3 seconds
      setTimeout(() => {
        handleClose();
      }, 3000);
    }, 1500);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      {/* Backdrop - BLOCKING */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* Modal - CENTERED AND BLOCKING */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto animate-slide-up">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100 z-10"
          aria-label="Fermer"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Phone size={24} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Besoin d'informations ?
                </h2>
                <p className="text-gray-600">
                  Nos conseillers vous rappellent gratuitement pour répondre à toutes vos questions.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    Quel est votre prénom ? *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all"
                    placeholder="Votre prénom"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Quel est votre numéro de téléphone ? *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all"
                    placeholder="06 12 34 56 78"
                    pattern="[0-9\s\-\+\(\)]{10,}"
                  />
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                    Quel est le meilleur moment pour vous rappeler ?
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all"
                  >
                    <option value="">Sélectionnez un moment</option>
                    <option value="matin">Matin (9h-12h)</option>
                    <option value="apres-midi">Après-midi (14h-17h)</option>
                    <option value="soir">Soir (18h-20h)</option>
                    <option value="peu-importe">Peu importe</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  size="lg"
                  isLoading={isSubmitting}
                  className="bg-green-600 hover:bg-green-700 focus:ring-green-500/50 mt-6"
                  rightIcon={<Phone size={20} />}
                >
                  Être rappelé maintenant
                </Button>
              </form>

              {/* Privacy notice */}
              <p className="text-xs text-gray-500 text-center mt-4">
                🔒 Vos données ne seront jamais partagées.
              </p>
            </>
          ) : (
            /* Success state */
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl text-gray-800 mb-2">
                Merci {formData.firstName} !
              </h3>
              <p className="text-gray-600 mb-4">
                Votre demande a été enregistrée. Un de nos conseillers vous contactera très prochainement
                {formData.preferredTime && formData.preferredTime !== 'peu-importe' 
                  ? ` ${formData.preferredTime === 'matin' ? 'en matinée' : 
                      formData.preferredTime === 'apres-midi' ? 'dans l\'après-midi' : 'en soirée'}`
                  : ''
                }.
              </p>
              <p className="text-sm text-green-600 font-medium">
                Cette fenêtre se fermera automatiquement dans quelques secondes.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallbackModal;