import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  sentences: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  sentences,
  typingSpeed = 50,
  pauseDuration = 2000,
  className = ''
}) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentSentence = sentences[currentSentenceIndex];
    
    if (isTyping) {
      if (currentText.length < currentSentence.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentSentence.slice(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing current sentence
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setCurrentText('');
          setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
          setIsTyping(true);
        }, pauseDuration);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, currentSentenceIndex, isTyping, sentences, typingSpeed, pauseDuration]);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`font-mono ${className}`}>
      <span>{currentText}</span>
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
    </div>
  );
};

export default TypingAnimation;