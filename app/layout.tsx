import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CallMeButton from "@/components/CallMeButton";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "A1 Tantra - Sacred Tantric Wisdom & Healing Practices",
  description:
    "Discover tantric wisdom, healing practices, and transformational paths guided with clarity, depth, and compassion.",
  keywords:
    "tantra, meditation, spiritual healing, kundalini, chakra, breathwork",
  authors: [{ name: "A1 Tantra" }],
  openGraph: {
    title: "A1 Tantra - Explore Tantra Together",
    description:
      "A place to explore Tantra, together. Discover sacred wisdom and transformational practices.",
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
    <html lang="en">
      <head>
        {/* Remix Icon CDN - Lightweight & Reliable Icon Set */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
        />
      </head>
      <body
        className={`${playfair.variable} ${cormorant.variable} ${inter.variable} antialiased font-sans bg-cream text-deep-brown`}
      >
        {/* <AnimatedGradientBg /> */}
        <Navbar />
        <main className="pt-24 md:pt-32 relative z-0">{children}</main>
        <CallMeButton />
      </body>
    </html>
  );
}
