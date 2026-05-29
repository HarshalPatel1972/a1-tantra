"use client";

import Link from "next/link";

export default function ChooseYourPath() {
  const paths = [
    {
      title: "Chakra Balancing",
      description: "Balance your energy centers, clear emotional blocks, and restore vital flow.",
      link: "/chakra-healing",
      icon: "🕉️",
      accent: "#E44426",
    },
    {
      title: "Spiritual Healing",
      description: "Experience deep energetic rejuvenation and connection through sacred lineages.",
      link: "/spiritual-healing",
      icon: "✨",
      accent: "#D4AF37",
    },
    {
      title: "Tantra Guidance",
      description: "Authentic lineage-based study and practice of Kriya, Carya, Yoga, and Anuttarayoga.",
      link: "/tantra-guidance",
      icon: "🧘",
      accent: "#1D4ED8",
    },
    {
      title: "Meditation Coaching",
      description: "Calm your nervous system, release stress, and cultivate mental stability.",
      link: "/anxiety-healing",
      icon: "🕯️",
      accent: "#3F2F27",
    },
    {
      title: "Relationship Healing",
      description: "Deepen intimacy, build trust, and harmonize partner energies.",
      link: "/couples-tantra",
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
            Choose Your Path
          </p>
          <h2 className="font-title text-4xl md:text-5xl font-bold text-deep-brown mb-4 leading-tight">
            How Can We Support Your Journey?
          </h2>
          <p className="font-body text-deep-brown/60 max-w-xl mx-auto text-base sm:text-lg">
            Select the focus area that aligns with your current personal, emotional, or spiritual goals.
          </p>
          <div className="w-20 h-1 bg-accent-red mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {paths.map((p, idx) => (
            <Link 
              key={idx} 
              href={p.link}
              className="group bg-white hover:bg-deep-brown border border-deep-brown/5 hover:border-transparent rounded-2xl p-6 shadow-md hover:shadow-2xl flex flex-col justify-between transition-all duration-500 transform hover:-translate-y-1.5 cursor-pointer relative overflow-hidden min-h-[250px]"
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
                <h3 className="font-title text-xl font-bold text-deep-brown group-hover:text-white mb-3 transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="font-body text-sm text-deep-brown/70 group-hover:text-white/80 leading-relaxed transition-colors duration-300">
                  {p.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 font-nav text-xs font-black uppercase tracking-wider text-accent-red group-hover:text-soft-gold transition-colors duration-300">
                <span>Explore Path</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
