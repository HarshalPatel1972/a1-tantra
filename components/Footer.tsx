"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-brown text-cream pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* BRAND STATEMENT */}
        <div className="mb-12 pb-12 border-b border-soft-gold/15 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-main.webp"
              alt="A1 Tantra Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span
              className="text-2xl font-bold tracking-wider text-soft-gold"
              style={{ fontFamily: '"Vegawanty", sans-serif' }}
            >
              A1 TANTRA
            </span>
          </div>
          <p className="font-body text-sm text-cream/70 max-w-lg text-center md:text-right leading-relaxed">
            Preserving classical lineage-based tantric practices through individual in-person consultations, structured energy work, and authentic practitioner guidance across India.
          </p>
        </div>

        {/* TOP GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 mb-12">
          {/* Tantra Paths */}
          <div>
            <h4 className="font-title text-lg font-bold mb-4 text-soft-gold">Tantra Paths</h4>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <Link
                  href="/carya-tantra"
                  className="hover:text-soft-gold transition"
                >
                  Kaya Tantra
                </Link>
              </li>
              <li>
                <Link
                  href="/kriya-tantra"
                  className="hover:text-soft-gold transition"
                >
                  Energy Healing
                </Link>
              </li>
              <li>
                <Link
                  href="/yoga-tantra"
                  className="hover:text-soft-gold transition"
                >
                  Soul Tantra
                </Link>
              </li>
              <li>
                <Link
                  href="/anuttarayoga-tantra"
                  className="hover:text-soft-gold transition"
                >
                  Divine Tantra
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="font-title text-lg font-bold mb-4 text-soft-gold">Core Services</h4>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <Link
                  href="/sessions"
                  className="hover:text-soft-gold transition"
                >
                  Tantra Sessions
                </Link>
              </li>
              <li>
                <Link
                  href="/therapies"
                  className="hover:text-soft-gold transition"
                >
                  Spiritual Healing
                </Link>
              </li>
              <li>
                <Link
                  href="/advisory"
                  className="hover:text-soft-gold transition"
                >
                  Couples Advisory
                </Link>
              </li>
              <li>
                <Link
                  href="/book-session"
                  className="hover:text-soft-gold transition text-accent-red font-bold"
                >
                  Book Session →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-title text-lg font-bold mb-4 text-soft-gold">Navigation</h4>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <Link href="/about" className="hover:text-soft-gold transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-soft-gold transition"
                >
                  Resources & Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-soft-gold transition">
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link
                  href="/start-journey"
                  className="hover:text-soft-gold transition"
                >
                  Start Journey
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Disclaimers */}
          <div>
            <h4 className="font-title text-lg font-bold mb-4 text-soft-gold">Legal & Safety</h4>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <Link href="/privacy" className="hover:text-soft-gold transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-soft-gold transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="hover:text-soft-gold transition"
                >
                  Medical Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-8 border-t border-cream/10 text-xs font-body text-cream/50 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p>© {currentYear} A1 Tantra. All rights reserved.</p>
          <p>
            Disclaimer: All services are in-person spiritual consultations and non-clinical therapy. Not a substitute for medical or psychological care.
          </p>
        </div>
      </div>
    </footer>
  );
}
