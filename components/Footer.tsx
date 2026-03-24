"use client";

import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      href: "https://instagram.com",
      color: "#E4405F",
    },
    {
      name: "WhatsApp",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.411 0 .01 5.403.007 12.04c0 2.12.552 4.188 1.598 6.048L0 24l6.105-1.602a11.81 11.81 0 005.937 1.598h.005c6.637 0 12.038-5.404 12.041-12.042a11.82 11.82 0 00-3.526-8.51" />
        </svg>
      ),
      href: "https://wa.me/919217821866",
      color: "#25D366",
    },
    // {
    //   name: "Twitter",
    //   icon: "ri-twitter-x-fill",
    //   href: "https://twitter.com",
    //   color: "#1DA1F2",
    // },
    // {
    //   name: "LinkedIn",
    //   icon: "ri-linkedin-box-fill",
    //   href: "https://linkedin.com",
    //   color: "#0A66C2",
    // },
    // {
    //   name: "Email",
    //   icon: "ri-mail-fill",
    //   href: "mailto:hello@a1tantra.com",
    //   color: "#E43A1D",
    // },
  ];

  return (
    <footer className="bg-deep-brown text-cream pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 mb-12">
          {/* Tantra Paths */}
          <div>
            <h4 className="font-title text-lg font-bold mb-4">Tantra Paths</h4>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <Link
                  href="/paths/kriya"
                  className="hover:text-soft-gold transition"
                >
                  Kriya Tantra
                </Link>
              </li>
              <li>
                <Link
                  href="/paths/carya"
                  className="hover:text-soft-gold transition"
                >
                  Carya Tantra
                </Link>
              </li>
              <li>
                <Link
                  href="/paths/yoga"
                  className="hover:text-soft-gold transition"
                >
                  Yoga Tantra
                </Link>
              </li>
              <li>
                <Link
                  href="/paths/anuttarayoga"
                  className="hover:text-soft-gold transition"
                >
                  Anuttarayoga Tantra
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-title text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <Link
                  href="/resources"
                  className="hover:text-soft-gold transition"
                >
                  All Resources
                </Link>
              </li>
              {/* Temp removed until pages are ready 
              <li>
                <Link
                  href="/resources/beginner"
                  className="hover:text-soft-gold transition"
                >
                  Beginner Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/rituals"
                  className="hover:text-soft-gold transition"
                >
                  Rituals & Practices
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/breathwork"
                  className="hover:text-soft-gold transition"
                >
                  Breathwork
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/mantras"
                  className="hover:text-soft-gold transition"
                >
                  Mantras
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/myth-busting"
                  className="hover:text-soft-gold transition"
                >
                  Myth-Busting
                </Link>
              </li>
              */}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-title text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <Link href="/about" className="hover:text-soft-gold transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-soft-gold transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/advisory"
                  className="hover:text-soft-gold transition"
                >
                  Advisory Board
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-title text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <Link href="/terms" className="hover:text-soft-gold transition">
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-soft-gold transition"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="hover:text-soft-gold transition"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/20 pt-8">
          {/* FIXED ICON CSS */}
          <style>{`
            .social-icon {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: 44px;
              height: 44px;
              border-radius: 9999px;
              cursor: pointer;
              transition: transform 0.3s ease, color 0.3s ease;
              text-decoration: none;
            }

            /* ALWAYS VISIBLE ICONS */
            .social-icon svg {
              width: 24px;
              height: 24px;
              color: #C29A76 !important;
              opacity: 1 !important;
              line-height: 1;
              transition: color 0.3s ease;
            }

            /* Hover */
            .social-icon:hover {
              transform: scale(1.15);
            }

            .social-icon:hover svg {
              color: var(--social-color) !important;
            }
          `}</style>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title={social.name}
                style={
                  { "--social-color": social.color } as React.CSSProperties
                }
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="font-logo text-4xl font-bold text-center mb-4">
            A1 TANTRA
          </div>
          <p className="font-body text-center text-cream/60 text-sm">
            © {new Date().getFullYear()} A1 Tantra. All rights reserved. Sacred
            Tantra for the Modern Seeker.
          </p>
        </div>
      </div>
    </footer>
  );
}
