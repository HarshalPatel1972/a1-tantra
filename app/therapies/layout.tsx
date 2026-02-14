import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://a1-tantra.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Online Spiritual Healing & Tantra Therapy | A1 Tantra",
  description:
    "Experience online spiritual healing and tantra therapy sessions for emotional balance, energy alignment, and personal growth.",
  keywords:
    "tantra therapy, spiritual healing, energy healing, chakra balancing, tantric practices",
  alternates: {
    canonical: "/therapies",
  },
};

export default function TherapiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
