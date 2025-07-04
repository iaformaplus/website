import React from 'react';

interface LottieIconProps {
  src: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const LottieIcon: React.FC<LottieIconProps> = ({ 
  src, 
  className = '', 
  size = 'medium' 
}) => {
  const sizeClasses = {
    small: 'lottie-small',
    medium: 'lottie-icon',
    large: 'w-12 h-12'
  };

  return (
    <lottie-player
      src={src}
      background="transparent"
      speed="1"
      className={`${sizeClasses[size]} ${className}`}
      loop
      autoplay
    />
  );
};

export default LottieIcon;