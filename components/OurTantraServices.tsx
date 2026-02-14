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
            <Link
              key={idx}
              href={service.link}
              className="group"
            >
              <div className="h-full p-8 bg-white border-2 border-deep-brown/10 hover:border-accent-red rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                {/* Icon */}
                <div className="text-4xl mb-4">{service.icon}</div>

                {/* Title */}
                <h3 className="font-title text-2xl font-bold text-deep-brown mb-4 group-hover:text-accent-red transition">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-deep-brown/80 leading-relaxed text-lg mb-6">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-accent-red font-semibold group-hover:gap-2 gap-0 transition-all">
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
