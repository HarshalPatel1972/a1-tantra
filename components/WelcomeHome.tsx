"use client";

import Image from "next/image";

export default function WelcomeHome() {
  const features = [
    {
      icon: "💬",
      title: "Explore Tantra Wisdom",
      description:
        "Teachings from traditional Tantra lineages, written simply and clearly.",
    },
    {
      icon: "🧴",
      title: "Learn Sacred Practices",
      description:
        "Breathwork, yantra, mantra, mudras, meditations, and rituals explained for modern seekers.",
    },
    {
      icon: "🎁",
      title: "Find Your Tantra Path",
      description:
        "Build a personalized path based on Shakta, Kundalini, Kaula, Tibetan Tantra & more.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div>
            {/* Header */}
            <div className="mb-12">
              <h2 className="serif-heading text-4xl md:text-5xl font-bold text-deep-brown mb-4">
                Welcome home.
              </h2>
              <p className="text-base md:text-lg text-deep-brown/70 leading-relaxed">
                We're glad you found us. Whether you're new to Tantra or deep in
                your spiritual journey, A1 Tantra guides you gently, safely, and
                respectfully toward inner awakening.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="group">
                  <div className="text-4xl md:text-5xl mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="serif-heading text-lg md:text-xl font-bold text-deep-brown mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-deep-brown/70 leading-relaxed mb-3">
                    {feature.description}
                  </p>
                  <button className="text-accent-red font-semibold hover:text-deep-brown transition inline-flex items-center gap-2 text-sm">
                    Learn more →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-xs h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-deep-brown/20">
              <Image
                src="/images/candle.png"
                alt="Meditation candle - spiritual practice"
                fill
                className="object-cover object-center"
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
