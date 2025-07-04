import React, { useState } from 'react';
import { X, Star, MessageCircle, User, Phone } from 'lucide-react';

interface FormData {
  rating: number | null;
  comment: string;
  name: string;
  phone: string;
}

const GoogleStyleFeedbackTab: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    rating: null,
    comment: '',
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ratings = [
    { emoji: '😡', label: 'Très déçu', value: 1 },
    { emoji: '😟', label: 'Insatisfait', value: 2 },
    { emoji: '😐', label: 'Moyen', value: 3 },
    { emoji: '🙂', label: 'Satisfait', value: 4 },
    { emoji: '😍', label: 'Excellent', value: 5 }
  ];

  const handleRatingClick = (value: number) => {
    setFormData(prev => ({ ...prev, rating: value }));
  };

  const handleNext = () => {
    if (formData.rating) {
      setCurrentStep(2);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Fermer après 3 secondes
      setTimeout(() => {
        setIsOpen(false);
        setCurrentStep(1);
        setIsSubmitted(false);
        setFormData({
          rating: null,
          comment: '',
          name: '',
          phone: ''
        });
      }, 3000);
    }, 1500);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentStep(1);
    setIsSubmitted(false);
    setFormData({
      rating: null,
      comment: '',
      name: '',
      phone: ''
    });
  };

  return (
    <>
      {/* Onglet vertical - Style Google */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className={`bg-[#003366] hover:bg-[#002C6E] text-white font-light px-4 py-12 rounded-r-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
            isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          style={{ 
            writingMode: 'vertical-rl', 
            textOrientation: 'mixed',
            fontSize: '14px',
            fontFamily: '"Roboto", "Open Sans", sans-serif',
            letterSpacing: '0.5px'
          }}
        >
          <div className="flex items-center">
            <Star className="text-white mr-2" size={16} />
            <span>Donnez-nous votre avis</span>
          </div>
        </button>
      </div>

      {/* Module de feedback */}
      {isOpen && (
        <>
          {/* Overlay semi-transparent */}
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={handleClose}
          />
          
          {/* Panel de feedback - Style Google */}
          <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 bg-white/95 backdrop-blur-xl rounded-r-2xl shadow-2xl p-8 w-[440px] max-w-[90vw] animate-slide-in-left border-r border-gray-200">
            {/* Header Google Style */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#003366] rounded-full flex items-center justify-center mr-3">
                  <Star className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-normal text-gray-800" style={{ fontFamily: '"Roboto", "Open Sans", sans-serif' }}>
                  Donnez-nous votre avis
                </h3>
              </div>
              <button
                onClick={handleClose}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200"
              >
                <X size={20} />
              </button>
            </div>

            {!isSubmitted ? (
              <>
                {/* Étape 1: Évaluation - Style Google */}
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <div>
                      <p className="text-gray-700 mb-8 text-lg" style={{ fontFamily: '"Roboto", "Open Sans", sans-serif' }}>
                        Comment évaluez-vous votre expérience sur notre site ?
                      </p>

                      {/* Emojis de notation - Style Google sobre */}
                      <div className="grid grid-cols-5 gap-4 mb-8">
                        {ratings.map((rating) => (
                          <button
                            key={rating.value}
                            onClick={() => handleRatingClick(rating.value)}
                            className={`flex flex-col items-center p-4 rounded-lg transition-all duration-200 hover:bg-gray-50 ${
                              formData.rating === rating.value 
                                ? 'bg-blue-50 ring-2 ring-blue-200 shadow-sm' 
                                : 'hover:shadow-sm border border-gray-100'
                            }`}
                            title={rating.label}
                          >
                            <span className="text-3xl mb-2">{rating.emoji}</span>
                            <span className="text-xs text-gray-600 text-center font-normal" style={{ fontFamily: '"Roboto", "Open Sans", sans-serif' }}>
                              {rating.label}
                            </span>
                          </button>
                        ))}
                      </div>

                      {/* Bouton Continuer - Style Google */}
                      <button
                        onClick={handleNext}
                        disabled={!formData.rating}
                        className={`w-full py-3 px-6 rounded-lg font-medium text-sm transition-all duration-200 ${
                          formData.rating
                            ? 'bg-[#1a73e8] hover:bg-[#1557b0] text-white cursor-pointer shadow-sm hover:shadow-md'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                        style={{ fontFamily: '"Roboto", "Open Sans", sans-serif' }}
                      >
                        Continuer
                      </button>
                    </div>
                  </div>
                )}

                {/* Étape 2: Formulaire minimaliste - Style Google */}
                {currentStep === 2 && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      {/* Commentaire */}
                      <div className="mb-6">
                        <label htmlFor="comment" className="flex items-center text-sm text-gray-700 mb-3" style={{ fontFamily: '"Roboto", "Open Sans", sans-serif' }}>
                          <MessageCircle size={16} className="text-gray-500 mr-2" />
                          Commentaire (facultatif)
                        </label>
                        <textarea
                          id="comment"
                          name="comment"
                          value={formData.comment}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                          style={{ fontFamily: '"Roboto", "Open Sans", sans-serif' }}
                          placeholder="Partagez votre expérience..."
                        />
                      </div>

                      {/* Nom */}
                      <div className="mb-6">
                        <label htmlFor="name" className="flex items-center text-sm text-gray-700 mb-3" style={{ fontFamily: '"Roboto", "Open Sans", sans-serif' }}>
                          <User size={16} className="text-gray-500 mr-2" />
                          Nom (obligatoire)
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          style={{ fontFamily: '"Roboto", "Open Sans", sans-serif' }}
                          placeholder="Votre nom"
                        />
                      </div>

                      {/* Téléphone */}
                      <div className="mb-8">
                        <label htmlFor="phone" className="flex items-center text-sm text-gray-700 mb-3" style={{ fontFamily: '"Roboto", "Open Sans", sans-serif' }}>
                          <Phone size={16} className="text-gray-500 mr-2" />
                          Téléphone (obligatoire)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          style={{ fontFamily: '"Roboto", "Open Sans", sans-serif' }}
                          placeholder="06 12 34 56 78"
                          pattern="[0-9\s\-\+\(\)]{10,}"
                        />
                      </div>

                      {/* Boutons - Style Google */}
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="flex-1 py-3 px-4 rounded-lg text-gray-600 border border-gray-300 hover:bg-gray-50 transition-all duration-200"
                          style={{ fontFamily: '"Roboto", "Open Sans", sans-serif' }}
                        >
                          Étape précédente
                        </button>
                        <button
                          type="submit"
                          disabled={!formData.name || !formData.phone || isSubmitting}
                          className={`flex-1 py-3 px-4 rounded-lg font-medium text-sm transition-all duration-200 ${
                            formData.name && formData.phone && !isSubmitting
                              ? 'bg-[#34a853] hover:bg-[#2d8f47] text-white cursor-pointer shadow-sm hover:shadow-md'
                              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                          style={{ fontFamily: '"Roboto", "Open Sans", sans-serif' }}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center">
                              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                              Envoi...
                            </div>
                          ) : (
                            'Envoyer mon avis'
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </>
            ) : (
              /* État de confirmation - Style Google */
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl text-gray-800 mb-3" style={{ fontFamily: '"Roboto", "Open Sans", sans-serif' }}>
                  Merci {formData.name} !
                </h3>
                <p className="text-gray-600 mb-6" style={{ fontFamily: '"Roboto", "Open Sans", sans-serif' }}>
                  Votre avis a été envoyé avec succès. Nous vous contacterons bientôt si nécessaire.
                </p>
                <p className="text-sm text-green-600" style={{ fontFamily: '"Roboto", "Open Sans", sans-serif' }}>
                  Cette fenêtre se fermera automatiquement dans quelques secondes.
                </p>
              </div>
            )}

            {/* Footer discret */}
            {!isSubmitted && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center" style={{ fontFamily: '"Roboto", "Open Sans", sans-serif' }}>
                  🔒 Vos données sont protégées et ne seront jamais partagées.
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default GoogleStyleFeedbackTab;