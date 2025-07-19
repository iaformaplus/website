import React, { useState } from 'react';
import { X, Phone, Mail, User, MessageCircle, Clock } from 'lucide-react';

const LogoContactModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation des champs obligatoires
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setSubmitError('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    
    // Validation email basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitError('Veuillez saisir un email valide.');
      return;
    }
    
    // Validation du numéro de téléphone français
    const phoneDigits = formData.phone.replace(/[^0-9]/g, '');
    if (phoneDigits.length !== 10 || !phoneDigits.startsWith('0')) {
      setSubmitError('Veuillez saisir un numéro de téléphone français valide (10 chiffres commençant par 0).');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Webhook Zapier pour les contacts rapides depuis le logo
      const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/23654186/u36yvs5/';
      
      console.log('Logo Contact - Sending data to Zapier...');
      
      // Nettoyer et formater le numéro de téléphone
      const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
      const formattedPhone = `'${cleanPhone}`; // Ajouter une apostrophe pour forcer le texte
      
      // Préparer les données avec FormData
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('phone', formattedPhone); // Avec apostrophe pour préserver le "0"
      formDataToSend.append('phone_raw', cleanPhone); // Version sans apostrophe
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('submittedAt', new Date().toISOString());
      formDataToSend.append('source', 'Logo Contact Modal - IAFormaPlus');
      
      const response = await fetch(zapierWebhookUrl, {
        method: 'POST',
        body: formDataToSend,
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      console.log('✅ Logo contact request sent successfully');
      
      // Succès
      setIsSubmitted(true);
      
      // Auto-close après 3 secondes
      setTimeout(() => {
        handleClose();
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting logo contact form:', error);
      setSubmitError('Une erreur est survenue lors de l\'envoi de votre demande. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsSubmitted(false);
    setSubmitError('');
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  const openModal = () => {
    setIsOpen(true);
    // Bloquer le scroll du body
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    handleClose();
    // Réactiver le scroll du body
    document.body.style.overflow = 'unset';
  };

  // Gestion de la fermeture par touche Escape
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);
  return (
    <>
      {/* Logo cliquable */}
      <button
        onClick={openModal}
        className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Contact rapide"
        title="Cliquez pour un contact rapide"
      >
        <img 
          src="/Les assureurs experts copy.png" 
          alt="IA FORMA PLUS - Contact rapide" 
          className="w-32 h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
        />
      </button>

      {/* Modal de contact rapide */}
      {isOpen && (
        <>
          {/* Overlay bloquant */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
          />
          
          {/* Modal centré */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-4 md:p-6 w-[300px] sm:w-[420px] md:w-[500px] max-w-[90vw] max-h-[85vh] overflow-y-auto border border-white/20 animate-slide-up">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center mr-3 backdrop-blur-sm border border-blue-200/30">
                  <Phone className="text-blue-600" size={20} />
                </div>
                <div>
                  <h2 id="contact-modal-title" className="text-lg md:text-xl font-bold text-gray-800">Contact rapide</h2>
                  <div className="flex items-center text-sm text-green-600 font-medium">
                    <Clock size={12} className="mr-1" />
                    💡 Un conseiller IA vous répond sous 1h
                  </div>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100/50 rounded-2xl transition-all duration-200"
                aria-label="Fermer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Message d'erreur */}
            {submitError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <p className="text-red-700 text-sm font-medium">{submitError}</p>
                </div>
              </div>
            )}

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Prénom et Nom */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="firstName" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <User size={12} className="mr-2 text-blue-600" />
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200/70 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-300/50 focus:border-blue-300/50 transition-all"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <User size={12} className="mr-2 text-blue-600" />
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200/70 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-300/50 focus:border-blue-300/50 transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                {/* Téléphone */}
                <div>
                  <label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Phone size={12} className="mr-2 text-blue-600" />
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200/70 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-300/50 focus:border-blue-300/50 transition-all"
                    placeholder="06 12 34 56 78"
                    inputMode="numeric"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Mail size={12} className="mr-2 text-blue-600" />
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200/70 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-300/50 focus:border-blue-300/50 transition-all"
                    placeholder="votre.email@entreprise.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <MessageCircle size={12} className="mr-2 text-blue-600" />
                    Votre besoin (optionnel)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200/70 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-300/50 focus:border-blue-300/50 transition-all resize-none"
                    placeholder="Décrivez brièvement votre besoin en formation..."
                  />
                </div>

                {/* Bouton d'envoi */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 md:py-4 px-4 md:px-6 rounded-xl font-medium text-sm md:text-base tracking-wide transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed text-white'
                      : 'bg-[#1877F2] hover:bg-[#166fe5] text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                      Envoi en cours...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Phone size={16} className="mr-2" />
                      Être rappelé
                    </div>
                  )}
                </button>
              </form>
            ) : (
              /* État de confirmation */
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                  Merci {formData.firstName} !
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Votre demande a été transmise avec succès. Un de nos conseillers IA vous contactera sous 1h pour répondre à vos questions.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
                  <p className="text-blue-800 text-sm font-medium">
                    📞 Nous vous appellerons au {formData.phone}
                  </p>
                </div>
                <p className="text-xs text-green-600 font-medium mt-3">
                  Cette fenêtre se fermera automatiquement dans quelques secondes.
                </p>
              </div>
            )}

            {/* Footer discret */}
            {!isSubmitted && (
              <div className="mt-6 pt-4 border-t border-gray-200/50">
                <p className="text-xs text-gray-500 text-center">
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

export default LogoContactModal;