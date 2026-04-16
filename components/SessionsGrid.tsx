"use client";

import Link from "next/link";
import Image from "next/image";

export default function SessionsGrid() {
  const sessions = [
    {
      id: "kriya",
      title: "Kriya Tantra Session",
      image: "/images/Kriya-Tantra.png",
      description: "Action-based external practices, mudras, and purifying rituals.",
    },
    {
      id: "carya",
      title: "Carya Tantra Session",
      image: "/images/Carya-Tantra.png",
      description: "Methodical balance of outer action and inner visualization.",
    },
    {
      id: "yoga",
      title: "Yoga Tantra Session",
      image: "/images/Yoga-Tantra.png",
      description: "Internal practice emphasizing union and continuous presence.",
    },
    {
      id: "anuttarayoga",
      title: "Anuttarayoga Tantra Session",
      image: "/images/Anuttarayoga-Tantra.png",
      description: "The highest yoga path of profound inner transformation.",
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-transparent">
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
              <div className="relative h-80 rounded-lg overflow-hidden mb-4 shadow-lg hover:shadow-xl transition-all duration-300">
                <Image
                  src={session.image}
                  alt={session.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  quality={90}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <h3 className="font-title text-xl font-bold text-deep-brown mb-2 group-hover:text-accent-red transition">
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

        {/* View All Sessions CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/sessions"
            className="inline-block px-8 py-4 bg-brand-blue text-cream font-bold rounded-lg relative overflow-hidden group shadow-lg hover:shadow-xl"
          >
            <span className="absolute inset-0 bg-blue-700 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] pointer-events-none"></span>
            <span className="relative z-10">View All Sessions →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
