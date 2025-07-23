import React from 'react';

const MessengerButton: React.FC = () => {
  return (
    <a
      href="https://www.facebook.com/messages/t/633807809825804"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-28 right-6 z-50 group"
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
              d="M12 2C6.477 2 2 6.145 2 11.25c0 2.9 1.4 5.5 3.6 7.2V22l3.4-1.9c.9.2 1.9.4 2.9.4 5.523 0 10-4.145 10-9.25S17.523 2 12 2zm1 12.4l-2.5-2.7L6 14.4l5.5-5.8L14 11.3l4.5-2.7L13 14.4z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Pulse animation - Responsive sizing */}
        <div className="absolute inset-0 bg-[#0084FF] rounded-full animate-ping opacity-20 w-[45px] h-[45px] md:w-[60px] md:h-[60px]"></div>
        
        {/* Tooltip - Hidden on mobile for space */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
          <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
            Contactez-nous sur Messenger
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default MessengerButton;