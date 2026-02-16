"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function CallMeButton() {
  const phoneNumber = "919217821866";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // 1. Initial trigger after 3 seconds of page load
    const initialTimer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 8000);
    }, 3000);

    // 2. "Stuck" trigger (no scrolling for 30 seconds)
    let inactivityTimer: NodeJS.Timeout;

    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      // Only set a new timer if tooltip isn't already showing
      // to avoid weird overlapping show/hide cycles
      inactivityTimer = setTimeout(() => {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 8000);
      }, 30000); // 30 seconds
    };

    // Initialize the inactivity timer
    resetInactivityTimer();

    // Reset timer on scroll
    window.addEventListener("scroll", resetInactivityTimer, { passive: true });

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(inactivityTimer);
      window.removeEventListener("scroll", resetInactivityTimer);
    };
  }, []);

  return (
    <>
      {/* Fixed WhatsApp Icon */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center">
        {/* Animated Tooltip */}
        <div
          className={`
            mr-4 px-4 py-2 bg-white text-deep-brown font-nav text-xs md:text-sm font-semibold 
            rounded-full shadow-xl border-2 border-deep-brown whitespace-nowrap
            transition-all duration-500 ease-out transform pointer-events-none
            ${
              showTooltip
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-10 scale-90"
            }
          `}
        >
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Chat with us for guidance
          </div>
          {/* Tooltip Arrow */}
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r-2 border-t-2 border-deep-brown rotate-45"></div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group"
          title="Message us on WhatsApp"
          aria-label="Open WhatsApp chat"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {/* Using Next.js Image with the string path now that the file is tracked */}
          <Image
            src="/images/whatsapp.png"
            alt="WhatsApp"
            width={64}
            height={64}
            className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-lg"
            priority
            unoptimized
          />
        </a>
      </div>
    </>
  );
}
