"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SessionsPage() {
  const sessions = [
    {
      id: "meditation",
      title: "Tantra Meditation Session",
      icon: "",
      description: "Deep meditative practices rooted in tantra.",
      details:
        "Explore guided Tantric meditations that help you access deeper states of consciousness and inner peace.",
    },
    {
      id: "breathwork",
      title: "Tantric Breathwork Session",
      icon: "",
      description: "Pranayama techniques for energy activation.",
      details:
        "Learn pranayama techniques to awaken and circulate vital life force through your energetic body.",
    },
    {
      id: "chakra",
      title: "Chakra Balancing Session",
      icon: "",
      description: "Align and balance your energy centers.",
      details:
        "Work with the seven chakras to clear blockages and harmonize your energetic system.",
    },
    {
      id: "sound-healing",
      title: "Sound Healing + Tantra Flow",
      icon: "ðŸ”Š",
      description: "Sacred sounds for transformation.",
      details:
        "Experience the transformative power of sacred sounds, mantras, and vibrational healing.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="pt-32 pb-24 bg-cream min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="serif-heading text-5xl font-bold text-mystique-taupe mb-8 text-center">
            Our Sessions
          </h1>
          <p className="text-lg text-mystique-taupe/70 text-center max-w-2xl mx-auto mb-16">
            Choose a session that aligns with your current journey and
            intentions.
          </p>

          <div className="space-y-8">
            {sessions.map((session) => (
              <div
                key={session.id}
                className="group p-8 border-2 border-mystique-taupe/20 hover:border-accent-red bg-white rounded-lg transition"
              >
                <div className="flex items-start gap-6">
                  <div className="text-5xl flex-shrink-0">{session.icon}</div>
                  <div className="flex-1">
                    <h2 className="serif-heading text-2xl font-bold text-mystique-taupe mb-2 group-hover:text-accent-red transition">
                      {session.title}
                    </h2>
                    <p className="text-sm text-accent-red font-semibold mb-3">
                      {session.description}
                    </p>
                    <p className="text-mystique-taupe/70 leading-relaxed mb-4">
                      {session.details}
                    </p>
                    <Link
                      href="/book-session"
                      className="inline-block px-6 py-2 bg-accent-red text-cream font-semibold rounded-sm hover:bg-mystique-taupe transition"
                    >
                      BOOK NOW
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 p-8 bg-mystique-taupe text-cream rounded-lg">
            <h3 className="serif-heading text-2xl font-bold mb-4">
              Custom Sessions
            </h3>
            <p className="mb-6">
              Looking for a specific combination of practices? We offer
              personalized sessions tailored to your unique needs and goals.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-2 bg-accent-red text-cream font-semibold rounded-sm hover:bg-soft-gold hover:text-mystique-taupe transition"
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

