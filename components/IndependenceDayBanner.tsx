"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function IndependenceDayBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const dismissed = sessionStorage.getItem("ind-day-banner-dismissed");
    if (dismissed === "true") {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("ind-day-banner-dismissed", "true");
  };

  if (!mounted || !isVisible) return null;

  return (
    // Desktop only banner — no changes for web/laptop version
    <div className="hidden md:block relative z-[60] bg-gradient-to-r from-[#FF9933] via-[#FAF9F5] to-[#138808] text-deep-brown shadow-md border-b border-deep-brown/15 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4 font-nav text-xs sm:text-sm">
        
        {/* Left Side — Badge & Text */}
        <div className="flex items-center gap-3 flex-1 min-w-0 overflow-hidden">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/90 border border-deep-brown/15 rounded-full font-black text-xs text-[#000080] shadow-xs shrink-0 uppercase tracking-wider">
            <span>🇮🇳</span>
            <span>79th Independence Day</span>
          </span>

          <p className="font-bold truncate text-deep-brown text-xs sm:text-sm">
            <span>Celebrate Inner Freedom & Awakening Across India. </span>
            <span className="font-extrabold text-[#9A2207]">Special Festive Independence Day Sessions Available!</span>
          </p>
        </div>

        {/* Right Side — CTA & Close */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="#tantra-paths"
            className="px-3.5 py-1.5 bg-[#000080] hover:bg-[#000055] text-white text-xs font-black uppercase tracking-wider rounded-lg shadow-sm transition-all duration-200 flex items-center gap-1 whitespace-nowrap cursor-pointer"
          >
            <span>Explore Offer</span>
            <span className="text-xs">→</span>
          </Link>

          <button
            onClick={handleDismiss}
            className="w-6 h-6 rounded-full hover:bg-black/10 text-deep-brown/70 hover:text-deep-brown transition-all flex items-center justify-center text-xs font-bold shrink-0 cursor-pointer"
            aria-label="Dismiss Independence Day Banner"
            title="Dismiss"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
