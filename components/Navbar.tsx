"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import SearchModal from "./SearchModal";

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

const ChevronDownIcon = ({ className = "w-4 h-4" }) => (
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
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
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
            ? "bg-stone-100/80 backdrop-blur-md border-b border-deep-brown shadow-lg"
            : "bg-cream border-transparent"
        }
      `}
    >
      {/* DESKTOP NAVBAR */}
      <div className="hidden md:flex relative w-full h-[90px] xl:h-[100px] items-center px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* LEFT SIDE - LOGO & TITLE */}
        <Link
          href="/"
          className={`
            font-bold tracking-tight text-[#1D4ED8] select-none flex-shrink-0 flex items-center pt-2 gap-[8px] md:gap-[10px] lg:gap-[12px] xl:gap-[14px]
            transition-all duration-700 ease-out leading-none
            ${
              scrolled
                ? "text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px]"
                : "text-[32px] md:text-[40px] lg:text-[48px] xl:text-[54px]"
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
            width={80}
            height={80}
            priority
            unoptimized
            className={`flex-shrink-0 transition-all duration-700 ease-out object-contain relative -top-[0.05em] ${
              scrolled
                ? "w-[24px] md:w-[32px] lg:w-[40px] xl:w-[48px] h-[24px] md:h-[32px] lg:h-[40px] xl:h-[48px]"
                : "w-[40px] md:w-[54px] lg:w-[68px] xl:w-[80px] h-[40px] md:h-[54px] lg:h-[68px] xl:h-[80px]"
            }`}
          />
          <span>A1 TANTRA</span>
        </Link>

        {/* RIGHT SIDE - NAVIGATION */}
        <div className="flex gap-[15px] lg:gap-[25px] xl:gap-[35px] items-center justify-end flex-1">
          <Link
            href="/about"
            className="font-nav text-[12px] lg:text-[14px] xl:text-[15px] font-semibold uppercase tracking-widest text-deep-brown hover:text-accent-red transition-colors duration-200 whitespace-nowrap"
          >
            ABOUT
          </Link>

          {/* EXPLORE DROPDOWN */}
          <div
            className="relative group py-4"
            onMouseEnter={() => setIsExploreOpen(true)}
            onMouseLeave={() => setIsExploreOpen(false)}
          >
            <button className="flex items-center gap-1 font-nav text-[12px] lg:text-[14px] xl:text-[15px] font-bold uppercase tracking-widest text-deep-brown group-hover:text-accent-red transition-colors duration-200 whitespace-nowrap">
              EXPLORE{" "}
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform duration-300 ${
                  isExploreOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white border border-deep-brown/10 shadow-2xl rounded-xl overflow-hidden transition-all duration-300 transform origin-top ${
                isExploreOpen
                  ? "opacity-100 scale-100 translate-y-2"
                  : "opacity-0 scale-95 translate-y-0 pointer-events-none"
              }`}
            >
              <div className="flex flex-col py-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      handleSmoothScroll(e, link.href);
                      setIsExploreOpen(false);
                    }}
                    className="px-6 py-3 font-nav text-[13px] font-semibold uppercase tracking-widest text-deep-brown hover:bg-cream hover:text-accent-red transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsSearchOpen(true)}
            className="text-deep-brown hover:text-accent-red transition-colors duration-200"
            aria-label="Search"
          >
            <SearchIcon className="w-[18px] lg:w-[22px] h-[18px] lg:h-[22px]" />
          </button>

          {/* Auth Section */}
          {isAuthenticated ? (
            <div className="flex gap-4 items-center">
              <div className="text-[12px] lg:text-[14px] text-deep-brown font-semibold">
                {user?.name?.split(" ")[0]}
              </div>
              <button
                onClick={logout}
                className="font-nav text-[12px] lg:text-[14px] font-semibold uppercase tracking-widest text-deep-brown hover:text-accent-red transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4 lg:gap-6">
              <Link
                href="/auth/login"
                className="font-nav text-[12px] lg:text-[14px] xl:text-[15px] font-semibold uppercase tracking-widest text-deep-brown hover:text-accent-red transition-colors duration-200 whitespace-nowrap"
              >
                Login
              </Link>
              <Link
                href="/book-session"
                className="font-nav text-[12px] lg:text-[14px] xl:text-[15px] font-bold uppercase tracking-[0.15em] px-7 py-3 bg-[#E11D48] text-white rounded-full relative overflow-hidden group whitespace-nowrap shadow-[0_4px_14px_0_rgba(225,29,72,0.39)] hover:shadow-[0_6px_20px_rgba(225,29,72,0.23)] hover:scale-105 transition-all duration-300 active:scale-95"
              >
                <span className="relative z-10">BOOK A SESSION</span>
                <span className="absolute inset-0 bg-white/10 group-hover:translate-x-full transition-transform duration-500 ease-out"></span>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <div className="md:hidden flex relative w-full px-5 py-3 items-center justify-between">
        {/* MOBILE LOGO - LEFT */}
        <Link
          href="/"
          className="font-bold text-2xl sm:text-3xl text-[#1D4ED8] flex items-center pt-2 gap-2 leading-none"
          style={{
            fontFamily: '"Vegawanty", sans-serif',
            fontWeight: "700",
          }}
        >
          <Image
            src="/images/logo-main.png"
            alt="A1 Tantra Logo"
            width={40}
            height={40}
            priority
            unoptimized
            className="flex-shrink-0 object-contain"
          />
          <span className="tracking-tighter">A1 TANTRA</span>
        </Link>

        {/* MOBILE RIGHT ICONS */}
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="text-deep-brown hover:text-accent-red transition-colors"
            aria-label="Search"
          >
            <SearchIcon className="w-5 h-5" />
          </button>
          
          <button
            className="text-deep-brown hover:text-accent-red transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <i className="ri-close-line text-2xl"></i>
            ) : (
              <HamburgerIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`md:hidden bg-cream border-t border-deep-brown/10 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 space-y-1">
          {/* Main Links */}
          <Link
            href="/about"
            className="block font-nav text-lg font-semibold uppercase tracking-[0.2em] text-deep-brown hover:text-accent-red py-3 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => {
                handleSmoothScroll(e, link.href);
                setIsOpen(false);
              }}
              className="block font-nav text-lg font-semibold uppercase tracking-[0.2em] text-deep-brown hover:text-accent-red py-3 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Auth/Action Section */}
          <div className="pt-6 mt-6 border-t border-deep-brown/10 space-y-4">
            {isAuthenticated ? (
              <>
                <div className="text-sm font-semibold text-deep-brown/60 uppercase tracking-widest">
                  Account
                </div>
                <div className="font-nav text-lg text-deep-brown font-bold uppercase transition-colors">
                  {user?.name}
                </div>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left font-nav text-lg font-semibold uppercase tracking-[0.2em] text-accent-red py-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="block font-nav text-lg font-semibold uppercase tracking-[0.2em] text-deep-brown hover:text-accent-red py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/book-session"
                  className="block w-full text-center py-4 bg-accent-red text-cream font-bold uppercase tracking-widest rounded-lg shadow-lg active:scale-[0.98] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  BOOK A SESSION
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </nav>
  );
}
