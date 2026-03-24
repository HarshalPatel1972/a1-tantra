"use client";

import Link from "next/link";
import { trackBooking } from "@/lib/gtag";

export default function MobileStickyBook() {
  return (
    <div 
      className="md:hidden fixed bottom-0 left-0 right-0 z-[100] p-4 safe-area-pb"
      style={{ backgroundColor: "#1c1614", borderTop: "1px solid rgba(212, 175, 55, 0.3)", boxShadow: "0 -10px 40px rgba(0,0,0,0.5)" }}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
           <span className="text-2xl">🕉️</span>
           <div className="flex flex-col">
             <span className="text-[10px] uppercase font-black tracking-widest leading-none mb-1" style={{ color: "#D4AF37" }}>
               Explore
             </span>
             <span className="font-title text-lg font-bold leading-none" style={{ color: "#F8F5F2" }}>
               A1 Tantra
             </span>
           </div>
        </div>

        <Link
          href="/book-session"
          onClick={() => trackBooking()}
          className="flex-1 px-5 py-4 font-black rounded-xl text-center uppercase tracking-widest text-xs active:scale-95 transition-all"
          style={{ backgroundColor: "#E44426", color: "#FFFFFF", boxShadow: "0 4px 14px 0 rgba(228, 68, 38, 0.39)" }}
        >
          BOOK A SESSION →
        </Link>
      </div>
    </div>
  );
}
