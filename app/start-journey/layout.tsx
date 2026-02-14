import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://a1-tantra.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Start Your Tantra Journey | Begin Your Spiritual Path | A1 Tantra",
  description:
    "Begin your tantra journey with guidance on choosing the right path, understanding practices, and connecting with your spiritual purpose.",
  keywords:
    "tantra journey, spiritual path, tantric practice, begin tantra, spiritual guidance",
  alternates: {
    canonical: "/start-journey",
  },
};

export default function StartJourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
