"use client";

import Image from "next/image";
import { tantricTools } from "@/data/content";

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
        { duration: "90 min", price: "₹20,000" },
        { duration: "120 min", price: "₹25,000" },
      ],
    },
    {
      name: "Kundalini Tantra",
      icon: "",
      description:
        "Works with the serpent energy coiled at the base of the spine. Through practices and initiation, awakens this latent force and guides it upward through the energy channels.",
      image: "/images/Kundalini-Tantra.jpg",
      pricing: [
        { duration: "120 min", price: "₹25,000" },
        { duration: "150 min", price: "₹35,000" },
      ],
    },
    {
      name: "Kaula Tantra",
      icon: "",
      description:
        "The 'family path' that embraces household life and partnerships. Practices are done with a partner or within spiritual communities, celebrating the sacred in everyday relationships.",
      image: "/images/Kaula-Tantra.jpg",
      pricing: [
        { duration: "120 min", price: "₹25,000" },
        { duration: "3 hours", price: "₹45,000" },
      ],
    },
    {
      name: "Tibetan Tantra",
      icon: "",
      description:
        "The Buddhist tantric tradition emphasizing visualization of deities and the union of wisdom and compassion. Highly systematic and deeply connected to monastic practice.",
      image: "/images/Tibetan-Tantra.jpg",
      pricing: [
        { duration: "90 min", price: "₹20,000" },
        { duration: "150 min", price: "₹35,000" },
      ],
    },
    {
      name: "Right-Hand Tantra",
      icon: "",
      description:
        "The traditional, conservative approach emphasizing ethical conduct and alignment with societal norms. Uses internal visualization and meditation within socially acceptable frameworks.",
      image: "/images/Right-Hand-Tantra.jpg",
      pricing: [
        { duration: "90 min", price: "₹20,000" },
        { duration: "120 min", price: "₹25,000" },
      ],
    },
    {
      name: "Left-Hand Tantra",
      icon: "",
      description:
        "The transgressive path that deliberately works with taboo practices to transcend conventional limits. Uses unconventional methods to break through spiritual barriers and ego-attachments.",
      image: "/images/Left-Hand-Tantra.jpg",
      pricing: [
        { duration: "150 min", price: "₹35,000" },
        { duration: "3 hours", price: "₹45,000" },
      ],
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="font-title text-4xl lg:text-5xl font-bold text-deep-brown mb-4 text-center">
          Tantra Paths
        </h2>
        <p className="text-center text-deep-brown/70 text-lg mb-16 max-w-2xl mx-auto">
          Discover the different traditions and approaches to tantric practice
        </p>

        {/* Grid of Tantra Paths with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tantraPathsWithImages.map((path, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-96"
            >
              {/* Background Image */}
              <Image
                src={path.image}
                alt={path.name}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                quality={90}
              />

              {/* Gradient Overlay - Enhanced for Text Readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/70 to-black/30"></div>

              {/* Additional Overlay for Better Text Contrast */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/40"></div>

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                {/* Top: Title */}
                <div>
                  <h3 style={{ mixBlendMode: 'lighten' }} className="font-title text-3xl font-bold text-white drop-shadow-lg">
                    {path.name}
                  </h3>
                </div>

                {/* Bottom: Description and Pricing */}
                <div className="space-y-4">
                  {/* Description */}
                  <p style={{ mixBlendMode: 'lighten' }} className="font-body text-sm text-white leading-relaxed line-clamp-2 drop-shadow-md">
                    {path.description}
                  </p>

                  {/* Pricing Tiers */}
                  <div className="space-y-2 pt-3 border-t border-white/30">
                    {path.pricing.map((tier, tierIdx) => (
                      <div
                        key={tierIdx}
                        className="flex justify-between items-center"
                      >
                        <span className="text-xs uppercase tracking-wider text-white/80 font-semibold drop-shadow-md">
                          {tier.duration}
                        </span>
                        <span style={{ mixBlendMode: 'screen' }} className="font-title font-bold text-yellow-100 text-lg drop-shadow-lg">
                          {tier.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover CTA */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                <button className="bg-accent-red hover:bg-accent-red/90 text-white font-bold py-3 px-8 rounded-full transition-all transform scale-75 group-hover:scale-100">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tools Sidebar - Below Grid on Mobile, Separate on Desktop */}
        <div className="mt-16 pt-16 border-t border-deep-brown/20">
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
        </div>
      </div>
    </section>
  );
}
