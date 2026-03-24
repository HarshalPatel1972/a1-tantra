"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import GuideSection from "@/components/GuideSection";

export default function AboutPage() {
  return (
    <div className="bg-cream">
      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-title text-6xl md:text-8xl font-black text-deep-brown mb-12 leading-none">
            About <span className="text-accent-red italic">A1 Tantra</span>
          </h1>

          <div className="space-y-16">
            <section className="space-y-6">
              <h2 className="font-title text-3xl font-bold text-deep-brown">
                Our Mission
              </h2>
              <p className="font-body text-lg text-deep-brown/80 leading-relaxed">
                A1 Tantra was created with a singular mission: to illuminate the
                path of Tantra with authenticity, clarity, and compassion. In a
                world where Tantra is often misunderstood, appropriated, or
                commercialized, we stand as a beacon for seekers who want to
                engage with these sacred teachings respectfully.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="font-title text-3xl font-bold text-deep-brown">
                Our Story
              </h2>
              <div className="font-body text-lg text-deep-brown/80 space-y-4 leading-relaxed">
                <p>
                  Founded by practitioners and scholars dedicated to authentic
                  Tantra, A1 Tantra emerged from a deep recognition that modern
                  seekers deserved access to genuine, well-researched teachings.
                </p>
                <p>
                  We believe that Tantra is not a shortcut to enlightenment, nor
                  is it merely about sexuality. It is a profound philosophical and
                  practical system with roots spanning thousands of years.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <GuideSection />

      <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="space-y-8">
          <h2 className="font-title text-4xl font-bold text-deep-brown">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { t: "Authenticity", d: "We honor the tradition and lineages." },
              { t: "Clarity", d: "Complex teachings made accessible." },
              { t: "Compassion", d: "Meeting every seeker where they are." },
              { t: "Safety", d: "Respectful and responsible discovery." }
            ].map((v, i) => (
              <div key={i} className="p-6 bg-white/50 border border-deep-brown/5 rounded-2xl">
                <h3 className="font-title text-xl font-bold text-accent-red mb-2">{v.t}</h3>
                <p className="font-body text-deep-brown/70">{v.d}</p>
              </div>
            ))}
          </div>

          <div className="pt-12 text-center">
             <Link
                href="/contact"
                className="inline-block px-10 py-5 bg-deep-brown text-cream font-black rounded-sm hover:bg-accent-red transition uppercase tracking-widest text-sm"
              >
                Connect With Us
              </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
