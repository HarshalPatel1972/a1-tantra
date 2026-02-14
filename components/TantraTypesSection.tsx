"use client";

import { useState } from "react";
import Image from "next/image";

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
          className="fixed top-0 left-0 right-0 bottom-0 bg-black/60 backdrop-blur-sm z-40 pt-32 sm:pt-40 flex items-start justify-center overflow-y-auto p-3 sm:p-4"
          onClick={() => setSelectedTantra(null)}
        >
          <div
            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-4xl overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - On the image */}
            <button
              onClick={() => setSelectedTantra(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white bg-accent-red hover:bg-accent-red/80 rounded-full p-3 sm:p-4 transition-all duration-300 z-50 shadow-2xl"
              aria-label="Close modal"
            >
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 stroke-current"
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

            {/* Header with Image - Responsive height */}
            <div className="relative h-48 sm:h-64 md:h-96">
              <Image
                src={tantraTypes[selectedTantra].image}
                alt={tantraTypes[selectedTantra].name}
                fill
                className="object-cover object-center"
                quality={95}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Title Over Image - Responsive text */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                <h1 className="font-title text-2xl sm:text-3xl md:text-5xl font-bold mb-1 sm:mb-2">
                  {tantraTypes[selectedTantra].name}
                </h1>
                <p className="font-nav text-xs sm:text-sm md:text-lg uppercase tracking-widest text-soft-gold">
                  {tantraTypes[selectedTantra].subtitle}
                </p>
              </div>
            </div>

            {/* Content - Responsive padding */}
            <div className="p-4 sm:p-6 md:p-12 space-y-6 sm:space-y-8">
              {/* Overview */}
              <div>
                <h2 className="font-title text-xl sm:text-2xl md:text-3xl font-bold text-deep-brown mb-3 sm:mb-4">
                  Overview
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-deep-brown/80 leading-relaxed">
                  {tantraTypes[selectedTantra].fullDetails.overview}
                </p>
              </div>

              {/* Key Focus */}
              <div>
                <h2 className="font-title text-xl sm:text-2xl md:text-3xl font-bold text-deep-brown mb-3 sm:mb-4">
                  Key Focus Areas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                  {tantraTypes[selectedTantra].fullDetails.keyFocus.map(
                    (focus, i) => (
                      <div
                        key={i}
                        className="flex gap-2 sm:gap-3 items-start p-3 sm:p-4 bg-cream rounded-lg border-l-4 border-accent-red"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-accent-red shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-xs sm:text-sm md:text-base text-deep-brown font-body">
                          {focus}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="font-title text-xl sm:text-2xl md:text-3xl font-bold text-deep-brown mb-3 sm:mb-4">
                  Key Benefits
                </h2>
                <div className="space-y-2 sm:space-y-3">
                  {tantraTypes[selectedTantra].fullDetails.benefits.map(
                    (benefit, i) => (
                      <div key={i} className="flex gap-2 sm:gap-3 items-start">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-soft-gold shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <p className="text-xs sm:text-sm md:text-base text-deep-brown/80 font-body">
                          {benefit}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Who Should Take This */}
              <div className="bg-soft-gold/10 border-l-4 border-soft-gold p-4 sm:p-6 rounded-lg">
                <h2 className="font-title text-lg sm:text-xl font-bold text-deep-brown mb-2 sm:mb-3">
                  Who Should Take This Path
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-deep-brown/80 font-body leading-relaxed">
                  {tantraTypes[selectedTantra].fullDetails.whotakes}
                </p>
              </div>

              {/* Prerequisites */}
              <div className="bg-accent-red/10 border-l-4 border-accent-red p-4 sm:p-6 rounded-lg">
                <h2 className="font-title text-lg sm:text-xl font-bold text-deep-brown mb-2 sm:mb-3">
                  Prerequisites
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-deep-brown/80 font-body leading-relaxed">
                  {tantraTypes[selectedTantra].fullDetails.prerequisites}
                </p>
              </div>

              {/* Session Details */}
              <div>
                <h2 className="font-title text-xl sm:text-2xl md:text-3xl font-bold text-deep-brown mb-3 sm:mb-4">
                  Session Details
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-deep-brown/80 font-body mb-4 sm:mb-6 leading-relaxed">
                  {tantraTypes[selectedTantra].fullDetails.practiceSchedule}
                </p>

                {/* Duration & Price Display - Responsive grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                  <div className="bg-cream p-3 sm:p-6 rounded-lg text-center border-2 border-deep-brown/20">
                    <span className="text-xs uppercase text-deep-brown/60 font-semibold block">
                      Duration
                    </span>
                    <p className="text-lg sm:text-2xl md:text-3xl font-bold text-deep-brown mt-1 sm:mt-2">
                      {tantraTypes[selectedTantra].duration}
                    </p>
                  </div>
                  <div className="bg-cream p-3 sm:p-6 rounded-lg text-center border-2 border-deep-brown/20">
                    <span className="text-xs uppercase text-deep-brown/60 font-semibold block">
                      From
                    </span>
                    <p className="text-lg sm:text-2xl md:text-3xl font-bold text-accent-red mt-1 sm:mt-2">
                      {tantraTypes[selectedTantra].price}
                    </p>
                  </div>
                  <div className="bg-deep-brown p-3 sm:p-6 rounded-lg text-center col-span-2 sm:col-span-1">
                    <a
                      href="/book-session"
                      className="inline-block w-full text-center px-4 sm:px-6 py-2 sm:py-3 bg-accent-red text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-accent-red/90 transition-all duration-300"
                    >
                      Book Now
                    </a>
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
