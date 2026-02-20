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
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-title text-4xl md:text-5xl font-bold text-deep-brown mb-4 tracking-tight">
            How we can help you
          </h2>
          <div className="w-20 h-1 bg-accent-red mx-auto rounded-full"></div>
        </div>

        <div className="space-y-40">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 relative group px-6 lg:px-0">
                <div className="absolute -inset-4 border border-accent-red/15 rounded-[3rem] -z-10 transition-all duration-700 group-hover:-inset-2 group-hover:border-accent-red/25" />
                
                <div className="relative aspect-[4/5] md:aspect-[16/9] lg:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-[0_30px_60px_-15px_rgba(63,47,39,0.3)]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover grayscale-[15%] transition-all duration-700 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/35 via-transparent to-transparent" />
                </div>

                {/* Floating Icon Badge */}
                <div className="absolute -bottom-6 right-4 md:right-12 w-20 h-20 bg-white shadow-xl rounded-2xl flex items-center justify-center text-4xl transition-transform duration-500 group-hover:-translate-y-2">
                  {service.icon}
                </div>
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-4">
                <div className="mb-6 flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-accent-red" />
                  <span className="text-[10px] font-bold text-accent-red uppercase tracking-[0.4em]">
                    Exclusive Practice
                  </span>
                </div>

                <h3 className="font-title text-4xl md:text-6xl font-bold text-deep-brown mb-8 leading-tight">
                  {service.title}
                </h3>

                <p className="text-xl text-deep-brown/60 leading-relaxed font-body mb-10 max-w-xl">
                  {service.description}
                </p>

                <Link 
                  href={service.link}
                  className="group/btn relative inline-flex items-center gap-3 px-8 py-4 font-nav font-bold text-xs uppercase tracking-[0.2em] overflow-hidden bg-accent-red text-cream"
                >
                  <span className="relative z-10">Explore Service</span>
                  <svg className="relative z-10 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out bg-deep-brown" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
