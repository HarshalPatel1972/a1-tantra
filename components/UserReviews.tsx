"use client";

import Image from "next/image";

const reviews = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    comment:
      "The chakra balancing session helped me feel calmer and more focused within days.",
    rating: 5,
    date: "Oct 2025",
  },
  {
    name: "Amit Patel",
    location: "Ahmedabad",
    comment:
      "The relationship healing session helped my partner and me communicate without anger again.",
    rating: 5,
    date: "Jan 2026",
  },
  {
    name: "Rohan Mehra",
    location: "New Delhi",
    comment:
      "The meditation coaching gave me concrete tools to stop my racing thoughts during panic attacks.",
    rating: 4,
    date: "Dec 2025",
  },
  {
    name: "Sanjana Iyer",
    location: "Chennai",
    comment:
      "The tantra guidance session resolved deep emotional tension I didn't know I was holding.",
    rating: 5,
    date: "Feb 2026",
  },
  {
    name: "Ananya Rao",
    location: "Bangalore",
    comment:
      "After the chakra balancing, my constant fatigue and mental fog completely cleared up.",
    rating: 5,
    date: "Nov 2025",
  },
  {
    name: "Vikram Singh",
    location: "Jaipur",
    comment:
      "The in-person meditation sessions provided me a sanctuary. I feel deeply reconnected.",
    rating: 4,
    date: "Dec 2025",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className={`w-4 h-4 ${
          star <= rating ? "text-[#FFD700]" : "text-white/10"
        } drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const marqueeReviews = [...reviews, ...reviews];

export default function UserReviews() {
  return (
    <section id="reviews" className="relative py-24 md:py-32 bg-deep-brown overflow-hidden">
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
        <div className="flex overflow-hidden">
          <div className="flex gap-6 animate-marquee py-4">
            {marqueeReviews.map((review, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[85vw] sm:w-[400px] lg:w-[420px]"
              >
                <div className="h-full bg-white/[0.07] backdrop-blur-xl border border-soft-gold/15 rounded-2xl p-8 md:p-9 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-white/[0.1] hover:border-soft-gold/40 transition-all duration-500">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <StarRating rating={review.rating} />
                      <svg
                        className="w-10 h-10 text-soft-gold/20 group-hover:text-soft-gold/40 transition-colors duration-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-3a2 2 0 012-2h3a1 1 0 001-1V9a1 1 0 00-1-1h-4a1 1 0 01-1-1V5a1 1 0 011-1h5a2 2 0 012 2v9a6 6 0 01-6 6h-2zm-12 0v-3a2 2 0 012-2h3a1 1 0 001-1V9a1 1 0 00-1-1H3a1 1 0 01-1-1V5a1 1 0 011-1h5a2 2 0 012 2v9a6 6 0 01-6 6H2z" />
                      </svg>
                    </div>

                    <p className="font-body text-[15px] md:text-base text-cream leading-relaxed mb-8 transition-colors duration-500 italic font-medium">
                      &quot;{review.comment}&quot;
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-soft-gold/10">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-soft-gold/30 flex items-center justify-center flex-shrink-0 shadow-lg bg-deep-brown relative">
                      <Image
                        src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${review.name}`}
                        alt={review.name}
                        fill
                        className="p-1 object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-nav font-bold text-sm tracking-[0.1em] truncate" style={{ color: "#F8F5F2" }}>
                        {review.name}
                      </h4>
                      <p className="text-[10px] font-nav uppercase tracking-[0.2em] mt-0.5 opacity-60" style={{ color: "#D4AF37" }}>
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
