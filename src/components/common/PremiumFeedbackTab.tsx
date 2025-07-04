import React, { useState } from 'react';
import { X, MessageCircle, User, Phone } from 'lucide-react';

interface FormData {
  rating: number | null;
  comment: string;
  name: string;
  phone: string;
}

const PremiumFeedbackTab: React.FC = () => {
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
      {/* Onglet vertical rétractable - Design épuré */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className={`bg-white/80 backdrop-blur-md hover:bg-white/90 hover:shadow-lg text-gray-700 hover:text-blue-600 font-light tracking-wide px-3 py-10 rounded-r-xl shadow-md transition-all duration-300 border border-gray-200/50 ${
            isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          style={{ 
            writingMode: 'vertical-rl', 
            textOrientation: 'mixed',
            fontSize: '14px',
            letterSpacing: '0.5px'
          }}
        >
          Vos impressions
        </button>
      </div>

      {/* Module de feedback */}
      {isOpen && (
        <>
          {/* Overlay semi-transparent */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={handleClose}
          />
          
          {/* Panel de feedback - Design premium */}
          <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 bg-white/85 backdrop-blur-xl rounded-r-3xl shadow-2xl p-8 w-[420px] max-w-[90vw] animate-slide-in-left border border-white/20">
            {/* Header épuré */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm">
                  <MessageCircle className="text-blue-600" size={20} />
                </div>
                <h3 className="text-xl font-light text-gray-800 tracking-wide">Vos impressions</h3>
              </div>
              <button
                onClick={handleClose}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100/50 rounded-full transition-all duration-200 backdrop-blur-sm"
              >
                <X size={18} />
              </button>
            </div>

            {!isSubmitted ? (
              <>
                {/* Étape 1: Évaluation */}
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <div>
                      <p className="text-gray-700 mb-8 font-light text-lg leading-relaxed">
                        Comment trouvez-vous votre expérience sur notre site ?
                      </p>

                      {/* Emojis de notation - Design raffiné */}
                      <div className="grid grid-cols-5 gap-3 mb-8">
                        {ratings.map((rating) => (
                          <button
                            key={rating.value}
                            onClick={() => handleRatingClick(rating.value)}
                            className={`flex flex-col items-center p-4 rounded-2xl transition-all duration-300 hover:bg-blue-50/50 hover:scale-105 backdrop-blur-sm ${
                              formData.rating === rating.value 
                                ? 'bg-blue-50/70 ring-1 ring-blue-200 scale-105 shadow-lg' 
                                : 'hover:shadow-md border border-gray-100/50'
                            }`}
                            title={rating.label}
                          >
                            <span className="text-2xl mb-2">{rating.emoji}</span>
                            <span className="text-xs text-gray-600 text-center font-light leading-tight">{rating.label}</span>
                          </button>
                        ))}
                      </div>

                      {/* Message de sélection */}
                      {formData.rating && (
                        <div className="text-center mb-8 p-4 bg-blue-50/50 rounded-2xl backdrop-blur-sm border border-blue-100/50">
                          <p className="text-sm text-gray-700 font-light">
                            Vous avez sélectionné : <span className="font-medium text-blue-600">{ratings[formData.rating - 1].label}</span>
                          </p>
                        </div>
                      )}

                      {/* Bouton Continuer */}
                      <button
                        onClick={handleNext}
                        disabled={!formData.rating}
                        className={`w-full py-4 px-6 rounded-2xl font-light text-base tracking-wide transition-all duration-300 backdrop-blur-sm ${
                          formData.rating
                            ? 'bg-gradient-to-r from-blue-500/90 to-blue-600/90 hover:from-blue-600/90 hover:to-blue-700/90 text-white cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-[1.02] border border-blue-300/30'
                            : 'bg-gray-100/70 text-gray-400 cursor-not-allowed border border-gray-200/50'
                        }`}
                      >
                        Continuer
                      </button>
                    </div>
                  </div>
                )}

                {/* Étape 2: Mini formulaire raffiné */}
                {currentStep === 2 && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <p className="text-gray-700 mb-8 font-light text-lg leading-relaxed">
                        Partagez-nous votre retour
                      </p>

                      {/* Commentaire */}
                      <div className="mb-6">
                        <label htmlFor="comment" className="flex items-center text-sm font-light text-gray-700 mb-3">
                          <div className="w-5 h-5 bg-blue-100/70 rounded-full flex items-center justify-center mr-2">
                            <MessageCircle size={12} className="text-blue-600" />
                          </div>
                          Un mot à nous laisser ?
                        </label>
                        <textarea
                          id="comment"
                          name="comment"
                          value={formData.comment}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-4 py-4 rounded-xl border border-gray-200/70 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-blue-300/50 focus:border-blue-300/50 transition-all resize-none font-light placeholder-gray-400"
                          placeholder="Facultatif - Vos commentaires..."
                        />
                      </div>

                      {/* Nom */}
                      <div className="mb-6">
                        <label htmlFor="name" className="flex items-center text-sm font-light text-gray-700 mb-3">
                          <div className="w-5 h-5 bg-blue-100/70 rounded-full flex items-center justify-center mr-2">
                            <User size={12} className="text-blue-600" />
                          </div>
                          Nom *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 rounded-xl border border-gray-200/70 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-blue-300/50 focus:border-blue-300/50 transition-all font-light placeholder-gray-400"
                          placeholder="Votre nom"
                        />
                      </div>

                      {/* Téléphone */}
                      <div className="mb-8">
                        <label htmlFor="phone" className="flex items-center text-sm font-light text-gray-700 mb-3">
                          <div className="w-5 h-5 bg-blue-100/70 rounded-full flex items-center justify-center mr-2">
                            <Phone size={12} className="text-blue-600" />
                          </div>
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 rounded-xl border border-gray-200/70 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-blue-300/50 focus:border-blue-300/50 transition-all font-light placeholder-gray-400"
                          placeholder="06 12 34 56 78"
                          pattern="[0-9\s\-\+\(\)]{10,}"
                        />
                      </div>

                      {/* Boutons */}
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="flex-1 py-4 px-4 rounded-xl font-light text-gray-600 bg-gray-100/70 hover:bg-gray-200/70 transition-all duration-200 backdrop-blur-sm border border-gray-200/50"
                        >
                          Retour
                        </button>
                        <button
                          type="submit"
                          disabled={!formData.name || !formData.phone || isSubmitting}
                          className={`flex-1 py-4 px-4 rounded-xl font-light tracking-wide transition-all duration-300 backdrop-blur-sm ${
                            formData.name && formData.phone && !isSubmitting
                              ? 'bg-gradient-to-r from-green-500/90 to-emerald-500/90 hover:from-green-600/90 hover:to-emerald-600/90 text-white cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-[1.02] border border-green-300/30'
                              : 'bg-gray-100/70 text-gray-400 cursor-not-allowed border border-gray-200/50'
                          }`}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center">
                              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                              Envoi...
                            </div>
                          ) : (
                            'Envoyer mes impressions'
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </>
            ) : (
              /* État de confirmation */
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100/70 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-gray-800 mb-3 tracking-wide">
                  Merci {formData.name} !
                </h3>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                  Vos impressions ont été transmises avec succès. Nous vous contacterons bientôt si nécessaire.
                </p>
                <p className="text-sm text-green-600 font-light">
                  Cette fenêtre se fermera automatiquement dans quelques secondes.
                </p>
              </div>
            )}

            {/* Footer discret */}
            {!isSubmitted && (
              <div className="mt-8 pt-6 border-t border-gray-200/50">
                <p className="text-xs text-gray-500 text-center font-light">
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

export default PremiumFeedbackTab;