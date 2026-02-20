"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TantraTypesSection() {
  const [selectedTantra, setSelectedTantra] = useState<number | null>(null);

  const tantraTypes = [
    {
      name: "Kriya Tantra",
      subtitle: "ACTION TANTRA",
      description:
        "Emphasizes external practices and ritual action: physical purity, ritual bathing, mantra recitation, offerings, and carefully structured ceremonial conduct. It is about aligning body and behavior with sacred intention.",
      duration: "90 min",
      price: "₹25,000",
      image: "/images/Kriya-Tantra.jpg",
      fullDetails: {
        overview:
          "Kriya Tantra is the foundational path of tantric practice, emphasizing the sanctification of the body and actions through ritual and ceremony. It's ideal for beginners seeking structured, externally-focused spiritual practices.",
        keyFocus: [
          "Physical purification through ritual bathing and cleansing",
          "Mantra recitation with proper intonation and rhythm",
          "Ceremonial offerings and structured devotional practices",
          "Alignment of bodily conduct with spiritual intention",
          "Sacred geometry and ritual arrangement",
        ],
        benefits: [
          "Develops discipline and dedication to practice",
          "Creates a stable foundation for deeper spiritual work",
          "Purifies the body and energy channels",
          "Cultivates respect for sacred traditions",
          "Establishes connection between body and spirit",
        ],
        whotakes:
          "Ideal for beginners, individuals seeking structured practices, those with strong devotional inclinations, and practitioners who benefit from external rituals.",
        prerequisites:
          "Basic understanding of tantric philosophy, openness to ritual, physical mobility for ceremonial practices",
        practiceSchedule:
          "90-minute guided sessions covering theory, ritual instruction, and supervised practice",
      },
    },
    {
      name: "Carya Tantra",
      subtitle: "METHOD TANTRA",
      description:
        "Balances outer ritual with inner meditative stability. Practitioners still perform ceremonies and symbolic actions, but the focus shifts more strongly toward devotion, visualization, and maintaining mindful awareness during activity.",
      duration: "120 min",
      price: "₹30,000",
      image: "/images/Carya-Tantra.jpg",
      fullDetails: {
        overview:
          "Carya Tantra bridges external ritual and internal meditation, combining the disciplined structure of Kriya Tantra with deeper mental cultivation. It's for practitioners ready to integrate inner and outer practices.",
        keyFocus: [
          "Ritual action paired with inner visualization",
          "Devotional focus combined with mindful awareness",
          "Symbolic understanding of ceremonial elements",
          "Integration of mantra with breath awareness",
          "Development of one-pointed concentration during ritual",
        ],
        benefits: [
          "Balances external and internal spiritual development",
          "Deepens concentration and mental stability",
          "Creates coherence between actions and intentions",
          "Accelerates spiritual progress beyond Kriya Tantra",
          "Prepares foundation for advanced practices",
        ],
        whotakes:
          "Practitioners who have mastered Kriya Tantra basics, those seeking to integrate action with awareness, individuals drawn to both ritual and meditation.",
        prerequisites:
          "Completion of Kriya Tantra or equivalent foundational practice, ability to sustain attention during extended sessions",
        practiceSchedule:
          "120-minute sessions with 30 minutes of foundational theory, 50 minutes of guided ritual, and 40 minutes of integrated meditation",
      },
    },
    {
      name: "Yoga Tantra",
      subtitle: "UNION TANTRA",
      description:
        "Centers on internal practice and the union of mind with enlightened qualities. Visualization of deities, mantra, and subtle-energy awareness become primary, with less emphasis on elaborate external ritual and more on continuous meditative presence.",
      duration: "150 min",
      price: "₹40,000",
      image: "/images/Yoga-Tantra.jpg",
      fullDetails: {
        overview:
          "Yoga Tantra focuses on the profound union of ordinary mind with enlightened qualities through internal visualization and subtle-energy work. It marks the transition from action-based to realization-based practice.",
        keyFocus: [
          "Deity visualization and identification with enlightened forms",
          "Subtle energy channel (nadi) and wind (prana) cultivation",
          "Advanced mantra practice with breath integration",
          "Internal heat (tummo) generation and circulation",
          "Direct experience of non-dual awareness",
        ],
        benefits: [
          "Rapid spiritual development through direct realization",
          "Profound transformation of consciousness",
          "Mastery over subtle energy systems",
          "Direct experience of the mind's fundamental nature",
          "Preparation for the highest tantric practices",
        ],
        whotakes:
          "Advanced practitioners with strong meditation foundation, those serious about rapid spiritual transformation, individuals committed to daily practice.",
        prerequisites:
          "Mastery of Carya Tantra, established meditation practice (minimum 1 year), ability to maintain focus for extended periods",
        practiceSchedule:
          "150-minute advanced sessions with 20 minutes of theory, 40 minutes of visualization instruction, and 90 minutes of guided meditation practice",
      },
    },
    {
      name: "Anuttarayoga Tantra",
      subtitle: "HIGHEST UNION TANTRA",
      description:
        "Represents the most advanced level of tantra, working directly with subtle body, channels, winds, and innate awareness. It involves special internal practices aimed at complete union of wisdom and compassion, and realization of the nature of mind.",
      duration: "3 hours",
      price: "₹55,000",
      image: "/images/Anuttarayoga-Tantra.jpg",
      fullDetails: {
        overview:
          "Anuttarayoga Tantra is the pinnacle of tantric practice, offering direct methods for achieving enlightenment through understanding the subtle dimensions of body, mind, and energy. It requires the greatest commitment and preparation.",
        keyFocus: [
          "Transformation of subtle body anatomy and energy patterns",
          "Advanced generation and completion stage practices",
          "Union of emptiness and compassion wisdom",
          "Direct recognition of clear light of mind",
          "Dissolution of karmic imprints at the deepest level",
          "Rapid attainment of enlightenment through integrated practice",
        ],
        benefits: [
          "Ultimate spiritual realization and enlightenment",
          "Complete liberation from suffering and delusion",
          "Perfect union of wisdom and compassionate action",
          "Ability to benefit others at the highest level",
          "Direct understanding of reality's fundamental nature",
        ],
        whotakes:
          "Highly committed practitioners with substantial experience, those with unwavering dedication to enlightenment, advanced meditators ready for the most profound teachings.",
        prerequisites:
          "Mastery of Yoga Tantra, minimum 3+ years serious daily meditation practice, proper guru-student relationship, ethical foundation, intellectual understanding of emptiness",
        practiceSchedule:
          "3-hour intensive sessions with advanced theory, complex visualization practices, subtle energy manipulation, and deep meditation states",
      },
    },
  ];

  return (
    <>
      <section
        id="tantra-paths"
        className="py-2 md:py-3 bg-cream scroll-mt-24 sm:scroll-mt-32"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <h2 className="font-title text-5xl lg:text-6xl font-bold text-deep-brown mb-16 text-center">
            Tantra Paths
          </h2>

          {/* Grid of Tantra Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tantraTypes.map((tantra, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedTantra(idx)}
                className="group relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Background Image */}
                <Image
                  src={tantra.image}
                  alt={tantra.name}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  quality={90}
                />

                {/* Dark Overlay - Enhanced for Text Readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/70 to-black/30"></div>

                {/* Additional Overlay for Better Text Contrast */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/40"></div>

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 z-10">
                  {/* Top Section */}
                  <div>
                    {/* Title - With enhanced visibility */}
                    <h3
                      style={{ mixBlendMode: "lighten" }}
                      className="font-title text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg"
                    >
                      {tantra.name}
                    </h3>

                    {/* Subtitle - Dynamic bright color for maximum contrast */}
                    <p
                      style={{ mixBlendMode: "lighten" }}
                      className="font-nav text-xs font-bold uppercase tracking-widest text-yellow-100 drop-shadow-lg"
                    >
                      {tantra.subtitle}
                    </p>
                  </div>

                  {/* Bottom Section */}
                  <div className="space-y-4">
                    {/* Description */}
                    <p
                      style={{ mixBlendMode: "lighten" }}
                      className="font-body text-sm md:text-base text-yellow-200 leading-relaxed line-clamp-3 drop-shadow-md"
                    >
                      {tantra.description}
                    </p>

                    {/* Duration & Price Row */}
                    <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/30">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs uppercase tracking-wider text-white/80 font-semibold drop-shadow-md">
                          Duration
                        </span>
                        <span className="font-nav text-base font-bold text-white drop-shadow-lg">
                          {tantra.duration}
                        </span>
                      </div>

                      <div className="flex flex-col gap-1 items-end">
                        <span className="text-xs uppercase tracking-wider text-white/80 font-semibold drop-shadow-md">
                          From
                        </span>
                        <span
                          style={{ mixBlendMode: "screen" }}
                          className="font-title text-2xl md:text-3xl font-bold text-yellow-100 drop-shadow-lg"
                        >
                          {tantra.price}
                        </span>
                      </div>
                    </div>

                    {/* Click to Learn More */}
                    <div className="pt-2">
                      <span className="text-xs text-white/70 italic">
                        Click to learn more →
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED MODAL */}
      {selectedTantra !== null && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8"
          onClick={() => setSelectedTantra(null)}
        >
          <div
            className="bg-[#FFF0DF] rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] w-full max-w-4xl max-h-[85vh] overflow-y-auto relative border border-[#3F2F27]/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Clean & Persistent */}
            <button
              onClick={() => setSelectedTantra(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 z-[110] p-3 bg-black/50 hover:bg-[#E44426] backdrop-blur-md rounded-full text-white transition-all hover:rotate-90 group shadow-xl"
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Header - Reduced Height Hero */}
            <div className="relative h-48 sm:h-64 md:h-[320px] w-full">
              <Image
                src={tantraTypes[selectedTantra].image}
                alt={tantraTypes[selectedTantra].name}
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFF0DF] via-[#FFF0DF]/20 to-black/30"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"></div>

              {/* Title Section */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
                <p className="font-nav text-xs sm:text-sm md:text-base uppercase tracking-[0.4em] text-[#E44426] font-black mb-1 filter drop-shadow-sm">
                  {tantraTypes[selectedTantra].subtitle}
                </p>
                <h1 className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3F2F27]">
                  {tantraTypes[selectedTantra].name}
                </h1>
              </div>
            </div>

            {/* Content Area - Optimized for Readability & Scrolling */}
            <div className="bg-[#FFF0DF] p-6 sm:p-8 md:p-10 pt-4 space-y-10 sm:space-y-12">
              {/* Overview Section */}
              <div className="max-w-3xl">
                <h2 className="font-title text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-4">
                  Overview
                </h2>
                <p className="text-lg sm:text-xl text-[#3F2F27] leading-relaxed font-body font-medium italic border-l-4 sm:border-l-8 border-[#E44426] pl-6 sm:pl-8">
                  &quot;{tantraTypes[selectedTantra].fullDetails.overview}&quot;
                </p>
              </div>

              {/* Functional Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                {/* Key Focus Area */}
                <div className="space-y-5">
                  <h2 className="font-title text-xl sm:text-2xl font-bold text-[#3F2F27] flex items-center gap-3">
                    <span className="w-8 h-8 bg-[#3F2F27] text-[#FFF0DF] rounded-full flex items-center justify-center text-sm font-black">01</span>
                    Core Focus
                  </h2>
                  <div className="space-y-3">
                    {tantraTypes[selectedTantra].fullDetails.keyFocus.map((focus, i) => (
                      <div
                        key={i}
                        className="flex gap-3 items-center p-3 bg-white rounded-xl shadow-sm border border-[#3F2F27]/5"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E44426] shrink-0" />
                        <p className="text-sm sm:text-base text-[#3F2F27] font-body font-bold">
                          {focus}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits Area */}
                <div className="space-y-5">
                  <h2 className="font-title text-xl sm:text-2xl font-bold text-[#3F2F27] flex items-center gap-3">
                    <span className="w-8 h-8 bg-[#E44426] text-white rounded-full flex items-center justify-center text-sm font-black">02</span>
                    The Outcome
                  </h2>
                  <div className="space-y-3">
                    {tantraTypes[selectedTantra].fullDetails.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex gap-3 items-center p-3 bg-[#D4AF37]/10 rounded-xl"
                      >
                        <span className="text-xl shrink-0">✨</span>
                        <p className="text-sm sm:text-base text-[#3F2F27] font-body font-bold">
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Practical Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white border border-[#3F2F27]/10 rounded-2xl">
                  <h3 className="font-title text-xl font-bold text-[#3F2F27] mb-3 text-center">Eligibility</h3>
                  <p className="text-center text-[#3F2F27]/70 font-body text-base font-bold">
                    {tantraTypes[selectedTantra].fullDetails.whotakes}
                  </p>
                </div>
                <div className="p-6 bg-white border border-[#3F2F27]/10 rounded-2xl">
                  <h3 className="font-title text-xl font-bold text-[#3F2F27] mb-3 text-center">Prerequisites</h3>
                  <p className="text-center text-[#3F2F27]/70 font-body text-base font-bold">
                    {tantraTypes[selectedTantra].fullDetails.prerequisites}
                  </p>
                </div>
              </div>

              {/* Call to Action Bar - Compact version */}
              <div className="mt-8 bg-[#3F2F27] rounded-3xl p-6 sm:p-10 text-center shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#E44426]/10 rounded-full blur-3xl -mr-24 -mt-24" />
                <div className="relative z-10">
                  <h3 className="font-title text-2xl sm:text-3xl text-[#FFF0DF] font-bold mb-3">
                    Begin your {tantraTypes[selectedTantra].name}
                  </h3>
                  <p className="text-[#FFF0DF]/70 text-base mb-8 max-w-xl mx-auto">
                    {tantraTypes[selectedTantra].fullDetails.practiceSchedule}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-black mb-1">Duration</span>
                      <span className="text-2xl font-black text-[#FFF0DF]">{tantraTypes[selectedTantra].duration}</span>
                    </div>
                    <div className="h-10 w-[1px] bg-[#FFF0DF]/20 hidden sm:block" />
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-black mb-1">Price</span>
                      <span className="text-3xl font-black text-[#E44426]">{tantraTypes[selectedTantra].price}</span>
                    </div>
                    <Link
                      href="#tantra-paths"
                      onClick={() => setSelectedTantra(null)}
                      className="mt-4 sm:mt-0 px-8 py-4 bg-[#E44426] text-white font-black rounded-xl hover:bg-[#E44426]/90 transition-all hover:scale-105 shadow-lg uppercase tracking-widest text-sm"
                    >
                      Book Session
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
