import React, { useState } from 'react';
import { X, MessageCircle, User, Phone, Star } from 'lucide-react';

interface FormData {
  rating: number | null;
  comment: string;
  name: string;
  phone: string;
}

const TripAdvisorFeedbackTab: React.FC = () => {
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
    { emoji: '😡', label: 'Déçu', value: 1 },
    { emoji: '😟', label: 'Insatisfait', value: 2 },
    { emoji: '😐', label: 'Neutre', value: 3 },
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
      {/* Onglet vertical style TripAdvisor - Responsive avec taille réduite sur mobile */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className={`group bg-[#34A853] hover:bg-[#2d8f47] text-white font-semibold rounded-r-xl shadow-lg hover:shadow-xl transition-all duration-300 border-r-2 border-[#2d8f47] ${
            isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
          } 
          /* Mobile: Taille réduite et plus compacte */
          px-2 py-4 text-xs min-h-[60px] w-[32px]
          /* Desktop: Taille normale */
          md:px-4 md:py-8 md:text-[15px] md:min-h-[120px] md:w-auto`}
          style={{ 
            writingMode: 'vertical-rl', 
            textOrientation: 'mixed',
            fontFamily: '"Inter", "Roboto", sans-serif',
            fontWeight: '600',
            letterSpacing: '0.5px'
          }}
          aria-label="Donner votre avis"
          title="Cliquez pour donner votre avis"
        >
          <div className="flex items-center justify-center">
            {/* Étoile blanche à gauche du texte - Taille responsive */}
            <Star 
              size={14} 
              className="text-white fill-white mr-1 md:mr-2 md:w-[18px] md:h-[18px] group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" 
            />
            
            {/* Texte "Votre avis" - Masqué sur très petits écrans, visible sur mobile moyen+ */}
            <span className="text-white group-hover:text-white transition-colors duration-300 hidden xs:inline md:inline">
              Votre avis
            </span>
            
            {/* Version ultra-compacte pour très petits écrans */}
            <span className="text-white group-hover:text-white transition-colors duration-300 xs:hidden md:hidden text-[10px]">
              Avis
            </span>
          </div>

          {/* Effet de surbrillance au survol */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r-xl"></div>
        </button>
      </div>

      {/* Panel de feedback - Style TripAdvisor/Avis Vérifiés */}
      {isOpen && (
        <>
          {/* Overlay semi-transparent */}
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={handleClose}
          />
          
          {/* Panel principal - Design TripAdvisor avec responsive amélioré */}
          <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 bg-white/95 backdrop-blur-xl rounded-r-2xl shadow-2xl p-4 md:p-8 w-[320px] md:w-[440px] max-w-[90vw] animate-slide-in-left border border-gray-200/50">
            {/* Header style TripAdvisor */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#34A853] rounded-full flex items-center justify-center mr-3 md:mr-4">
                  <Star className="text-white fill-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800" style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}>
                    Votre avis
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">Partagez votre expérience</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200"
                aria-label="Fermer"
              >
                <X size={18} />
              </button>
            </div>

            {!isSubmitted ? (
              <>
                {/* Étape 1: Évaluation style TripAdvisor */}
                {currentStep === 1 && (
                  <div className="space-y-6 md:space-y-8">
                    <div>
                      <p className="text-gray-700 mb-6 md:mb-8 text-base md:text-lg leading-relaxed" style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}>
                        Comment évaluez-vous votre expérience sur notre site ?
                      </p>

                      {/* 5 smileys style TripAdvisor - Grid responsive */}
                      <div className="grid grid-cols-5 gap-2 md:gap-3 mb-6 md:mb-8">
                        {ratings.map((rating) => (
                          <button
                            key={rating.value}
                            onClick={() => handleRatingClick(rating.value)}
                            className={`flex flex-col items-center p-2 md:p-4 rounded-xl transition-all duration-300 hover:bg-green-50 hover:scale-105 ${
                              formData.rating === rating.value 
                                ? 'bg-green-50 ring-2 ring-[#34A853] shadow-lg scale-105' 
                                : 'hover:shadow-md border border-gray-100'
                            }`}
                            title={rating.label}
                          >
                            <span className="text-2xl md:text-3xl mb-1 md:mb-2">{rating.emoji}</span>
                            <span className="text-[10px] md:text-xs text-gray-600 text-center font-medium" style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}>
                              {rating.label}
                            </span>
                          </button>
                        ))}
                      </div>

                      {/* Message de sélection */}
                      {formData.rating && (
                        <div className="text-center mb-6 md:mb-8 p-3 md:p-4 bg-green-50 rounded-xl border border-green-200">
                          <p className="text-xs md:text-sm text-gray-700 font-medium">
                            Vous avez sélectionné : <span className="font-semibold text-[#34A853]">{ratings[formData.rating - 1].label}</span>
                          </p>
                        </div>
                      )}

                      {/* Bouton Suivant style TripAdvisor */}
                      <button
                        onClick={handleNext}
                        disabled={!formData.rating}
                        className={`w-full py-2.5 md:py-3 px-4 md:px-6 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 ${
                          formData.rating
                            ? 'bg-[#34A853] hover:bg-[#2d8f47] text-white cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                        style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}
                      >
                        Suivant
                      </button>
                    </div>
                  </div>
                )}

                {/* Étape 2: Formulaire style Avis Vérifiés */}
                {currentStep === 2 && (
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div>
                      <p className="text-gray-700 mb-6 md:mb-8 text-base md:text-lg leading-relaxed" style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}>
                        Partagez-nous votre retour
                      </p>

                      {/* Commentaire */}
                      <div className="mb-4 md:mb-6">
                        <label htmlFor="comment" className="flex items-center text-xs md:text-sm font-medium text-gray-700 mb-2 md:mb-3" style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}>
                          <MessageCircle size={14} className="text-[#34A853] mr-2" />
                          Commentaire libre (facultatif)
                        </label>
                        <textarea
                          id="comment"
                          name="comment"
                          value={formData.comment}
                          onChange={handleInputChange}
                          rows={2}
                          className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#34A853] focus:border-transparent transition-all resize-none text-sm md:text-base"
                          style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}
                          placeholder="Partagez votre expérience..."
                        />
                      </div>

                      {/* Nom */}
                      <div className="mb-4 md:mb-6">
                        <label htmlFor="name" className="flex items-center text-xs md:text-sm font-medium text-gray-700 mb-2 md:mb-3" style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}>
                          <User size={14} className="text-[#34A853] mr-2" />
                          Nom (obligatoire)
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#34A853] focus:border-transparent transition-all text-sm md:text-base"
                          style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}
                          placeholder="Votre nom"
                        />
                      </div>

                      {/* Téléphone */}
                      <div className="mb-6 md:mb-8">
                        <label htmlFor="phone" className="flex items-center text-xs md:text-sm font-medium text-gray-700 mb-2 md:mb-3" style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}>
                          <Phone size={14} className="text-[#34A853] mr-2" />
                          Numéro de téléphone (obligatoire)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#34A853] focus:border-transparent transition-all text-sm md:text-base"
                          style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}
                          placeholder="06 12 34 56 78"
                          pattern="[0-9\s\-\+\(\)]{10,}"
                        />
                      </div>

                      {/* Boutons */}
                      <div className="flex gap-2 md:gap-3">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="flex-1 py-2.5 md:py-3 px-3 md:px-4 rounded-xl text-gray-600 border border-gray-300 hover:bg-gray-50 transition-all duration-200 text-sm md:text-base"
                          style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}
                        >
                          Retour
                        </button>
                        <button
                          type="submit"
                          disabled={!formData.name || !formData.phone || isSubmitting}
                          className={`flex-1 py-2.5 md:py-3 px-3 md:px-4 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 ${
                            formData.name && formData.phone && !isSubmitting
                              ? 'bg-[#34A853] hover:bg-[#2d8f47] text-white cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                          style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center">
                              <div className="animate-spin rounded-full h-3 w-3 md:h-4 md:w-4 border-2 border-white border-t-transparent mr-1 md:mr-2"></div>
                              Envoi...
                            </div>
                          ) : (
                            'Envoyer'
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </>
            ) : (
              /* État de confirmation style TripAdvisor */
              <div className="text-center py-6 md:py-8">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Star className="w-6 h-6 md:w-8 md:h-8 text-[#34A853] fill-[#34A853]" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3" style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}>
                  Merci {formData.name} !
                </h3>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base" style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}>
                  Votre avis a été envoyé avec succès. Nous vous contacterons bientôt si nécessaire.
                </p>
                <div className="flex justify-center space-x-1 mb-3 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={`md:w-4 md:h-4 ${i < (formData.rating || 0) ? 'text-[#34A853] fill-[#34A853]' : 'text-gray-300'} transition-all duration-300`} 
                    />
                  ))}
                </div>
                <p className="text-xs md:text-sm text-[#34A853] font-medium" style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}>
                  Cette fenêtre se fermera automatiquement dans quelques secondes.
                </p>
              </div>
            )}

            {/* Footer discret */}
            {!isSubmitted && (
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
                <p className="text-[10px] md:text-xs text-gray-500 text-center" style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}>
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

export default TripAdvisorFeedbackTab;