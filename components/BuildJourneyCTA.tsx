"use client";

import Link from "next/link";
import Image from "next/image";

export default function BuildJourneyCTA() {
  return (
    <section className="py-8 md:py-12 bg-accent-red text-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cream rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mobile: Image with Content Overlay */}
          <div className="lg:hidden relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/start-your.jpg"
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-cream/90 to-cream/70 text-deep-brown font-bold rounded-lg w-fit"
              >
                GET STARTED
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
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
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-deep-brown to-deep-brown/70 text-cream font-bold text-lg rounded-lg"
            >
              GET STARTED
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>

          {/* Right - Image (Desktop Only) */}
          <div className="hidden lg:block relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/start-your.jpg"
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
