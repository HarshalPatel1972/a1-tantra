"use client";

import Link from "next/link";
import Image from "next/image";

export default function OurTantraServices() {
  const services = [
    {
      title: "Tantra Sessions",
      location: "India & Online",
      description:
        "Comprehensive sessions including meditation, breathwork, and chakra balancing designed to awaken your inner potential.",
      link: "/sessions",
      image: "/images/Tantra-Meditation-Session.jpg",
      tag: "CORE PRACTICE",
    },
    {
      title: "Spiritual Healing",
      location: "Transformative Therapy",
      description:
        "Restore energetic vitality and emotional balance through sacred practices and expert energy work.",
      link: "/therapies",
      image: "/images/Chakra-Balancing-Session.jpg",
      tag: "THERAPEUTIC",
    },
    {
      title: "Relationship Tantra",
      location: "Sacred Partnership",
      description:
        "Deepen intimacy and resolve conflicts through expert guidance for couples to restore harmony.",
      link: "/advisory",
      image: "/images/two-people-meditate.jpg",
      tag: "CONNECTION",
    },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-title text-5xl md:text-7xl font-bold text-deep-brown mb-6">
              Our Tantra <span className="text-accent-red italic">Services</span>
            </h2>
            <p className="text-xl text-deep-brown/80 font-body leading-relaxed">
              Authentic paths designed for modern seekers, merging ancient wisdom with 
              contemporary understanding for profound transformation.
            </p>
          </div>
          <Link 
            href="/start-journey" 
            className="inline-flex items-center gap-2 font-nav font-bold uppercase tracking-widest text-accent-red hover:text-deep-brown transition-colors mb-2"
          >
            All Offerings <span className="text-2xl">→</span>
          </Link>
        </div>

        {/* Services Grid - New Look */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <Link key={idx} href={service.link} className="group relative block h-[600px] overflow-hidden rounded-[2.5rem] shadow-2xl">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/90 group-hover:from-black/40 transition-colors duration-500"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full flex flex-col justify-end p-10">
                <div className="mb-6 transform group-hover:-translate-y-4 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-accent-red text-cream text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-4">
                    {service.tag}
                  </span>
                  <h3 className="font-title text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/60 font-nav text-xs uppercase tracking-widest mb-6">
                    {service.location}
                  </p>
                  <p className="text-white/80 font-body text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <span className="text-white font-nav font-bold text-sm tracking-widest uppercase">Begin Path</span>
                  <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-deep-brown transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
