"use client";

import Link from "next/link";

export default function SessionsGrid() {
  const sessions = [
    {
      id: "meditation",
      title: "Tantra Meditation Session",
      icon: "🧘",
      description: "Deep meditative practices rooted in tantra.",
    },
    {
      id: "breathwork",
      title: "Tantric Breathwork Session",
      icon: "🌬️",
      description: "Pranayama techniques for energy activation.",
    },
    {
      id: "chakra",
      title: "Chakra Balancing Session",
      icon: "⚡",
      description: "Align and balance your energy centers.",
    },
    {
      id: "sound-healing",
      title: "Sound Healing + Tantra Flow",
      icon: "🔊",
      description: "Sacred sounds for transformation.",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="serif-heading text-4xl font-bold text-deep-brown mb-16 text-center">
          Sessions
        </h2>

        {/* Sessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sessions.map((session) => (
            <Link
              key={session.id}
              href={`/sessions/${session.id}`}
              className="group block"
            >
              <div className="relative h-80 bg-gradient-to-br from-accent-red/20 to-soft-gold/20 rounded-lg overflow-hidden mb-4">
                <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition duration-500">
                  {session.icon}
                </div>
                <div className="absolute inset-0 bg-deep-brown/0 group-hover:bg-deep-brown/20 transition"></div>
              </div>
              <h3 className="serif-heading text-xl font-bold text-deep-brown mb-2 group-hover:text-accent-red transition">
                {session.title}
              </h3>
              <p className="text-sm text-deep-brown/70 mb-3">
                {session.description}
              </p>
              <div className="flex items-center text-accent-red font-semibold group-hover:gap-2 transition">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
