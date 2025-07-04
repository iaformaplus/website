import React from 'react';

interface LogoProps {
  className?: string;
  isWhite?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', isWhite = false }) => {
  // Since we can't directly use the provided logo, we'll create a text-based logo
  // In a real project, you would use the actual image logo
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex flex-col">
        <span className={`font-heading font-bold text-2xl tracking-wider ${isWhite ? 'text-white' : 'text-gray-800'}`}>
          IA FORMA
        </span>
        <div className="flex items-center">
          <span className={`font-heading font-bold text-2xl tracking-wider ${isWhite ? 'text-white' : 'text-primary'}`}>
            PLUS
          </span>
          <span className="text-accent font-bold text-2xl ml-0.5">+</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;