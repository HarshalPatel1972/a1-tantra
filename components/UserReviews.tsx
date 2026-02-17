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

export default function UserReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scroll = useCallback((dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>(":scope > div")?.offsetWidth ?? 400;
    const distance = cardWidth + 24; // card + gap
    if (dir === "right") {
      // Loop to start if at end
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: distance, behavior: "smooth" });
      }
    } else {
      // Loop to end if at start
      if (el.scrollLeft <= 10) {
        el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
      } else {
        el.scrollBy({ left: -distance, behavior: "smooth" });
      }
    }
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => scroll("right"), 4000);
    return () => clearInterval(timer);
  }, [scroll, isPaused]);

  return (
    <section className="relative py-24 md:py-32 bg-deep-brown overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-soft-gold/[0.015] blur-3xl" />
      </div>

      <div className="relative max-w-[90rem] mx-auto">
        {/* Header row */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <p className="text-[11px] font-nav font-bold text-soft-gold/50 uppercase tracking-[0.4em] mb-4">
              Testimonials
            </p>
            <h2 className="font-title text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight">
              What Seekers Say
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "border-cream/20 text-cream/60 hover:text-soft-gold hover:border-soft-gold/40"
                  : "border-cream/5 text-cream/15 cursor-default"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "border-cream/20 text-cream/60 hover:text-soft-gold hover:border-soft-gold/40"
                  : "border-cream/5 text-cream/15 cursor-default"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards Track */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto pl-6 sm:pl-10 lg:pl-16 pr-6 sm:pr-10 lg:pr-16 pb-4 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="group flex-shrink-0 w-[85vw] sm:w-[400px] lg:w-[420px] snap-start"
            >
              <div className="h-full bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 md:p-9 flex flex-col justify-between hover:bg-white/[0.07] hover:border-white/[0.1] transition-all duration-500">
                {/* Top: Stars + Quote icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <StarRating rating={review.rating} />
                    <svg className="w-8 h-8 text-white/[0.04] group-hover:text-soft-gold/10 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-3a2 2 0 012-2h3a1 1 0 001-1V9a1 1 0 00-1-1h-4a1 1 0 01-1-1V5a1 1 0 011-1h5a2 2 0 012 2v9a6 6 0 01-6 6h-2zm-12 0v-3a2 2 0 012-2h3a1 1 0 001-1V9a1 1 0 00-1-1H3a1 1 0 01-1-1V5a1 1 0 011-1h5a2 2 0 012 2v9a6 6 0 01-6 6H2z" />
                    </svg>
                  </div>

                  <p className="font-body text-[15px] md:text-base text-cream/70 leading-relaxed mb-8 group-hover:text-cream/85 transition-colors duration-500">
                    {review.comment}
                  </p>
                </div>

                {/* Bottom: Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/[0.06]">
                  <div className="w-10 h-10 rounded-full bg-soft-gold/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-title text-sm font-bold text-soft-gold">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-nav font-bold text-xs text-cream/80 uppercase tracking-[0.15em] truncate group-hover:text-soft-gold transition-colors duration-300">
                      {review.name}
                    </h4>
                    <p className="text-[10px] text-cream/25 font-nav uppercase tracking-[0.2em] mt-0.5">
                      {review.location} &middot; {review.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
