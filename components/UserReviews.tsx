"use client";

import { useState, useEffect, useCallback } from "react";

const reviews = [
  {
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    comment:
      "The breathwork sessions completely changed my perspective on energy. The guidance is authentic and deeply rooted in tradition. Highly recommended!",
    rating: 5,
    date: "Oct 2025",
  },
  {
    name: "Amit Patel",
    location: "Ahmedabad, Gujarat",
    comment:
      "The most profound experience I've had in 10 years of meditation practice. A1 Tantra provides a safe and expert container for real transformation.",
    rating: 5,
    date: "Jan 2026",
  },
  {
    name: "Rohan Mehra",
    location: "New Delhi, Delhi",
    comment:
      "Authentic and deep. I was looking for something beyond the superficial, and I found it here. The chakra balancing session was a revelation.",
    rating: 5,
    date: "Dec 2025",
  },
  {
    name: "Sanjana Iyer",
    location: "Chennai, Tamil Nadu",
    comment:
      "I was skeptical at first, but the results speak for themselves. I feel more centered and peaceful than I have in years. Truly life-changing work.",
    rating: 4.5,
    date: "Feb 2026",
  },
  {
    name: "Ananya Rao",
    location: "Bangalore, Karnataka",
    comment:
      "The guidance is clear, compassionate, and truly expert. They treat Tantra with the respect and depth it deserves. A beautiful journey so far.",
    rating: 5,
    date: "Nov 2025",
  },
  {
    name: "Vikram Singh",
    location: "Jaipur, Rajasthan",
    comment:
      "Finally a place that simplifies complex tantric wisdom without losing its essence. The sessions are practical yet spiritually significant.",
    rating: 5,
    date: "Dec 2025",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className={`w-5 h-5 ${
          star <= Math.floor(rating)
            ? "text-soft-gold"
            : star - 0.5 <= rating
            ? "text-soft-gold"
            : "text-white/20"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function UserReviews() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (index: number, dir: "left" | "right") => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(dir);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % reviews.length, "right");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + reviews.length) % reviews.length, "left");
  }, [current, goTo]);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const review = reviews[current];

  return (
    <section className="relative py-28 md:py-36 bg-deep-brown overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-soft-gold/[0.02] blur-3xl" />
        <div className="absolute top-12 left-12 md:top-20 md:left-20 font-title text-[12rem] md:text-[18rem] leading-none text-white/[0.02] select-none">
          &ldquo;
        </div>
      </div>

      <div
        className="relative max-w-5xl mx-auto px-6 sm:px-10 lg:px-16"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[11px] font-nav font-bold text-soft-gold/60 uppercase tracking-[0.4em] mb-4">
            Testimonials
          </p>
          <h2 className="font-title text-4xl md:text-6xl font-bold text-cream leading-tight">
            Voice of the Seekers
          </h2>
        </div>

        {/* Slide Area */}
        <div className="relative min-h-[340px] md:min-h-[300px]">
          {/* Navigation Arrows — Desktop flanking */}
          <button
            onClick={prev}
            aria-label="Previous review"
            className="hidden md:flex absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full border border-cream/10 items-center justify-center text-cream/40 hover:text-soft-gold hover:border-soft-gold/40 transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next review"
            className="hidden md:flex absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full border border-cream/10 items-center justify-center text-cream/40 hover:text-soft-gold hover:border-soft-gold/40 transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Review Content */}
          <div
            key={current}
            className={`flex flex-col items-center text-center transition-all duration-600 ease-out ${
              isAnimating
                ? direction === "right"
                  ? "animate-slide-in-right"
                  : "animate-slide-in-left"
                : ""
            }`}
          >
            {/* Stars */}
            <div className="mb-8">
              <StarRating rating={review.rating} />
            </div>

            {/* Quote */}
            <blockquote className="max-w-3xl mb-12">
              <p className="font-body text-xl sm:text-2xl md:text-3xl text-cream/90 leading-relaxed md:leading-relaxed italic font-light">
                &ldquo;{review.comment}&rdquo;
              </p>
            </blockquote>

            {/* Divider */}
            <div className="w-12 h-[1px] bg-soft-gold/30 mb-8" />

            {/* Author */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-soft-gold/10 border border-soft-gold/20 flex items-center justify-center">
                <span className="font-title text-xl font-bold text-soft-gold">
                  {review.name.charAt(0)}
                </span>
              </div>
              <div>
                <h4 className="font-nav font-bold text-sm text-cream uppercase tracking-[0.2em]">
                  {review.name}
                </h4>
                <p className="text-[11px] text-cream/30 font-nav uppercase tracking-[0.25em] mt-1">
                  {review.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Arrows + Dots */}
        <div className="flex items-center justify-center gap-6 mt-14">
          <button
            onClick={prev}
            aria-label="Previous review"
            className="md:hidden w-12 h-12 rounded-full border border-cream/10 flex items-center justify-center text-cream/40 hover:text-soft-gold hover:border-soft-gold/40 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() =>
                  goTo(idx, idx > current ? "right" : "left")
                }
                aria-label={`Go to review ${idx + 1}`}
                className={`rounded-full transition-all duration-500 ${
                  idx === current
                    ? "w-8 h-2 bg-soft-gold"
                    : "w-2 h-2 bg-cream/20 hover:bg-cream/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next review"
            className="md:hidden w-12 h-12 rounded-full border border-cream/10 flex items-center justify-center text-cream/40 hover:text-soft-gold hover:border-soft-gold/40 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Trust Badge */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-cream/5 rounded-full">
            <div className="flex -space-x-2">
              {reviews.slice(0, 4).map((r, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full bg-soft-gold/10 border-2 border-deep-brown flex items-center justify-center text-[9px] font-bold text-soft-gold"
                >
                  {r.name.charAt(0)}
                </div>
              ))}
            </div>
            <div className="h-4 w-[1px] bg-cream/10" />
            <p className="text-[11px] font-nav font-bold text-cream/30 uppercase tracking-[0.2em]">
              4.9/5 from 500+ seekers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
