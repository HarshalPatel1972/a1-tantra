"use client";

export default function RealTalk() {
  const cards = [
    {
      category: "A1 Guidance",
      title: "What Is Tantra Really About?",
      excerpt:
        "Exploring the true essence of Tantra beyond misconceptions and stereotypes...",
    },
    {
      category: "Real Talk",
      title: "Can Tantra Help With Emotional Healing?",
      excerpt:
        "Understanding how tantric practices support emotional processing and transformation...",
    },
    {
      category: "What to Expect",
      title: "Your First Tantra Meditation Session",
      excerpt:
        "A beginner's guide to preparing for and understanding your first meditation...",
    },
  ];

  return (
    <section className="py-24 bg-deep-brown text-cream">
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
              className="group bg-cream/10 border border-cream/20 p-8 rounded-lg hover:bg-cream/20 hover:border-cream/40 transition"
            >
              <p className="text-soft-gold text-sm font-semibold uppercase tracking-wide mb-2">
                {card.category}
              </p>
              <h3 className="serif-heading text-2xl font-bold text-cream mb-4 group-hover:text-soft-gold transition">
                {card.title}
              </h3>
              <p className="text-cream/70 leading-relaxed">{card.excerpt}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="px-8 py-3 bg-accent-red text-cream font-semibold rounded-sm hover:bg-cream hover:text-deep-brown transition">
            SEE MORE
          </button>
        </div>
      </div>
    </section>
  );
}
