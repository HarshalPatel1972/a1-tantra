import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://a1-tantra.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tantra Paths | Kundalini, Shakta, Kaula & More | A1 Tantra",
  description: "Explore different tantra paths including Kundalini Tantra, Shakta, Kaula, Tibetan Tantra. Find the path aligned with your spiritual journey.",
  keywords: "tantra paths, kundalini tantra, shakta tantra, kaula tantra, tibetan tantra, tantric traditions",
  canonical: `${siteUrl}/paths`,
};

export default function PathsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
