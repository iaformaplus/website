import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import AnimatedIcon from '../common/AnimatedIcon';
import TypingEffect from '../common/TypingEffect';
import LogoContactModal from '../common/LogoContactModal';

/**
 * HeroSection Component
 * 
 * Main hero section displayed on the homepage featuring:
 * - Animated typing effect for the main headline
 * - Call-to-action buttons for different user types
 * - Background gradient with overlay image
 * - Animated Lottie icon
 * - Company logo positioned in top-right corner
 */
const HeroSection: React.FC = () => {
  /**
   * Function to trigger the callback modal
   * Removes the localStorage flag that prevents the modal from showing
   * and triggers the modal display without page reload
   */
  const openCallbackModal = () => {
    // Remove the localStorage key to force modal display
    localStorage.removeItem('callbackModalShown');
    // Trigger a custom event to open the modal immediately
    window.dispatchEvent(new CustomEvent('openCallbackModal'));
  };

  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-secondary overflow-hidden">
      {/* Background Image Overlay */}
      {/* Semi-transparent background image to add visual depth */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center"></div>
      </div>
      
      {/* Company Logo - Top Right Corner */}
      {/* Floating logo with glassmorphism effect, hidden on mobile for better UX */}
      <div className="absolute top-6 right-6 z-20 hidden md:block">
        {/* Badge institutionnel avec rubans pour contact */}
        <button
          onClick={openCallbackModal}
          className="btn-badge-institutional group"
          aria-label="Contacter notre équipe - Un conseiller IA vous répond sous 1h"
          title="Contactez-nous - Badge de certification"
        >
          {/* Badge principal avec forme festonnée */}
          <div className="badge-main">
            {/* Logo IA FORMA PLUS centré */}
            <img 
              src="/Les assureurs experts copy.png" 
              alt="IA FORMA PLUS - Contact expert" 
              className="logo-badge opacity-95 group-hover:opacity-100 transition-all duration-300"
            />
            
            {/* Effet de brillance qui traverse le badge au hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12 -translate-x-full group-hover:translate-x-full"></div>
          </div>
          
          {/* Rubans décoratifs */}
          <div className="ribbon-left"></div>
          <div className="ribbon-right"></div>
          
          {/* Halo coloré qui apparaît au hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm scale-110"></div>
        </button>
      </div>

      {/* Main Content Container */}
      <div className="container relative z-10 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-white">
            {/* Main Headline with Typing Animation */}
            {/* ChatGPT-style typing effect for engaging user experience */}
            {/* Height is reduced by 30% from original design for better proportions */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 animate-fade-in min-h-[140px] md:min-h-[168px] lg:min-h-[196px]">
              <TypingEffect 
                text="Formez-vous à l'intelligence artificielle et transformez votre avenir professionnel"
                speed={60} // Typing speed in milliseconds
                showCursor={true}
                cursorColor="#D400A6" // Accent color for cursor
                className="block"
              />
            </h1>
            
            {/* Subtitle and CTA Buttons */}
            {/* Appears after typing animation completes with slide-up effect */}
            <div className="animate-slide-up" style={{ animationDelay: '4s', animationFillMode: 'both', opacity: 0 }}>
              {/* Subtitle describing the value proposition */}
              <p className="text-lg md:text-xl text-gray-200 mb-6">
                Nos parcours certifiés Qualiopi vous permettent d'acquérir des compétences IA applicables immédiatement dans votre métier. Formations en présentiel, distanciel ou e-learning.
              </p>
              
              {/* Call-to-Action Buttons */}
              {/* Two primary CTAs targeting different user segments */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* CTA for Individual Users */}
                <Link 
                  to="/formations-particuliers"
                  className="btn-action group relative overflow-hidden"
                >
                  {/* Animated shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="relative flex items-center justify-center">
                    Je veux me former
                  </div>
                </Link>
                
                {/* CTA for Business Users */}
                <Link 
                  to="/contact"
                  className="btn-action group relative overflow-hidden"
                >
                  {/* Animated shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="relative flex items-center justify-center">
                    Je veux former mon équipe
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right Column - Animated Icon */}
          {/* Lottie animation for visual appeal and modern feel */}
          <div className="flex justify-center">
            <div className="w-full max-w-md h-80 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <AnimatedIcon 
                src="https://assets10.lottiefiles.com/packages/lf20_ikvz7qhc.json" 
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      {/* Smooth transition to the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
          to="/contact"
          className="btn-ia-hero group"
          aria-label="Contacter notre équipe IA"
          title="Contactez notre équipe - Formations IA"
        >
          {/* Logo IA FORMA PLUS agrandi et centré avec animation pulse */}
          <img 
            src="/Les assureurs experts copy.png" 
            alt="Contact IA FORMA PLUS" 
            className="logo-inside opacity-95 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse"
          />
          
          {/* Effet de lumière qui traverse le bouton au hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12 -translate-x-full group-hover:translate-x-full"></div>
          
          {/* Halo coloré violet qui apparaît au hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 via-fuchsia-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm scale-110"></div>
        </Link>
      </div>

      {/* Main Content Container */}
      <div className="container relative z-10 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-white">
            {/* Main Headline with Typing Animation */}
            {/* ChatGPT-style typing effect for engaging user experience */}
            {/* Height is reduced by 30% from original design for better proportions */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 animate-fade-in min-h-[140px] md:min-h-[168px] lg:min-h-[196px]">
              <TypingEffect 
                text="Formez-vous à l'intelligence artificielle et transformez votre avenir professionnel"
                speed={60} // Typing speed in milliseconds
                showCursor={true}
                cursorColor="#D400A6" // Accent color for cursor
                className="block"
              />
            </h1>
            
            {/* Subtitle and CTA Buttons */}
            {/* Appears after typing animation completes with slide-up effect */}
            <div className="animate-slide-up" style={{ animationDelay: '4s', animationFillMode: 'both', opacity: 0 }}>
              {/* Subtitle describing the value proposition */}
              <p className="text-lg md:text-xl text-gray-200 mb-6">
                Nos parcours certifiés Qualiopi vous permettent d'acquérir des compétences IA applicables immédiatement dans votre métier. Formations en présentiel, distanciel ou e-learning.
              </p>
              
              {/* Call-to-Action Buttons */}
              {/* Two primary CTAs targeting different user segments */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* CTA for Individual Users */}
                <Link 
                  to="/formations-particuliers"
                  className="btn-action group relative overflow-hidden"
                >
                  {/* Animated shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="relative flex items-center justify-center">
                    Je veux me former
                  </div>
                </Link>
                
                {/* CTA for Business Users */}
                <Link 
                  to="/contact"
                  className="btn-action group relative overflow-hidden"
                >
                  {/* Animated shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="relative flex items-center justify-center">
                    Je veux former mon équipe
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right Column - Animated Icon */}
          {/* Lottie animation for visual appeal and modern feel */}
          <div className="flex justify-center">
            <div className="w-full max-w-md h-80 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <AnimatedIcon 
                src="https://assets10.lottiefiles.com/packages/lf20_ikvz7qhc.json" 
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      {/* Smooth transition to the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;