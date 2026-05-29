"use client";

import Link from "next/link";
import Image from "next/image";

export default function BuildJourneyCTA() {
  return (
    <section className="py-12 md:py-16 bg-brand-blue text-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cream rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mobile: Image with Content Overlay */}
          <div className="lg:hidden relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/start-your.webp"
              alt="Start your Tantra journey"
              fill
              className="object-cover object-center blur-sm"
              style={{ filter: "blur(5px)" }}
              quality={90}
              priority
            />
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center p-6 text-white bg-black/40">
              <h2 className="serif-heading text-3xl font-bold mb-4 leading-tight drop-shadow-lg">
                Ready to Begin Your In-Person Therapy?
              </h2>
              <p className="text-sm mb-6 leading-relaxed drop-shadow-md text-white font-medium">
                Schedule a free 15-minute discovery call to discuss your goals, preferred location, and session details.
              </p>
              
              <div className="flex flex-col gap-3">
                <a
                  href="#lead-form"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("lead-form");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-[#E44426] text-white font-black rounded-xl w-full border-2 border-[#E44426] shadow-xl active:scale-95 transition-all text-xs uppercase tracking-widest cursor-pointer"
                >
                  Book Free Discovery Call
                </a>
                <Link
                  href="/book-session"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent text-white font-black rounded-xl w-full border-2 border-white/40 shadow-xl active:scale-95 transition-all text-xs uppercase tracking-widest"
                >
                  Book Therapy Session
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop: Left Content */}
          <div className="hidden lg:block">
            <h2 className="serif-heading text-5xl font-bold mb-6 leading-tight">
              Ready to Begin Your In-Person Therapy?
            </h2>
            <p className="text-lg text-cream/90 mb-8 leading-relaxed">
              Schedule a free 15-minute discovery call to discuss your goals, preferred location, and session details.
            </p>
            <div className="flex gap-4">
              <a
                href="#lead-form"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("lead-form");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E44426] text-white font-black text-sm rounded-xl relative overflow-hidden group border-2 border-[#E44426] shadow-2xl active:scale-95 transition-all cursor-pointer"
              >
                <span className="relative z-10">Book Free Discovery Call</span>
              </a>
              <Link
                href="/book-session"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-cream font-black text-sm rounded-xl relative overflow-hidden group border-2 border-cream/30 shadow-2xl active:scale-95 transition-all"
              >
                <span className="relative z-10">Book Therapy Session</span>
              </Link>
            </div>
          </div>

          {/* Right - Image (Desktop Only) */}
          <div className="hidden lg:block relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/start-your.webp"
              alt="Start your Tantra journey"
              fill
              className="object-cover object-center"
              quality={90}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
