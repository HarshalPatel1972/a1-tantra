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
    <section className="py-12 md:py-16 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="serif-heading text-5xl font-bold text-center mb-16 max-w-3xl mx-auto leading-tight">
          Honest insights, ancient wisdom, and stories from seekers who walk the
          path.
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group bg-white/10 border border-white/20 p-8 rounded-lg hover:bg-white/20 hover:border-white/40 transition"
            >
              <p className="text-soft-gold text-sm font-semibold uppercase tracking-wide mb-2">
                {card.category}
              </p>
              <h3 className="serif-heading text-2xl font-bold text-white mb-4 group-hover:text-soft-gold transition">
                {card.title}
              </h3>
              <p className="text-white/70 leading-relaxed">{card.excerpt}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="px-8 py-3 bg-accent-red text-white font-semibold rounded-sm hover:bg-white hover:text-deep-brown transition">
            SEE MORE
          </button>
        </div>
      </div>
    </section>
  );
}
