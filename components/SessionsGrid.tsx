"use client";

import Link from "next/link";
import Image from "next/image";

export default function SessionsGrid() {
  const sessions = [
    {
      id: "meditation",
      title: "Tantra Meditation Session",
      image: "/images/Tantra-Meditation-Session.jpg",
      description: "Deep meditative practices rooted in tantra.",
    },
    {
      id: "breathwork",
      title: "Tantric Breathwork Session",
      image: "/images/Tantric-Breathwork-Session.jpg",
      description: "Pranayama techniques for energy activation.",
    },
    {
      id: "chakra",
      title: "Chakra Balancing Session",
      image: "/images/Chakra-Balancing-Session.jpg",
      description: "Align and balance your energy centers.",
    },
    {
      id: "sound-healing",
      title: "Sound Healing + Tantra Flow",
      image: "/images/Sound-Tantra.jpg",
      description: "Sacred sounds for transformation.",
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
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-deep-brown/5"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={session.image}
                  alt={session.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={90}
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-title text-xl font-bold text-deep-brown mb-2 group-hover:text-accent-red transition-colors">
                  {session.title}
                </h3>
                <p className="text-sm text-deep-brown/70 mb-6 flex-grow leading-relaxed">
                  {session.description}
                </p>
                <div className="flex items-center text-accent-red text-[10px] font-bold uppercase tracking-widest gap-2">
                  <span>View Details</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Sessions CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/sessions"
            className="inline-block px-8 py-4 bg-accent-red text-cream font-bold rounded-lg relative overflow-hidden group shadow-lg hover:shadow-xl"
          >
            <span className="absolute inset-0 bg-red-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] pointer-events-none"></span>
            <span className="relative z-10">View All Sessions →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
