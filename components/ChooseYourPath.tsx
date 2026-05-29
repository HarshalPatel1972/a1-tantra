"use client";

import Link from "next/link";

export default function ChooseYourPath() {
  const paths = [
    {
      title: "Kriya Tantra",
      subtitle: "Action Tantra",
      description: "Focuses on ritual actions, mantra practice, purification disciplines, and structured spiritual practice.",
      duration: "75 Mins",
      type: "In-Person Therapy",
      fee: "Discussed on Call",
      travel: "Coordinated Across India",
      link: "/kriya-tantra",
      icon: "🕉️",
      accent: "#E44426",
    },
    {
      title: "Carya Tantra",
      subtitle: "Method Tantra",
      description: "Balances ritual practice with inner meditative stability through devotion and visualization.",
      duration: "90 Mins",
      type: "In-Person Therapy",
      fee: "Discussed on Call",
      travel: "Coordinated Across India",
      link: "/carya-tantra",
      icon: "🧘",
      accent: "#D4AF37",
    },
    {
      title: "Yoga Tantra",
      subtitle: "Union Tantra",
      description: "Focuses on internal meditative transformation and energy visualization practices.",
      duration: "90 Mins",
      type: "In-Person Therapy",
      fee: "Discussed on Call",
      travel: "Coordinated Across India",
      link: "/yoga-tantra",
      icon: "🕯️",
      accent: "#1D4ED8",
    },
    {
      title: "Anuttarayoga Tantra",
      subtitle: "Highest Union Tantra",
      description: "Focuses on the non-dual union of wisdom and compassion for accelerated spiritual awakening.",
      duration: "120 Mins",
      type: "In-Person Therapy",
      fee: "Discussed on Call",
      travel: "Coordinated Across India",
      link: "/anuttarayoga-tantra",
      icon: "💕",
      accent: "#E44426",
    },
  ];

  return (
    <section id="tantra-paths" className="py-20 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-[100px] -translate-y-1/2 -ml-40 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-soft-gold/10 rounded-full blur-[100px] -mr-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent-red font-nav text-xs font-black uppercase tracking-[0.3em] mb-3">
            Sacred Offerings
          </p>
          <h2 className="font-title text-4xl md:text-5xl font-bold text-deep-brown mb-4 leading-tight">
            The Four Traditional Tantra Services
          </h2>
          <p className="font-body text-deep-brown/60 max-w-xl mx-auto text-base">
            Select the authentic path that resonates with your current spiritual intentions and goals.
          </p>
          <div className="w-20 h-1 bg-accent-red mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {paths.map((p, idx) => (
            <Link 
              key={idx} 
              href={p.link}
              className="group bg-white hover:bg-deep-brown border border-deep-brown/5 hover:border-transparent rounded-2xl p-6 shadow-md hover:shadow-2xl flex flex-col justify-between transition-all duration-500 transform hover:-translate-y-1.5 cursor-pointer relative overflow-hidden min-h-[420px]"
            >
              {/* Subtle top indicator bar */}
              <div 
                className="absolute top-0 left-0 right-0 h-1.5 transition-colors duration-500" 
                style={{ backgroundColor: p.accent }}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cream group-hover:bg-white/10 flex items-center justify-center text-2xl shadow-sm group-hover:rotate-6 transition-all duration-500">
                    {p.icon}
                  </div>
                  <span className="text-[10px] font-black tracking-widest text-accent-red group-hover:text-soft-gold uppercase border border-accent-red/20 group-hover:border-soft-gold/30 px-2 py-1 rounded">
                    {p.subtitle}
                  </span>
                </div>
                
                <h3 className="font-title text-xl font-bold text-deep-brown group-hover:text-white mb-2 transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="font-body text-xs text-deep-brown/60 group-hover:text-white/70 leading-relaxed mb-5">
                  {p.description}
                </p>
                
                {/* Details Section */}
                <div className="space-y-1.5 font-body text-xs font-semibold text-deep-brown/85 group-hover:text-white/90 border-t border-deep-brown/5 group-hover:border-white/5 pt-4">
                  <div className="flex justify-between">
                    <span className="opacity-60">Duration:</span>
                    <span>{p.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-60">Type:</span>
                    <span>{p.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-60">Fee:</span>
                    <span>{p.fee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-60">Travel:</span>
                    <span>{p.travel}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 font-nav text-xs font-black uppercase tracking-wider text-[#E44426] group-hover:text-soft-gold transition-colors duration-300 border-t border-deep-brown/10 group-hover:border-white/10 pt-3">
                <span>Book Consultation</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
