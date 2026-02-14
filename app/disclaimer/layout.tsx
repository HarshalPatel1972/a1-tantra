import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://a1-tantra.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Disclaimer | A1 Tantra",
  description: "Read the important disclaimer regarding A1 Tantra services and information provided on our website.",
  keywords: "disclaimer, legal notice, service disclaimer",
  canonical: `${siteUrl}/disclaimer`,
};

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
