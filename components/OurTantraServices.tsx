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
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-deep-brown/5"
            >
              {/* Image Header */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg text-2xl shadow-sm">
                  {service.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8">
                <h3 className="font-title text-2xl font-bold text-deep-brown mb-3 group-hover:text-accent-red transition-colors">
                  {service.title}
                </h3>
                <p className="text-deep-brown/70 leading-relaxed font-body text-base mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-accent-red font-bold text-sm uppercase tracking-widest gap-2">
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
