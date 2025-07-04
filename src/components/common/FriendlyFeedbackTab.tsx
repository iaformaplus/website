import React, { useState } from 'react';
import { X, MessageCircle, User, Phone } from 'lucide-react';

interface FormData {
  rating: number | null;
  comment: string;
  name: string;
  phone: string;
}

const FriendlyFeedbackTab: React.FC = () => {
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
  const [submitError, setSubmitError] = useState('');

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
    console.log('Input change:', { name, value, length: value.length });
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Zapier webhook URL pour les avis clients
      const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/23654186/u36w3lo/';
      
      // Préparer les données avec FormData pour éviter les problèmes CORS
      const formDataToSend = new FormData();
      
      // Nettoyer et formater le numéro de téléphone pour forcer sa reconnaissance comme texte
      const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
      const formattedPhone = `'${cleanPhone}`; // Ajouter une apostrophe pour forcer le texte
      
      console.log('Original phone:', formData.phone);
      console.log('Cleaned phone:', cleanPhone);
      console.log('Formatted phone for Zapier:', formattedPhone);
      
      // Ajouter les données du formulaire
      formDataToSend.append('rating', formData.rating?.toString() || '');
      formDataToSend.append('comment', formData.comment);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('phone', formattedPhone); // Utiliser le numéro formaté
      formDataToSend.append('phone_raw', cleanPhone); // Aussi envoyer la version sans apostrophe
      
      // Ajouter les métadonnées
      formDataToSend.append('submittedAt', new Date().toISOString());
      formDataToSend.append('source', 'Feedback Tab - IAFormaPlus');
      formDataToSend.append('ratingLabel', ratings.find(r => r.value === formData.rating)?.label || '');
      
      const response = await fetch(zapierWebhookUrl, {
        method: 'POST',
        body: formDataToSend,
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Succès
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
        setSubmitError('');
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setIsSubmitting(false);
      setSubmitError('Une erreur est survenue lors de l\'envoi de votre avis. Veuillez réessayer.');
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentStep(1);
    setIsSubmitted(false);
    setSubmitError('');
    setFormData({
      rating: null,
      comment: '',
      name: '',
      phone: ''
    });
  };

  return (
    <>
      {/* Onglet vertical avec bonhomme et étoiles */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className={`bg-[#002C6E] hover:bg-[#001f4d] text-white px-4 py-8 rounded-r-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
            isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          style={{ 
            writingMode: 'vertical-rl', 
            textOrientation: 'mixed',
            fontFamily: '"Open Sans", "Roboto", sans-serif'
          }}
        >
          <div className="flex flex-col items-center space-y-3">
            {/* 3 étoiles jaunes au-dessus */}
            <div className="flex space-x-1 mb-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFD700" className="drop-shadow-sm">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFD700" className="drop-shadow-sm">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFD700" className="drop-shadow-sm">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
            </div>

            {/* Petit bonhomme (pictogramme simple) */}
            <div className="mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="drop-shadow-sm">
                {/* Tête */}
                <circle cx="12" cy="7" r="3" fill="white"/>
                {/* Corps */}
                <path d="M12 14c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z" fill="white"/>
                {/* Sourire */}
                <path d="M10 6.5c0 .5.5 1 1 1s1-.5 1-1M14 6.5c0 .5.5 1 1 1s1-.5 1-1" stroke="#002C6E" strokeWidth="0.5" fill="none"/>
                <path d="M10 8.5c0 1 1 2 2 2s2-1 2-2" stroke="#002C6E" strokeWidth="0.5" fill="none"/>
              </svg>
            </div>

            {/* Texte "Avis client" */}
            <span className="text-white font-normal text-sm tracking-wide leading-relaxed">
              Avis client
            </span>
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
          
          {/* Panel de feedback - Design moderne et friendly */}
          <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 bg-white/95 backdrop-blur-xl rounded-r-2xl shadow-2xl p-8 w-[440px] max-w-[90vw] animate-slide-in-left border-r border-gray-200">
            {/* Header avec bonhomme et étoiles */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#002C6E] rounded-full flex flex-col items-center justify-center mr-4 relative">
                  {/* 3 étoiles au-dessus */}
                  <div className="absolute -top-2 flex space-x-1">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="#FFD700">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="#FFD700">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="#FFD700">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  {/* Bonhomme */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <circle cx="12" cy="7" r="3" fill="white"/>
                    <path d="M12 14c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z" fill="white"/>
                  </svg>
                </div>
                <h3 className="text-xl font-normal text-gray-800" style={{ fontFamily: '"Open Sans", "Roboto", sans-serif' }}>
                  Avis client
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
                {/* Étape 1: Évaluation avec bonhommes stylisés */}
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <div>
                      <p className="text-gray-700 mb-8 text-lg" style={{ fontFamily: '"Open Sans", "Roboto", sans-serif' }}>
                        Comment évaluez-vous votre expérience sur notre site ?
                      </p>

                      {/* Bonhommes avec expressions */}
                      <div className="grid grid-cols-5 gap-4 mb-8">
                        {ratings.map((rating) => (
                          <button
                            key={rating.value}
                            onClick={() => handleRatingClick(rating.value)}
                            className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:bg-blue-50 hover:scale-105 ${
                              formData.rating === rating.value 
                                ? 'bg-blue-50 ring-2 ring-blue-300 shadow-lg scale-105' 
                                : 'hover:shadow-md border border-gray-100'
                            }`}
                            title={rating.label}
                          >
                            {/* Bonhomme avec expression */}
                            <div className="mb-3 relative">
                              <svg width="32" height="32" viewBox="0 0 24 24" className="text-gray-600">
                                {/* Tête */}
                                <circle cx="12" cy="8" r="4" fill="currentColor" opacity="0.8"/>
                                {/* Corps */}
                                <path d="M12 16c-3 0-5 1.5-5 3v1h10v-1c0-1.5-2-3-5-3z" fill="currentColor" opacity="0.8"/>
                              </svg>
                              {/* Expression par-dessus */}
                              <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
                                <span className="text-lg">{rating.emoji}</span>
                              </div>
                            </div>
                            <span className="text-xs text-gray-600 text-center font-normal" style={{ fontFamily: '"Open Sans", "Roboto", sans-serif' }}>
                              {rating.label}
                            </span>
                          </button>
                        ))}
                      </div>

                      {/* Bouton Continuer */}
                      <button
                        onClick={handleNext}
                        disabled={!formData.rating}
                        className={`w-full py-3 px-6 rounded-xl font-medium text-sm transition-all duration-300 ${
                          formData.rating
                            ? 'bg-[#002C6E] hover:bg-[#001f4d] text-white cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                        style={{ fontFamily: '"Open Sans", "Roboto", sans-serif' }}
                      >
                        Continuer
                      </button>
                    </div>
                  </div>
                )}

                {/* Étape 2: Formulaire minimaliste */}
                {currentStep === 2 && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      {/* Commentaire */}
                      <div className="mb-6">
                        <label htmlFor="comment" className="flex items-center text-sm text-gray-700 mb-3" style={{ fontFamily: '"Open Sans", "Roboto", sans-serif' }}>
                          <MessageCircle size={16} className="text-gray-500 mr-2" />
                          Commentaire (facultatif)
                        </label>
                        <textarea
                          id="comment"
                          name="comment"
                          value={formData.comment}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002C6E] focus:border-transparent transition-all resize-none"
                          style={{ fontFamily: '"Open Sans", "Roboto", sans-serif' }}
                          placeholder="Partagez votre expérience..."
                        />
                      </div>

                      {/* Nom */}
                      <div className="mb-6">
                        <label htmlFor="name" className="flex items-center text-sm text-gray-700 mb-3" style={{ fontFamily: '"Open Sans", "Roboto", sans-serif' }}>
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
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002C6E] focus:border-transparent transition-all"
                          style={{ fontFamily: '"Open Sans", "Roboto", sans-serif' }}
                          placeholder="Votre nom"
                        />
                      </div>

                      {/* Téléphone */}
                      <div className="mb-8">
                        <label htmlFor="phone" className="flex items-center text-sm text-gray-700 mb-3" style={{ fontFamily: '"Open Sans", "Roboto", sans-serif' }}>
                          <Phone size={16} className="text-gray-500 mr-2" />
                          Numéro de téléphone (obligatoire)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002C6E] focus:border-transparent transition-all"
                          style={{ fontFamily: '"Open Sans", "Roboto", sans-serif' }}
                          placeholder="0612345678"
                          inputMode="numeric"
                          autoComplete="tel"
                        />
                      </div>

                      {/* Message d'erreur */}
                      {submitError && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                            <p className="text-red-700 text-sm font-medium">{submitError}</p>
                          </div>
                        </div>
                      )}

                      {/* Boutons */}
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="flex-1 py-3 px-4 rounded-xl text-gray-600 border border-gray-300 hover:bg-gray-50 transition-all duration-200"
                          style={{ fontFamily: '"Open Sans", "Roboto", sans-serif' }}
                        >
                          Étape précédente
                        </button>
                        <button
                          type="submit"
                          disabled={!formData.name || !formData.phone || isSubmitting}
                          className={`flex-1 py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 ${
                            formData.name && formData.phone && !isSubmitting
                              ? 'bg-[#28a745] hover:bg-[#218838] text-white cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                          style={{ fontFamily: '"Open Sans", "Roboto", sans-serif' }}
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
              /* État de confirmation */
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  {/* 3 étoiles au-dessus */}
                  <div className="absolute -top-3 flex space-x-1">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="#FFD700">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="#FFD700">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="#FFD700">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl text-gray-800 mb-3" style={{ fontFamily: '"Open Sans", "Roboto", sans-serif' }}>
                  Merci {formData.name} !
                </h3>
                <p className="text-gray-600 mb-6" style={{ fontFamily: '"Open Sans", "Roboto", sans-serif' }}>
                  Votre avis a été envoyé avec succès. Nous vous contacterons bientôt si nécessaire.
                </p>
                <p className="text-sm text-green-600" style={{ fontFamily: '"Open Sans", "Roboto", sans-serif' }}>
                  Cette fenêtre se fermera automatiquement dans quelques secondes.
                </p>
              </div>
            )}

            {/* Footer discret */}
            {!isSubmitted && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center" style={{ fontFamily: '"Open Sans", "Roboto", sans-serif' }}>
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

export default FriendlyFeedbackTab;