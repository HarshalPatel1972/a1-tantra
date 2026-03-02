import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CallMeButton from "@/components/CallMeButton";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
// import AnimatedGradientBg from "@/components/AnimatedGradientBg";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Bigilla Display - Custom serif typeface
// Note: To use Bigilla Display, add the font files to /public/fonts/
// Then uncomment the @font-face rule in globals.css

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://a1-tantra.vercel.app";

import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "A1 Tantra | Sacred Tantric Healing & Ancient Wisdom",
  description:
    "Discover authentic Tantra paths (Kriya, Yoga, Anuttarayoga) for modern seekers. Book a sacred healing session in India today.",
  keywords:
    "tantra, meditation, spiritual healing, kundalini, chakra, breathwork, tantra sessions india, sacred tantra",
  authors: [{ name: "A1 Tantra" }],
  openGraph: {
    title: "A1 Tantra | Sacred Tantric Healing & Ancient Wisdom",
    description:
      "Discover authentic Tantra paths (Kriya, Yoga, Anuttarayoga) for modern seekers. Book a sacred healing session in India today.",
    url: siteUrl,
    siteName: "A1 Tantra",
    type: "website",
  },
  verification: {
    google: "WhDnZ2n4fhioUkkNSKitD12Xj-8syFzF0PIySqty8bM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "A1 Tantra",
            "legalName": "A1 Tantra Sacred Healing",
            "url": siteUrl,
            "description": "Authentic Tantra paths and spiritual healing services including Kriya, Yoga, and Anuttarayoga practices.",
            "logo": `${siteUrl}/images/logo-main.png`,
            "sameAs": ["https://instagram.com/a1ta.ntra"],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 92178 21866",
              "contactType": "customer service",
            },
          }}
        />
        {/* Remix Icon CDN - Lightweight & Reliable Icon Set */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
        />
        {/* Prevent flash of wrong theme on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('a1tantra-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`
          }}
        />
        {/* GOOGLE ADS TRACKING (PHASE 2 ACTIVE) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17953286510"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17953286510');
            `
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${cormorant.variable} ${inter.variable} antialiased font-sans bg-cream text-deep-brown`}
      >
        <ThemeProvider>
          <AuthProvider>
            {/* <AnimatedGradientBg /> */}
            <Navbar />
            <main className="pt-24 md:pt-32 relative">{children}</main>
            <CallMeButton />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
