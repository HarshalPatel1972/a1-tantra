"use client";

import Link from "next/link";

export default function ChooseYourPath() {
  const paths = [
    {
      title: "Chakra Balancing",
      forList: ["Emotional blocks", "Energy imbalance", "Mental fatigue"],
      duration: "75 Mins",
      link: "/chakra-balancing",
      icon: "🕉️",
      accent: "#E44426",
    },
    {
      title: "Tantra Guidance",
      forList: ["Spiritual clarity", "Path blockage", "Lineage study"],
      duration: "90 Mins",
      link: "/tantra-guidance",
      icon: "🧘",
      accent: "#D4AF37",
    },
    {
      title: "Meditation Coaching",
      forList: ["Anxiety release", "Racing mind", "Nervous system calm"],
      duration: "60 Mins",
      link: "/meditation-coaching",
      icon: "🕯️",
      accent: "#1D4ED8",
    },
    {
      title: "Relationship Healing",
      forList: ["Intimacy growth", "Trust rebuilding", "Partner harmony"],
      duration: "90 Mins",
      link: "/relationship-healing",
      icon: "💕",
      accent: "#E44426",
    },
  ];

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-[100px] -translate-y-1/2 -ml-40 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-soft-gold/10 rounded-full blur-[100px] -mr-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent-red font-nav text-xs font-black uppercase tracking-[0.3em] mb-3">
            Choose Your Therapy
          </p>
          <h2 className="font-title text-4xl md:text-5xl font-bold text-deep-brown mb-4 leading-tight">
            How Can We Support Your Journey?
          </h2>
          <p className="font-body text-deep-brown/60 max-w-xl mx-auto text-base">
            Select the Focus Area that aligns with your current personal, emotional, or spiritual goals.
          </p>
          <div className="w-20 h-1 bg-accent-red mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {paths.map((p, idx) => (
            <Link 
              key={idx} 
              href={p.link}
              className="group bg-white hover:bg-deep-brown border border-deep-brown/5 hover:border-transparent rounded-2xl p-6 shadow-md hover:shadow-2xl flex flex-col justify-between transition-all duration-500 transform hover:-translate-y-1.5 cursor-pointer relative overflow-hidden min-h-[300px]"
            >
              {/* Subtle top indicator bar */}
              <div 
                className="absolute top-0 left-0 right-0 h-1.5 transition-colors duration-500" 
                style={{ backgroundColor: p.accent }}
              />

              <div>
                <div className="w-12 h-12 rounded-xl bg-cream group-hover:bg-white/10 flex items-center justify-center text-2xl mb-5 shadow-sm group-hover:rotate-6 transition-all duration-500">
                  {p.icon}
                </div>
                <h3 className="font-title text-xl font-bold text-deep-brown group-hover:text-white mb-4 transition-colors duration-300">
                  {p.title}
                </h3>
                
                {/* For List */}
                <div className="mb-4">
                  <span className="text-[10px] uppercase font-black tracking-wider text-deep-brown/40 group-hover:text-white/40 block mb-1.5">For:</span>
                  <ul className="space-y-1 text-deep-brown/70 group-hover:text-white/80 font-body text-sm font-semibold">
                    {p.forList.map((item, index) => (
                      <li key={index} className="flex items-center gap-1.5">
                        <span className="text-accent-red group-hover:text-soft-gold">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                {/* Duration */}
                <div className="border-t border-deep-brown/10 group-hover:border-white/10 pt-3 mb-4 flex items-center justify-between text-xs font-bold text-deep-brown/50 group-hover:text-white/50 uppercase tracking-wider">
                  <span>Duration</span>
                  <span className="text-deep-brown group-hover:text-[#F8F5F2]">{p.duration}</span>
                </div>

                <div className="flex items-center gap-2 font-nav text-xs font-black uppercase tracking-wider text-[#E44426] group-hover:text-soft-gold transition-colors duration-300">
                  <span>Book Consultation</span>
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
