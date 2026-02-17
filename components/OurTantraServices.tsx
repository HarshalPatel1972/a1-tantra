"use client";

import Link from "next/link";
import Image from "next/image";

export default function OurTantraServices() {
  const services = [
    {
      title: "Tantra Sessions",
      description:
        "Explore comprehensive online tantra sessions including meditation, breathwork, and chakra balancing designed to awaken your inner potential.",
      link: "/sessions",
      image: "/images/Tantra-Meditation-Session.jpg",
      icon: "🧘",
    },
    {
      title: "Spiritual Healing",
      description:
        "Experience transformative spiritual healing through energy work and sacred practices to restore your energetic vitality.",
      link: "/therapies",
      image: "/images/Chakra-Balancing-Session.jpg",
      icon: "✨",
    },
    {
      title: "Tantra Advisory",
      description:
        "Expert guidance for couples to deepen intimacy, resolve conflicts, and restore harmony in their sacred partnership.",
      link: "/advisory",
      image: "/images/two-people-meditate.jpg",
      icon: "💕",
    },
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-title text-4xl md:text-5xl font-bold text-deep-brown mb-4 tracking-tight">
            How we can help you
          </h2>
          <div className="w-20 h-1 bg-accent-red mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Link 
              key={idx} 
              href={service.link} 
              className="group bg-deep-brown rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/5"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-deep-brown/80 backdrop-blur-sm p-3 rounded-2xl text-2xl shadow-sm border border-white/10">
                  {service.icon}
                </div>
                {/* Overlay for better text transition */}
                <div className="absolute inset-0 bg-linear-to-t from-deep-brown via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Text Content */}
              <div className="p-8">
                <h3 className="font-title text-2xl font-bold text-cream mb-4 group-hover:text-soft-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-cream/70 leading-relaxed font-body text-base mb-8">
                  {service.description}
                </p>
                <div className="flex items-center text-soft-gold font-bold text-sm uppercase tracking-widest gap-2">
                  <span>Explore Service</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
