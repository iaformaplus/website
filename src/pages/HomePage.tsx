import React from 'react';
import HeroSection from '../components/home/HeroSection';
import PopularFormations from '../components/home/PopularFormations';
import AIFormationsSection from '../components/home/AIFormationsSection';
import AIQAAnimation from '../components/common/AIQAAnimation';
import { ArrowRight, Award, Clock, User, BookOpen, Users, Building, Laptop, Globe, Zap, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * HomePage Component
 * 
 * Main landing page for the IA FORMA PLUS website.
 * This component serves as the entry point for visitors and showcases:
 * - Hero section with main value proposition
 * - Popular formations showcase
 * - Contact call-to-action sections
 * - Training format explanations
 * - AI benefits presentation
 * - Final conversion section with company branding
 */
const HomePage: React.FC = () => {
  /**
   * Function to trigger the callback modal
   * Removes the localStorage flag that prevents the modal from showing
   * and reloads the page to trigger the modal display
   */
  const openCallbackModal = () => {
    // Remove the localStorage key to force modal display
    localStorage.removeItem('callbackModalShown');
    // Reload page to trigger the callback modal
    window.location.reload();
  };

  return (
    <>
      {/* 
        HERO SECTION
        Main banner with animated typing effect and primary CTAs
        Contains the main value proposition and entry points for different user types
      */}
      <HeroSection />
      
      {/* 
        AI FORMATIONS SECTION
        Showcases the most requested AI training programs
        Positioned prominently after hero to capture AI-interested visitors
      */}
      <AIFormationsSection />
      
      {/* 
        POPULAR FORMATIONS SECTION
        Showcases the most requested training programs
        Helps visitors discover relevant courses quickly
      */}
      <PopularFormations />
      
      {/* 
        PRIMARY CONTACT SECTION
        Strategic placement after popular formations to capture interested visitors
        Features prominent contact CTAs with visual hierarchy
      */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            {/* Decorative icon to draw attention */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
              <MessageCircle size={28} className="text-white" />
            </div>
            
            {/* Main heading for contact section */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Contactez-nous
            </h2>
            
            {/* Value proposition for contacting the company */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Nous sommes là pour répondre à toutes vos questions concernant nos formations 
              et vous aider à trouver la solution adaptée à vos besoins.
            </p>
            
            {/* Primary action buttons with clear hierarchy */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Primary CTA - Contact form */}
              <button
                onClick={openCallbackModal}
                className="btn-action group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="relative flex items-center justify-center">
                  <MessageCircle size={20} className="mr-2" />
                  Prendre contact
                </div>
              </button>
              
              {/* Secondary CTA - Callback request */}
              <button
                onClick={openCallbackModal}
                className="btn group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="relative flex items-center justify-center">
                  <Phone size={20} className="mr-2" />
                  Être rappelé
                </div>
              </button>
            </div>
            
            {/* Trust indicators and service promises */}
            <div className="mt-8 flex justify-center items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span>Réponse sous 24h</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                <span>Devis gratuit</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                <span>Conseil personnalisé</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 
        TRAINING FORMATS SECTION
        Educational section explaining different training modalities
        Helps visitors understand available options and choose the right format
      */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="container">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nos formats de formation adaptés à vos besoins
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos différentes modalités de formation pour répondre parfaitement 
              à vos contraintes et objectifs professionnels.
            </p>
          </div>

          {/* Training format cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            
            {/* Inter-company training card */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                {/* Icon with hover animation */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users size={28} className="text-white" />
                </div>
                {/* Card title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  Formations Inter-entreprises
                </h3>
                {/* Card description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  Sessions accessibles à tous dans nos centres ou à distance, idéales pour monter en compétences rapidement.
                </p>
                {/* Call-to-action link */}
                <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm">En savoir plus</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>

            {/* Intra-company training card */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-purple-200">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  Formations Intra-entreprise
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Organisées à la date de votre choix, au sein de votre structure, pour répondre aux besoins concrets de vos équipes.
                </p>
                <div className="flex items-center text-purple-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm">En savoir plus</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>

            {/* Custom training card */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-green-200">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  Formations sur-mesure
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Accompagnement personnalisé selon vos objectifs, votre secteur, et vos enjeux métiers spécifiques.
                </p>
                <div className="flex items-center text-green-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm">En savoir plus</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>

            {/* E-learning card */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-orange-200">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Laptop size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  Formations e-learning
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Modules 100% digitaux, accessibles à votre rythme, sur tous supports (vidéo, PDF, interactif...).
                </p>
                <div className="flex items-center text-orange-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm">En savoir plus</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>

            {/* Digital learning & Innovation card */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-indigo-200">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  Digital learning & Innovation
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Clés des nouvelles méthodes d'apprentissage : classes virtuelles, vidéos, IA, outils immersifs.
                </p>
                <div className="flex items-center text-indigo-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm">En savoir plus</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Section footer with Qualiopi certification and CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              {/* Qualiopi certification badge */}
              <div className="flex items-center gap-2 text-gray-600">
                <Globe size={20} className="text-blue-500" />
                <span className="font-medium">Toutes nos formations sont certifiées Qualiopi</span>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              {/* CTA button */}
              <Link 
                to="/contact" 
                className="btn-action flex items-center gap-2"
              >
                <span>Trouvez votre formation</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* 
        AI BENEFITS SECTION
        Showcases the value proposition of AI training
        Features interactive AI Q&A animation to demonstrate AI capabilities
      */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div>
              {/* Section title */}
              <h2 className="text-3xl md:text-4xl font-bold mb-6">L'IA au service de votre métier</h2>
              
              {/* Section description */}
              <p className="text-xl mb-8">
                Nos formations spécialisées en intelligence artificielle sont conçues pour s'adapter 
                à votre secteur d'activité et transformer votre façon de travailler.
              </p>
              
              {/* Benefits grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Time saving benefit */}
                <div className="flex">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Gain de temps</h3>
                    <p className="text-sm text-gray-100">Automatisez les tâches répétitives</p>
                  </div>
                </div>
                
                {/* Performance benefit */}
                <div className="flex">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <Award size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Performance</h3>
                    <p className="text-sm text-gray-100">Améliorez vos résultats</p>
                  </div>
                </div>
                
                {/* Competitiveness benefit */}
                <div className="flex">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <User size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Compétitivité</h3>
                    <p className="text-sm text-gray-100">Démarquez-vous sur le marché</p>
                  </div>
                </div>
                
                {/* Innovation benefit */}
                <div className="flex">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <BookOpen size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Innovation</h3>
                    <p className="text-sm text-gray-100">Développez de nouveaux services</p>
                  </div>
                </div>
              </div>
              
              {/* Link to AI training catalog */}
              <div className="mt-8">
                <Link to="/formations-ia" className="inline-flex items-center text-white font-medium hover:underline">
                  Découvrir nos formations IA
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            
            {/* Right column - Interactive AI Q&A animation */}
            <div className="flex justify-center">
              <div className="relative">
                {/* AI chat simulation component */}
                <AIQAAnimation />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 
        FINAL CTA SECTION
        Main conversion section with company branding
        Features the company logo and comprehensive value proposition
        Positioned at the end to capture visitors ready to convert
      */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
              
              {/* Left column - Text content and CTA */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                {/* Main conversion headline */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Prêt à transformer votre entreprise?
                </h2>
                
                {/* Value proposition */}
                <p className="text-gray-300 text-lg mb-8">
                  Contactez nos experts pour élaborer un programme de formation personnalisé 
                  adapté à vos besoins spécifiques.
                </p>
                
                {/* Trust indicators list */}
                <div className="space-y-4">
                  {/* Custom programs indicator */}
                  <div className="flex items-center text-gray-300">
                    <div className="bg-accent/20 rounded-full p-2 mr-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Programmes sur mesure pour votre secteur</span>
                  </div>
                  
                  {/* Expert trainers indicator */}
                  <div className="flex items-center text-gray-300">
                    <div className="bg-accent/20 rounded-full p-2 mr-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Formateurs experts dans leur domaine</span>
                  </div>
                  
                  {/* OPCO funding indicator */}
                  <div className="flex items-center text-gray-300">
                    <div className="bg-accent/20 rounded-full p-2 mr-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Formations éligibles au financement OPCO</span>
                  </div>
                </div>
                
                {/* Primary conversion CTA */}
                <div className="mt-8">
                  <Link to="/contact" className="btn-action">
                    Demander un devis gratuit
                  </Link>
                </div>
              </div>
              
              {/* Right column - Company logo with premium presentation */}
              <div className="relative lg:flex lg:items-center lg:justify-center p-8 md:p-12">
                <div className="flex items-center justify-center h-full">
                  <div className="relative group">
                    {/* Glowing background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                    
                    {/* Logo container with glassmorphism effect */}
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105">
                      {/* Company logo with entrance animation */}
                      <img 
                        src="/Les assureurs experts copy.png" 
                        alt="IA FORMA PLUS - Organisme de formation certifié en Intelligence Artificielle" 
                        className="w-full max-w-[280px] md:max-w-[320px] h-auto mx-auto object-contain animate-fade-in hover:scale-105 transition-transform duration-700 ease-out"
                        style={{ 
                          filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))',
                          animation: 'logoEntrance 1.2s ease-out forwards'
                        }}
                      />
                      
                      {/* Shine effect that passes over the logo on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                    </div>
                    
                    {/* Floating particles around the logo for visual appeal */}
                    <div className="absolute -top-4 -right-4 w-3 h-3 bg-blue-400/60 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-6 -left-6 w-4 h-4 bg-purple-400/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/3 -left-8 w-2 h-2 bg-blue-300/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;