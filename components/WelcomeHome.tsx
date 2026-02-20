"use client";

import Image from "next/image";

export default function WelcomeHome() {
  const features = [
    {
      icon: "🕉️",
      title: "Explore Tantra Wisdom",
      description:
        "Teachings from traditional Tantra lineages, written simply and clearly.",
    },
    {
      icon: "🕯️",
      title: "Learn Sacred Practices",
      description:
        "Breathwork, yantra, mantra, mudras, meditations, and rituals explained for modern seekers.",
    },
    {
      icon: "✨",
      title: "Find Your Tantra Path",
      description:
        "Build a personalized path based on Shakta, Kundalini, Kaula, Tibetan Tantra & more.",
    },
  ];

  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-red/5 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-soft-gold/10 rounded-full blur-[100px] -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Left Content */}
          <div className="order-last lg:order-first">
            <h2 className="font-title text-5xl md:text-7xl font-bold text-deep-brown mb-8 leading-tight">
              Welcome home.
            </h2>
            <p className="text-xl md:text-2xl text-deep-brown/80 leading-relaxed font-body italic mb-0">
              &quot;We&apos;re glad you found us. Whether you&apos;re new to Tantra or deep in
              your spiritual journey, A1 Tantra guides you gently, safely, and
              respectfully toward inner awakening.&quot;
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-2 border-deep-brown/10 ring-8 ring-white/50 group">
              <Image
                src="/images/candle.png"
                alt="Sacred meditation candle"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>

        {/* Features - Path of Discovery (No Cards) */}
        <div className="space-y-32">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-12 lg:gap-24 group`}
            >
              {/* Feature Icon/Visual */}
              <div className="hidden md:flex w-full md:w-1/2 justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-soft-gold/20 rounded-full blur-[60px] scale-0 group-hover:scale-150 transition-transform duration-1000" />
                  <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center text-5xl md:text-6xl shadow-xl border border-deep-brown/5 transform group-hover:-rotate-12 transition-all duration-500">
                    {feature.icon}
                  </div>
                </div>
              </div>

              {/* Feature Content */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                  <div className="w-12 h-[1px] bg-accent-red" />
                  <span className="text-xs font-bold text-accent-red uppercase tracking-[0.3em]">
                    Step {idx + 1}
                  </span>
                </div>
                
                <h3 className="font-title text-4xl md:text-5xl font-bold text-deep-brown mb-6 leading-tight flex items-center justify-center md:justify-start gap-3">
                  <span className="md:hidden text-4xl">{feature.icon}</span>
                  <span>{feature.title}</span>
                </h3>
                
                <p className="text-xl text-deep-brown/60 leading-relaxed font-body max-w-lg mb-8 mx-auto md:mx-0">
                  {feature.description}
                </p>
                
                <button className="group/btn relative inline-flex items-center gap-3 text-deep-brown font-bold text-sm uppercase tracking-widest overflow-hidden">
                  <span className="relative z-10">Learn the path</span>
                  <div className="w-8 h-[2px] bg-accent-red group-hover/btn:w-16 transition-all duration-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
