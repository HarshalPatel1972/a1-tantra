"use client";

export default function TantraTypesSection() {
  const tantraTypes = [
    {
      name: "Kriya Tantra",
      subtitle: "ACTION TANTRA",
      description:
        "Emphasizes external practices and ritual action: physical purity, ritual bathing, mantra recitation, offerings, and carefully structured ceremonial conduct. It is about aligning body and behavior with sacred intention.",
      duration: "90 min",
    },
    {
      name: "Carya Tantra",
      subtitle: "METHOD TANTRA",
      description:
        "Balances outer ritual with inner meditative stability. Practitioners still perform ceremonies and symbolic actions, but the focus shifts more strongly toward devotion, visualization, and maintaining mindful awareness during activity.",
      duration: "2 hr",
    },
    {
      name: "Yoga Tantra",
      subtitle: "UNION TANTRA",
      description:
        "Centers on internal practice and the union of mind with enlightened qualities. Visualization of deities, mantra, and subtle-energy awareness become primary, with less emphasis on elaborate external ritual and more on continuous meditative presence.",
      duration: "150 min",
    },
    {
      name: "Anuttarayoga Tantra",
      subtitle: "HIGHEST UNION TANTRA",
      description:
        "Represents the most advanced level of tantra, working directly with subtle body, channels, winds, and innate awareness. It involves special internal practices aimed at complete union of wisdom and compassion, and realization of the nature of mind.",
      duration: "3 hr",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="font-title text-5xl lg:text-6xl font-bold text-deep-brown mb-16 text-center">
          Tantra Paths
        </h2>

        {/* Grid of Tantra Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tantraTypes.map((tantra, idx) => (
            <div
              key={idx}
              className="bg-white/60 backdrop-blur border border-deep-brown/10 rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              {/* Title */}
              <h3 className="font-title text-2xl font-bold text-deep-brown mb-2">
                {tantra.name}
              </h3>

              {/* Subtitle in smaller caps */}
              <p className="font-nav text-xs font-semibold uppercase tracking-widest text-accent-red mb-4">
                {tantra.subtitle}
              </p>

              {/* Description */}
              <p className="font-body text-deep-brown/80 leading-relaxed mb-6">
                {tantra.description}
              </p>

              {/* Duration Badge */}
              <div className="flex items-center justify-between">
                <span className="font-body text-xs uppercase tracking-wide text-deep-brown/60 font-semibold">
                  Duration
                </span>
                <span className="bg-accent-red/10 text-accent-red font-nav text-sm font-semibold px-4 py-1 rounded-full">
                  {tantra.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
