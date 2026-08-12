"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { trackBooking, trackWhatsApp, trackPhoneCall } from "@/lib/gtag";

export default function MobileStickyBook() {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkModalState = () => {
      setIsModalOpen(document.body.classList.contains("modal-open"));
    };

    checkModalState();

    const observer = new MutationObserver(checkModalState);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 3000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  if (!mounted) {
    return null;
  }
  
  // Hide on contact/booking-related pages to avoid redundancy
  if (pathname === "/contact" || pathname === "/auth/login" || pathname === "/auth/signup" || pathname === "/book-session") {
    return null;
  }

  const handleBookCallClick = () => {
    trackBooking();
    router.push("/book-session");
  };

  const showBar = isScrolling && !isModalOpen;

  return (
    <div 
      className={`md:hidden fixed bottom-0 left-0 right-0 z-[100] px-4 py-3 safe-area-pb transition-all duration-500 ease-in-out transform ${
        showBar 
          ? "translate-y-0 opacity-100" 
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
      style={{ 
        backgroundColor: "#1c1614", 
        borderTop: "1px solid rgba(212, 175, 55, 0.25)", 
        boxShadow: "0 -10px 40px rgba(0,0,0,0.6)" 
      }}
    >
      <div className="grid grid-cols-3 gap-2.5 w-full">
        {/* CALL BUTTON */}
        <a
          href="tel:+919217821866"
          onClick={() => trackPhoneCall()}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all active:scale-95 text-center border border-white/10"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
        >
          <span className="text-lg mb-0.5">📞</span>
          <span className="text-[9px] uppercase font-black tracking-widest text-[#F8F5F2]">
            Call
          </span>
        </a>

        {/* WHATSAPP BUTTON */}
        <a
          href="https://wa.me/919217821866"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsApp()}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all active:scale-95 text-center border border-[#25D366]/20"
          style={{ backgroundColor: "rgba(37, 211, 102, 0.15)" }}
        >
          <span className="text-lg mb-0.5">💬</span>
          <span className="text-[9px] uppercase font-black tracking-widest text-[#25D366]">
            WhatsApp
          </span>
        </a>

        {/* BOOK CALL BUTTON */}
        <button
          onClick={handleBookCallClick}
          className="col-span-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all active:scale-95 text-center font-black uppercase tracking-widest text-[9px] shadow-lg cursor-pointer"
          style={{ 
            backgroundColor: "#E44426", 
            color: "#FFFFFF", 
            boxShadow: "0 4px 14px 0 rgba(228, 68, 38, 0.3)" 
          }}
        >
          <span className="text-lg mb-0.5">📅</span>
          <span className="text-[9px] uppercase font-black tracking-widest text-white">
            Request Session
          </span>
        </button>
      </div>
    </div>
  );
}
