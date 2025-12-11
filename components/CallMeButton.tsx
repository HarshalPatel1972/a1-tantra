"use client";

import { useState } from "react";

export default function CallMeButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "+919217821866";

  return (
    <>
      {/* Fixed Call Button - Visible on all devices */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* Main Button */}
        <button
          onClick={() => window.open(`tel:${phoneNumber}`)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative group flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-deep-brown rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
        >
          {/* Phone Icon */}
          <svg
            className="w-7 h-7 md:w-9 md:h-9 text-cream transition-transform duration-300 group-hover:scale-110"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>

          {/* Ripple Effect */}
          <span className="absolute inset-0 rounded-full bg-cream opacity-0 group-hover:animate-ping"></span>
        </button>

        {/* Tooltip on Desktop */}
        <div
          className={`absolute bottom-full right-0 mb-3 px-4 py-2 bg-deep-brown text-cream rounded-lg whitespace-nowrap font-bold text-sm transition-all duration-300 pointer-events-none shadow-lg ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          } hidden md:block`}
        >
          Call Me Now
          <div className="absolute top-full right-2 w-2 h-2 bg-deep-brown transform rotate-45"></div>
        </div>
      </div>

      {/* Mobile Tooltip */}
      <div className="fixed bottom-24 right-6 md:hidden z-40 pointer-events-none">
        <div
          className={`px-3 py-2 bg-deep-brown text-cream rounded-lg text-xs font-bold transition-all duration-300 shadow-lg ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          Tap to Call
        </div>
      </div>
    </>
  );
}
