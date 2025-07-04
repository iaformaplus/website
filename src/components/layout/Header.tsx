import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import Logo from '../common/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative py-2 px-4 text-[16px] font-medium transition-all duration-300 hover:text-primary group ${
      isActive
        ? 'text-primary'
        : 'text-gray-800 hover:text-primary'
    }`;

  return (
    <header className={`fixed top-0 w-full z-50 bg-white transition-all duration-300 ${
      isScrolled ? 'shadow-lg' : 'shadow-sm'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between py-4 px-6">
          
          {/* Logo IA FORMA PLUS */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <Logo className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
            </Link>
          </div>

          {/* Navigation centrale - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-[16px] font-medium text-gray-800 hover:text-primary transition-colors py-2">
                Formations
                <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6 space-y-3">
                  <Link to="/formations-ia" className="flex items-center px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200 group">
                    <span className="text-2xl mr-3">🤖</span>
                    <div>
                      <div className="font-medium">Formations IA</div>
                      <div className="text-xs text-gray-500">ChatGPT, automatisation, IA générative</div>
                    </div>
                  </Link>
                  <Link to="/formations-professionnelles" className="flex items-center px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200 group">
                    <span className="text-2xl mr-3">💼</span>
                    <div>
                      <div className="font-medium">Formations Pro</div>
                      <div className="text-xs text-gray-500">Bureautique, marketing, management</div>
                    </div>
                  </Link>
                  <Link to="/formations-particuliers" className="flex items-center px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200 group">
                    <span className="text-2xl mr-3">👤</span>
                    <div>
                      <div className="font-medium">Particuliers</div>
                      <div className="text-xs text-gray-500">Reconversion, montée en compétences</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            <NavLink to="/webinaires" className={navLinkClasses}>
              Webinaires
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            
            <NavLink to="/blog" className={navLinkClasses}>
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            
            <NavLink to="/contact" className={navLinkClasses}>
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </nav>

          {/* Actions à droite */}
          <div className="flex items-center space-x-6">
            {/* Téléphone - Desktop */}
            <a 
              href="tel:+33162177770" 
              className="phone-facebook hidden lg:flex items-center font-semibold hover:scale-105 transition-all duration-300 group"
            >
              <Phone size={18} className="mr-2 group-hover:animate-pulse" />
              <span className="text-[16px]">01 62 17 77 70</span>
            </a>

            {/* Email avec icône animée - Desktop */}
            <a 
              href="mailto:contact@iaformaplus.fr" 
              className="hidden lg:flex items-center font-semibold text-primary hover:text-primary/80 transition-all duration-300 group"
            >
              <Mail size={18} className="mr-2 group-hover:animate-bounce" />
              <span className="text-[16px]">Contactez-nous</span>
            </a>

            {/* CTA Principal */}
            <Link 
              to="/contact" 
              className="btn-action hidden lg:inline-flex items-center group relative overflow-hidden px-6 py-3 text-[16px] font-bold"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative">Demander une formation</span>
            </Link>

            {/* Menu mobile */}
            <button
              className="lg:hidden p-2 text-gray-800 hover:text-primary transition-colors rounded-lg hover:bg-gray-50"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[88px] bg-white z-40 animate-fade-in">
          <div className="container py-8 px-6">
            {/* Logo centré - Mobile */}
            <div className="text-center mb-8">
              <Logo className="h-10 w-auto mx-auto" />
            </div>

            {/* Téléphone en haut - Mobile */}
            <div className="mb-8 pb-6 border-b border-gray-200 text-center">
              <a 
                href="tel:+33162177770" 
                className="phone-facebook inline-flex items-center text-xl font-semibold"
              >
                <Phone size={22} className="mr-3" />
                01 62 17 77 70
              </a>
            </div>

            {/* Email mobile */}
            <div className="mb-8 pb-6 border-b border-gray-200 text-center">
              <a 
                href="mailto:contact@iaformaplus.fr" 
                className="inline-flex items-center text-xl font-semibold text-primary"
              >
                <Mail size={22} className="mr-3 animate-pulse" />
                Contactez-nous
              </a>
            </div>

            <nav className="flex flex-col space-y-6 mb-10">
              <Link to="/formations-ia" className="text-xl font-medium text-gray-800 hover:text-primary transition-colors py-3 text-center border-b border-gray-100">
                🤖 Formations IA
              </Link>
              <Link to="/formations-professionnelles" className="text-xl font-medium text-gray-800 hover:text-primary transition-colors py-3 text-center border-b border-gray-100">
                💼 Formations Pro
              </Link>
              <Link to="/formations-particuliers" className="text-xl font-medium text-gray-800 hover:text-primary transition-colors py-3 text-center border-b border-gray-100">
                👤 Particuliers
              </Link>
              <Link to="/webinaires" className="text-xl font-medium text-gray-800 hover:text-primary transition-colors py-3 text-center border-b border-gray-100">
                📅 Webinaires
              </Link>
              <Link to="/blog" className="text-xl font-medium text-gray-800 hover:text-primary transition-colors py-3 text-center border-b border-gray-100">
                📝 Blog
              </Link>
            </nav>

            {/* CTA Mobile - Toujours visible */}
            <div className="text-center mb-8">
              <Link 
                to="/contact" 
                className="btn-action w-full text-center text-xl py-4 font-bold"
              >
                Demander une formation
              </Link>
            </div>

            {/* WhatsApp Mobile */}
            <div className="text-center pt-6 border-t border-gray-200">
              <a 
                href="https://wa.me/33749625335"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#25D366] font-medium text-lg"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-3">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
                </svg>
                WhatsApp : 07 49 62 53 35
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;