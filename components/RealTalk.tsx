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
    <section className="py-16 md:py-24 bg-cream">
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
              className="group bg-white border-2 border-deep-brown/10 hover:border-accent-red p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <p className="text-accent-red text-xs font-bold uppercase tracking-widest mb-3">
                {card.category}
              </p>
              <h3 className="font-title text-2xl font-bold text-deep-brown mb-4 group-hover:text-accent-red transition">
                {card.title}
              </h3>
              <p className="text-deep-brown/80 leading-relaxed font-body text-lg">
                {card.excerpt}
              </p>
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
