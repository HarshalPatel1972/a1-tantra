"use client";

import Link from "next/link";
import { trackBooking } from "@/lib/gtag";

export default function MobileStickyBook() {
  return (
    <div 
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-t border-deep-brown/10 p-4 shadow-2xl safe-area-pb"
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold text-deep-brown/40 tracking-widest leading-none mb-1">
            Explore
          </span>
          <span className="font-title text-xl font-bold text-deep-brown leading-none">
            🕉️ A1 Tantra
          </span>
        </div>
        
        <Link
          href="/book-session"
          onClick={() => trackBooking()}
          className="px-6 py-4 bg-accent-red text-white font-bold rounded-xl shadow-lg shadow-accent-red/20 uppercase tracking-widest text-sm"
        >
          Book a Session →
        </Link>
      </div>
    </div>
  );
}
