"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// SVG Icon Components
const SearchIcon = ({ className = "w-5 h-5" }) => (
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
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const UserIcon = ({ className = "w-5 h-5" }) => (
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
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const HamburgerIcon = ({ className = "w-6 h-6" }) => (
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
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "RESOURCES", href: "/resources" },
    { label: "TANTRA PATHS", href: "/paths" },
    { label: "THERAPIES", href: "/therapies" },
    { label: "SESSIONS", href: "/sessions" },
  ];

  const rightLinks = [{ label: "ABOUT", href: "/about" }];

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all duration-500 ease-out
        ${
          scrolled
            ? "bg-black/40 backdrop-blur-lg border-b border-white/20 shadow-lg"
            : "bg-transparent border-transparent"
        }
      `}
    >
      {/* DESKTOP NAVBAR */}
      <div className="hidden md:flex relative w-full h-28 items-center px-8 md:px-12 lg:px-16">
        {/* LEFT LINKS - FLUSH LEFT */}
        <div className="flex gap-6 lg:gap-5 items-center shrink-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-nav text-sm lg:text-base font-semibold uppercase tracking-wide text-white hover:text-soft-gold transition-colors duration-200 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CENTER LOGO - ABSOLUTE CENTER */}
        <Link
          href="/"
          className={`
            font-bold tracking-tight text-[#E43A1D] select-none
            absolute left-1/2 -translate-x-1/2 transition-all duration-700 ease-out
            drop-shadow-sm hover:drop-shadow-md
            ${
              scrolled
                ? "text-3xl lg:text-4xl top-1/2 -translate-y-1/2"
                : "text-6xl lg:text-[70px] top-[55%] -translate-y-1/2"
            }
          `}
          style={{
            fontFamily: '"Vegawanty", sans-serif',
            letterSpacing: "0.02em",
            textShadow: "0 3px 12px rgba(228, 58, 29, 0.25)",
            fontWeight: "700",
          }}
        >
          A1 TANTRA
        </Link>

        {/* RIGHT LINKS - FLUSH RIGHT */}
        <div className="flex gap-6 lg:gap-10 items-center ml-auto shrink-0">
          {rightLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-nav text-sm lg:text-base font-semibold uppercase tracking-wide text-white hover:text-soft-gold transition-colors duration-200 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          <button
            className="text-white hover:text-soft-gold transition-colors duration-200"
            aria-label="Search"
          >
            <SearchIcon className="w-5 lg:w-6 h-5 lg:h-6" />
          </button>
          <button
            className="text-white hover:text-soft-gold transition-colors duration-200"
            aria-label="User account"
          >
            <UserIcon className="w-5 lg:w-6 h-5 lg:h-6" />
          </button>
        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <div className="md:hidden flex relative max-w-7xl mx-auto px-6 h-16 items-center justify-between">
        {/* HAMBURGER MENU */}
        <button
          className="text-mystique-taupe hover:text-accent-red transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <HamburgerIcon className="w-6 h-6" />
        </button>

        {/* MOBILE LOGO */}
        <Link
          href="/"
          className="font-bold text-xl text-[#E43A1D]"
          style={{ fontFamily: '"Vegawanty", sans-serif' }}
        >
          A1 TANTRA
        </Link>

        {/* MOBILE RIGHT ICONS */}
        <div className="flex gap-4">
          <button
            className="text-mystique-taupe hover:text-accent-red transition-colors"
            aria-label="Search"
          >
            <SearchIcon className="w-5 h-5" />
          </button>
          <button
            className="text-mystique-taupe hover:text-accent-red transition-colors"
            aria-label="User account"
          >
            <UserIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="md:hidden bg-cream/98 backdrop-blur-sm border-t border-black/10 pb-4 px-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block font-nav text-base font-semibold uppercase tracking-wide text-mystique-taupe hover:text-accent-red transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {rightLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block font-nav text-base font-semibold uppercase tracking-wide text-mystique-taupe hover:text-accent-red transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block font-nav text-base font-semibold uppercase tracking-wide text-mystique-taupe hover:text-accent-red transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </Link>
        </div>
      )}
    </nav>
  );
}

