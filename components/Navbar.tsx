"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
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

// Eye Comfort Mode Icons
const SunIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <circle cx="12" cy="12" r="5" />
    <path strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const MoonIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
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
  const { isDark, toggleTheme } = useTheme();

  const searchResults = useMemo(() => {
    if (searchQuery.trim().length > 1) {
      return searchIndex
        .filter(
          (item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        .slice(0, 5);
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
            font-bold tracking-tight text-brand-blue select-none shrink-0 flex items-center pt-1 gap-2 md:gap-2.5 lg:gap-3 xl:gap-3.5
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
            src="/images/logo-main.webp"
            alt="A1 Tantra Logo"
            width={80}
            height={80}
            priority
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
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-2 py-0.5 rounded">
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
              {/* Eye Comfort Toggle */}
              <button
                onClick={toggleTheme}
                className="relative w-10 h-10 flex items-center justify-center rounded-full text-deep-brown hover:text-accent-red transition-all duration-300 hover:bg-deep-brown/5"
                aria-label={isDark ? "Switch to light mode" : "Switch to eye comfort mode"}
                title={isDark ? "Light Mode" : "Eye Comfort Mode"}
              >
                <span className={`absolute transition-all duration-500 ${isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`}>
                  <MoonIcon className="w-[18px] lg:w-[20px] h-[18px] lg:h-[20px]" />
                </span>
                <span className={`absolute transition-all duration-500 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`}>
                  <SunIcon className="w-[18px] lg:w-[20px] h-[18px] lg:h-[20px]" />
                </span>
              </button>
              <div className="text-[12px] lg:text-[14px] text-deep-brown font-semibold">
                {user?.name?.split(" ")[0]}
              </div>
              <button
                onClick={logout}
                className="font-nav text-[12px] lg:text-[14px] font-semibold uppercase tracking-widest text-deep-brown hover:text-brand-blue transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4 lg:gap-6">
              {/* Eye Comfort Toggle */}
              <button
                onClick={toggleTheme}
                className="relative w-10 h-10 flex items-center justify-center rounded-full text-deep-brown hover:text-accent-red transition-all duration-300 hover:bg-deep-brown/5"
                aria-label={isDark ? "Switch to light mode" : "Switch to eye comfort mode"}
                title={isDark ? "Light Mode" : "Eye Comfort Mode"}
              >
                <span className={`absolute transition-all duration-500 ${isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`}>
                  <MoonIcon className="w-[18px] lg:w-[20px] h-[18px] lg:h-[20px]" />
                </span>
                <span className={`absolute transition-all duration-500 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`}>
                  <SunIcon className="w-[18px] lg:w-[20px] h-[18px] lg:h-[20px]" />
                </span>
              </button>
              <Link
                href="/auth/login"
                className="font-nav text-[12px] lg:text-[14px] xl:text-[15px] font-semibold uppercase tracking-widest text-deep-brown hover:text-accent-red transition-colors duration-200 whitespace-nowrap"
              >
                Login
              </Link>
              <Link
                href="/book-session"
                className="font-nav text-[12px] lg:text-[14px] xl:text-[15px] font-black uppercase tracking-[0.15em] px-8 py-3.5 text-white rounded-xl relative overflow-hidden group whitespace-nowrap transition-all duration-300 active:scale-95 shadow-xl border-2 border-[#1e3a8a] flex items-center justify-center"
                style={{ backgroundColor: "#1D4ED8" }}
              >
                <span className="absolute inset-0 bg-black/20 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 pointer-events-none"></span>
                <span className="relative z-10">BOOK A SESSION</span>
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
          className="font-black text-2xl sm:text-3xl text-brand-blue flex items-center pt-1 gap-2 leading-none"
          style={{
            fontFamily: '"Vegawanty", sans-serif',
            fontWeight: "900",
          }}
        >
          <Image
            src="/images/logo-main.webp"
            alt="A1 Tantra Logo"
            width={40}
            height={40}
            priority
            className="shrink-0 object-contain"
          />
          <span className="tracking-tighter uppercase">A1 TANTRA</span>
        </Link>

        {/* MOBILE RIGHT ICONS */}
        <div className="flex gap-4 items-center">
          {/* WhatsApp Icon (Mobile only) */}
          <Link
            href="https://wa.me/919217821866"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-0.5 group animate-pulse-slow"
            aria-label="Chat on WhatsApp"
          >
            <div className="text-[#25D366] hover:scale-110 transition-transform flex items-center justify-center p-1 bg-white rounded-full shadow-md border border-[#25D366]/20">
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.8 69.4 27.2 106.2 27.2h.1c122.3 0 222-99.6 222-222 0-59.3-23-115.1-65.1-157.1zM223.9 446.3c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 365.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54 81.2 54 130.5 0 101.7-82.8 184.5-184.5 184.5zm100.5-138c-5.5-2.8-32.6-16.1-37.7-18-5.1-1.9-8.8-2.8-12.4 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.5-.3-8.5 2.4-11.2 2.5-2.6 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.5 5.5-9.2 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.4-29.9-17-41.2-4.5-10.9-9.1-9.3-12.4-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.6-13.3 37.2-26.2 4.6-12.9 4.6-24 3.2-26.2-1.3-2.2-5-3.5-10.5-6.3z" />
              </svg>
            </div>
            <span className="text-[10px] whitespace-nowrap font-black tracking-tight text-[#128C7E] leading-none uppercase">
              REPLY IN MINS
            </span>
          </Link>

          {/* Eye Comfort Toggle (Mobile) */}
          <button
            onClick={toggleTheme}
            className="relative w-8 h-8 flex items-center justify-center rounded-full text-deep-brown hover:text-accent-red transition-all duration-300"
            aria-label={isDark ? "Switch to light mode" : "Switch to eye comfort mode"}
          >
            <span className={`absolute transition-all duration-500 ${isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`}>
              <MoonIcon className="w-[18px] h-[18px]" />
            </span>
            <span className={`absolute transition-all duration-500 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`}>
              <SunIcon className="w-[18px] h-[18px]" />
            </span>
          </button>

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
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">
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
                  className="block w-full text-center py-4 bg-brand-blue text-white font-bold uppercase tracking-[0.15em] rounded-md relative overflow-hidden group active:scale-[0.98] transition-all"
                  style={{ backgroundColor: 'var(--color-brand-blue, #1D4ED8)' }}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] pointer-events-none"></span>
                  <span className="relative z-10">BOOK A SESSION</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
