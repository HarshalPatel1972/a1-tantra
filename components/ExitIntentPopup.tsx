"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { sendEmail } from "@/utils/emailjs";
import { trackNewsletter } from "@/lib/gtag";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsLoading(true);
      try {
        // 1. Notify the admin (Harshal) about the new lead
        await sendEmail({
          from_name: "Sacred Guide Seeker",
          from_email: email,
          subject: "🔥 NEW LEAD: Sacred Tantra Starter Guide Request",
          message: `Seeker Email: ${email}\n\nThis user has just downloaded the guide via the exit-intent popup. Time to follow up!`,
        });

        // 2. Track the conversion
        trackNewsletter();
        setIsSubmitted(true);
        
        // Don't auto-close if success is shown, let them download
      } catch (err) {
        console.error("Popup Error:", err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#FFF0DF] p-8 sm:p-12 rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.5)] max-w-lg w-full relative border-2 border-soft-gold/30 overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-soft-gold/10 rounded-full blur-3xl pointer-events-none" />
        
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-6 right-6 text-deep-brown/40 hover:text-deep-brown transition-colors z-10"
          aria-label="Close"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSubmitted ? (
          <div className="text-center py-6 animate-in fade-in zoom-in duration-500">
             <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
             </div>
            <h3 className="font-title text-3xl font-black text-deep-brown mb-3">Your Journey Begins!</h3>
            <p className="text-deep-brown/70 mb-8 font-body">I've sent a notification to our team. In the meantime, you can access your guide instantly below.</p>
            
            <div className="flex flex-col gap-4">
              <Link
                href="/guides/tantra-starter-guide.pdf"
                target="_blank"
                className="w-full py-5 bg-[#D4AF37] text-black font-black rounded-xl hover:bg-black hover:text-[#D4AF37] transition-all uppercase tracking-[0.2em] text-sm shadow-xl flex items-center justify-center gap-3 active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Guide Now
              </Link>
              
              <Link
                href="https://wa.me/919217821866?text=Hi!%20I%20just%20downloaded%20the%20Sacred%20Starter%20Guide.%20I'd%20like%20to%20learn%20more."
                target="_blank"
                className="w-full py-4 border-2 border-[#25D366] text-[#128C7E] font-bold rounded-xl hover:bg-[#25D366]/5 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2"
              >
                Need help? Chat on WhatsApp
              </Link>

              <button 
                onClick={() => setIsVisible(false)}
                className="text-deep-brown/40 hover:text-deep-brown text-[10px] uppercase font-bold tracking-widest mt-4"
              >
                Close and return to site
              </button>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="inline-block px-4 py-1.5 bg-accent-red/10 text-accent-red rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
               Free Gift Wait!
            </span>
            <h2 className="font-title text-4xl font-black text-deep-brown mb-4 leading-none">Before you go...</h2>
            <p className="font-body text-lg text-deep-brown/80 mb-8 leading-relaxed">
              Get our <span className="text-accent-red font-black underline decoration-2 underline-offset-4 decoration-accent-red/30">Sacred Tantra Starter Guide</span> for free and learn how to balance your energy in 10 minutes.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative group">
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full px-6 py-4 rounded-xl border-2 border-deep-brown/10 bg-white/50 focus:bg-white focus:outline-none focus:border-[#D4AF37] transition-all text-deep-brown font-medium"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-5 bg-[#1C1614] text-white font-black rounded-xl hover:bg-black transition-all uppercase tracking-[0.2em] text-xs shadow-2xl active:scale-95 disabled:opacity-50 flex items-center justify-center"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    PREPARING YOUR GIFT...
                  </span>
                ) : (
                  "Send Me the Guide →"
                )}
              </button>
              <p className="text-[10px] text-center text-deep-brown/40 font-bold uppercase tracking-widest mt-4">
                No spam. Only sacred wisdom.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
