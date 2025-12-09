"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { tantraPaths } from "@/data/content";

export default function PathsPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-32 pb-24 bg-cream min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="serif-heading text-5xl font-bold text-deep-brown mb-8 text-center">
            Tantra Paths
          </h1>
          <p className="text-lg text-deep-brown/70 text-center max-w-2xl mx-auto mb-16">
            Explore the diverse paths of Tantra and find the one that resonates
            with your spiritual journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tantraPaths.map((path) => (
              <Link
                key={path.id}
                href={`/paths/${path.id}`}
                className="group block p-8 border-2 border-deep-brown/20 hover:border-accent-red bg-white hover:bg-white/70 rounded-lg transition"
              >
                <div className="text-5xl mb-4">{path.icon}</div>
                <h2 className="serif-heading text-2xl font-bold text-deep-brown mb-3 group-hover:text-accent-red transition">
                  {path.name}
                </h2>
                <p className="text-deep-brown/70 leading-relaxed mb-4">
                  {path.description}
                </p>
                <div className="text-accent-red font-semibold group-hover:gap-2 transition inline-flex items-center gap-1">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 p-8 bg-deep-brown text-cream rounded-lg text-center">
            <h3 className="serif-heading text-2xl font-bold mb-3">
              Not sure where to start?
            </h3>
            <p className="mb-6">
              Take our Tantra Path Quiz to discover which path aligns with your
              energy and intentions.
            </p>
            <Link
              href="/start-journey"
              className="inline-block px-6 py-3 bg-accent-red hover:bg-soft-gold hover:text-deep-brown transition font-semibold rounded-sm text-cream"
            >
              TAKE THE QUIZ
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
