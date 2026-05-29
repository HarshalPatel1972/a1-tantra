"use client";

import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Book Free Discovery Call",
      description: "Submit our 1-minute form. We will coordinate on WhatsApp to schedule your free 15-minute call.",
      icon: "📅",
    },
    {
      num: "02",
      title: "Discuss Your Goals",
      description: "Speak directly with your guide to clarify your emotional blockages, energy issues, and goals.",
      icon: "💬",
    },
    {
      num: "03",
      title: "Begin Personalized Sessions",
      description: "Embark on structured, confidential sessions tailored strictly to your lineage-based healing path.",
      icon: "🕉️",
    },
  ];

  return (
    <section className="py-20 bg-deep-brown text-cream relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-soft-gold/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-soft-gold font-nav text-xs font-black uppercase tracking-[0.3em] mb-3">
            Simple 3 Steps
          </p>
          <h2 className="font-title text-4xl md:text-5xl font-bold text-cream mb-4 leading-tight">
            How It Works
          </h2>
          <p className="font-body text-cream/60 max-w-xl mx-auto text-base">
            No complexity. No confusion. A transparent, safe framework for your personal transformation.
          </p>
          <div className="w-20 h-1 bg-soft-gold mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/3 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-soft-gold/10 via-soft-gold/30 to-soft-gold/10 -z-10" />

          {steps.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4 group">
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-full bg-white/5 border border-soft-gold/30 flex items-center justify-center text-3xl mb-6 relative group-hover:scale-110 group-hover:border-soft-gold transition-all duration-300 shadow-lg">
                <span>{s.icon}</span>
                {/* Number Badge */}
                <span className="absolute -top-2 -right-2 bg-[#E44426] text-white text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center font-nav shadow-md">
                  {s.num}
                </span>
              </div>

              <h3 className="font-title text-xl font-bold text-cream mb-3 group-hover:text-soft-gold transition-colors duration-300">
                {s.title}
              </h3>
              
              <p className="font-body text-sm text-cream/70 leading-relaxed max-w-xs">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-16">
          <a
            href="#lead-form"
            className="inline-block px-10 py-5 bg-[#E44426] hover:bg-white text-white hover:text-[#E44426] font-nav font-black text-xs uppercase tracking-[0.2em] rounded-xl border-2 border-[#E44426] shadow-xl transition-all cursor-pointer active:scale-95"
          >
            Schedule My Free Call Now →
          </a>
        </div>
      </div>
    </section>
  );
}
