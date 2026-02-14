"use client";

import Link from "next/link";

export default function OriginStory() {
  return (
    <section className="py-8 md:py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <div>
            <h2 className="serif-heading text-4xl font-bold text-deep-brown mb-8 leading-tight">
              Our Story
            </h2>
            <p className="text-lg text-deep-brown/80 leading-relaxed mb-6">
              Born from a search for truth, we created A1 Tantra to illuminate
              ancient Tantra with clarity and respect. In a world of confusion
              and appropriation, we believed there needed to be a space where
              Tantric wisdom could be taught authentically, thoughtfully, and
              accessibly.
            </p>
            <p className="text-lg text-deep-brown/80 leading-relaxed mb-8">
              Every teaching here has been reviewed by practitioners and
              scholars of various Tantra lineages. Our mission is to make the
              sacred path accessible without diluting its depth.
            </p>
            <Link
              href="/about"
              className="inline-block px-8 py-3 bg-deep-brown text-cream font-semibold rounded-sm hover:bg-accent-red transition"
            >
              READ OUR STORY
            </Link>
          </div>

          {/* Right: Key Message Box */}
          <div className="bg-deep-brown text-cream p-12 rounded-lg">
            <h3 className="serif-heading text-3xl font-bold mb-6">
              There's a lot of confusion about Tantra.
            </h3>
            <p className="text-lg text-cream/90 leading-relaxed mb-8">
              We ensure every teaching is reviewed by practitioners and
              scholars. Tantra is not what pop culture makes it out to be—it's a
              profound spiritual science with depth, rigor, and real
              transformative potential.
            </p>
            <Link
              href="/advisory"
              className="inline-flex items-center gap-2 font-semibold text-soft-gold hover:text-cream transition"
            >
              MEET OUR ADVISORY PANEL →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
