"use client";

import Link from "next/link";
import Image from "next/image";
import LeadForm from "./LeadForm";

export default function Hero() {
  return (
    <section className="relative min-h-screen pb-8 pt-4 overflow-hidden bg-transparent">
      {/* Content Wrapper */}
      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Hero Image Container with Rounded Edges and Border */}
        <div className="relative mb-8 rounded-3xl overflow-hidden border-2 border-deep-brown shadow-2xl">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/image.webp"
              alt="Tantra exploration background"
              fill
              className="object-cover object-center"
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1200px, 1600px"
              fetchPriority="high"
            />
            {/* Dark overlay for text readability - darker gradient */}
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/60 to-black/50"></div>
            {/* Additional overlay for bottom area */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/40"></div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-20 min-h-[700px] md:min-h-[750px] px-6 sm:px-12 py-20 md:py-24">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-2">
              <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-2xl drop-shadow-lg">
                Find Clarity, Healing & Inner Balance Through Personalized Tantra Sessions
              </h1>

              <p className="font-body text-lg text-white/95 mb-8 leading-relaxed max-w-2xl drop-shadow-md">
                Personalized in-person tantra therapy sessions focused on healing, emotional balance, relationship growth, meditation, and chakra alignment.
              </p>

              {/* CTA BUTTONS & INTERACTIVE SELECTOR */}
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                {/* Primary Button */}
                <a
                  href="#lead-form"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("lead-form");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-5 text-white font-nav text-xs font-black uppercase tracking-[0.15em] rounded-xl relative overflow-hidden group shadow-lg text-center active:scale-95 transition-all border-2 border-[#E44426] items-center justify-center min-w-[240px] cursor-pointer"
                  style={{ backgroundColor: "#E44426" }}
                >
                  <span className="absolute inset-0 bg-white/10 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 pointer-events-none"></span>
                  <span className="relative z-10">Book Free Discovery Call</span>
                </a>

                {/* Secondary Button */}
                <Link
                  href="/book-session"
                  className="px-8 py-5 text-white font-nav text-xs font-black uppercase tracking-[0.15em] rounded-xl relative overflow-hidden group border-2 border-white/30 text-center hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center min-w-[240px]"
                >
                  <span className="relative z-10">Book Therapy Session</span>
                </Link>
              </div>

              {/* Social Proof and Trust Indicators */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-4 max-w-2xl relative z-10">
                <p className="font-nav text-xs font-bold text-soft-gold uppercase tracking-[0.15em] drop-shadow-md">
                  ⭐ 4.9/5 Client Satisfaction &nbsp;|&nbsp; 500+ Sessions Conducted
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-white/90 text-sm font-semibold">
                  <div className="flex items-center gap-2 drop-shadow-sm">
                    <span className="text-soft-gold">✔</span> In-Person Sessions
                  </div>
                  <div className="flex items-center gap-2 drop-shadow-sm">
                    <span className="text-soft-gold">✔</span> Across India
                  </div>
                  <div className="flex items-center gap-2 drop-shadow-sm">
                    <span className="text-soft-gold">✔</span> Confidential & Private
                  </div>
                  <div className="flex items-center gap-2 drop-shadow-sm">
                    <span className="text-soft-gold">✔</span> Free Discovery Call
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CARD - Lead Form */}
            <div className="lg:col-span-1 h-fit relative z-30">
              <LeadForm />
            </div>
          </div>

          {/* SCROLL INDICATOR */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
            <svg
              className="w-6 h-6 text-white drop-shadow-lg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
