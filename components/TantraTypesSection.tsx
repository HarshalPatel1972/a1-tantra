"use client";

import Image from "next/image";

export default function TantraTypesSection() {
  const tantraTypes = [
    {
      name: "Kriya Tantra",
      subtitle: "ACTION TANTRA",
      description:
        "Emphasizes external practices and ritual action: physical purity, ritual bathing, mantra recitation, offerings, and carefully structured ceremonial conduct. It is about aligning body and behavior with sacred intention.",
      duration: "90 min",
      price: "₹20,000",
      image: "/images/Kriya-Tantra.jpg",
    },
    {
      name: "Carya Tantra",
      subtitle: "METHOD TANTRA",
      description:
        "Balances outer ritual with inner meditative stability. Practitioners still perform ceremonies and symbolic actions, but the focus shifts more strongly toward devotion, visualization, and maintaining mindful awareness during activity.",
      duration: "120 min",
      price: "₹25,000",
      image: "/images/Carya-Tantra.jpg",
    },
    {
      name: "Yoga Tantra",
      subtitle: "UNION TANTRA",
      description:
        "Centers on internal practice and the union of mind with enlightened qualities. Visualization of deities, mantra, and subtle-energy awareness become primary, with less emphasis on elaborate external ritual and more on continuous meditative presence.",
      duration: "150 min",
      price: "₹35,000",
      image: "/images/Yoga-Tantra.jpg",
    },
    {
      name: "Anuttarayoga Tantra",
      subtitle: "HIGHEST UNION TANTRA",
      description:
        "Represents the most advanced level of tantra, working directly with subtle body, channels, winds, and innate awareness. It involves special internal practices aimed at complete union of wisdom and compassion, and realization of the nature of mind.",
      duration: "3 hours",
      price: "₹45,000",
      image: "/images/Anuttarayoga-Tantra.jpg",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="font-title text-5xl lg:text-6xl font-bold text-deep-brown mb-16 text-center">
          Tantra Paths
        </h2>

        {/* Grid of Tantra Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tantraTypes.map((tantra, idx) => (
            <div
              key={idx}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Image */}
              <Image
                src={tantra.image}
                alt={tantra.name}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                quality={90}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                {/* Top Section */}
                <div>
                  {/* Title */}
                  <h3 className="font-title text-2xl md:text-3xl font-bold text-white mb-2">
                    {tantra.name}
                  </h3>

                  {/* Subtitle */}
                  <p className="font-nav text-xs font-semibold uppercase tracking-widest text-soft-gold">
                    {tantra.subtitle}
                  </p>
                </div>

                {/* Bottom Section */}
                <div className="space-y-4">
                  {/* Description */}
                  <p className="font-body text-sm md:text-base text-cream/90 leading-relaxed line-clamp-3">
                    {tantra.description}
                  </p>

                  {/* Duration & Price Row */}
                  <div className="flex items-center justify-between gap-4 pt-4 border-t border-cream/30">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs uppercase tracking-wider text-cream/70 font-semibold">
                        Duration
                      </span>
                      <span className="font-nav text-base font-bold text-white">
                        {tantra.duration}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1 items-end">
                      <span className="text-xs uppercase tracking-wider text-cream/70 font-semibold">
                        From
                      </span>
                      <span className="font-title text-xl md:text-2xl font-bold text-soft-gold">
                        {tantra.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
