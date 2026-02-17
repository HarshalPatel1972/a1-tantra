"use client";

import Image from "next/image";
// import { tantricTools } from "@/data/content";

export default function TantraPathsGuides() {
  // Tantra paths with images and pricing
  const tantraPathsWithImages = [
    {
      name: "Shakta Tantra",
      icon: "",
      description:
        "The Divine Feminine path that worships the universal creative power through the goddess. Focuses on the dynamic energy of the cosmos and the sacred feminine principle.",
      image: "/images/shakti-tantra.jpg",
      pricing: [
        { duration: "90 min", price: "₹25,000" },
        { duration: "120 min", price: "₹30,000" },
      ],
    },
    {
      name: "Kundalini Tantra",
      icon: "",
      description:
        "Works with the serpent energy coiled at the base of the spine. Through practices and initiation, awakens this latent force and guides it upward through the energy channels.",
      image: "/images/Kundalini-Tantra.jpg",
      pricing: [
        { duration: "150 min", price: "₹40,000" },
        { duration: "3 hours", price: "₹55,000" },
      ],
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="font-title text-4xl lg:text-5xl font-bold text-deep-brown mb-4 text-center">
          Tantra Paths
        </h2>
        <p className="text-center text-deep-brown/70 text-lg mb-16 max-w-2xl mx-auto">
          Discover the different traditions and approaches to tantric practice
        </p>

        {/* Grid of Tantra Paths with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tantraPathsWithImages.map((path, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-deep-brown/5"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={path.image}
                  alt={path.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={90}
                />
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-title text-3xl font-bold text-deep-brown mb-4 group-hover:text-accent-red transition-colors">
                  {path.name}
                </h3>

                <p className="font-body text-deep-brown/70 leading-relaxed mb-8 flex-grow">
                  {path.description}
                </p>

                {/* Pricing Tiers */}
                <div className="space-y-3 pt-6 border-t border-deep-brown/10">
                  {path.pricing.map((tier, tierIdx) => (
                    <div
                      key={tierIdx}
                      className="flex justify-between items-center"
                    >
                      <span className="text-xs uppercase tracking-widest text-deep-brown/60 font-bold">
                        {tier.duration}
                      </span>
                      <span className="font-title font-bold text-deep-brown text-xl">
                        {tier.price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <button className="w-full py-4 bg-accent-red text-white font-nav font-bold uppercase tracking-widest rounded-xl transition-all duration-300 hover:bg-black shadow-lg">
                    Start Your Path
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools Sidebar - Below Grid on Mobile, Separate on Desktop */}
        {/* <div className="mt-16 pt-16 border-t border-deep-brown/20">
          <h3 className="font-title text-3xl font-bold text-deep-brown mb-8 text-center">
            Tools We Love
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tantricTools.map((tool) => (
              <div
                key={tool.id}
                className="group p-6 bg-white/50 hover:bg-white/80 border border-deep-brown/20 hover:border-accent-red rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <h4 className="font-title text-lg font-bold text-deep-brown mb-2">
                  {tool.name}
                </h4>
                <p className="text-sm text-deep-brown/70 mb-3 leading-relaxed">
                  {tool.description}
                </p>
                <p className="text-accent-red font-bold text-sm">
                  {tool.price}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
