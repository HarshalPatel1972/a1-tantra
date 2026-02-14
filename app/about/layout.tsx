import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://a1-tantra.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "About A1 Tantra | Our Mission & Story | Authentic Tantra Teachings",
  description: "Learn about A1 Tantra's mission to teach authentic tantric wisdom with clarity, compassion, and respect. Meet our advisory panel.",
  keywords: "about tantra, tantra mission, tantra teachings, spiritual wisdom, tantric lineage",
  canonical: `${siteUrl}/about`,
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
