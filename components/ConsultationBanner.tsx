"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ConsultationBanner() {
  const [showMobileBanner, setShowMobileBanner] = useState(false);
  const [showMobilePopup, setShowMobilePopup] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if mobile popup was already closed in this session
    const popupClosed = sessionStorage.getItem("ind-day-mobile-popup-closed");
    if (window.innerWidth < 768) {
      if (popupClosed !== "true") {
        setShowMobilePopup(true);
      } else {
        setShowMobileBanner(true);
      }
    }
  }, []);

  const handleClosePopup = () => {
    setShowMobilePopup(false);
    setShowMobileBanner(true);
    sessionStorage.setItem("ind-day-mobile-popup-closed", "true");
  };

  const handleExplore = () => {
    setShowMobilePopup(false);
    setShowMobileBanner(true);
    sessionStorage.setItem("ind-day-mobile-popup-closed", "true");
    const el = document.getElementById("tantra-paths");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* 15-Minute Discovery Call Banner */}
      <section className="bg-gradient-to-r from-soft-gold via-soft-gold/90 to-soft-gold text-deep-brown py-3 relative z-40 shadow-sm overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl -mr-16 -mt-16"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-nav font-bold text-sm md:text-base tracking-tight drop-shadow-sm">
            Not sure where to begin? We offer a <span className="underline decoration-2 underline-offset-4 font-black">FREE 15-minute discovery call</span> before booking.
          </p>
        </div>
      </section>

      {/* Mobile-Only Independence Day Initial Popup Modal */}
      {mounted && showMobilePopup && (
        <div className="md:hidden fixed inset-0 z-[350] bg-black/80 backdrop-blur-md flex items-center justify-center p-5 animate-fade-in">
          <div className="bg-[#FAF9F5] border-2 border-[#000080] rounded-3xl max-w-sm w-full p-6 text-center relative shadow-2xl overflow-hidden text-deep-brown">
            {/* Top Tricolor Bar */}
            <div className="absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]"></div>

            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 text-deep-brown font-bold flex items-center justify-center text-sm cursor-pointer z-10"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="mt-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-deep-brown/15 rounded-full font-black text-xs text-[#000080] shadow-sm uppercase tracking-wider mb-4">
                <span>🇮🇳</span>
                <span>79th Independence Day</span>
              </span>

              <h3 className="font-title text-2xl font-bold text-deep-brown mb-2 leading-tight">
                Celebrate Inner Freedom
              </h3>

              <p className="font-body text-xs text-deep-brown/80 mb-6 leading-relaxed">
                Experience sacred, transformational Tantra therapy sessions across India. Special Independence Day offerings available today!
              </p>

              <button
                onClick={handleExplore}
                className="w-full py-3 bg-[#000080] hover:bg-[#000055] text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Offer</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Right-to-Left Marquee Banner Below 15-min Call Banner */}
      {mounted && showMobileBanner && (
        <div className="md:hidden bg-gradient-to-r from-[#FF9933] via-[#FAF9F5] to-[#138808] text-deep-brown border-b border-deep-brown/15 py-2.5 px-3 relative z-30 shadow-sm flex items-center justify-between gap-2 overflow-hidden">
          {/* Right-to-Left Continuous Scrolling Text */}
          <div className="flex-1 overflow-hidden relative">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-nav text-xs font-bold">
              <span className="inline-flex items-center gap-2">
                <span>🇮🇳</span>
                <span className="font-extrabold text-[#000080]">Happy 79th Independence Day!</span>
                <span>Celebrate Inner Freedom & Awakening Across India.</span>
                <span className="text-[#9A2207] font-black">Special Festive Sessions Available!</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <span>🇮🇳</span>
                <span className="font-extrabold text-[#000080]">Happy 79th Independence Day!</span>
                <span>Celebrate Inner Freedom & Awakening Across India.</span>
                <span className="text-[#9A2207] font-black">Special Festive Sessions Available!</span>
              </span>
            </div>
          </div>

          {/* Sticky Explore Offer Button on Mobile Marquee */}
          <Link
            href="#tantra-paths"
            className="shrink-0 px-3 py-1.5 bg-[#000080] text-white text-[10px] font-black uppercase tracking-wider rounded-lg shadow-sm whitespace-nowrap flex items-center gap-1 cursor-pointer"
          >
            <span>Explore</span>
            <span>→</span>
          </Link>
        </div>
      )}
    </>
  );
}
