"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TherapiesPage() {
  const therapies = [
    {
      title: "Tantric Massage Therapy",
      description: "Experience the healing power of sacred touch.",
    },
    {
      title: "Energy Healing Sessions",
      description: "Work with your energetic body for holistic wellness.",
    },
    {
      title: "Couples Tantra Workshops",
      description: "Deepen intimacy and connection with your partner.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="pt-32 pb-24 bg-cream min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="serif-heading text-5xl font-bold text-deep-brown mb-8">
            Online Spiritual Healing
          </h1>

          <div className="space-y-8">
            {therapies.map((therapy, idx) => (
              <div
                key={idx}
                className="p-8 bg-white border-2 border-deep-brown/20 hover:border-accent-red rounded-lg transition"
              >
                <h3 className="serif-heading text-2xl font-bold text-deep-brown mb-2">
                  {therapy.title}
                </h3>
                <p className="text-deep-brown/70">{therapy.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-accent-red text-cream rounded-lg text-center">
            <p>
              More therapy offerings coming soon. Contact us for custom
              sessions.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
