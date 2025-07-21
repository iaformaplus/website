import React from 'react';
import HeroSection from '../components/home/HeroSection';
import PopularFormations from '../components/home/PopularFormations';
import AIFormationsSection from '../components/home/AIFormationsSection';
import AIQAAnimation from '../components/common/AIQAAnimation';
import BugReportWidget from '../components/common/BugReportWidget';
import { ArrowRight, Award, Clock, User, BookOpen, Users, Building, Laptop, Globe, Zap, Phone, MessageCircle, Target } from 'lucide-react';
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

  return (
    <>
      {/* Bug Reports - HomePage */}
      <BugReportWidget
        bugId="HP001"
        description="Logo dans la section finale ne s'affiche pas correctement sur mobile"
        severity="medium"
        location="HomePage - Section CTA finale"
        type="responsive"
        className="top-[95vh] right-4"
      />
      
      <BugReportWidget
        bugId="HP002"
        description="Animation Lottie peut ne pas se charger sur connexions lentes"
        severity="low"
        location="HomePage - Section IA benefits"
        type="performance"
        className="top-[80vh] right-16"
      />

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
              <Link
                to="/contact"
                className="btn-action group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="relative flex items-center justify-center">
                  <MessageCircle size={20} className="mr-2" />
                  Prendre contact
                </div>
              </Link>
              
              {/* Secondary CTA - Callback request */}
              <Link
                to="/contact"
                className="btn group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="relative flex items-center justify-center">
                  <Phone size={20} className="mr-2" />
                  Être rappelé
                </div>
              </Link>
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
                <Link to="/format/inter-entreprise" className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm">En savoir plus</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
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
                <Link to="/format/intra-entreprise" className="flex items-center text-purple-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm">En savoir plus</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
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
                <Link to="/format/sur-mesure" className="flex items-center text-green-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm">En savoir plus</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
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
                <Link to="/format/e-learning" className="flex items-center text-orange-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm">En savoir plus</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
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
                <Link to="/format/digital-learning" className="flex items-center text-indigo-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm">En savoir plus</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
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
        FORMATIONS SÉCURITÉ SECTION
        Nouvelle section dédiée aux formations sécurité
        Positionnée après les formations IA pour diversifier l'offre
      */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl mb-6 shadow-lg">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🛡️ Formations Sécurité
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Formations obligatoires et certifiantes pour garantir la sécurité de vos équipes et la conformité 
              de votre entreprise aux réglementations en vigueur.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Sécurité incendie */}
            <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-red-200 hover:translate-y-[-2px]">
              <div className="relative overflow-hidden h-48">
                <img 
                  src="https://images.pexels.com/photos/280076/pexels-photo-280076.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Sécurité incendie"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-red-500 to-orange-600 text-white shadow-sm">
                    🔥 Obligatoire
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-red-600 transition-colors line-clamp-2 leading-tight">
                  Sécurité incendie
                </h3>
                <div className="flex items-start mb-3">
                  <Target size={14} className="mr-2 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 line-clamp-2">
                    <strong>Objectif :</strong> Prévenir les risques et réagir efficacement en cas d'incendie
                  </span>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 group-hover:bg-red-50/50 transition-colors">
                <Link 
                  to="/formations/securite-incendie"
                  className="flex justify-between items-center w-full"
                >
                  <span 
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105 group-hover:translate-x-1"
                    style={{ backgroundColor: '#1877F2' }}
                  >
                    Voir détails
                  </span>
                  <ArrowRight size={16} className="text-red-600 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* SST */}
            <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200 hover:translate-y-[-2px]">
              <div className="relative overflow-hidden h-48">
                <img 
                  src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="SST"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-sm">
                    ⛑️ Certifiant
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-green-600 transition-colors line-clamp-2 leading-tight">
                  Sauveteur Secouriste du Travail (SST)
                </h3>
                <div className="flex items-start mb-3">
                  <Target size={14} className="mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 line-clamp-2">
                    <strong>Objectif :</strong> Formation SST certifiante – minimum 4 stagiaires
                  </span>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 group-hover:bg-green-50/50 transition-colors">
                <Link 
                  to="/formations/sauveteur-secouriste-travail-sst"
                  className="flex justify-between items-center w-full"
                >
                  <span 
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105 group-hover:translate-x-1"
                    style={{ backgroundColor: '#1877F2' }}
                  >
                    Voir détails
                  </span>
                  <ArrowRight size={16} className="text-green-600 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Hygiène & Sécurité */}
            <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 hover:translate-y-[-2px]">
              <div className="relative overflow-hidden h-48">
                <img 
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Hygiène & Sécurité"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-sm">
                    🏭 Conformité
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                  Hygiène & Sécurité au travail
                </h3>
                <div className="flex items-start mb-3">
                  <Target size={14} className="mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 line-clamp-2">
                    <strong>Objectif :</strong> Garantir des conditions de travail conformes et saines
                  </span>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 group-hover:bg-blue-50/50 transition-colors">
                <Link 
                  to="/formations/hygiene-securite-travail"
                  className="flex justify-between items-center w-full"
                >
                  <span 
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105 group-hover:translate-x-1"
                    style={{ backgroundColor: '#1877F2' }}
                  >
                    Voir détails
                  </span>
                  <ArrowRight size={16} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Cybersécurité */}
            <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200 hover:translate-y-[-2px]">
              <div className="relative overflow-hidden h-48">
                <img 
                  src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Cybersécurité"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-sm">
                    🔒 Digital
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-purple-600 transition-colors line-clamp-2 leading-tight">
                  Cybersécurité pour les professionnels
                </h3>
                <div className="flex items-start mb-3">
                  <Target size={14} className="mr-2 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 line-clamp-2">
                    <strong>Objectif :</strong> Protéger les données, systèmes et communications de l'entreprise
                  </span>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 group-hover:bg-purple-50/50 transition-colors">
                <Link 
                  to="/formations/cybersecurite-professionnels"
                  className="flex justify-between items-center w-full"
                >
                  <span 
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105 group-hover:translate-x-1"
                    style={{ backgroundColor: '#1877F2' }}
                  >
                    Voir détails
                  </span>
                  <ArrowRight size={16} className="text-purple-600 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/formations-professionnelles" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ backgroundColor: '#1877F2' }}
            >
              <span className="mr-2">🛡️</span>
              Voir toutes nos formations sécurité
              <ArrowRight size={20} className="ml-2" />
            </Link>
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