"use client";

import Link from "next/link";

// Social Icon Components
const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
  </svg>
);

const FacebookIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.571.906-2.859 2.309-3.623 3.957-1.686-1.307-2.795-3.23-2.795-5.332 0-4.465 3.678-8.09 8.199-8.09 1.331 0 2.61.263 3.824.737 1.404-.161 2.896.766 3.28 2.207.077.243.12.501.12.77 0 .992-.303 1.926-.823 2.71zm-10.514 5.306c.28.355.645.656 1.07.882l-.043.289c-.36 2.15-.175 4.297.567 6.255l.237.759-.774.375c-1.577.766-2.82 1.737-3.63 2.95-.17.259-.32.524-.451.793-.41-.195-.802-.428-1.17-.692.305-.71.747-1.365 1.344-1.956.278-.288.573-.551.877-.795l-.052-.315c-.22-1.328-.215-2.68.014-4.01l.087-.519-.51-.248c-.556-.271-1.049-.657-1.455-1.137.31-.76.804-1.426 1.449-1.933z" />
  </svg>
);

const EmailIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const LinkedInIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: InstagramIcon,
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: FacebookIcon,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me",
      icon: WhatsAppIcon,
    },
    {
      name: "Email",
      href: "mailto:hello@a1tantra.com",
      icon: EmailIcon,
    },
  ];

  return (
    <footer className="bg-deep-brown text-cream pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
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
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-cream hover:text-soft-gold transition-colors duration-200"
                >
                  <IconComponent className="w-6 h-6" />
                </a>
              );
            })}
          </div>

          {/* Brand & Copyright */}
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
