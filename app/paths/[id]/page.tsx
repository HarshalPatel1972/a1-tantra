"use client";

import { use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { tantraPaths } from "@/data/content";

export default function PathDetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = use(props.params);
  const path = tantraPaths.find((p) => p.id === params.id);

  if (!path) {
    return (
      <div>
        <Navbar />
        <div className="pt-32 pb-24 bg-cream min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="serif-heading text-3xl font-bold text-deep-brown mb-4">
              Path not found
            </h1>
            <Link href="/paths" className="text-accent-red font-semibold">
              Back to all paths →
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="pt-32 pb-24 bg-cream min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/paths"
              className="text-accent-red font-semibold hover:text-deep-brown transition"
            >
              ← Back to Paths
            </Link>
            <div className="text-7xl my-8">{path.icon}</div>
            <h1 className="serif-heading text-5xl font-bold text-deep-brown mb-4">
              {path.name}
            </h1>
            <p className="text-2xl text-accent-red font-semibold mb-8">
              {path.description}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12 mb-16">
            <section className="prose prose-lg max-w-none">
              <h2 className="serif-heading text-3xl font-bold text-deep-brown mb-4">
                Overview
              </h2>
              <p className="text-deep-brown/80 leading-relaxed">
                The {path.name} represents a profound spiritual pathway within
                the broader tantric tradition. This path emphasizes direct
                experience, embodied wisdom, and the integration of all aspects
                of consciousness—from the material to the transcendent.
              </p>
            </section>

            <section className="prose prose-lg max-w-none">
              <h2 className="serif-heading text-3xl font-bold text-deep-brown mb-4">
                Core Principles
              </h2>
              <ul className="space-y-3 list-none">
                <li className="flex gap-4">
                  <span className="text-accent-red">✨</span>
                  <div className="text-deep-brown/80">
                    <strong>Non-Duality:</strong> Understanding the fundamental
                    unity of consciousness
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent-red">✨</span>
                  <div className="text-deep-brown/80">
                    <strong>Energy Work:</strong> Engaging consciously with
                    vital life force (prana/shakti)
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent-red">✨</span>
                  <div className="text-deep-brown/80">
                    <strong>Embodiment:</strong> Bringing spiritual wisdom into
                    lived experience
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent-red">✨</span>
                  <div className="text-deep-brown/80">
                    <strong>Transformation:</strong> Using practices to evolve
                    consciousness
                  </div>
                </li>
              </ul>
            </section>

            <section className="prose prose-lg max-w-none">
              <h2 className="serif-heading text-3xl font-bold text-deep-brown mb-4">
                Essential Practices
              </h2>
              <p className="text-deep-brown/80 leading-relaxed">
                Begin your journey with foundational practices including
                meditation, pranayama (breathwork), mantra chanting, and
                visualization. As you deepen your practice, you may explore more
                advanced techniques under the guidance of an experienced
                teacher.
              </p>
            </section>
          </div>

          {/* CTA Section */}
          <div className="bg-accent-red text-cream p-12 rounded-lg text-center">
            <h3 className="serif-heading text-3xl font-bold mb-4">
              Ready to explore {path.name}?
            </h3>
            <p className="text-lg mb-8">
              Book a personalized session with one of our experienced guides.
            </p>
            <div className="relative inline-block group/aura">
              {/* MASTER SPIRIT SYSTEM */}
              <div className="absolute -inset-10 bg-white/5 rounded-full blur-[40px] opacity-0 group-hover/aura:opacity-100 animate-aura-breathe transition-opacity duration-700 -z-10"></div>
              <div className="absolute inset-x-0 -top-full h-full">
                <div className="absolute left-1/4 bottom-0 w-1 h-1 bg-white rounded-full opacity-0 group-hover/aura:animate-float-particle"></div>
                <div className="absolute right-1/4 bottom-0 w-1 h-1 bg-soft-gold rounded-full opacity-0 group-hover/aura:animate-float-particle [animation-delay:0.7s]"></div>
              </div>

              <Link
                href="/book-session"
                className="relative z-10 inline-block px-12 py-5 bg-cream text-accent-red font-bold uppercase tracking-[0.25em] rounded-sm hover:bg-deep-brown hover:text-white transition-all duration-700 shadow-[0_15px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden group"
              >
                {/* HI-RES SHIMMER */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[200%] group-hover:animate-shimmer-sweep"></span>
                BOOK A SESSION
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
