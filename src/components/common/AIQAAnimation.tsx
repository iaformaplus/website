import React, { useState, useEffect } from 'react';

interface QAItem {
  question: string;
  answer: string;
}

const AIQAAnimation: React.FC = () => {
  const qaData: QAItem[] = [
    {
      question: "Que peut faire l'IA pour mon entreprise ?",
      answer: "Rédiger des contenus, automatiser vos e-mails, générer des idées..."
    },
    {
      question: "Est-ce que je peux apprendre à m'en servir ?",
      answer: "Oui. Nos formations sont là pour ça."
    },
    {
      question: "Combien de temps pour maîtriser l'IA ?",
      answer: "Quelques heures suffisent pour commencer à être productif."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedQuestion, setDisplayedQuestion] = useState('');
  const [displayedAnswer, setDisplayedAnswer] = useState('');
  const [isTypingQuestion, setIsTypingQuestion] = useState(true);
  const [isTypingAnswer, setIsTypingAnswer] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentQA = qaData[currentIndex];
    
    if (isTypingQuestion) {
      if (displayedQuestion.length < currentQA.question.length) {
        const timeout = setTimeout(() => {
          setDisplayedQuestion(currentQA.question.slice(0, displayedQuestion.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Question terminée, commencer la réponse après une pause
        const timeout = setTimeout(() => {
          setIsTypingQuestion(false);
          setIsTypingAnswer(true);
        }, 800);
        return () => clearTimeout(timeout);
      }
    }

    if (isTypingAnswer) {
      if (displayedAnswer.length < currentQA.answer.length) {
        const timeout = setTimeout(() => {
          setDisplayedAnswer(currentQA.answer.slice(0, displayedAnswer.length + 1));
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        // Réponse terminée, passer à la question suivante après une pause
        const timeout = setTimeout(() => {
          setDisplayedQuestion('');
          setDisplayedAnswer('');
          setIsTypingQuestion(true);
          setIsTypingAnswer(false);
          setCurrentIndex((prev) => (prev + 1) % qaData.length);
        }, 3000);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayedQuestion, displayedAnswer, isTypingQuestion, isTypingAnswer, currentIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <h3 className="text-white font-semibold">Assistant IA</h3>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-white/70 text-sm">En ligne</span>
          </div>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="space-y-4 min-h-[200px]">
        {/* Question */}
        {displayedQuestion && (
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white px-4 py-3 rounded-2xl rounded-br-md max-w-xs">
              <p className="text-sm">
                {displayedQuestion}
                {isTypingQuestion && (
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
                )}
              </p>
            </div>
          </div>
        )}

        {/* Answer */}
        {displayedAnswer && (
          <div className="flex justify-start">
            <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-2xl rounded-bl-md max-w-xs">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-xs text-white/70">IA Assistant</span>
              </div>
              <p className="text-sm">
                {displayedAnswer}
                {isTypingAnswer && (
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
                )}
              </p>
            </div>
          </div>
        )}

        {/* Typing indicator when transitioning */}
        {!isTypingQuestion && !isTypingAnswer && !displayedAnswer && (
          <div className="flex justify-start">
            <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-2xl rounded-bl-md">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area (decorative) */}
      <div className="mt-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-3 flex items-center">
          <span className="text-white/50 text-sm flex-1">Posez votre question...</span>
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-400/20 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 -left-8 w-8 h-8 bg-green-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default AIQAAnimation;