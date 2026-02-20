"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function SessionsPage() {
  const sessions = [
    {
      id: "meditation",
      title: "Tantra Meditation Session",
      image: "/images/Tantra-Meditation-Session.jpg",
      description: "Deep meditative practices rooted in tantra.",
      details:
        "Explore guided Tantric meditations that help you access deeper states of consciousness and inner peace.",
    },
    {
      id: "breathwork",
      title: "Tantric Breathwork Session",
      image: "/images/Tantric-Breathwork-Session.jpg",
      description: "Pranayama techniques for energy activation.",
      details:
        "Learn pranayama techniques to awaken and circulate vital life force through your energetic body.",
    },
    {
      id: "chakra",
      title: "Chakra Balancing Session",
      image: "/images/Chakra-Balancing-Session.jpg",
      description: "Align and balance your energy centers.",
      details:
        "Work with the seven chakras to clear blockages and harmonize your energetic system.",
    },
    {
      id: "sound-healing",
      title: "Sound Healing + Tantra Flow",
      image: "/images/Sound-Tantra.jpg",
      description: "Sacred sounds for transformation.",
      details:
        "Experience the transformative power of sacred sounds, mantras, and vibrational healing.",
    },
  ];

  return (
    <div>
      <div className="pt-32 pb-24 bg-cream min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="serif-heading text-5xl font-bold text-deep-brown mb-8 text-center">
            Tantra Services in India
          </h1>
          <p className="text-lg text-deep-brown/70 text-center max-w-2xl mx-auto mb-16">
            Choose a session that aligns with your current journey and
            intentions.
          </p>

          <div className="space-y-8">
            {sessions.map((session) => (
              <div
                key={session.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border border-deep-brown/10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative h-80 md:h-96 overflow-hidden">
                    <Image
                      src={session.image}
                      alt={session.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-black/30 to-transparent"></div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 md:p-10 bg-white flex flex-col justify-center">
                    <h2 className="font-title text-3xl md:text-4xl font-bold text-deep-brown mb-3 group-hover:text-accent-red transition">
                      {session.title}
                    </h2>
                    <p className="text-sm text-accent-red font-semibold uppercase tracking-widest mb-4">
                      {session.description}
                    </p>
                    <p className="text-deep-brown/80 leading-relaxed mb-6 text-lg">
                      {session.details}
                    </p>
                    <Link
                      href="/book-session"
                      className="inline-block w-fit px-8 py-3 bg-linear-to-r from-accent-red to-deep-brown text-cream font-semibold rounded-sm hover:shadow-lg transition-all"
                    >
                      BOOK NOW →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 p-8 bg-deep-brown text-cream rounded-lg">
            <h3 className="serif-heading text-2xl font-bold mb-4">
              Custom Sessions
            </h3>
            <p className="mb-6">
              Looking for a specific combination of practices? We offer
              personalized sessions tailored to your unique needs and goals.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-2 bg-accent-red text-cream font-semibold rounded-sm hover:bg-soft-gold hover:text-deep-brown transition"
            >
              INQUIRE ABOUT CUSTOM SESSIONS
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
