import React from 'react';

interface LogoProps {
  className?: string;
  isWhite?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', isWhite = false }) => {
  return (
    <img
      src="/ChatGPT_Image_9_mars_2026,_14_00_45.png"
      alt="IA FORMA PLUS - Organisme de formation"
      className={className}
      style={{ maxHeight: '100%', width: 'auto' }}
    />
  );
};

export default Logo;