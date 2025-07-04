import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import AnimatedIcon from '../common/AnimatedIcon';
import TypingEffect from '../common/TypingEffect';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-secondary overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center"></div>
      </div>
      
      {/* Nouveau logo en haut à droite */}
      <div className="absolute top-6 right-6 z-20 hidden md:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
          <img 
            src="/1.jpg" 
            alt="IA FORMA PLUS - Logo" 
            className="w-24 h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>

      <div className="container relative z-10 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            {/* Titre principal avec effet d'écriture ChatGPT - Hauteur réduite de 30% */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 animate-fade-in min-h-[140px] md:min-h-[168px] lg:min-h-[196px]">
              <TypingEffect 
                text="Formez-vous à l'intelligence artificielle et transformez votre avenir professionnel"
                speed={60}
                showCursor={true}
                cursorColor="#D400A6"
                className="block"
              />
            </h1>
            
            {/* Sous-titre statique qui apparaît après l'animation */}
            <div className="animate-slide-up" style={{ animationDelay: '4s', animationFillMode: 'both', opacity: 0 }}>
              <p className="text-lg md:text-xl text-gray-200 mb-6">
                Nos parcours certifiés Qualiopi vous permettent d'acquérir des compétences IA applicables immédiatement dans votre métier. Formations en présentiel, distanciel ou e-learning.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/formations-particuliers"
                  className="btn-action group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="relative flex items-center justify-center">
                    Je veux me former
                  </div>
                </Link>
                <Link 
                  to="/contact"
                  className="btn-action group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="relative flex items-center justify-center">
                    Je veux former mon équipe
                  </div>
                </Link>
              </div>
            </div>
          </div>
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
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;