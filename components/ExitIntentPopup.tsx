"use client";

import { useState, useEffect } from "react";
import { trackNewsletter } from "@/lib/gtag";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Newsletter signup:", email);
      trackNewsletter();
      setIsSubmitted(true);
      setTimeout(() => setIsVisible(false), 3000);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-cream p-8 rounded-2xl shadow-2xl max-w-md w-full relative border border-soft-gold/30">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-deep-brown/40 hover:text-deep-brown"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <h3 className="font-title text-2xl font-bold text-deep-brown mb-2">Sacred Guide Sent!</h3>
            <p className="text-deep-brown/70">Check your inbox to begin your journey.</p>
          </div>
        ) : (
          <>
            <h2 className="font-title text-3xl font-bold text-deep-brown mb-4">Before you go...</h2>
            <p className="font-body text-deep-brown/80 mb-6 leading-relaxed">
              Get our <span className="text-accent-red font-bold underline decoration-1 underline-offset-4 font-italic">Sacred Tantra Starter Guide</span> for free and learn how to balance your energy in 10 minutes.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border border-deep-brown/20 focus:outline-none focus:ring-2 focus:ring-accent-red"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="w-full py-4 bg-accent-red text-white font-bold rounded-xl hover:bg-deep-brown transition-all uppercase tracking-widest text-sm shadow-lg shadow-accent-red/20"
              >
                Send Me the Guide
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
