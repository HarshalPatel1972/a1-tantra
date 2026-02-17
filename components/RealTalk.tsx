"use client";

export default function RealTalk() {
  const insights = [
    {
      number: "01",
      category: "CLARITY",
      title: "Ancient Wisdom, Modern Life.",
      content:
        "Tantra is not what pop culture suggests. It's an ancient spiritual science focused on transforming energy, consciousness, and everyday experience. Rooted in reverence for the sacred within all things, Tantra teaches integration—uniting mind, body, and spirit.",
    },
    {
      number: "02",
      category: "HEALING",
      title: "Emotional alchemy.",
      content:
        "Yes. Tantra creates a framework for processing emotions by teaching you to witness feelings without judgment and move stagnant energy. Through breathwork, meditation, and ritualistic practice, you learn to transform pain into wisdom.",
    },
    {
      number: "03",
      category: "EXPERIENCE",
      title: "Enter the flow.",
      content:
        "Expect to be guided into a state of deep relaxation and heightened awareness. You'll learn foundational breathwork, visualization techniques, and how to work with subtle energy centers. There's no performance required.",
    },
  ];

  return (
    <section className="py-32 bg-deep-brown text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Header Section */}
          <div className="lg:col-span-5 sticky top-32">
            <p className="font-nav text-xs font-bold uppercase tracking-[0.4em] text-accent-red mb-8">
              HONEST INSIGHTS
            </p>
            <h2 className="font-title text-6xl md:text-8xl font-bold mb-10 leading-[0.9] tracking-tighter">
              A1 <span className="italic">Perspective</span>
            </h2>
            <p className="text-xl md:text-2xl text-cream/60 font-body leading-relaxed max-w-md mb-12">
              We deconstruct the complex to help you find clarity on your spiritual path.
            </p>
            <div className="w-24 h-px bg-cream/20"></div>
          </div>

          {/* Insights List */}
          <div className="lg:col-span-7 space-y-32">
            {insights.map((insight, idx) => (
              <div key={idx} className="group relative">
                <span className="absolute -left-12 top-0 font-title text-8xl text-cream/5 font-black leading-none group-hover:text-accent-red/10 transition-colors duration-500">
                  {insight.number}
                </span>
                
                <div className="relative z-10 pl-0 md:pl-8">
                  <p className="text-accent-red text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                    {insight.category}
                  </p>
                  <h3 className="font-title text-3xl md:text-5xl font-bold mb-8 leading-tight group-hover:translate-x-4 transition-transform duration-500">
                    {insight.title}
                  </h3>
                  <p className="text-lg md:text-xl text-cream/80 font-body leading-relaxed max-w-2xl border-l-2 border-cream/10 pl-8 group-hover:border-accent-red transition-colors duration-500">
                    {insight.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-32 pt-16 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-nav text-[10px] font-bold uppercase tracking-[0.3em] text-cream/40">
            Expanding Consciousness Since 2024
          </p>
          <button className="group flex items-center gap-4 text-sm font-nav font-bold uppercase tracking-widest hover:text-accent-red transition-colors">
            <span>Explore All Insights</span>
            <div className="w-12 h-px bg-accent-red group-hover:w-20 transition-all duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
