"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { searchIndex, SearchResult } from "@/data/search-index";

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const filtered = searchIndex.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setSearchResults(filtered.slice(0, 5));
    } else {
      setSearchResults([]);
    }
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
    { label: "THERAPIES", href: "/therapies" },
    { label: "SESSIONS", href: "/sessions" },
  ];

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
            font-bold tracking-tight text-[#1D4ED8] select-none shrink-0 flex items-center pt-2 gap-2 md:gap-2.5 lg:gap-3 xl:gap-3.5
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
            <div className="flex items-center gap-4 lg:gap-6">
              <Link
                href="/auth/login"
                className="font-nav text-[12px] lg:text-[14px] xl:text-[15px] font-semibold uppercase tracking-widest text-deep-brown hover:text-accent-red transition-colors duration-200 whitespace-nowrap"
              >
                Login
              </Link>
              <Link
                href="/book-session"
                className="font-nav text-[12px] lg:text-[14px] xl:text-[15px] font-bold uppercase tracking-[0.15em] px-8 py-3.5 bg-[#1D4ED8] text-white rounded-md relative overflow-hidden group whitespace-nowrap transition-all duration-300 active:scale-95"
              >
                <span className="absolute inset-0 bg-[#1e40af] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] pointer-events-none"></span>
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
            className="shrink-0 object-contain"
          />
          <span className="tracking-tighter">A1 TANTRA</span>
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
                  className="block w-full text-center py-4 bg-[#1D4ED8] text-white font-bold uppercase tracking-widest rounded-md relative overflow-hidden group active:scale-[0.98] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="absolute inset-0 bg-[#1e40af] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] pointer-events-none"></span>
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
