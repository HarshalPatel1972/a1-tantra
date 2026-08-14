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
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className={`w-4 h-4 ${
          star <= rating ? "text-[#FFD700]" : "text-white/20"
        } drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]`}
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
    <section id="reviews" className="relative py-20 md:py-28 bg-[#1C1614] text-white overflow-hidden border-t border-deep-brown/10">
      {/* Ambient warm glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[#D4AF37]/[0.03] blur-3xl" />
      </div>

      <div className="relative">
        {/* Header row */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-12 text-center md:text-left">
          <p className="text-xs font-nav font-black text-[#D4AF37] uppercase tracking-[0.35em] mb-3">
            Real Transformations
          </p>
          <h2 className="font-title text-3xl md:text-5xl font-bold text-[#F8F5F2] leading-tight max-w-2xl">
            What Seekers Say About Their Journeys
          </h2>
        </div>

        {/* Marquee Track */}
        <div className="flex overflow-hidden">
          <div className="flex gap-6 animate-marquee py-4">
            {marqueeReviews.map((review, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[85vw] sm:w-[380px] lg:w-[400px]"
              >
                <div className="h-full bg-[#2A221E] border border-[#D4AF37]/25 rounded-2xl p-7 flex flex-col justify-between shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <StarRating rating={review.rating} />
                      <span className="text-2xl opacity-40">“</span>
                    </div>

                    <p className="font-body text-sm sm:text-base text-[#E8DDD4] leading-relaxed mb-6 italic">
                      &quot;{review.comment}&quot;
                    </p>
                  </div>

                  <div className="flex items-center gap-3.5 pt-5 border-t border-white/10">
                    <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0 shadow-md bg-[#1C1614] relative">
                      <Image
                        src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${review.name}`}
                        alt={review.name}
                        fill
                        className="p-1 object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="min-w-0">
                      {/* High Contrast Name & Location in Light and Dark Mode */}
                      <h4 className="font-nav font-black text-sm tracking-wide text-white">
                        {review.name}
                      </h4>
                      <p className="text-[11px] font-nav font-bold uppercase tracking-wider text-[#D4AF37] mt-0.5 opacity-100">
                        {review.location} &middot; <span className="text-white/80">{review.date}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium UI/UX Trust Metrics Bar (Replaced P A R S A initials with high-end badges) */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            
            {/* Metric 1 */}
            <div className="bg-[#2A221E] border border-[#D4AF37]/30 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-lg hover:border-[#D4AF37]/60 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-lg text-[#D4AF37] font-black">
                👥
              </div>
              <div className="text-left">
                <p className="font-nav font-black text-base text-white tracking-wide">500+ Seekers</p>
                <p className="text-[10px] font-nav font-bold uppercase tracking-wider text-[#D4AF37]">Transformed Across India</p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-[#2A221E] border border-[#D4AF37]/30 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-lg hover:border-[#D4AF37]/60 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-lg text-[#FFD700] font-black">
                ⭐
              </div>
              <div className="text-left">
                <p className="font-nav font-black text-base text-white tracking-wide">4.9 Avg Rating</p>
                <p className="text-[10px] font-nav font-bold uppercase tracking-wider text-[#D4AF37]">Based on 120+ Reviews</p>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="bg-[#2A221E] border border-[#D4AF37]/30 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-lg hover:border-[#D4AF37]/60 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-lg text-[#10B981] font-black">
                🛡️
              </div>
              <div className="text-left">
                <p className="font-nav font-black text-base text-white tracking-wide">Verified Experiences</p>
                <p className="text-[10px] font-nav font-bold uppercase tracking-wider text-[#10B981]">100% Confidential & Safe</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
