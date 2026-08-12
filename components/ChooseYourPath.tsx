"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function ChooseYourPath() {
  const [selectedPath, setSelectedPath] = useState<any>(null);

  useEffect(() => {
    if (selectedPath) {
      document.body.classList.add("modal-open");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
    }
    return () => {
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
    };
  }, [selectedPath]);

  const paths = [
    {
      title: "Kaya Tantra",
      subtitle: "Method Tantra",
      description: "Balances ritual practice with inner meditative stability through devotion and visualization.",
      duration: "90 Mins",
      type: "In-Person Therapy",
      originalPrice: "₹45,000",
      price: "₹30,000",
      discount: "33% OFF",
      travel: "Coordinated Across India",
      link: "/carya-tantra",
      icon: "🧘",
      accent: "#D4AF37",
      journeyTitle: "The Session Structure",
      journeySubtitle: "A carefully curated 90-minute session structure designed to transition you from the noise of the external world into a state of profound internal presence.",
      timeline: [
        { min: "2 MIN", title: "Talk Session & Orientation", desc: "The session starts with a concise orientation in which the therapist outlines the approach, techniques, and structure of the session. This initial discussion is designed to create clarity, build trust, and ensure the client feels relaxed and well-informed about what to expect." },
        { min: "30 MIN", title: "Welcome Hug (Standing Marma Touch)", desc: "In this phase, the healing process begins with dry, rhythmic touch techniques performed while the client remains in a standing position. The therapist gently works on specific marma points (vital energy centers) to stimulate energy flow and prepare the body for deeper healing. These precise, non-oiled touches help activate the nervous system and promote grounding." },
        { min: "60 MIN", title: "Therapeutic Oil Therapy", desc: "The session begins with a 60-minute therapeutic oil-based bodywork, where the practitioner applies warm, flowing strokes across the entire body to release tension and awaken natural energy pathways. This phase also includes careful, respectful attention to the hips and intimate energy center, performed with sensitivity, precision, and professional boundaries." }
      ],
      quote: `"The technique is designed to enhance circulation, promote profound relaxation, and cultivate heightened body awareness within a holistic healing framework."`
    },
    {
      title: "Energy Healing",
      subtitle: "Action Tantra",
      description: "Focuses on ritual actions, mantra practice, purification disciplines, and structured spiritual practice.",
      duration: "120 Mins",
      type: "In-Person Therapy",
      originalPrice: "₹70,000",
      price: "₹50,000",
      discount: "29% OFF",
      travel: "Coordinated Across India",
      link: "/kriya-tantra",
      icon: "🕉️",
      accent: "#E44426",
      journeyTitle: "The Session Structure",
      journeySubtitle: "A carefully curated 120-minute session structure designed for deep energetic alignment, physical tension release, and holistic internal healing.",
      timeline: [
        { min: "2 MIN", title: "Talk Session", desc: "The session starts with a concise orientation in which the therapist outlines the approach, techniques, and structure of the session. This initial discussion is designed to create clarity, build trust, and ensure the client feels relaxed and well-informed." },
        { min: "30 MIN", title: "Welcome Hug (Standing Marma Activation)", desc: "Healing begins with dry, rhythmic touch techniques in a standing position. The therapist gently works on specific marma points to stimulate energy flow and prepare the body for deeper healing, promoting grounding and a receptive state." },
        { min: "30 MIN", title: "Breathing & Energy Alignment", desc: "A bridge between physical sensations and subtle energy. Guided breathing techniques oxygenate the body, release stored tension, and calm the nervous system, priming the client for full energetic alignment." },
        { min: "60 MIN", title: "Therapeutic Oil Therapy", desc: "A deep immersion featuring warm, flowing strokes across the entire body. This includes sensitive, professional attention to the hips and energy centers to enhance circulation, relaxation, and heightened body awareness." }
      ]
    },
    {
      title: "Soul Tantra",
      subtitle: "Union Tantra",
      description: "Focuses on internal meditative transformation and energy visualization practices.",
      duration: "180 Mins",
      type: "In-Person Therapy",
      originalPrice: "₹1,20,000",
      price: "₹80,000",
      discount: "33% OFF",
      travel: "Coordinated Across India",
      link: "/yoga-tantra",
      icon: "🕯️",
      accent: "#1D4ED8",
    },
    {
      title: "Divine Tantra",
      subtitle: "Highest Union Tantra",
      description: "Focuses on the non-dual union of wisdom and compassion for accelerated spiritual awakening.",
      duration: "240 Mins",
      type: "In-Person Therapy",
      originalPrice: "₹1,50,000",
      price: "₹1,00,000",
      discount: "33% OFF",
      travel: "Coordinated Across India",
      link: "/anuttarayoga-tantra",
      icon: "💕",
      accent: "#7C3AED",
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
            <div 
              key={idx} 
              className="group bg-white dark:bg-surface-card hover:bg-[#3F2F27] dark:hover:bg-surface-hover border border-deep-brown/5 dark:border-white/5 hover:border-soft-gold/40 rounded-2xl p-6 shadow-md hover:shadow-2xl flex flex-col justify-between transition-colors duration-500 relative overflow-hidden min-h-[420px]"
            >
              {/* Subtle top indicator bar */}
              <div 
                className="absolute top-0 left-0 right-0 h-1.5 transition-colors duration-500" 
                style={{ backgroundColor: p.accent }}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cream group-hover:bg-white/10 flex items-center justify-center text-2xl shadow-sm transition-transform duration-500">
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
                  <div className="flex justify-between items-center">
                    <span className="opacity-60">Price:</span>
                    <span className="flex items-center gap-1.5 font-bold">
                      <span className="line-through text-deep-brown/40 group-hover:text-white/40 text-[10px]">{p.originalPrice}</span>
                      <span className="text-accent-red group-hover:text-soft-gold">{p.price}</span>
                      <span className="text-[9px] bg-accent-red/10 border border-accent-red/20 group-hover:bg-white/10 group-hover:border-white/20 px-1.5 py-0.5 rounded text-accent-red group-hover:text-soft-gold font-black">{p.discount}</span>
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-60">Travel:</span>
                    <span>{p.travel}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2.5 font-nav text-xs font-black uppercase tracking-wider border-t border-deep-brown/10 group-hover:border-white/10 pt-4">
                <Link 
                  href={p.link}
                  className="w-full py-2.5 bg-accent-red hover:bg-[#C73318] text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-xs font-black group/link"
                >
                  <span>Book Consultation</span>
                  <span className="text-xs group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>

                {p.timeline && (
                  <button 
                    onClick={() => setSelectedPath(p)}
                    className="w-full py-2.5 bg-cream/80 group-hover:bg-white/10 text-deep-brown group-hover:text-soft-gold border border-deep-brown/10 group-hover:border-soft-gold/30 rounded-xl hover:bg-soft-gold hover:text-deep-brown transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xs font-bold"
                  >
                    <span>Read More</span>
                    <span className="text-xs">✦</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Light/Dark Theme Responsive Modal Popup for Session Structure */}
      {selectedPath && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto animate-fade-in"
          onClick={() => setSelectedPath(null)}
        >
          <div 
            className="bg-[#F8F4EE] dark:bg-gradient-to-b dark:from-[#251D19] dark:via-[#1E1714] dark:to-[#15100E] border border-deep-brown/15 dark:border-[#D4AF37]/30 rounded-3xl max-w-3xl w-full max-h-[88vh] overflow-y-auto shadow-[0_25px_80px_rgba(0,0,0,0.4)] dark:shadow-[0_25px_80px_rgba(0,0,0,0.9)] relative text-deep-brown dark:text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Glowing Accent */}
            <div className="h-1.5 w-full bg-gradient-to-r from-accent-red via-[#D4AF37] to-accent-red sticky top-0 z-20"></div>

            {/* Modal Header */}
            <div className="sticky top-1.5 bg-[#F8F4EE]/95 dark:bg-[#1E1714]/95 backdrop-blur-md border-b border-deep-brown/10 dark:border-white/10 p-6 md:p-8 flex justify-between items-start z-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-0.5 bg-accent-red/10 border border-accent-red/20 text-accent-red dark:bg-[#D4AF37]/15 dark:border-[#D4AF37]/30 dark:text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.25em] rounded-full">
                    Sacred Session
                  </span>
                  <span className="px-2.5 py-0.5 bg-accent-red/10 border border-accent-red/20 text-accent-red dark:bg-[#E44426]/20 dark:border-[#E44426]/40 dark:text-[#F07460] text-[10px] font-black uppercase tracking-wider rounded-full">
                    {selectedPath.duration}
                  </span>
                </div>
                <h3 className="font-title text-2xl sm:text-3xl md:text-4xl font-bold text-deep-brown dark:text-[#F8F5F2] tracking-wide">
                  {selectedPath.journeyTitle}
                </h3>
                {selectedPath.journeySubtitle && (
                  <p className="font-body text-deep-brown/70 dark:text-white/70 text-xs sm:text-sm mt-2 leading-relaxed max-w-xl">
                    {selectedPath.journeySubtitle}
                  </p>
                )}
              </div>
              <button
                onClick={() => setSelectedPath(null)}
                className="w-10 h-10 rounded-full bg-deep-brown/5 hover:bg-accent-red hover:text-white text-deep-brown/70 border border-deep-brown/10 dark:bg-white/5 dark:hover:bg-[#E44426] dark:hover:text-white dark:text-white/70 dark:border-white/10 transition-all flex items-center justify-center cursor-pointer shrink-0 ml-4"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Clean Structured Phase Cards */}
            <div className="p-6 md:p-8 space-y-4">
              {selectedPath.timeline?.map((step: any, idx: number) => (
                <div 
                  key={idx} 
                  className="bg-white dark:bg-white/[0.03] hover:bg-cream dark:hover:bg-white/[0.06] border border-deep-brown/10 dark:border-white/10 hover:border-accent-red/40 dark:hover:border-[#D4AF37]/40 p-5 rounded-2xl transition-all duration-300 shadow-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2.5 border-b border-deep-brown/10 dark:border-white/10">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-full bg-accent-red/10 border border-accent-red/30 text-accent-red dark:bg-[#D4AF37]/15 dark:border-[#D4AF37]/40 dark:text-[#D4AF37] font-bold text-xs flex items-center justify-center font-nav shrink-0">
                        {idx + 1}
                      </span>
                      <h4 className="font-title text-base sm:text-lg md:text-xl font-bold text-deep-brown dark:text-[#F8F5F2]">
                        {step.title}
                      </h4>
                    </div>
                    <span className="px-3 py-0.5 bg-gradient-to-r from-accent-red to-[#D4AF37] text-white text-[11px] font-black rounded-lg shadow-xs tracking-wider uppercase font-nav">
                      {step.min}
                    </span>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-deep-brown/80 dark:text-white/80 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              ))}

              {/* Quote / Essence Card */}
              {selectedPath.quote && (
                <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-cream dark:bg-gradient-to-r dark:from-[#D4AF37]/10 dark:via-white/[0.04] dark:to-[#D4AF37]/10 border border-accent-red/20 dark:border-[#D4AF37]/30 text-center relative overflow-hidden">
                  <div className="text-accent-red dark:text-[#D4AF37] text-3xl font-serif leading-none mb-1 opacity-50">“</div>
                  <p className="font-body italic text-deep-brown/90 dark:text-white/90 text-xs sm:text-sm md:text-base font-medium px-2 leading-relaxed">
                    {selectedPath.quote}
                  </p>
                </div>
              )}
            </div>

            {/* Modal Sticky Footer */}
            <div className="sticky bottom-0 bg-[#EFEAE2]/95 dark:bg-[#171210]/95 backdrop-blur-md p-4 sm:p-6 border-t border-deep-brown/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 z-10 rounded-b-3xl">
              <div className="text-xs text-deep-brown/70 dark:text-white/60 flex items-center gap-3">
                <span>Investment: <strong className="text-accent-red dark:text-soft-gold text-sm font-bold">{selectedPath.price}</strong></span>
                <span className="opacity-40">•</span>
                <span>Duration: <strong className="text-deep-brown dark:text-white text-xs font-semibold">{selectedPath.duration}</strong></span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedPath(null)}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl border border-deep-brown/20 text-deep-brown hover:bg-deep-brown/5 dark:border-white/20 dark:text-white/80 dark:hover:text-white dark:hover:bg-white/10 text-xs font-bold transition cursor-pointer text-center"
                >
                  Close
                </button>
                <Link
                  href={selectedPath.link}
                  onClick={() => setSelectedPath(null)}
                  className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-accent-red text-white hover:bg-[#C73318] text-xs font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <span>Book Consultation</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
