import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

interface AnimatedIconProps {
  src: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  src,
  className = '',
  loop = true,
  autoplay = true,
  speed = 1,
}) => {
  const [hasError, setHasError] = useState(false);

  // Ne pas afficher d'icône d'erreur si le chargement échoue
  if (hasError) {
    return null;
  }

  return (
    <Player
      src={src}
      className={className}
      loop={loop}
      autoplay={autoplay}
      speed={speed}
      style={{ height: '100%', width: '100%' }}
      onEvent={(event) => {
        if (event === 'error') {
          setHasError(true);
        }
      }}
    />
  );
};

export default AnimatedIcon;