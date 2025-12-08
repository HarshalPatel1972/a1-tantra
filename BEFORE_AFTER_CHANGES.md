# 📋 Before & After: Complete Code Changes

## File 1: tailwind.config.ts

### BEFORE

```typescript
fontFamily: {
  serif: ["var(--font-playfair)", "Georgia", "serif"],
  sans: ["var(--font-inter)", "sans-serif"],
}
```

### AFTER

```typescript
fontFamily: {
  serif: ["var(--font-playfair)", "Georgia", "serif"],
  sans: ["var(--font-inter)", "sans-serif"],
  nav: ['"ABC Monument Grotesk"', "sans-serif"],
  body: ['"ABC Monument Grotesk"', "sans-serif"],
  title: ['"ABC Marist"', "serif"],
  logo: [
    "ui-sans-serif",
    "system-ui",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"',
  ],
}
```

---

## File 2: app/layout.tsx

### BEFORE

```tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased font-sans bg-cream text-deep-brown`}
      >
        {children}
      </body>
    </html>
  );
}
```

### AFTER

```tsx
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased font-sans bg-cream text-deep-brown`}
      >
        <Navbar />
        <main className="pt-[96px] md:pt-[220px]">{children}</main>
      </body>
    </html>
  );
}
```

---

## File 3: components/Navbar.tsx

### BEFORE (Basic Structure)

```tsx
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50...">
      <div className="relative max-w-7xl mx-auto px-6 h-28 flex items-center">
        {/* LEFT LINKS */}
        <div className="hidden md:flex gap-8 text-sm h-full items-center">
          <Link href="/resources">Resources</Link>
          {/* ... other links ... */}
        </div>

        {/* LOGO - Basic */}
        <h1 className="absolute left-1/2 -translate-x-1/2...">A1 TANTRA</h1>

        {/* RIGHT LINKS */}
        <div className="hidden md:flex gap-8 text-sm h-full items-center ml-auto">
          <Link href="/about">About</Link>
          <span className="text-xl cursor-pointer">🔍</span>
          <span className="text-xl cursor-pointer">👤</span>
        </div>

        {/* MOBILE BUTTON */}
        <button className="md:hidden ml-auto">
          <svg>...</svg>
        </button>
      </div>

      {/* MOBILE DROPDOWN - Basic */}
      {isOpen && (
        <div className="md:hidden pb-4 space-y-2 px-6">{/* Links ... */}</div>
      )}
    </nav>
  );
}
```

### AFTER (Complete Redesign)

```tsx
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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out
      ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm border-b border-black/10 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      {/* DESKTOP NAVBAR */}
      <div className="hidden md:flex relative max-w-7xl mx-auto px-6 h-28 items-center justify-between">
        {/* LEFT LINKS */}
        <div className="flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-nav text-[18px] font-semibold uppercase tracking-wide text-deep-brown 
                             hover:text-accent-red transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CENTER LOGO - WITH ANIMATION */}
        <Link
          href="/"
          className={`font-logo font-bold tracking-tight text-accent-red select-none
                          absolute left-1/2 -translate-x-1/2 transition-all duration-700 ease-out
                          ${
                            scrolled
                              ? "text-3xl top-1/2 -translate-y-1/2"
                              : "text-[90px] top-1/2 -translate-y-1/2"
                          }`}
        >
          A1 TANTRA
        </Link>

        {/* RIGHT LINKS */}
        <div className="flex gap-8 items-center ml-auto">
          {rightLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-nav text-[18px] font-semibold uppercase tracking-wide text-deep-brown 
                             hover:text-accent-red transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <button
            className="text-deep-brown hover:text-accent-red transition-colors duration-200"
            aria-label="Search"
          >
            <SearchIcon className="w-6 h-6" />
          </button>
          <button
            className="text-deep-brown hover:text-accent-red transition-colors duration-200"
            aria-label="User account"
          >
            <UserIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <div className="md:hidden flex relative max-w-7xl mx-auto px-6 h-16 items-center justify-between">
        {/* HAMBURGER */}
        <button
          className="text-deep-brown hover:text-accent-red transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <HamburgerIcon className="w-6 h-6" />
        </button>

        {/* MOBILE LOGO */}
        <Link href="/" className="font-logo font-bold text-xl text-accent-red">
          A1 TANTRA
        </Link>

        {/* MOBILE RIGHT ICONS */}
        <div className="flex gap-4">
          <button
            className="text-deep-brown hover:text-accent-red transition-colors"
            aria-label="Search"
          >
            <SearchIcon className="w-5 h-5" />
          </button>
          <button
            className="text-deep-brown hover:text-accent-red transition-colors"
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
              className="block font-nav text-base font-semibold uppercase tracking-wide text-deep-brown 
                             hover:text-accent-red transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {rightLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block font-nav text-base font-semibold uppercase tracking-wide text-deep-brown 
                             hover:text-accent-red transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block font-nav text-base font-semibold uppercase tracking-wide text-deep-brown 
                           hover:text-accent-red transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </Link>
        </div>
      )}
    </nav>
  );
}
```

