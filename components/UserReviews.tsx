"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const reviews = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    comment:
      "I came in stressed and skeptical. After three breathwork sessions, something shifted — I sleep better, think clearer, and my anxiety has genuinely reduced. Not magic, just really good guidance.",
    rating: 5,
    date: "Oct 2025",
  },
  {
    name: "Amit Patel",
    location: "Ahmedabad",
    comment:
      "Ten years of meditation and I thought I'd seen it all. The energy work here was on another level. Practical, grounded, no fluff. Would recommend to anyone serious about inner work.",
    rating: 5,
    date: "Jan 2026",
  },
  {
    name: "Rohan Mehra",
    location: "New Delhi",
    comment:
      "Was looking for something deeper than YouTube tutorials. The chakra balancing session was intense — I actually felt things move. Still processing it weeks later.",
    rating: 4,
    date: "Dec 2025",
  },
  {
    name: "Sanjana Iyer",
    location: "Chennai",
    comment:
      "Honestly, I didn't expect much. But after the first session I felt a calm I hadn't experienced in years. My husband noticed the difference before I did. Booking again next month.",
    rating: 5,
    date: "Feb 2026",
  },
  {
    name: "Ananya Rao",
    location: "Bangalore",
    comment:
      "The approach is respectful and knowledgeable — they treat Tantra with the depth it deserves. I finally found a space that doesn't water it down into trends.",
    rating: 5,
    date: "Nov 2025",
  },
  {
    name: "Vikram Singh",
    location: "Jaipur",
    comment:
      "Complex concepts explained simply without losing the essence. The session was practical and I could immediately use what I learned. Great for beginners.",
    rating: 4,
    date: "Dec 2025",
  },
  {
    name: "Meera Nair",
    location: "Kochi",
    comment:
      "My friend dragged me here and I'm so glad she did. The guided meditation was the most present I've felt in months. Already signed up for the full journey.",
    rating: 5,
    date: "Jan 2026",
  },
  {
    name: "Karan Deshmukh",
    location: "Pune",
    comment:
      "As someone in tech, I needed something to balance the constant screen time. The sessions gave me tools I actually use daily now. Wish I'd found this sooner.",
    rating: 4,
    date: "Nov 2025",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className={`w-4 h-4 ${
          star <= rating ? "text-soft-gold" : "text-white/10"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

// Double the reviews for seamless marquee looping
const marqueeReviews = [...reviews, ...reviews];

export default function UserReviews() {
  return (
    <section className="relative py-24 md:py-32 bg-deep-brown overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-soft-gold/[0.015] blur-3xl" />
      </div>

      <div className="relative">
        {/* Header row */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-16">
          <p className="text-[11px] font-nav font-bold text-soft-gold/50 uppercase tracking-[0.4em] mb-4">
            Testimonials
          </p>
          <h2 className="font-title text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight max-w-2xl">
            What Seekers Say
          </h2>
        </div>

        {/* Marquee Track */}
        <div className="flex overflow-hidden group">
          <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused] py-4">
            {marqueeReviews.map((review, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[85vw] sm:w-[400px] lg:w-[420px]"
              >
                <div className="h-full bg-cream/5 backdrop-blur-md border border-white/[0.08] rounded-2xl p-8 md:p-9 flex flex-col justify-between shadow-2xl shadow-black/20 hover:bg-cream/[0.08] hover:border-soft-gold/30 hover:-translate-y-1 transition-all duration-500">
                  {/* Top: Stars + Quote icon */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <StarRating rating={review.rating} />
                      <svg className="w-8 h-8 text-soft-gold/20 group-hover:text-soft-gold/40 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-3a2 2 0 012-2h3a1 1 0 001-1V9a1 1 0 00-1-1h-4a1 1 0 01-1-1V5a1 1 0 011-1h5a2 2 0 012 2v9a6 6 0 01-6 6h-2zm-12 0v-3a2 2 0 012-2h3a1 1 0 001-1V9a1 1 0 00-1-1H3a1 1 0 01-1-1V5a1 1 0 011-1h5a2 2 0 012 2v9a6 6 0 01-6 6H2z" />
                      </svg>
                    </div>

                    <p className="font-body text-[15px] md:text-base text-cream/80 leading-relaxed mb-8 group-hover:text-cream transition-colors duration-500 italic">
                      "{review.comment}"
                    </p>
                  </div>

                  {/* Bottom: Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-soft-gold/20 to-soft-gold/5 border border-soft-gold/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                      <span className="font-title text-base font-bold text-soft-gold">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-nav font-bold text-sm text-cream tracking-[0.1em] truncate group-hover:text-soft-gold transition-colors duration-300">
                        {review.name}
                      </h4>
                      <p className="text-[10px] text-cream/40 font-nav uppercase tracking-[0.2em] mt-0.5">
                        {review.location} &middot; {review.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom trust line */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mt-14">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-cream/25">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                {reviews.slice(0, 5).map((r, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-soft-gold/10 border border-deep-brown flex items-center justify-center text-[8px] font-bold text-soft-gold/60"
                  >
                    {r.name.charAt(0)}
                  </div>
                ))}
              </div>
              <span className="text-[10px] font-nav font-bold uppercase tracking-[0.2em] ml-1">
                500+ seekers
              </span>
            </div>
            <div className="hidden md:block w-[1px] h-3 bg-cream/10" />
            <span className="text-[10px] font-nav font-bold uppercase tracking-[0.2em]">
              4.9 avg rating
            </span>
            <div className="hidden md:block w-[1px] h-3 bg-cream/10" />
            <span className="text-[10px] font-nav font-bold uppercase tracking-[0.2em]">
              Verified experiences
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
