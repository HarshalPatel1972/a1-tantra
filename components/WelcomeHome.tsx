"use client";

export default function WelcomeHome() {
  const features = [
    {
      icon: "💬",
      title: "Explore Tantra Wisdom",
      description:
        "Teachings from traditional Tantra lineages, written simply and clearly.",
    },
    {
      icon: "🧴",
      title: "Learn Sacred Practices",
      description:
        "Breathwork, yantra, mantra, mudras, meditations, and rituals explained for modern seekers.",
    },
    {
      icon: "🎁",
      title: "Find Your Tantra Path",
      description:
        "Build a personalized path based on Shakta, Kundalini, Kaula, Tibetan Tantra & more.",
    },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="serif-heading text-5xl font-bold text-deep-brown mb-6">
            Welcome home.
          </h2>
          <p className="text-lg text-deep-brown/70 max-w-3xl mx-auto leading-relaxed">
            We're glad you found us. Whether you're new to Tantra or deep in
            your spiritual journey, A1 Tantra guides you gently, safely, and
            respectfully toward inner awakening.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="serif-heading text-2xl font-bold text-deep-brown mb-3">
                {feature.title}
              </h3>
              <p className="text-deep-brown/70 leading-relaxed mb-4">
                {feature.description}
              </p>
              <button className="text-accent-red font-semibold hover:text-deep-brown transition inline-flex items-center gap-2">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