---

## File 4: components/Hero.tsx

### KEY CHANGES

**Before:**

```tsx
<h1 className="serif-heading text-5xl lg:text-7xl font-bold...">
<p className="text-lg text-deep-brown/80 mb-10...">
<Link className="px-8 py-4... font-semibold rounded-sm...">START YOUR JOURNEY</Link>
<h3 className="serif-heading text-2xl font-bold...">Guides</h3>
```

**After:**

```tsx
<h1 className="font-title text-5xl lg:text-7xl font-bold...">
<p className="font-body text-lg text-deep-brown/80 mb-10...">
<Link className="...font-nav font-semibold uppercase tracking-wide...">START YOUR JOURNEY</Link>
<h3 className="font-title text-2xl font-bold...">Guides</h3>
<p className="font-body text-deep-brown/70 mb-4 text-sm...">
<button className="flex items-center font-body text-accent-red...">
```

**Also removed:** `pt-52` padding from section (now handled by layout.tsx)

---

## File 5: components/Footer.tsx

### BEFORE (Partial)

```tsx
export default function Footer() {
  return (
    <footer className="bg-deep-brown text-cream pt-20 pb-8">
      {/* ... sections ... */}
      <div className="border-t border-cream/20 pt-8">
        <div className="serif-heading text-4xl font-bold text-center mb-4">
          A1 TANTRA
        </div>
        <p className="text-center text-cream/60 text-sm">
          © {new Date().getFullYear()} A1 Tantra...
        </p>
      </div>
    </footer>
  );
}
```

### AFTER (With SVG Icons)

```tsx
"use client";

import Link from "next/link";

// Social Icon Components
const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    {/* SVG path */}
  </svg>
);

const FacebookIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    {/* SVG path */}
  </svg>
);

const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    {/* SVG path */}
  </svg>
);

const EmailIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    {/* SVG path */}
  </svg>
);

export default function Footer() {
  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
    { name: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
    { name: "WhatsApp", href: "https://wa.me", icon: WhatsAppIcon },
    { name: "Email", href: "mailto:hello@a1tantra.com", icon: EmailIcon },
  ];

  return (
    <footer className="bg-deep-brown text-cream pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Each section now uses font-body for links */}
          <div>
            <h4 className="font-title text-lg font-bold mb-4">Tantra Paths</h4>
            <ul className="space-y-2 text-sm font-body">{/* ... */}</ul>
          </div>
          {/* ... other sections ... */}
        </div>

        <div className="border-t border-cream/20 pt-8">
          {/* NEW: Social Icons Section */}
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

          {/* Updated branding */}
          <div className="font-logo text-4xl font-bold text-center mb-4">
            A1 TANTRA
          </div>
          <p className="font-body text-center text-cream/60 text-sm">
            © {new Date().getFullYear()} A1 Tantra...
          </p>
        </div>
      </div>
    </footer>
  );
}
```

---

## File 6: components/TantraTypesSection.tsx (NEW)

