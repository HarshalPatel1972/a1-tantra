"use client";

import Link from "next/link";
import { trackWhatsApp } from "@/lib/gtag";

export default function ConsultationBanner() {
  return (
    <section className="bg-gradient-to-r from-soft-gold via-soft-gold/90 to-soft-gold text-deep-brown py-4 relative z-40 shadow-sm overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl -mr-16 -mt-16"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        <p className="font-nav font-bold text-sm md:text-base tracking-tight drop-shadow-sm">
          Not sure where to begin? Book a <span className="underline decoration-2 underline-offset-4">FREE 15-minute discovery call</span>
        </p>
        
        <Link
          href="https://wa.me/919217821866"
          onClick={() => trackWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 font-black rounded-xl hover:scale-105 transition-all text-xs md:text-sm uppercase tracking-widest border-4 border-[#D4AF37] shadow-[0_15px_30px_-5px_rgba(63,47,39,0.3)] flex items-center justify-center min-w-[180px]"
          style={{ backgroundColor: "#3F2F27", color: "#D4AF37" }}
        >
          Claim Free Call →
        </Link>
      </div>
    </section>
  );
}
