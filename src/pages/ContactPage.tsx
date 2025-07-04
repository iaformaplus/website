import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Users, Building, FileText, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedIcon from '../components/common/AnimatedIcon';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    siren: '',
    email: '',
    phone: '',
    companySize: '',
    reason: '',
    format: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Zapier webhook submission logic
  const submitToZapier = async (formDataToSubmit: {
    firstName: string;
    lastName: string;
    company: string;
    siren: string;
    email: string;
    phone: string;
    companySize: string;
    reason: string;
    format: string;
    message: string;
  }) => {
    const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/23654186/u36yvs5/';
    
    // Prepare FormData to avoid CORS issues
    const formDataToSend = new FormData();
    
    // Nettoyer et formater le numéro de téléphone pour forcer sa reconnaissance comme texte
    const cleanPhone = formDataToSubmit.phone.replace(/[^0-9]/g, '');
    const formattedPhone = `'${cleanPhone}`; // Ajouter une apostrophe pour forcer le texte
    
    console.log('Contact Form - Original phone:', formDataToSubmit.phone);
    console.log('Contact Form - Cleaned phone:', cleanPhone);
    console.log('Contact Form - Formatted phone for Zapier:', formattedPhone);
    
    // Add all form fields (except phone which we handle separately)
    Object.entries(formDataToSubmit).forEach(([key, value]) => {
      if (key !== 'phone') {
        formDataToSend.append(key, value as string);
      }
    });
    
    // Add formatted phone numbers
    formDataToSend.append('phone', formattedPhone); // Avec apostrophe pour préserver le "0"
    formDataToSend.append('phone_raw', cleanPhone); // Version sans apostrophe
    
    // Add metadata
    formDataToSend.append('submittedAt', new Date().toISOString());
    formDataToSend.append('source', 'Contact Form - IAFormaPlus');
    
    const response = await fetch(zapierWebhookUrl, {
      method: 'POST',
      body: formDataToSend,
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }
    
    return response;
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);
    
    try {
      // Submit to Zapier
      await submitToZapier(formData);
      
      // Show success immediately
      setSubmitSuccess(true);
      
      // Brief delay for better UX, then show final success state
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setSubmitSuccess(false);
      }, 800);
      
      // Reset form after showing success message
      setTimeout(() => {
        resetForm();
      }, 4000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      setSubmitError('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.');
    }
  };

  // Reset form helper
  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      company: '',
      siren: '',
      email: '',
      phone: '',
      companySize: '',
      reason: '',
      format: '',
      message: '',
    });
  };
  
  return (
    <>
      <section className="bg-gradient-to-r from-gray-900 to-secondary text-white py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
            <p className="text-xl text-gray-200">
              Nous sommes là pour répondre à toutes vos questions concernant nos formations 
              et vous aider à trouver la solution adaptée à vos besoins.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8 relative">
                {isSubmitting && (
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center z-10">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mx-auto mb-4"></div>
                      <p className="text-gray-700 font-medium">Envoi en cours...</p>
                      <p className="text-gray-500 text-sm mt-2">Transmission de vos données vers notre système</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Formulaire de contact</h2>
                  
                  {/* Message d'attention avec animation Lottie */}
                  <div className="flex items-center text-sm text-gray-600">
                    <span>Attention à bien remplir tous les champs</span>
                    <AnimatedIcon 
                      src="https://assets5.lottiefiles.com/packages/lf20_twijbubv.json"
                      className="w-full h-full"
                    />
                  </div>
                </div>
                
                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg animate-fadeIn">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      <p className="text-red-700 text-sm font-medium">{submitError}</p>
                    </div>
                  </div>
                )}
                
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fadeIn">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-green-700 text-sm font-medium">Données envoyées avec succès ! Traitement en cours...</p>
                    </div>
                  </div>
                )}
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <h3 className="text-2xl font-bold mb-4 text-primary">Message envoyé avec succès !</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Merci pour votre message. Un de nos conseillers vous contactera dans les plus brefs délais.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-md mx-auto">
                      <p className="text-green-800 text-sm font-medium">
                        ✅ Vos informations ont été transmises avec succès
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          Prénom *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="input"
                          placeholder="Votre prénom"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Nom *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="input"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email professionnel *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="input"
                          placeholder="votre.email@entreprise.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="input"
                          placeholder="01 23 45 67 89"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Entreprise *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="input"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>
                      <div>
                        <label htmlFor="siren" className="block text-sm font-medium text-gray-700 mb-1">
                          SIREN
                        </label>
                        <input
                          type="text"
                          id="siren"
                          name="siren"
                          value={formData.siren}
                          onChange={handleChange}
                          className="input"
                          placeholder="Numéro SIREN (facultatif)"
                        />
                      </div>
                      <div>
                        <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">
                          Taille de l'entreprise *
                        </label>
                        <select
                          id="companySize"
                          name="companySize"
                          required
                          value={formData.companySize}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="">Sélectionnez</option>
                          <option value="1-10">1-10 employés</option>
                          <option value="11-50">11-50 employés</option>
                          <option value="51-100">51-100 employés</option>
                          <option value="101+">Plus de 100 employés</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                          Raison de la demande *
                        </label>
                        <select
                          id="reason"
                          name="reason"
                          required
                          value={formData.reason}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="">Sélectionnez</option>
                          <option value="mise-a-jour">Mise à jour technologique</option>
                          <option value="motivation">Motivation d'équipe</option>
                          <option value="obligation">Obligation légale</option>
                          <option value="image">Image de marque</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="format" className="block text-sm font-medium text-gray-700 mb-1">
                          Format souhaité *
                        </label>
                        <select
                          id="format"
                          name="format"
                          required
                          value={formData.format}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="">Sélectionnez</option>
                          <option value="presentiel">Présentiel</option>
                          <option value="distanciel">Distanciel</option>
                          <option value="e-learning">E-learning</option>
                          <option value="mixte">Mixte</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Votre message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="input"
                        placeholder="Décrivez votre besoin en formation..."
                      ></textarea>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-start">
                        <input
                          id="privacy"
                          name="privacy"
                          type="checkbox"
                          required
                          className="h-4 w-4 mt-1 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                          J'accepte que mes données soient traitées conformément à la politique de 
                          confidentialité d'IAFORMAPLUS. *
                        </label>
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full group relative overflow-hidden transition-all duration-300 ${
                        submitSuccess 
                          ? 'bg-green-600 hover:bg-green-700 text-white' 
                          : isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'btn-action'
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <div className="relative flex items-center justify-center py-3">
                        {submitSuccess ? (
                          <>
                            <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Envoyé avec succès !
                          </>
                        ) : isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Send size={20} className="mr-2" />
                            Envoyer ma demande
                          </>
                        )}
                      </div>
                    </button>
                  </form>
                )}
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <h3 className="text-xl font-semibold mb-6">Nos coordonnées</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin size={20} className="text-primary mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p className="text-gray-600">138 boulevard Haussmann, 75008 Paris</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone size={20} className="text-primary mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <a href="tel:0162177770" className="phone-facebook">01 62 17 77 70</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail size={20} className="text-primary mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:contact@iaformaplus.fr" className="text-primary hover:underline">
                        contact@iaformaplus.fr
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 text-white rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-6">Pourquoi nous choisir ?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/20 rounded-full p-2 mr-3">
                      <Users size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Formateurs experts</p>
                      <p className="text-gray-300 text-sm">Professionnels certifiés dans leur domaine</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/20 rounded-full p-2 mr-3">
                      <Building size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Certifié Qualiopi</p>
                      <p className="text-gray-300 text-sm">Garantie de qualité reconnue par l'État</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/20 rounded-full p-2 mr-3">
                      <FileText size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Formations sur mesure</p>
                      <p className="text-gray-300 text-sm">Adaptées à votre secteur d'activité</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/20 rounded-full p-2 mr-3">
                      <Calendar size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Formats flexibles</p>
                      <p className="text-gray-300 text-sm">Présentiel, distanciel, e-learning ou mixte</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Nouveau bandeau "Contactez-nous" */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Contactez-nous
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Nous sommes là pour répondre à toutes vos questions concernant nos formations 
              et vous aider à trouver la solution adaptée à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="btn-action group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="relative flex items-center justify-center">
                  <Send size={20} className="mr-2" />
                  Prendre contact
                </div>
              </Link>
              <a 
                href="tel:0162177770"
                className="btn group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="relative flex items-center justify-center">
                  <Phone size={20} className="mr-2" />
                  Être rappelé
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="relative py-16 bg-white">
        <div className="container">
          <div className="bg-primary rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="p-8 md:p-12 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Besoin d'une réponse rapide ?
                </h2>
                <p className="text-white/90 mb-6">
                  Contactez-nous directement par WhatsApp pour une réponse immédiate à vos questions.
                  Notre équipe est disponible pour vous accompagner dans votre projet de formation.
                </p>
                <a 
                  href="https://wa.me/33749625335"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 focus:ring-offset-2"
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                  >
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"
                      fill="currentColor"
                    />
                  </svg>
                  Contactez-nous sur WhatsApp
                </a>
              </div>
              <div className="hidden md:block">
                <div className="h-80 w-full">
                  <AnimatedIcon 
                    src="https://assets3.lottiefiles.com/packages/lf20_u4qemvpl.json"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;