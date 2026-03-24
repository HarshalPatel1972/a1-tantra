"use client";

import Link from "next/link";
import Image from "next/image";

export default function BuildJourneyCTA() {
  return (
    <section className="py-8 md:py-12 bg-brand-blue text-cream relative overflow-hidden">
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
              <div className="absolute inset-0 flex flex-col justify-center p-6 text-white">
                <h2 className="serif-heading text-4xl font-bold mb-4 leading-tight drop-shadow-lg">
                  Start your Tantra Journey.
                </h2>
                <p className="text-base mb-6 leading-relaxed drop-shadow-md text-white font-medium">
                  Personalized guidance based on your energy, goals, and
                  resonance. Build a path uniquely yours.
                </p>
                <Link
                  href="/start-journey"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cream text-deep-brown font-black rounded-xl w-fit relative overflow-hidden group border-2 border-deep-brown shadow-xl active:scale-95 transition-all"
                >
                  <span className="absolute inset-0 bg-deep-brown translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 pointer-events-none"></span>
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-cream transition-colors duration-500">
                    GET STARTED →
                  </span>
                </Link>
              </div>
          </div>

          {/* Desktop: Left Content + Right Image */}
          <div className="hidden lg:block">
            <h2 className="serif-heading text-5xl font-bold mb-6 leading-tight">
              Start your Tantra Journey.
            </h2>
            <p className="text-lg text-cream/90 mb-8 leading-relaxed">
              Personalized guidance based on your energy, goals, and resonance.
              Build a path uniquely yours.
            </p>
            <Link
              href="/start-journey"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-deep-brown text-cream font-black text-lg rounded-xl relative overflow-hidden group border-2 border-soft-gold/30 shadow-2xl active:scale-95 transition-all"
            >
              <span className="absolute inset-0 bg-accent-red -translate-x-full group-hover:translate-x-0 transition-transform duration-500 pointer-events-none"></span>
              <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-500">
                GET STARTED →
              </span>
            </Link>
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
