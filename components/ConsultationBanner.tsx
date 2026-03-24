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
          className="px-6 py-2 bg-deep-brown text-soft-gold font-black rounded-lg hover:scale-105 transition-all shadow-lg text-xs md:text-sm uppercase tracking-widest border border-deep-brown"
        >
          Claim Free Call
        </Link>
      </div>
    </section>
  );
}
