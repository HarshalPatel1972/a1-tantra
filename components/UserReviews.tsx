"use client";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5 mb-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= Math.floor(rating)
              ? "text-soft-gold fill-soft-gold"
              : star - 0.5 === rating
              ? "text-soft-gold"
              : "text-stone-300 fill-stone-300"
          }`}
          viewBox="0 0 20 20"
        >
          {star - 0.5 === rating ? (
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="50%" stopColor="#D6D3D1" />
              </linearGradient>
            </defs>
          ) : null}
          <path
            fill={star - 0.5 === rating ? "url(#half)" : "currentColor"}
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      ))}
    </div>
  );
};

export default function UserReviews() {
  const reviews = [
    {
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      comment: "The breathwork sessions completely changed my perspective on energy. The guidance is authentic and deeply rooted in tradition. Highly recommended!",
      rating: 5,
      date: "Oct 2025",
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad, Gujarat",
      comment: "The most profound experience I've had in 10 years of meditation practice. A1 Tantra provides a safe and expert container for real transformation.",
      rating: 5,
      date: "Jan 2026",
    },
    {
      name: "Rohan Mehra",
      location: "New Delhi, Delhi",
      comment: "Authentic and deep. I was looking for something beyond the superficial, and I found it here. The chakra balancing session was a revelation.",
      rating: 5,
      date: "Dec 2025",
    },
    {
      name: "Sanjana Iyer",
      location: "Chennai, Tamil Nadu",
      comment: "I was skeptical at first, but the results speak for themselves. I feel more centered and peaceful than I have in years. Truly life-changing work.",
      rating: 4.5,
      date: "Feb 2026",
    },
    {
      name: "Ananya Rao",
      location: "Bangalore, Karnataka",
      comment: "The guidance is clear, compassionate, and truly expert. They treat Tantra with the respect and depth it deserves. A beautiful journey so far.",
      rating: 5,
      date: "Nov 2025",
    },
    {
      name: "Vikram Singh",
      location: "Jaipur, Rajasthan",
      comment: "Finally a place that simplifies complex tantric wisdom without losing its essence. The sessions are practical yet spiritually significant.",
      rating: 5,
      date: "Dec 2025",
    },
  ];

  return (
    <section className="py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-title text-4xl md:text-5xl font-bold text-deep-brown mb-4">
            Voice of the Seekers
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-stone-200 border-2 border-cream flex items-center justify-center text-[10px] font-bold text-deep-brown">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm font-nav font-bold text-deep-brown/60 uppercase tracking-widest pl-2">
              Joined by 500+ Seekers
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-deep-brown/5 shadow-sm hover:shadow-md transition-shadow relative group"
            >
              <div className="absolute top-8 right-8 text-stone-100 group-hover:text-accent-red/5 transition-colors">
                <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V5C14.017 4.44772 14.4647 4 15.017 4H20.017C21.1216 4 22.017 4.89543 22.017 6V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H3.01697C2.46468 8 2.01697 7.55228 2.01697 7V5C2.01697 4.44772 2.46468 4 3.01697 4H8.01697C9.12154 4 10.017 4.89543 10.017 6V15C10.017 18.3137 7.33067 21 4.01697 21H2.01697Z" />
                </svg>
              </div>
              
              <StarRating rating={review.rating} />
              
              <p className="font-body text-deep-brown/80 leading-relaxed mb-8 relative z-10 italic">
                "{review.comment}"
              </p>

              <div className="flex items-center gap-4 border-t border-stone-100 pt-6">
                <div className="w-10 h-10 rounded-full bg-accent-red/10 flex items-center justify-center font-title font-bold text-accent-red">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-nav font-bold text-sm text-deep-brown uppercase tracking-wider">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-deep-brown/40 font-nav uppercase tracking-widest mt-0.5">
                    {review.location} • {review.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-deep-brown/10 rounded-full shadow-sm">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] font-nav font-bold text-deep-brown/60 uppercase tracking-widest">Live Updates</span>
            </div>
            <p className="text-sm font-body text-deep-brown/80">
              Average 4.9/5 based on 320+ verified reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
