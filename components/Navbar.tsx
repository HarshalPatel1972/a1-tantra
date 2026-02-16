"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

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
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { label: "RESOURCES", href: "/resources" },
    { label: "TANTRA PATHS", href: "#tantra-paths" },
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
            ? "bg-stone-100/80 backdrop-blur-lg border-b border-deep-brown/20 shadow-lg"
            : "bg-transparent border-transparent"
        }
      `}
    >
      {/* DESKTOP NAVBAR */}
      <div className="hidden md:flex relative w-full h-[80px] md:h-[96px] lg:h-[104px] xl:h-[112px] 2xl:h-[120px] items-center px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7">
        {/* LEFT LINKS - FLEX LEFT SIDE */}
        <div className="flex gap-[10px] md:gap-[12px] lg:gap-[14px] xl:gap-[16px] 2xl:gap-[20px] items-center flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="font-nav text-[11px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-base font-semibold uppercase tracking-wide text-deep-brown hover:text-accent-red transition-colors duration-200 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CENTER LOGO - FLEX CENTER */}
        <Link
          href="/"
          className={`
            font-bold tracking-tight text-[#1D4ED8] select-none flex-shrink-0 flex items-center gap-[8px] md:gap-[10px] lg:gap-[12px] xl:gap-[14px] 2xl:gap-[16px]
            transition-all duration-700 ease-out leading-none
            ${
              scrolled
                ? "text-[24px] md:text-[28px] lg:text-[32px] xl:text-[40px] 2xl:text-[48px]"
                : "text-[40px] md:text-[54px] lg:text-[62px] xl:text-[70px] 2xl:text-[84px]"
            }
          `}
          style={{
            fontFamily: '"Vegawanty", sans-serif',
            letterSpacing: "0.02em",
            fontWeight: "700",
          }}
        >
          <Image
            src="/images/logo-main.png"
            alt="A1 Tantra Logo"
            width={110}
            height={110}
            priority
            unoptimized
            className={`flex-shrink-0 transition-all duration-700 ease-out object-contain relative -top-[0.05em] ${
              scrolled
                ? "w-[24px] md:w-[28px] lg:w-[32px] xl:w-[40px] 2xl:w-[48px] h-[24px] md:h-[28px] lg:h-[32px] xl:h-[40px] 2xl:h-[48px]"
                : "w-[40px] md:w-[54px] lg:w-[62px] xl:w-[70px] 2xl:w-[84px] h-[40px] md:h-[54px] lg:h-[62px] xl:h-[70px] 2xl:h-[84px]"
            }`}
          />
          <span>A1 TANTRA</span>
        </Link>

        {/* RIGHT LINKS - FLEX RIGHT SIDE */}
        <div className="flex gap-[10px] md:gap-[12px] lg:gap-[14px] xl:gap-[16px] 2xl:gap-[20px] items-center justify-end flex-1">
          {rightLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-nav text-[11px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-base font-semibold uppercase tracking-wide text-deep-brown hover:text-accent-red transition-colors duration-200 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          <button
            className="text-deep-brown hover:text-accent-red transition-colors duration-200"
            aria-label="Search"
          >
            <SearchIcon className="w-[18px] md:w-[20px] lg:w-[22px] xl:w-[24px] 2xl:w-[28px] h-[18px] md:h-[20px] lg:h-[22px] xl:h-[24px] 2xl:h-[28px]" />
          </button>

          {/* Auth Buttons */}
          {isAuthenticated ? (
            <div className="flex gap-[10px] md:gap-[12px] lg:gap-[14px] items-center">
              <div className="text-[11px] md:text-[13px] lg:text-[14px] text-deep-brown font-semibold">
                {user?.name}
              </div>
              <button
                onClick={logout}
                className="font-nav text-[11px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-base font-semibold uppercase tracking-wide text-deep-brown hover:text-accent-red transition-colors duration-200 whitespace-nowrap"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-[10px] md:gap-[12px] lg:gap-[14px] items-center">
              <Link
                href="/auth/login"
                className="font-nav text-[11px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-base font-semibold uppercase tracking-wide text-deep-brown hover:text-accent-red transition-colors duration-200 whitespace-nowrap"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="font-nav text-[11px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-base font-semibold uppercase tracking-wide px-3 py-1 md:px-4 md:py-2 bg-accent-red text-cream rounded-sm relative overflow-hidden group whitespace-nowrap"
              >
                <span className="absolute inset-0 bg-red-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] pointer-events-none"></span>
                <span className="relative z-10">Join</span>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <div className="md:hidden flex relative max-w-7xl mx-auto px-6 pt-4 pb-3 items-center justify-between">
        {/* HAMBURGER MENU */}
        <button
          className="text-deep-brown hover:text-accent-red transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <HamburgerIcon className="w-6 h-6" />
        </button>

        {/* MOBILE LOGO */}
        <Link
          href="/"
          className="font-bold text-4xl sm:text-5xl text-[#1D4ED8] flex items-center gap-4 leading-none px-2"
          style={{ fontFamily: '"Vegawanty", sans-serif' }}
        >
          <img
            src="/images/logo-main.png"
            alt="A1 Tantra Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 object-contain relative -top-[3px]"
          />
          <span>A1 TANTRA</span>
        </Link>

        {/* MOBILE RIGHT ICONS */}
        <div className="flex gap-4 items-center">
          <button
            className="text-deep-brown hover:text-accent-red transition-colors"
            aria-label="Search"
          >
            <SearchIcon className="w-5 h-5" />
          </button>
          {isAuthenticated && (
            <div className="text-xs text-deep-brown font-semibold">
              {user?.name?.split(' ')[0]}
            </div>
          )}
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="md:hidden bg-stone-100/80 backdrop-blur-lg border-t border-deep-brown/20 pb-4 px-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => {
                handleSmoothScroll(e, link.href);
                setIsOpen(false);
              }}
              className="block font-nav text-base font-semibold uppercase tracking-wide text-deep-brown hover:text-accent-red transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
          {rightLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block font-nav text-base font-semibold uppercase tracking-wide text-deep-brown hover:text-accent-red transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block font-nav text-base font-semibold uppercase tracking-wide text-deep-brown hover:text-accent-red transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </Link>

          {/* Mobile Auth Section */}
          <div className="border-t border-deep-brown/20 pt-3 mt-3 space-y-2">
            {isAuthenticated ? (
              <>
                <div className="text-sm text-deep-brown font-semibold py-2">
                  Welcome, {user?.name}!
                </div>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left font-nav text-base font-semibold uppercase tracking-wide text-deep-brown hover:text-accent-red transition-colors py-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="block font-nav text-base font-semibold uppercase tracking-wide text-deep-brown hover:text-accent-red transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  className="block w-full text-center py-2 bg-accent-red text-cream font-semibold uppercase rounded-sm relative overflow-hidden group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="absolute inset-0 bg-red-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] pointer-events-none"></span>
                  <span className="relative z-10">Join Now</span>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
