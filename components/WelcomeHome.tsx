"use client";

import Image from "next/image";

export default function WelcomeHome() {
  const features = [
    {
      icon: "",
      title: "Explore Tantra Wisdom",
      description:
        "Teachings from traditional Tantra lineages, written simply and clearly.",
    },
    {
      icon: "",
      title: "Learn Sacred Practices",
      description:
        "Breathwork, yantra, mantra, mudras, meditations, and rituals explained for modern seekers.",
    },
    {
      icon: "",
      title: "Find Your Tantra Path",
      description:
        "Build a personalized path based on Shakta, Kundalini, Kaula, Tibetan Tantra & more.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Header */}
            <div className="mb-12">
              <h2 className="font-title text-5xl md:text-6xl font-bold text-deep-brown mb-6">
                Welcome home.
              </h2>
              <p className="text-lg md:text-xl text-deep-brown/80 leading-relaxed font-body">
                We're glad you found us. Whether you're new to Tantra or deep in
                your spiritual journey, A1 Tantra guides you gently, safely, and
                respectfully toward inner awakening.
              </p>
            </div>

            {/* Features Grid */}
            <div className="space-y-8">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="group p-6 bg-white border-l-4 border-accent-red rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <h3 className="font-title text-xl md:text-2xl font-bold text-deep-brown mb-3 group-hover:text-accent-red transition">
                    {feature.title}
                  </h3>
                  <p className="text-deep-brown/75 leading-relaxed font-body text-lg mb-4">
                    {feature.description}
                  </p>
                  <button className="text-accent-red font-semibold hover:text-deep-brown transition inline-flex items-center gap-2 text-base">
                    Learn more →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image - Visible on All Devices */}
          <div className="flex justify-center items-center order-first md:order-0">
            <div className="relative w-full max-w-xs h-80 sm:h-96 md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-deep-brown/20 hover:border-accent-red transition-all">
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
