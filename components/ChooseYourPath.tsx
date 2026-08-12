"use client";

import Link from "next/link";
import { useState } from "react";

export default function ChooseYourPath() {
  const [selectedPath, setSelectedPath] = useState<any>(null);

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
      journeySubtitle: "A carefully curated 90-minute journey designed to transition you from the noise of the external world into a state of profound internal presence.",
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
      journeyTitle: "The 120-Minute Journey",
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
              className="group bg-white dark:bg-surface-card hover:bg-[#3F2F27] dark:hover:bg-surface-hover border border-deep-brown/5 dark:border-white/5 hover:border-transparent rounded-2xl p-6 shadow-md hover:shadow-2xl flex flex-col justify-between transition-all duration-500 transform hover:-translate-y-1.5 relative overflow-hidden min-h-[420px]"
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

              <div className="mt-6 flex flex-col gap-3 font-nav text-xs font-black uppercase tracking-wider text-[#E44426] group-hover:text-soft-gold transition-colors duration-300 border-t border-deep-brown/10 group-hover:border-white/10 pt-4">
                {p.timeline && (
                  <button 
                    onClick={() => setSelectedPath(p)}
                    className="w-full py-2 bg-cream group-hover:bg-white/5 text-deep-brown group-hover:text-white border border-deep-brown/10 group-hover:border-white/10 rounded-lg hover:border-accent-red transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Read More</span>
                  </button>
                )}
                
                <Link 
                  href={p.link}
                  className={`w-full flex items-center justify-between group/link hover:text-deep-brown dark:hover:text-white ${!p.timeline ? 'mt-2' : ''}`}
                >
                  <span>Book Consultation</span>
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup for Session Structure */}
      {selectedPath && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
          onClick={() => setSelectedPath(null)}
        >
          <div 
            className="bg-[#EBE5DB] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#EBE5DB] border-b border-deep-brown/10 p-6 md:p-8 flex justify-between items-start z-10">
              <div className="text-center w-full">
                <h3 className="font-title text-3xl md:text-4xl text-[#4A3C38] font-normal mb-3">
                  {selectedPath.journeyTitle}
                </h3>
                {selectedPath.journeySubtitle && (
                  <p className="font-body text-[#5F534F] max-w-2xl mx-auto text-sm">
                    {selectedPath.journeySubtitle}
                  </p>
                )}
              </div>
              <button
                onClick={() => setSelectedPath(null)}
                className="absolute right-6 top-6 w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 text-[#4A3C38] flex items-center justify-center transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Timeline Body */}
            <div className="p-6 md:p-10">
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-10 before:-translate-x-px md:before:ml-[5.5rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#B3A9A3] before:to-transparent">
                {selectedPath.timeline?.map((step: any, idx: number) => (
                  <div key={idx} className="relative flex items-start gap-6 md:gap-10">
                    <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#523F45] text-[#EFEAE5] flex flex-col items-center justify-center z-10 shadow-lg border-4 border-[#EBE5DB]">
                      <span className="font-bold text-xl md:text-2xl leading-none">{step.min.split(" ")[0]}</span>
                      <span className="text-xs uppercase tracking-widest font-semibold">{step.min.split(" ")[1]}</span>
                    </div>
                    <div className="pt-2 md:pt-4 flex-1">
                      <h4 className="text-xl md:text-2xl text-[#4A3C38] font-normal mb-2">
                        {step.title}
                      </h4>
                      <p className="font-body text-[#5F534F] text-sm md:text-base leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Optional Quote */}
              {selectedPath.quote && (
                <div className="mt-12 p-6 md:p-8 bg-[#DFD9CE] rounded-xl border border-[#C5BFB5]">
                  <p className="font-body italic text-[#4A3C38] text-center text-sm md:text-base font-medium">
                    {selectedPath.quote}
                  </p>
                </div>
              )}
            </div>
            
            {/* Modal Footer */}
            <div className="p-6 border-t border-deep-brown/10 bg-[#DFD9CE] flex justify-center rounded-b-3xl">
               <Link 
                  href={selectedPath.link}
                  className="px-8 py-3 bg-[#523F45] text-[#EBE5DB] font-bold rounded-lg hover:bg-black transition-colors"
                >
                  Book This Session
                </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
