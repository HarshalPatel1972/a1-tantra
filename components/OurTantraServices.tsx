"use client";

import Link from "next/link";

export default function OurTantraServices() {
  const services = [
    {
      title: "Tantra Services in India",
      description:
        "Explore our comprehensive online tantra sessions including meditation, breathwork, chakra balancing, and sound healing. Each session is designed to awaken your inner potential and guide you toward spiritual transformation.",
      link: "/sessions",
      icon: "🧘",
    },
    {
      title: "Online Spiritual Healing",
      description:
        "Experience transformative spiritual healing through tantra therapy, energy work, and sacred practices. Our healing sessions address emotional imbalances, restore energetic vitality, and support your path to wholeness.",
      link: "/therapies",
      icon: "✨",
    },
    {
      title: "Relationship Tantra Consultation",
      description:
        "Deepen intimacy, resolve conflicts, and restore harmony in your relationships through expert tantra consultation. Our experienced advisors guide couples toward greater connection, understanding, and sacred partnership.",
      link: "/advisory",
      icon: "💕",
    },
  ];

  return (
    <section className="py-4 md:py-6 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-title text-4xl md:text-5xl font-bold text-deep-brown mb-4">
            Our Tantra Services
          </h2>
          <p className="text-lg text-deep-brown/80 max-w-3xl mx-auto">
            Discover our range of authentic tantric services designed to guide
            you toward healing, growth, and spiritual awakening.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Link key={idx} href={service.link} className="group">
              <div className="relative h-full p-10 bg-white border border-deep-brown/5 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Accent Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-stone-50 rounded-bl-full -mr-16 -mt-16 group-hover:bg-accent-red/5 transition-colors duration-500"></div>
                
                {/* Icon Container */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cream rounded-2xl text-3xl mb-8 group-hover:scale-110 group-hover:bg-accent-red/10 transition-all duration-500">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-title text-2xl font-bold text-deep-brown mb-5 group-hover:text-accent-red transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-deep-brown/70 leading-relaxed text-base mb-8 font-body">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-accent-red font-bold text-sm tracking-widest uppercase gap-2 transition-all">
                  <span>Explore Now</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
