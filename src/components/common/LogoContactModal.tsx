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
        className="bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-lg hover:bg-white/25 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Contact rapide"
        title="Cliquez pour un contact rapide"
      >
        <img 
          src="/Les assureurs experts copy.png" 
          alt="IA FORMA PLUS - Contact rapide" 
          className="w-36 h-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity duration-300"
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
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 md:p-8 w-[90vw] sm:w-[600px] max-w-[600px] max-h-[80vh] overflow-y-auto border border-white/20 animate-slide-up">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm border border-blue-200/30">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h2 id="contact-modal-title" className="text-xl md:text-2xl font-bold text-gray-800">Contact rapide</h2>
                  <div className="flex items-center text-sm md:text-base text-green-600 font-medium">
                    <Clock size={14} className="mr-2" />
                    💡 Un conseiller IA vous répond sous 1h
                  </div>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100/50 rounded-2xl transition-all duration-200"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Message d'erreur */}
            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <p className="text-red-700 text-sm md:text-base font-medium">{submitError}</p>
                </div>
              </div>
            )}

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Ligne 1: Prénom/Nom et Téléphone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="flex items-center text-sm md:text-base font-medium text-gray-700 mb-2">
                      <User size={14} className="mr-2 text-blue-600" />
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm md:text-base rounded-xl border border-gray-200/70 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-300/50 focus:border-blue-300/50 transition-all"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="flex items-center text-sm md:text-base font-medium text-gray-700 mb-2">
                      <Phone size={14} className="mr-2 text-blue-600" />
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm md:text-base rounded-xl border border-gray-200/70 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-300/50 focus:border-blue-300/50 transition-all"
                      placeholder="06 12 34 56 78"
                      inputMode="numeric"
                    />
                  </div>
                </div>

                {/* Ligne 2: Nom et Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="lastName" className="flex items-center text-sm md:text-base font-medium text-gray-700 mb-2">
                      <User size={14} className="mr-2 text-blue-600" />
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm md:text-base rounded-xl border border-gray-200/70 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-300/50 focus:border-blue-300/50 transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="flex items-center text-sm md:text-base font-medium text-gray-700 mb-2">
                      <Mail size={14} className="mr-2 text-blue-600" />
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm md:text-base rounded-xl border border-gray-200/70 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-300/50 focus:border-blue-300/50 transition-all"
                      placeholder="votre.email@entreprise.com"
                    />
                  </div>
                </div>

                {/* Ligne 3: Message (pleine largeur) */}
                <div>
                  <label htmlFor="message" className="flex items-center text-sm md:text-base font-medium text-gray-700 mb-2">
                    <MessageCircle size={14} className="mr-2 text-blue-600" />
                    Votre besoin (optionnel)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 text-sm md:text-base rounded-xl border border-gray-200/70 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-300/50 focus:border-blue-300/50 transition-all resize-none"
                    placeholder="Décrivez brièvement votre besoin en formation..."
                  />
                </div>

                {/* Bouton d'envoi */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-base md:text-lg tracking-wide transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed text-white'
                      : 'bg-[#1877F2] hover:bg-[#166fe5] text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                      Envoi en cours...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Phone size={18} className="mr-2" />
                      Être rappelé
                    </div>
                  )}
                </button>
              </form>
            ) : (
              /* État de confirmation */
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                  Merci {formData.firstName} !
                </h3>
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  Votre demande a été transmise avec succès. Un de nos conseillers IA vous contactera sous 1h pour répondre à vos questions.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="text-blue-800 text-base font-medium">
                    📞 Nous vous appellerons au {formData.phone}
                  </p>
                </div>
                <p className="text-sm text-green-600 font-medium mt-4">
                  Cette fenêtre se fermera automatiquement dans quelques secondes.
                </p>
              </div>
            )}

            {/* Footer discret */}
            {!isSubmitted && (
              <div className="mt-8 pt-6 border-t border-gray-200/50">
                <p className="text-sm text-gray-500 text-center">
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