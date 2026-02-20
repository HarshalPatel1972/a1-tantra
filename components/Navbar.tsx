"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { searchIndex } from "@/data/search-index";

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

const CloseIcon = ({ className = "w-6 h-6" }) => (
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
      d="M6 18L18 6M6 6l12 12"
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

const Sparkles = ({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  const searchResults = useMemo(() => {
    if (searchQuery.trim().length > 1) {
      return searchIndex.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()),
      ).slice(0, 5);
    }
    return [];
  }, [searchQuery]);

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
  ];

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all duration-500 ease-out
        ${
          scrolled || isOpen
            ? "bg-stone-100/80 backdrop-blur-md border-b border-deep-brown/10 shadow-lg"
            : "bg-cream/80 backdrop-blur-md border-transparent"
        }
      `}
    >
      {/* DESKTOP NAVBAR */}
      <div className="hidden md:flex relative w-full h-[90px] xl:h-[100px] items-center px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* LEFT SIDE - LOGO & TITLE */}
        <Link
          href="/"
          className={`
            font-bold tracking-tight text-[#1D4ED8] select-none shrink-0 flex items-center pt-1 gap-2 md:gap-2.5 lg:gap-3 xl:gap-3.5
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
            className={`shrink-0 transition-all duration-700 ease-out object-contain relative -top-[0.05em] ${
              scrolled
                ? "w-6 md:w-8 lg:w-10 xl:w-12 h-6 md:h-8 lg:h-10 xl:h-12"
                : "w-10 md:w-[54px] lg:w-[68px] xl:w-20 h-10 md:h-[54px] lg:h-[68px] xl:h-20"
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
              className={`absolute top-[85%] left-1/2 -translate-x-1/2 w-56 bg-white border border-deep-brown/10 shadow-xl rounded-md overflow-hidden transition-all duration-300 transform origin-top ${
                isExploreOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="flex flex-col py-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      handleSmoothScroll(e, link.href);
                      setIsExploreOpen(false);
                    }}
                    className="px-6 py-3 font-nav text-[12px] font-semibold uppercase tracking-widest text-deep-brown hover:bg-stone-200 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* EXPANDING SEARCH BAR */}
          <div
            className={`relative flex items-center h-10 transition-all duration-500 ease-in-out px-3 rounded-md overflow-hidden ${
              isSearchHovered || isSearchFocused || searchQuery
                ? "w-48 lg:w-64 bg-stone-200"
                : "w-10 bg-transparent"
            }`}
            onMouseEnter={() => setIsSearchHovered(true)}
            onMouseLeave={() => setIsSearchHovered(false)}
          >
            <SearchIcon
              className={`shrink-0 w-[18px] lg:w-[22px] h-[18px] lg:h-[22px] transition-colors duration-300 ${
                isSearchHovered || isSearchFocused || searchQuery
                  ? "text-deep-brown"
                  : "text-deep-brown hover:text-accent-red cursor-pointer"
              }`}
            />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`ml-2 bg-transparent border-none outline-none text-sm font-nav font-medium text-deep-brown placeholder-deep-brown/50 w-full transition-opacity duration-300 ${
                isSearchHovered || isSearchFocused || searchQuery
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            />
          </div>

          {/* SEARCH RESULTS DROPDOWN */}
          {(isSearchHovered || isSearchFocused || searchQuery) &&
            searchResults.length > 0 && (
              <div className="absolute top-[85%] right-64 w-80 bg-white border border-deep-brown/10 shadow-2xl rounded-md overflow-hidden z-50">
              <div className="flex flex-col max-h-96 overflow-y-auto">
                {searchResults.map((result, idx) => (
                  <Link
                    key={idx}
                    href={result.url}
                    onClick={() => {
                      setSearchQuery("");
                      setIsSearchHovered(false);
                    }}
                    className="p-4 hover:bg-stone-100 transition-colors border-b border-stone-100 last:border-none group"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-nav font-bold text-sm text-deep-brown group-hover:text-accent-red">
                        {result.title}
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#1D4ED8] bg-blue-50 px-2 py-0.5 rounded">
                        {result.category}
                      </span>
                    </div>
                    <p className="text-xs text-deep-brown/60 line-clamp-2">
                      {result.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

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
            <div className="flex items-center gap-4 lg:gap-8 relative group/aura">
              {/* ELITE SACRED AURA SYSTEM */}
              {/* 1. Underlying Deep Resonance Glow */}
              <div className="absolute -inset-8 bg-accent-red/10 rounded-full blur-[60px] opacity-0 group-hover/aura:opacity-100 transition-opacity duration-1000 animate-aura-breathe"></div>
              
              {/* 2. Concentric Spirit Rings */}
              <div className="absolute inset-0 border border-soft-gold/30 rounded-lg opacity-0 group-hover/aura:animate-spirit-ring pointer-events-none"></div>
              <div className="absolute inset-0 border border-accent-red/20 rounded-lg opacity-0 group-hover/aura:animate-spirit-ring [animation-delay:0.5s] pointer-events-none"></div>

              {/* 3. Floating Essence Particles (Top Layer) */}
              <div className="absolute inset-x-0 -top-full h-full pointer-events-none overflow-visible">
                <div className="absolute left-1/4 bottom-0 w-1 h-1 bg-soft-gold rounded-full opacity-0 group-hover/aura:animate-float-particle [animation-delay:0.2s]"></div>
                <div className="absolute left-1/2 bottom-0 w-1.5 h-1.5 bg-accent-red rounded-full opacity-0 group-hover/aura:animate-float-particle [animation-delay:1s]"></div>
                <div className="absolute left-3/4 bottom-0 w-1 h-1 bg-white rounded-full opacity-0 group-hover/aura:animate-float-particle [animation-delay:0.5s]"></div>
              </div>

              <Link
                href="/auth/login"
                className="font-nav text-[12px] lg:text-[14px] xl:text-[15px] font-semibold uppercase tracking-widest text-deep-brown hover:text-accent-red transition-colors duration-200 whitespace-nowrap"
              >
                Login
              </Link>
              <Link
                href="/book-session"
                className="font-nav text-[12px] lg:text-[14px] xl:text-[15px] font-bold uppercase tracking-[0.2em] px-10 py-5 bg-accent-red text-white rounded-md relative overflow-hidden group whitespace-nowrap transition-all duration-500 active:scale-95 shadow-[0_10px_40px_-10px_rgba(228,68,38,0.5)] border border-white/20"
              >
                {/* HIGH-FIDELITY SHIMMER BEAM */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[200%] group-hover:animate-shimmer-sweep"></div>
                
                {/* COLOR OVERLAY TRANSITION */}
                <span className="absolute inset-0 bg-deep-brown translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
                
                <span className="relative z-10 flex items-center gap-3">
                  BOOK A SESSION
                  <Sparkles size={18} className="text-soft-gold group-hover:text-cream animate-pulse transition-colors" />
                </span>
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
          className="font-black text-2xl sm:text-3xl text-[#1D4ED8] flex items-center pt-1 gap-2 leading-none"
          style={{
            fontFamily: '"Vegawanty", sans-serif',
            fontWeight: "900",
          }}
        >
          <Image
            src="/images/logo-main.png"
            alt="A1 Tantra Logo"
            width={40}
            height={40}
            priority
            unoptimized
            className="shrink-0 object-contain"
          />
          <span className="tracking-tighter uppercase">A1 TANTRA</span>
        </Link>

        {/* MOBILE RIGHT ICONS */}
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setIsSearchHovered(!isSearchHovered)}
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
              <CloseIcon className="w-6 h-6" />
            ) : (
              <HamburgerIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE SEARCH BAR - TOGGLE */}
      {isSearchHovered && (
        <div className="md:hidden px-5 pb-3">
          <div className="relative flex items-center bg-stone-200 rounded-md px-3 h-10 w-full">
            <SearchIcon className="w-4 h-4 text-deep-brown" />
            <input
              type="text"
              autoFocus
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ml-2 bg-transparent border-none outline-none text-sm font-nav font-medium text-deep-brown placeholder-deep-brown/50 w-full"
            />
          </div>
          
          {/* MOBILE SEARCH RESULTS */}
          {searchResults.length > 0 && (
            <div className="mt-2 bg-stone-100 rounded-md overflow-hidden border border-deep-brown/5 shadow-lg">
              {searchResults.map((result, idx) => (
                <Link
                  key={idx}
                  href={result.url}
                  onClick={() => {
                    setSearchQuery("");
                    setIsSearchHovered(false);
                  }}
                  className="block p-4 border-b border-deep-brown/5 last:border-none"
                >
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-nav font-bold text-sm text-deep-brown">
                      {result.title}
                    </h4>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#1D4ED8]">
                      {result.category}
                    </span>
                  </div>
                  <p className="text-xs text-deep-brown/60 line-clamp-1">
                    {result.description}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`md:hidden bg-cream/95 backdrop-blur-lg border-t border-deep-brown/10 overflow-hidden transition-all duration-300 ease-in-out ${
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
                  className="block w-full text-center py-5 bg-accent-red text-white font-bold uppercase tracking-[0.2em] rounded-md relative overflow-hidden group active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(228,68,38,0.4)] border border-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  {/* MOBILE SPIRIT CORE */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-red via-deep-brown to-accent-red opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer-sweep pointer-events-none"></div>

                  <span className="relative z-10 flex items-center justify-center gap-3">
                    BOOK A SESSION
                    <Sparkles size={18} className="text-soft-gold animate-pulse" />
                  </span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
