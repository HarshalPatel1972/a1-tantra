"use client";

import Footer from "@/components/Footer";
import Link from "next/link";

export default function ResourcesPage() {
  const resources = [
    { title: "Beginner Guides", icon: "📖" },
    { title: "Rituals & Practices", icon: "🙏" },
    { title: "Breathwork", icon: "🌬️" },
    { title: "Mantras", icon: "✨" },
    { title: "Real Talk", icon: "💬" },
    { title: "Myth-Busting", icon: "🔍" },
  ];

  return (
    <div>
      <div className="pt-32 pb-24 bg-cream min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="serif-heading text-5xl font-bold text-deep-brown mb-8 text-center">
            Resources
          </h1>
          <p className="text-lg text-deep-brown/70 text-center max-w-2xl mx-auto mb-16">
            Everything you need to begin and deepen your Tantra practice.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, idx) => (
              <Link
                key={idx}
                href="#"
                className="p-8 border-2 border-deep-brown/20 hover:border-accent-red bg-white rounded-lg transition group"
              >
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="serif-heading text-2xl font-bold text-deep-brown group-hover:text-accent-red transition">
                  {resource.title}
                </h3>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-deep-brown/70 mb-6">
              More resources coming soon. Subscribe to our newsletter for
              updates.
            </p>
            <Link
              href="/#newsletter"
              className="inline-block px-6 py-3 bg-accent-red text-cream font-semibold rounded-sm hover:bg-deep-brown transition"
            >
              SUBSCRIBE
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
