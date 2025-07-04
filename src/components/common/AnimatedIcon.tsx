import React from 'react';
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
  return (
    <Player
      src={src}
      className={className}
      loop={loop}
      autoplay={autoplay}
      speed={speed}
      style={{ height: '100%', width: '100%' }}
    />
  );
};

export default AnimatedIcon;