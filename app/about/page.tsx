"use client";

import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <div className="pt-32 pb-24 bg-cream min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="serif-heading text-5xl font-bold text-deep-brown mb-8">
            About A1 Tantra
          </h1>

          <div className="prose prose-lg text-deep-brown/80 space-y-8 max-w-none">
            <section>
              <h2 className="serif-heading text-3xl font-bold text-deep-brown mb-4">
                Our Mission
              </h2>
              <p>
                A1 Tantra was created with a singular mission: to illuminate the
                path of Tantra with authenticity, clarity, and compassion. In a
                world where Tantra is often misunderstood, appropriated, or
                commercialized, we stand as a beacon for seekers who want to
                engage with these sacred teachings respectfully.
              </p>
            </section>

            <section>
              <h2 className="serif-heading text-3xl font-bold text-deep-brown mb-4">
                Our Story
              </h2>
              <p>
                Founded by practitioners and scholars dedicated to authentic
                Tantra, A1 Tantra emerged from a deep recognition that modern
                seekers deserved access to genuine, well-researched teachings.
                Every guide, practice, and resource on this platform has been
                carefully reviewed by accomplished Tantra practitioners,
                scholars, and lineage holders.
              </p>
              <p>
                We believe that Tantra is not a shortcut to enlightenment, nor
                is it merely about sexuality. It is a profound philosophical and
                practical system with roots spanning thousands of years, diverse
                schools of thought, and real, transformative power when
                approached with reverence and dedication.
              </p>
            </section>

            <section>
              <h2 className="serif-heading text-3xl font-bold text-deep-brown mb-4">
                Our Values
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-4">
                  <span className="text-accent-red text-xl">•</span>
                  <div>
                    <strong className="text-deep-brown">Authenticity:</strong>{" "}
                    We honor the lineages and traditions from which these
                    teachings come.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent-red text-xl">•</span>
                  <div>
                    <strong className="text-deep-brown">Clarity:</strong> We
                    make complex teachings accessible without diluting their
                    depth.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent-red text-xl">•</span>
                  <div>
                    <strong className="text-deep-brown">Compassion:</strong> We
                    meet seekers where they are, honoring all levels of
                    practice.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent-red text-xl">•</span>
                  <div>
                    <strong className="text-deep-brown">Safety:</strong> We
                    create a space where sacred sexuality and transformation are
                    discussed openly, respectfully, and responsibly.
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="serif-heading text-3xl font-bold text-deep-brown mb-4">
                The Advisory Panel
              </h2>
              <p>
                At the heart of our authenticity is our Advisory Panel—a council
                of accomplished Tantra practitioners, scholars, and lineage
                holders who review all teachings on A1 Tantra. This diverse
                group ensures that our content honors traditional knowledge
                while remaining accessible to modern seekers.
              </p>
              <p>
                Each member brings their own expertise: some are rooted in
                Shakta Tantra traditions, others in Kundalini practices, Tibetan
                Buddhism, and contemporary tantric studies. Together, they
                create a multi-perspective approach to Tantra that is rigorous,
                respectful, and radiant with living wisdom.
              </p>
              <Link
                href="/advisory"
                className="inline-block mt-6 px-6 py-3 bg-accent-red text-cream font-semibold rounded-sm hover:bg-deep-brown transition"
              >
                MEET THE ADVISORY PANEL
              </Link>
            </section>

            <section>
              <h2 className="serif-heading text-3xl font-bold text-deep-brown mb-4">
                Contact Us
              </h2>
              <p>
                Have questions or want to collaborate? We&apos;d love to hear from
                you.
              </p>
              <Link
                href="/contact"
                className="inline-block mt-4 px-6 py-3 border-2 border-deep-brown text-deep-brown font-semibold rounded-sm hover:bg-deep-brown hover:text-cream transition"
              >
                SEND A MESSAGE
              </Link>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
