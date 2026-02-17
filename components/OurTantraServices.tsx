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
      {/* Keyframe for Ken Burns drift */}
      <style jsx>{`
        @keyframes kenburns {
          0% { transform: scale(1.05) translate(0, 0); }
          50% { transform: scale(1.08) translate(-1%, -1%); }
          100% { transform: scale(1.05) translate(0, 0); }
        }
        .img-kenburns {
          animation: kenburns 18s ease-in-out infinite;
        }
        .group:hover .img-kenburns {
          animation-play-state: paused;
          transform: scale(1) translate(0, 0);
          transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
              {/* Image — cinematic reveal with warm shift */}
              <div className="w-full lg:w-1/2 relative group px-6 lg:px-0">
                {/* Decorative frame — subtle rotation on hover */}
                <div className="absolute -inset-4 border border-accent-red/15 rounded-[3rem] -z-10 transition-all duration-1000 ease-out group-hover:-inset-2 group-hover:border-accent-red/30 group-hover:rotate-[0.5deg]" />
                
                <div className="relative aspect-[4/5] md:aspect-[16/9] lg:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl group-hover:shadow-[0_25px_60px_-12px_rgba(63,47,39,0.35)] transition-shadow duration-700">
                  {/* Image with Ken Burns drift — settles to rest on hover */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover img-kenburns"
                  />
                  {/* Warm cinematic overlay — shifts tone on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/50 via-deep-brown/5 to-transparent transition-all duration-1000 group-hover:from-accent-red/15 group-hover:via-transparent group-hover:to-transparent" />
                  {/* Light flare on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                </div>

                {/* Floating Icon Badge — elastic spring on hover */}
                <div className="absolute -bottom-6 -right-0 md:right-12 w-20 h-20 bg-white shadow-xl rounded-2xl flex items-center justify-center text-4xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-3 group-hover:rotate-[-4deg] group-hover:shadow-2xl">
                  {service.icon}
                </div>
              </div>

              {/* Text Segment */}
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

                {/* Editorial luxury link — underline draw + arrow reveal */}
                <Link 
                  href={service.link}
                  className="group/btn inline-flex items-center gap-2"
                >
                  <span className="relative font-nav font-bold text-xs uppercase tracking-[0.25em] text-deep-brown">
                    Explore Service
                    <span className="absolute left-0 -bottom-1.5 h-[2px] w-0 bg-accent-red transition-all duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover/btn:w-full" />
                  </span>
                  <svg 
                    className="w-4 h-4 text-accent-red -translate-x-2 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100 transition-all duration-500 ease-out" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
