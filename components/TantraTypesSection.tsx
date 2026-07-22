"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

export default function TantraTypesSection() {
  const [selectedTantra, setSelectedTantra] = useState<number | null>(null);
  const { isDark } = useTheme();

  const modalThemeStyle = {
    "--color-cream": isDark ? "#1C1614" : "#FFF0DF",
    "--color-deep-brown": isDark ? "#E8DDD4" : "#3F2F27",
    "--color-accent-red": isDark ? "#F07460" : "#E44426",
    "--color-soft-gold": isDark ? "#E8C85A" : "#D4AF37",
    "--color-surface-card": isDark ? "#2A221E" : "#FFFFFF",
  } as CSSProperties;

  const tantraTypes = [
    {
      name: "Kaya Tantra",
      subtitle: "METHOD TANTRA",
      description:
        "Balances outer ritual with inner meditative stability. Practitioners still perform ceremonies and symbolic actions, but the focus shifts more strongly toward devotion, visualization, and maintaining mindful awareness during activity.",
      duration: "90 min",
      price: "₹30,000",
      originalPrice: "₹45,000",
      image: "/images/Carya-Tantra.png",
      fullDetails: {
        overview:
          "Kaya Tantra bridges external ritual and internal meditation, combining disciplined structure with deeper mental cultivation. It's for practitioners ready to integrate inner and outer practices.",
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
          "Accelerates spiritual progress beyond basic practices",
          "Prepares foundation for advanced practices",
        ],
        whotakes:
          "Practitioners seeking to integrate action with awareness, individuals drawn to both ritual and meditation.",
        prerequisites:
          "Openness to foundational practices, ability to sustain attention during extended sessions",
        practiceSchedule:
          "90-minute sessions with 30 minutes of foundational theory, 30 minutes of guided ritual, and 30 minutes of integrated meditation",
      },
    },
    {
      name: "Energy Healing",
      subtitle: "ACTION TANTRA",
      description:
        "Emphasizes external practices and ritual action: physical purity, ritual bathing, mantra recitation, offerings, and carefully structured ceremonial conduct. It is about aligning body and behavior with sacred intention.",
      duration: "120 min",
      price: "₹50,000",
      originalPrice: "₹70,000",
      image: "/images/Kriya-Tantra.png",
      fullDetails: {
        overview:
          "Energy Healing is a foundational path of tantric practice, emphasizing the sanctification of the body and actions through ritual and ceremony. It's ideal for seekers needing structured energy cleansing and healing.",
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
          "Ideal for beginners, individuals seeking structured energy practices, those with strong devotional inclinations, and practitioners who benefit from external rituals.",
        prerequisites:
          "Basic understanding of tantric philosophy, openness to ritual, physical mobility for ceremonial practices",
        practiceSchedule:
          "120-minute guided sessions covering theory, ritual instruction, and supervised practice",
      },
    },
    {
      name: "Soul Tantra",
      subtitle: "UNION TANTRA",
      description:
        "Centers on internal practice and the union of mind with enlightened qualities. Visualization of deities, mantra, and subtle-energy awareness become primary, with less emphasis on elaborate external ritual and more on continuous meditative presence.",
      duration: "180 min",
      price: "₹80,000",
      originalPrice: "₹1,20,000",
      image: "/images/Yoga-Tantra.png",
      fullDetails: {
        overview:
          "Soul Tantra focuses on the profound union of ordinary mind with enlightened qualities through internal visualization and subtle-energy work. It marks the transition from action-based to realization-based practice.",
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
          "Mastery of foundational Tantra, established meditation practice, ability to maintain focus for extended periods",
        practiceSchedule:
          "180-minute advanced sessions with theory, visualization instruction, and guided meditation practice",
      },
    },
    {
      name: "Divine Tantra",
      subtitle: "HIGHEST UNION TANTRA",
      description:
        "Represents the most advanced level of tantra, working directly with subtle body, channels, winds, and innate awareness. It involves special internal practices aimed at complete union of wisdom and compassion, and realization of the nature of mind.",
      duration: "240 min",
      price: "₹1,00,000",
      originalPrice: "₹1,50,000",
      image: "/images/Anuttarayoga-Tantra.png",
      fullDetails: {
        overview:
          "Divine Tantra is the pinnacle of tantric practice, offering direct methods for achieving enlightenment through understanding the subtle dimensions of body, mind, and energy. It requires the greatest commitment and preparation.",
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
          "Mastery of Soul Tantra, serious daily meditation practice, proper guide relationship, ethical foundation, intellectual understanding of emptiness",
        practiceSchedule:
          "240-minute intensive sessions with advanced theory, complex visualization practices, subtle energy manipulation, and deep meditation states",
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
                className="group relative bg-white dark:bg-surface-card hover:bg-[#3F2F27] dark:hover:bg-surface-hover border-2 border-deep-brown/10 dark:border-white/10 hover:border-soft-gold rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 text-left flex flex-col justify-between cursor-pointer transform hover:-translate-y-1 active:scale-[0.99]"
              >
                {/* Image Container with Overlay */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={tantra.image}
                    alt={tantra.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Subtitle Badge */}
                  <span className="absolute top-4 left-4 text-[10px] font-black uppercase tracking-[0.2em] bg-accent-red text-cream px-3 py-1 rounded-md shadow-md">
                    {tantra.subtitle}
                  </span>

                  {/* Quick Specs Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-cream">
                    <div>
                      <span className="text-xs uppercase tracking-wider opacity-75 font-nav font-semibold block">
                        Duration
                      </span>
                      <span className="font-title text-lg font-bold">
                        {tantra.duration}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs uppercase tracking-wider opacity-75 font-nav font-semibold block">
                        Price
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="line-through text-cream/50 text-xs font-bold">
                          {tantra.originalPrice}
                        </span>
                        <span className="font-title text-2xl font-bold text-soft-gold">
                          {tantra.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-title text-2xl font-bold text-deep-brown group-hover:text-soft-gold mb-3 transition-colors">
                      {tantra.name}
                    </h3>
                    <p className="font-body text-sm text-deep-brown/70 group-hover:text-cream/80 leading-relaxed mb-6">
                      {tantra.description}
                    </p>
                  </div>

                  {/* Card Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-deep-brown/10 group-hover:border-cream/20">
                    <span className="text-xs font-bold font-nav uppercase tracking-wider text-accent-red group-hover:text-soft-gold transition-colors">
                      Click to View Full Details
                    </span>
                    <span className="text-accent-red group-hover:text-soft-gold text-xl group-hover:translate-x-2 transition-all">
                      →
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {selectedTantra !== null && (
        <div 
          style={modalThemeStyle}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto animate-fade-in"
        >
          <div 
            className="bg-cream border-2 border-soft-gold rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-scale-up"
            style={{
              backgroundColor: "var(--color-cream)",
              borderColor: "var(--color-soft-gold)",
            }}
          >
            {/* Sticky Header */}
            <div 
              className="sticky top-0 bg-cream border-b border-deep-brown/10 p-6 flex justify-between items-center z-10"
              style={{
                backgroundColor: "var(--color-cream)",
                borderBottomColor: "rgba(212,175,55,0.2)",
              }}
            >
              <div>
                <span 
                  className="text-xs font-black uppercase tracking-widest text-accent-red block mb-1"
                  style={{ color: "var(--color-accent-red)" }}
                >
                  {tantraTypes[selectedTantra].subtitle}
                </span>
                <h3 
                  className="font-title text-3xl font-bold text-deep-brown"
                  style={{ color: "var(--color-deep-brown)" }}
                >
                  {tantraTypes[selectedTantra].name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedTantra(null)}
                className="w-10 h-10 rounded-full bg-deep-brown/10 hover:bg-accent-red hover:text-cream text-deep-brown font-bold flex items-center justify-center transition cursor-pointer"
                style={{
                  color: "var(--color-deep-brown)",
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-8 font-body">
              {/* Image & Quick Info Header */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={tantraTypes[selectedTantra].image}
                    alt={tantraTypes[selectedTantra].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div 
                  className="md:col-span-2 space-y-3 p-4 bg-surface-card rounded-2xl border border-deep-brown/10"
                  style={{
                    backgroundColor: "var(--color-surface-card)",
                    borderColor: "rgba(212,175,55,0.2)",
                  }}
                >
                  <div className="flex justify-between items-center border-b border-deep-brown/10 pb-2">
                    <span 
                      className="text-xs uppercase tracking-wider font-bold opacity-60"
                      style={{ color: "var(--color-deep-brown)" }}
                    >
                      Duration
                    </span>
                    <span 
                      className="font-bold text-deep-brown"
                      style={{ color: "var(--color-deep-brown)" }}
                    >
                      {tantraTypes[selectedTantra].duration}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-deep-brown/10 pb-2">
                    <span 
                      className="text-xs uppercase tracking-wider font-bold opacity-60"
                      style={{ color: "var(--color-deep-brown)" }}
                    >
                      Price
                    </span>
                    <span className="flex items-center gap-2">
                      <span 
                        className="line-through text-xs font-bold opacity-50"
                        style={{ color: "var(--color-deep-brown)" }}
                      >
                        {tantraTypes[selectedTantra].originalPrice}
                      </span>
                      <span 
                        className="font-bold text-lg text-accent-red"
                        style={{ color: "var(--color-accent-red)" }}
                      >
                        {tantraTypes[selectedTantra].price}
                      </span>
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span 
                      className="text-xs uppercase tracking-wider font-bold opacity-60"
                      style={{ color: "var(--color-deep-brown)" }}
                    >
                      Format
                    </span>
                    <span 
                      className="font-bold text-deep-brown text-xs"
                      style={{ color: "var(--color-deep-brown)" }}
                    >
                      In-Person (India Travel Coordinated)
                    </span>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h4 
                  className="font-title text-xl font-bold mb-3 text-deep-brown"
                  style={{ color: "var(--color-deep-brown)" }}
                >
                  Overview
                </h4>
                <p 
                  className="text-deep-brown/80 leading-relaxed text-base"
                  style={{ color: "var(--color-deep-brown)" }}
                >
                  {tantraTypes[selectedTantra].fullDetails.overview}
                </p>
              </div>

              {/* Key Focus Areas */}
              <div>
                <h4 
                  className="font-title text-xl font-bold mb-3 text-deep-brown"
                  style={{ color: "var(--color-deep-brown)" }}
                >
                  Key Practices & Focus Areas
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {tantraTypes[selectedTantra].fullDetails.keyFocus.map(
                    (item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 p-3 bg-surface-card rounded-xl border border-deep-brown/5 text-sm"
                        style={{
                          backgroundColor: "var(--color-surface-card)",
                          borderColor: "rgba(212,175,55,0.15)",
                          color: "var(--color-deep-brown)",
                        }}
                      >
                        <span 
                          className="text-accent-red font-bold"
                          style={{ color: "var(--color-accent-red)" }}
                        >
                          ✦
                        </span>
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h4 
                  className="font-title text-xl font-bold mb-3 text-deep-brown"
                  style={{ color: "var(--color-deep-brown)" }}
                >
                  Expected Transformation & Benefits
                </h4>
                <ul className="space-y-2">
                  {tantraTypes[selectedTantra].fullDetails.benefits.map(
                    (benefit, i) => (
                      <li 
                        key={i} 
                        className="flex items-center gap-3 text-sm"
                        style={{ color: "var(--color-deep-brown)" }}
                      >
                        <span 
                          className="text-soft-gold text-lg"
                          style={{ color: "var(--color-soft-gold)" }}
                        >
                          ✔
                        </span>
                        <span>{benefit}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Who Should Take This & Prerequisites */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-deep-brown/10">
                <div 
                  className="p-4 bg-surface-card rounded-2xl border border-deep-brown/5"
                  style={{
                    backgroundColor: "var(--color-surface-card)",
                    borderColor: "rgba(212,175,55,0.15)",
                  }}
                >
                  <h5 
                    className="font-title text-sm font-bold uppercase tracking-wider text-accent-red mb-2"
                    style={{ color: "var(--color-accent-red)" }}
                  >
                    Who This Is For
                  </h5>
                  <p 
                    className="text-xs text-deep-brown/80 leading-relaxed"
                    style={{ color: "var(--color-deep-brown)" }}
                  >
                    {tantraTypes[selectedTantra].fullDetails.whotakes}
                  </p>
                </div>
                <div 
                  className="p-4 bg-surface-card rounded-2xl border border-deep-brown/5"
                  style={{
                    backgroundColor: "var(--color-surface-card)",
                    borderColor: "rgba(212,175,55,0.15)",
                  }}
                >
                  <h5 
                    className="font-title text-sm font-bold uppercase tracking-wider text-soft-gold mb-2"
                    style={{ color: "var(--color-soft-gold)" }}
                  >
                    Prerequisites
                  </h5>
                  <p 
                    className="text-xs text-deep-brown/80 leading-relaxed"
                    style={{ color: "var(--color-deep-brown)" }}
                  >
                    {tantraTypes[selectedTantra].fullDetails.prerequisites}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-end border-t border-deep-brown/10">
                <button
                  onClick={() => setSelectedTantra(null)}
                  className="px-6 py-3 border border-deep-brown/30 text-deep-brown font-bold rounded-xl hover:bg-deep-brown/10 transition text-sm cursor-pointer"
                  style={{
                    borderColor: "rgba(212,175,55,0.3)",
                    color: "var(--color-deep-brown)",
                  }}
                >
                  Close Window
                </button>
                <Link
                  href="/book-session"
                  onClick={() => setSelectedTantra(null)}
                  className="px-8 py-3 bg-[#E44426] text-white font-bold rounded-xl hover:bg-black transition text-sm text-center shadow-lg cursor-pointer"
                >
                  Book This Session →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
