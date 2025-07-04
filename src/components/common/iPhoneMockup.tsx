import React from 'react';
import TypingAnimation from './TypingAnimation';

const iPhoneMockup: React.FC = () => {
  const sentences = [
    "Automatisez vos processus avec l'IA.",
    "L'intelligence artificielle au service de votre entreprise.",
    "Transformez votre façon de travailler avec nos formations IA.",
    "Boostez votre productivité grâce à l'IA.",
    "Découvrez le potentiel de ChatGPT pour votre métier."
  ];

  return (
    <div className="relative mx-auto w-80 h-[600px] animate-fade-in">
      {/* iPhone Frame */}
      <div className="relative w-full h-full bg-black rounded-[3rem] p-2 shadow-2xl">
        {/* Screen */}
        <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
          
          {/* Screen Content */}
          <div className="h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col">
            {/* Status Bar */}
            <div className="flex justify-between items-center px-6 pt-12 pb-4 text-white text-sm">
              <span className="font-medium">9:41</span>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-2 border border-white rounded-sm">
                  <div className="w-3 h-1 bg-white rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* Chat Interface */}
            <div className="flex-1 px-4 pb-6">
              {/* Header */}
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-white font-medium">IA Assistant</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-blue-500 text-white px-4 py-3 rounded-2xl rounded-br-md max-w-xs">
                    <p className="text-sm">Comment l'IA peut-elle m'aider dans mon travail ?</p>
                  </div>
                </div>

                {/* AI Response with Typing Animation */}
                <div className="flex justify-start">
                  <div className="bg-white/10 backdrop-blur-sm text-white px-4 py-3 rounded-2xl rounded-bl-md max-w-xs">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-xs text-gray-300">IA Assistant</span>
                    </div>
                    <TypingAnimation 
                      sentences={sentences}
                      typingSpeed={80}
                      pauseDuration={3000}
                      className="text-sm leading-relaxed"
                    />
                  </div>
                </div>

                {/* Suggested Actions */}
                <div className="mt-6 space-y-2">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-bold">AI</span>
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">Formations IA disponibles</p>
                        <p className="text-gray-400 text-xs">Découvrez nos programmes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="mt-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-3 flex items-center">
                  <span className="text-gray-400 text-sm flex-1">Tapez votre message...</span>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500/20 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 -left-8 w-8 h-8 bg-green-500/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default iPhoneMockup;