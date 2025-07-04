import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Check } from 'lucide-react';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!email.trim()) {
      setSubmitError('Veuillez saisir votre email');
      return;
    }
    
    // Validation email basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitError('Veuillez saisir un email valide');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Webhook Zapier pour la newsletter
      const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/23654186/u360rwr/';
      
      console.log('Newsletter - Sending email:', email);
      
      // Préparer les données avec FormData
      const formData = new FormData();
      formData.append('email', email);
      formData.append('subscribedAt', new Date().toISOString());
      formData.append('source', 'Newsletter Footer - IAFormaPlus');
      
      const response = await fetch(zapierWebhookUrl, {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      console.log('✅ Newsletter subscription successful');
      
      // Succès
      setIsSubmitted(true);
      setEmail('');
      
      // Réinitialiser après 3 secondes
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setSubmitError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Logo className="h-12 w-auto" isWhite={true} />
            <p className="text-gray-400">
              Organisme de formation certifié Qualiopi, spécialisé dans les formations IA et professionnelles.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/formations-ia" className="text-gray-400 hover:text-primary transition-colors">
                  Formations IA
                </Link>
              </li>
              <li>
                <Link to="/formations-professionnelles" className="text-gray-400 hover:text-primary transition-colors">
                  Formations Professionnelles
                </Link>
              </li>
              <li>
                <Link to="/formations-particuliers" className="text-gray-400 hover:text-primary transition-colors">
                  Formations Particuliers
                </Link>
              </li>
              <li>
                <Link to="/webinaires" className="text-gray-400 hover:text-primary transition-colors">
                  Webinaires
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">138 boulevard Haussmann, 75008 Paris</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary mr-2 flex-shrink-0" />
                <a href="tel:0162177770" className="text-gray-400 hover:text-primary transition-colors">
                  01 62 17 77 70
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary mr-2 flex-shrink-0" />
                <a href="mailto:contact@iaformaplus.fr" className="text-gray-400 hover:text-primary transition-colors">
                  contact@iaformaplus.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Inscrivez-vous pour recevoir nos actualités et offres spéciales.
            </p>
            
            {/* Message d'erreur */}
            {submitError && (
              <div className="mb-3 p-2 bg-red-100 border border-red-300 rounded-lg">
                <p className="text-red-700 text-sm">{submitError}</p>
              </div>
            )}
            
            {/* Message de succès */}
            {isSubmitted && (
              <div className="mb-3 p-3 bg-green-100 border border-green-300 rounded-lg">
                <div className="flex items-center text-green-700">
                  <Check size={16} className="mr-2" />
                  <span className="text-sm font-medium">Merci ! Vous êtes inscrit(e) à notre newsletter.</span>
                </div>
              </div>
            )}
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                required
                disabled={isSubmitting}
              />
              <button 
                type="submit" 
                disabled={isSubmitting || isSubmitted}
                className={`w-full px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isSubmitted 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-primary hover:bg-primary-dark text-white'
                }`}
              >
                {isSubmitted ? (
                  <div className="flex items-center justify-center">
                    <Check size={16} className="mr-2" />
                    Inscrit !
                  </div>
                ) : isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                    Inscription...
                  </div>
                ) : (
                  'S\'inscrire'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            {/* Qualiopi Certification */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center">
                <img 
                  src="/Screenshot 2025-06-22 204332.png" 
                  alt="Logo Qualiopi – certification actions de formation" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="text-gray-400 text-sm max-w-md">
                <p className="font-medium text-white mb-1">Organisme certifié Qualiopi</p>
                <p>La certification Qualiopi a été délivrée au titre des catégories d'actions suivantes :</p>
                <p>• actions de formation</p>
              </div>
            </div>
            
            {/* Copyright and Legal Links */}
            <div className="text-gray-400 text-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex gap-4">
                  <Link to="/cgu" className="hover:text-primary transition-colors">
                    CGU
                  </Link>
                  <Link to="/cgv" className="hover:text-primary transition-colors">
                    CGV
                  </Link>
                  <Link to="/contact" className="hover:text-primary transition-colors">
                    Mentions légales
                  </Link>
                </div>
                <div className="text-gray-500">
                  © {new Date().getFullYear()} IAFORMAPLUS. Tous droits réservés.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;