import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://a1-tantra.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tantra Resources | Guides, Practices & Learning Materials | A1 Tantra",
  description: "Access free tantra resources including beginner guides, rituals, breathwork techniques, mantras, and myth-busting articles.",
  keywords: "tantra resources, tantra guides, breathwork, mantras, tantra learning, spiritual practices",
  canonical: `${siteUrl}/resources`,
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
