"use client";

export default function RealTalk() {
  const cards = [
    {
      category: "A1 Guidance",
      title: "What Is Tantra Really About?",
      excerpt:
        "Tantra is not what pop culture suggests. It's an ancient spiritual science focused on transforming energy, consciousness, and everyday experience. Rooted in reverence for the sacred within all things, Tantra teaches integration—uniting mind, body, and spirit—to awaken your full potential and live with authenticity and presence.",
    },
    {
      category: "Real Talk",
      title: "Can Tantra Help With Emotional Healing?",
      excerpt:
        "Yes. Tantra creates a framework for processing emotions by teaching you to witness feelings without judgment and move stagnant energy. Through breathwork, meditation, and ritualistic practice, you learn to transform pain into wisdom. Many seekers report profound emotional shifts—releasing trauma patterns and cultivating resilience and self-compassion.",
    },
    {
      category: "What to Expect",
      title: "Your First Tantra Meditation Session",
      excerpt:
        "Expect to be guided into a state of deep relaxation and heightened awareness. You'll learn foundational breathwork, visualization techniques, and how to work with subtle energy centers. There's no performance required—only openness and curiosity. Most beginners experience a profound sense of calm, clarity, and connection.",
    },
  ];

  return (
    <section className="py-4 md:py-6 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="font-title text-4xl md:text-5xl font-bold text-deep-brown text-center mb-4 max-w-3xl mx-auto leading-tight">
          Honest Insights, Ancient Wisdom
        </h2>
        <p className="text-center text-deep-brown/70 text-lg mb-16 max-w-2xl mx-auto">
          Stories from seekers who walk the path
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-deep-brown/5 p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-accent-red group-hover:h-full transition-all duration-500"></div>
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-cream rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <p className="text-accent-red text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                  {card.category}
                </p>
                <h3 className="font-title text-2xl font-bold text-deep-brown mb-5 group-hover:text-accent-red transition-colors duration-300 leading-snug">
                  {card.title}
                </h3>
                <div className="w-12 h-0.5 bg-stone-100 mb-6 group-hover:w-20 group-hover:bg-accent-red/30 transition-all duration-500"></div>
                <p className="text-deep-brown/70 leading-relaxed font-body text-base">
                  {card.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="px-8 py-3 bg-accent-red text-cream font-semibold rounded-sm hover:bg-deep-brown transition-colors">
            SEE MORE
          </button>
        </div>
      </div>
    </section>
  );
}
