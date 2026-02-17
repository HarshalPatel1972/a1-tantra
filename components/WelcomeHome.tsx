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
              "We're glad you found us. Whether you're new to Tantra or deep in
              your spiritual journey, A1 Tantra guides you gently, safely, and
              respectfully toward inner awakening."
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

        {/* Features Grid - Now in 3 columns for better spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group flex flex-col p-8 bg-white/50 hover:bg-white rounded-3xl transition-all duration-500 border border-deep-brown/5 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-cream rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="font-title text-2xl font-bold text-deep-brown mb-4 group-hover:text-accent-red transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-deep-brown/70 leading-relaxed font-body text-lg mb-8 flex-grow">
                {feature.description}
              </p>
              
              <button className="flex items-center gap-2 text-accent-red font-bold text-sm uppercase tracking-widest group/btn">
                <span>Learn more</span>
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