```tsx
"use client";

export default function TantraTypesSection() {
  const tantraTypes = [
    {
      name: "Kriya Tantra",
      subtitle: "ACTION TANTRA",
      description: "Emphasizes external practices and ritual action...",
      duration: "90 min",
    },
    {
      name: "Carya Tantra",
      subtitle: "METHOD TANTRA",
      description: "Balances outer ritual with inner meditative stability...",
      duration: "2 hr",
    },
    {
      name: "Yoga Tantra",
      subtitle: "UNION TANTRA",
      description: "Centers on internal practice and the union of mind...",
      duration: "150 min",
    },
    {
      name: "Anuttarayoga Tantra",
      subtitle: "HIGHEST UNION TANTRA",
      description: "Represents the most advanced level of tantra...",
      duration: "3 hr",
    },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-title text-5xl lg:text-6xl font-bold text-deep-brown mb-16 text-center">
          Tantra Paths
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tantraTypes.map((tantra, idx) => (
            <div
              key={idx}
              className="bg-white/60 backdrop-blur border border-deep-brown/10 rounded-lg p-8 
                           hover:shadow-lg transition-shadow"
            >
              <h3 className="font-title text-2xl font-bold text-deep-brown mb-2">
                {tantra.name}
              </h3>

              <p className="font-nav text-xs font-semibold uppercase tracking-widest text-accent-red mb-4">
                {tantra.subtitle}
              </p>

              <p className="font-body text-deep-brown/80 leading-relaxed mb-6">
                {tantra.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="font-body text-xs uppercase tracking-wide text-deep-brown/60 font-semibold">
                  Duration
                </span>
                <span className="bg-accent-red/10 text-accent-red font-nav text-sm font-semibold px-4 py-1 rounded-full">
                  {tantra.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## File 7: app/page.tsx

### BEFORE

```tsx
"use client";

import Navbar from "@/components/Navbar"; // ← Removed (now in layout)
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WelcomeHome from "@/components/WelcomeHome";
import RealTalk from "@/components/RealTalk";
import TantraPathsGuides from "@/components/TantraPathsGuides";
import SessionsGrid from "@/components/SessionsGrid";
import BuildJourneyCTA from "@/components/BuildJourneyCTA";
import OriginStory from "@/components/OriginStory";
import Newsletter from "@/components/Newsletter";
import InstagramGrid from "@/components/InstagramGrid";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WelcomeHome />
      <RealTalk />
      <TantraPathsGuides />
      <SessionsGrid />
      <BuildJourneyCTA />
      <OriginStory />
      <Newsletter />
      <InstagramGrid />
      <Footer />
    </div>
  );
}
```

### AFTER

```tsx
"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WelcomeHome from "@/components/WelcomeHome";
import RealTalk from "@/components/RealTalk";
import TantraPathsGuides from "@/components/TantraPathsGuides";
import TantraTypesSection from "@/components/TantraTypesSection"; // ← New
import SessionsGrid from "@/components/SessionsGrid";
import BuildJourneyCTA from "@/components/BuildJourneyCTA";
import OriginStory from "@/components/OriginStory";
import Newsletter from "@/components/Newsletter";
import InstagramGrid from "@/components/InstagramGrid";

export default function Home() {
  return (
    <div>
      <Hero />
      <WelcomeHome />
      <RealTalk />
      <TantraPathsGuides />
      <TantraTypesSection /> {/* ← New component */}
      <SessionsGrid />
      <BuildJourneyCTA />
      <OriginStory />
      <Newsletter />
      <InstagramGrid />
      <Footer />
    </div>
  );
}
```

---

## Summary of Changes

| Component                  | Change                               | Impact                                                       |
| -------------------------- | ------------------------------------ | ------------------------------------------------------------ |
| **tailwind.config.ts**     | Added 4 font utilities               | Enables font-nav, font-body, font-title, font-logo           |
| **app/layout.tsx**         | Added Navbar + main wrapper          | Global navbar, prevents overlap with pt-[96px] md:pt-[220px] |
| **Navbar.tsx**             | Complete rewrite                     | SVG icons, animations, mobile menu, proper typography        |
| **Hero.tsx**               | Typography updates                   | Uses font-title, font-body, font-nav                         |
| **Footer.tsx**             | Added social icons + typography      | 4 SVG social icons, consistent fonts                         |
| **TantraTypesSection.tsx** | New component                        | 4 tantra types with descriptions & durations                 |
| **app/page.tsx**           | Removed Navbar import, added section | Cleaner structure, new content                               |

**Build Status:** ✅ 5.6s compile, 0 errors, 16 routes generated
