"use client";

import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: "ri-instagram-line",
      href: "https://instagram.com",
      color: "#E4405F",
    },
    // {
    //   name: "Facebook",
    //   icon: "ri-facebook-fill",
    //   href: "https://facebook.com",
    //   color: "#1877F2",
    // },
    {
      name: "WhatsApp",
      icon: "ri-whatsapp-fill",
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Tantra Paths */}
          <div>
            <h4 className="font-title text-lg font-bold mb-4">Tantra Paths</h4>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <Link
                  href="/paths/kundalini"
                  className="hover:text-soft-gold transition"
                >
                  Kundalini
                </Link>
              </li>
              <li>
                <Link
                  href="/paths/shakta"
                  className="hover:text-soft-gold transition"
                >
                  Shakta
                </Link>
              </li>
              <li>
                <Link
                  href="/paths/kaula"
                  className="hover:text-soft-gold transition"
                >
                  Kaula
                </Link>
              </li>
              <li>
                <Link
                  href="/paths/tibetan"
                  className="hover:text-soft-gold transition"
                >
                  Tibetan
                </Link>
              </li>
              <li>
                <Link
                  href="/paths/left-hand"
                  className="hover:text-soft-gold transition"
                >
                  Left-Hand / Right-Hand
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
            .social-icon i {
              font-size: 24px;
              color: #C29A76 !important;
              opacity: 1 !important;
              visibility: visible !important;
              line-height: 1;
            }

            /* Hover */
            .social-icon:hover {
              transform: scale(1.15);
            }

            .social-icon:hover i {
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
                style={{ ["--social-color" as any]: social.color }}
              >
                <i className={social.icon}></i>
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
