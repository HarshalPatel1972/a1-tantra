import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://a1-tantra.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tantra Services in India | Book Online Tantra Sessions | A1 Tantra",
  description:
    "Explore tantra services in India. Book secure online tantra sessions for healing, relationship support, and guidance.",
  keywords:
    "tantra services, tantra sessions, online tantra, tantra healing, spiritual healing India",
  alternates: {
    canonical: "/sessions",
  },
};

export default function SessionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
