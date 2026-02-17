"use client";

export default function RealTalk() {
  const insights = [
    {
      category: "Authenticity",
      title: "What is Tantra really about?",
      content:
        "It's not what pop culture suggests. Tantra is an ancient spiritual science focused on transforming energy, consciousness, and everyday experience. Rooted in reverence for the sacred, it teaches the integration of mind, body, and spirit.",
      highlight: "Sacred Integration"
    },
    {
      category: "Healing",
      title: "Can it help with emotional pain?",
      content:
        "Tantra creates a framework for processing emotions by teaching you to witness feelings without judgment. Through breathwork and ritual, you learn to transform internal friction into wisdom and growth.",
      highlight: "Energy Transformation"
    },
    {
      category: "Journey",
      title: "What is the first step like?",
      content:
        "Expect a state of deep relaxation and heightened awareness. Guided by clarity and compassion, you'll explore foundational breathwork and visualization. No performance is required—only openness.",
      highlight: "Safe Exploration"
    },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple, Clear Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-accent-red font-nav font-bold uppercase tracking-[0.2em] mb-4">Honest Insights</p>
          <h2 className="font-title text-4xl md:text-6xl font-bold text-deep-brown leading-tight">
            Common questions on the <span className="text-accent-red italic underline decoration-1 underline-offset-8">Tantric path</span>.
          </h2>
        </div>

        {/* User-Friendly Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {insights.map((insight, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-accent-red"></span>
                <span className="font-nav font-bold text-xs uppercase tracking-widest text-deep-brown/40">
                  {insight.category}
                </span>
              </div>
              
              <h3 className="font-title text-2xl font-bold text-deep-brown mb-6">
                {insight.title}
              </h3>
              
              <p className="font-body text-lg text-deep-brown/75 leading-relaxed mb-8 flex-grow">
                {insight.content}
              </p>

              <div className="pt-6 border-t border-deep-brown/5">
                <p className="font-nav font-bold text-[10px] uppercase tracking-widest text-accent-red">
                  Key Focus: {insight.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
