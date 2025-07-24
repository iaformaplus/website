import React from 'react';

const MessengerButton: React.FC = () => {
  return (
    <a
      href="https://www.facebook.com/messages/t/633807809825804"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 group"
      aria-label="Chat on Messenger"
    >
      <div className="relative">
        {/* Main button - Responsive sizing: 45px mobile, 60px desktop */}
        <div className="bg-[#0084FF] text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out flex items-center justify-center w-[45px] h-[45px] md:w-[60px] md:h-[60px]">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-sm md:w-6 md:h-6"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12c0 3.54 1.84 6.64 4.6 8.4V24l3.4-1.87c1.02.28 2.1.43 3.22.43 5.52 0 10-4.48 10-10S17.52 2 12 2zm1.13 13.83l-2.61-2.78-5.09 2.78L10.52 10l2.61 2.78L18.22 10l-5.09 5.83z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Pulse animation - Responsive sizing */}
        <div className="absolute inset-0 bg-[#0084FF] rounded-full animate-ping opacity-20 w-[45px] h-[45px] md:w-[60px] md:h-[60px]"></div>
        
        {/* Tooltip - Hidden on mobile for space */}
        <div className="absolute bottom-full left-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
          <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
            Contactez-nous sur Messenger
            <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default MessengerButton;