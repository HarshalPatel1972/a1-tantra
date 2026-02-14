"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen pb-8 pt-4 overflow-hidden bg-transparent">
      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Hero Image Container with Rounded Edges and Border */}
        <div className="relative mb-8 rounded-3xl overflow-hidden border-2 border-deep-brown shadow-2xl">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/image.png"
              alt="Tantra exploration background"
              fill
              className="object-cover object-center"
              priority
              quality={90}
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
              <h1 className="font-title text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-2xl drop-shadow-lg">
                A place to explore Tantra, together.
              </h1>

              <p className="font-body text-lg text-white/95 mb-10 leading-relaxed max-w-2xl drop-shadow-md">
                Discover sacred tantric wisdom, healing practices, and
                transformational paths — guided with clarity, depth, and
                compassion.
              </p>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/start-journey"
                  className="px-8 py-4 bg-accent-red text-white font-nav font-semibold uppercase tracking-wide rounded-lg relative overflow-hidden group shadow-lg hover:shadow-xl text-center font-bold font-nav"
                >
                  <span className="absolute inset-0 bg-red-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] pointer-events-none"></span>
                  <span className="relative z-10">START YOUR JOURNEY</span>
                </Link>

                <Link
                  href="#tantra-paths"
                  className="
    px-8 py-4 
    border-2 border-white 
    text-white 
    font-nav font-semibold uppercase tracking-wide 
    rounded-lg 
    relative overflow-hidden group
    transition shadow-lg hover:shadow-xl 
    text-center font-bold
  "
                >
                  <span className="absolute inset-0 bg-[#FDACB4] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] pointer-events-none"></span>
                  <span className="relative z-10 group-hover:text-deep-brown transition-colors duration-500">
                    LEARN A TANTRA PATH
                  </span>
                </Link>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="lg:col-span-1 h-fit">
              <div className="bg-white/15 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
                <h3 className="font-title text-2xl font-bold text-white mb-3 drop-shadow-md">
                  Guides
                </h3>

                <p className="font-body text-white/90 mb-4 text-sm leading-relaxed drop-shadow-sm">
                  The Best Tantra Practices for Beginners
                </p>

                <button className="flex items-center font-body text-white font-semibold hover:text-cream transition drop-shadow-md">
                  Explore →
                </button>
              </div>
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
