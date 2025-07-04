import React, { useState } from 'react';
import { X, MessageCircle, User, Phone, Star } from 'lucide-react';

interface FormData {
  rating: number | null;
  comment: string;
  name: string;
  phone: string;
}

const ModernFeedbackBubble: React.FC = () => {
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
      {/* Bulle flottante moderne - Bas gauche */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className={`group bg-white/85 backdrop-blur-md hover:bg-white/95 text-gray-700 hover:text-blue-600 px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 hover:border-blue-200/50 hover:scale-105 hover:animate-pulse ${
            isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          style={{ 
            fontFamily: '"Inter", "Roboto", "Open Sans", sans-serif',
            fontSize: '14px',
            fontWeight: '300',
            letterSpacing: '0.3px'
          }}
        >
          <div className="flex items-center space-x-3">
            {/* Étoile jaune clair */}
            <div className="relative">
              <Star 
                size={20} 
                className="text-[#FFC107] fill-[#FFC107] drop-shadow-sm group-hover:scale-110 transition-transform duration-300" 
              />
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </div>
            
            {/* Texte */}
            <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
              Votre avis ?
            </span>
          </div>

          {/* Effet de vibration au hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Panneau central moderne */}
      {isOpen && (
        <>
          {/* Overlay avec flou */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-all duration-300"
            onClick={handleClose}
          />
          
          {/* Panel central élégant */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-[480px] max-w-[90vw] max-h-[90vh] overflow-y-auto border border-white/20 animate-fade-in">
            {/* Header moderne */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm border border-blue-200/30">
                  <Star className="text-[#FFC107] fill-[#FFC107]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-800 tracking-wide" style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}>
                    Votre avis compte
                  </h3>
                  <p className="text-sm text-gray-500 font-light">Aidez-nous à nous améliorer</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100/50 rounded-2xl transition-all duration-200 backdrop-blur-sm"
              >
                <X size={20} />
              </button>
            </div>

            {!isSubmitted ? (
              <>
                {/* Étape 1: Évaluation rapide */}
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <div>
                      <p className="text-gray-700 mb-8 font-light text-lg leading-relaxed text-center" style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}>
                        Comment évaluez-vous votre expérience ?
                      </p>

                      {/* Étoiles interactives modernes */}
                      <div className="flex justify-center space-x-4 mb-8">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => handleRatingClick(star)}
                            className={`p-3 rounded-2xl transition-all duration-300 hover:scale-110 ${
                              formData.rating && star <= formData.rating
                                ? 'text-[#FFC107] scale-110 bg-yellow-50/70 shadow-lg' 
                                : 'text-gray-300 hover:text-[#FFC107] hover:bg-yellow-50/30'
                            }`}
                            title={`${star} étoile${star > 1 ? 's' : ''}`}
                          >
                            <Star 
                              size={32} 
                              className={`transition-all duration-300 ${
                                formData.rating && star <= formData.rating ? 'fill-current' : ''
                              }`} 
                            />
                          </button>
                        ))}
                      </div>

                      {/* Message de sélection */}
                      {formData.rating && (
                        <div className="text-center mb-8 p-4 bg-gradient-to-r from-blue-50/70 to-purple-50/70 rounded-2xl backdrop-blur-sm border border-blue-100/50">
                          <p className="text-sm text-gray-700 font-light">
                            Merci ! Vous avez donné <span className="font-medium text-[#FFC107]">{formData.rating} étoile{formData.rating > 1 ? 's' : ''}</span>
                          </p>
                        </div>
                      )}

                      {/* Bouton Continuer moderne */}
                      <button
                        onClick={handleNext}
                        disabled={!formData.rating}
                        className={`w-full py-4 px-6 rounded-2xl font-light text-base tracking-wide transition-all duration-300 backdrop-blur-sm ${
                          formData.rating
                            ? 'bg-gradient-to-r from-blue-500/90 to-blue-600/90 hover:from-blue-600/90 hover:to-blue-700/90 text-white cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-[1.02] border border-blue-300/30'
                            : 'bg-gray-100/70 text-gray-400 cursor-not-allowed border border-gray-200/50'
                        }`}
                        style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}
                      >
                        Continuer
                      </button>
                    </div>
                  </div>
                )}

                {/* Étape 2: Formulaire élégant */}
                {currentStep === 2 && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <p className="text-gray-700 mb-8 font-light text-lg leading-relaxed text-center" style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}>
                        Partagez-nous votre retour
                      </p>

                      {/* Commentaire */}
                      <div className="mb-6">
                        <label htmlFor="comment" className="flex items-center text-sm font-light text-gray-700 mb-3">
                          <div className="w-5 h-5 bg-blue-100/70 rounded-full flex items-center justify-center mr-3">
                            <MessageCircle size={12} className="text-blue-600" />
                          </div>
                          Commentaire (facultatif)
                        </label>
                        <textarea
                          id="comment"
                          name="comment"
                          value={formData.comment}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-5 py-4 rounded-2xl border border-gray-200/70 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-300/50 focus:border-blue-300/50 transition-all resize-none font-light placeholder-gray-400"
                          style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}
                          placeholder="Partagez votre expérience avec nous..."
                        />
                      </div>

                      {/* Nom */}
                      <div className="mb-6">
                        <label htmlFor="name" className="flex items-center text-sm font-light text-gray-700 mb-3">
                          <div className="w-5 h-5 bg-blue-100/70 rounded-full flex items-center justify-center mr-3">
                            <User size={12} className="text-blue-600" />
                          </div>
                          Nom (requis)
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 rounded-2xl border border-gray-200/70 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-300/50 focus:border-blue-300/50 transition-all font-light placeholder-gray-400"
                          style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}
                          placeholder="Votre nom"
                        />
                      </div>

                      {/* Téléphone */}
                      <div className="mb-8">
                        <label htmlFor="phone" className="flex items-center text-sm font-light text-gray-700 mb-3">
                          <div className="w-5 h-5 bg-blue-100/70 rounded-full flex items-center justify-center mr-3">
                            <Phone size={12} className="text-blue-600" />
                          </div>
                          Téléphone (facultatif)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 rounded-2xl border border-gray-200/70 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-300/50 focus:border-blue-300/50 transition-all font-light placeholder-gray-400"
                          style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}
                          placeholder="06 12 34 56 78 (facultatif)"
                          pattern="[0-9\s\-\+\(\)]{10,}"
                        />
                      </div>

                      {/* Boutons modernes */}
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="flex-1 py-4 px-4 rounded-2xl font-light text-gray-600 bg-gray-100/70 hover:bg-gray-200/70 transition-all duration-200 backdrop-blur-sm border border-gray-200/50"
                          style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}
                        >
                          Retour
                        </button>
                        <button
                          type="submit"
                          disabled={!formData.name || isSubmitting}
                          className={`flex-1 py-4 px-4 rounded-2xl font-light tracking-wide transition-all duration-300 backdrop-blur-sm ${
                            formData.name && !isSubmitting
                              ? 'bg-gradient-to-r from-green-500/90 to-emerald-500/90 hover:from-green-600/90 hover:to-emerald-600/90 text-white cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-[1.02] border border-green-300/30'
                              : 'bg-gray-100/70 text-gray-400 cursor-not-allowed border border-gray-200/50'
                          }`}
                          style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}
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
              /* État de confirmation moderne */
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100/70 to-emerald-100/70 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-green-200/50">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-gray-800 mb-4 tracking-wide" style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}>
                  Merci {formData.name} !
                </h3>
                <p className="text-gray-600 mb-6 font-light leading-relaxed" style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}>
                  Votre avis a été transmis avec succès. Nous apprécions votre retour et vous contacterons si nécessaire.
                </p>
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={`${i < (formData.rating || 0) ? 'text-[#FFC107] fill-current' : 'text-gray-300'} transition-all duration-300`} 
                    />
                  ))}
                </div>
                <p className="text-sm text-green-600 font-light" style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}>
                  Cette fenêtre se fermera automatiquement dans quelques secondes.
                </p>
              </div>
            )}

            {/* Footer discret */}
            {!isSubmitted && (
              <div className="mt-8 pt-6 border-t border-gray-200/50">
                <p className="text-xs text-gray-500 text-center font-light" style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}>
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

export default ModernFeedbackBubble;