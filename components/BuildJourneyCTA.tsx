"use client";

import Link from "next/link";

export default function BuildJourneyCTA() {
  return (
    <section className="py-12 md:py-16 bg-accent-red text-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cream rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="serif-heading text-5xl font-bold mb-6 leading-tight">
              Start your Tantra Journey.
            </h2>
            <p className="text-lg text-cream/90 mb-8 leading-relaxed">
              Personalized guidance based on your energy, goals, and resonance.
              Build a path uniquely yours.
            </p>
            <Link
              href="/start-journey"
              className="inline-block px-8 py-4 bg-cream text-accent-red font-semibold rounded-sm hover:bg-deep-brown hover:text-cream transition"
            >
              GET STARTED
            </Link>
          </div>

          {/* Right - Floating Elements */}
          <div className="relative h-96">
            <div className="absolute top-0 left-0 text-6xl animate-pulse opacity-70">
              📿
            </div>
            <div
              className="absolute top-1/3 right-0 text-5xl animate-bounce opacity-60"
              style={{ animationDelay: "0.2s" }}
            >
              ✨
            </div>
            <div
              className="absolute bottom-0 left-1/4 text-5xl animate-pulse opacity-70"
              style={{ animationDelay: "0.4s" }}
            >
            </div>
            <div className="absolute bottom-1/4 right-1/4 text-6xl opacity-50">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
