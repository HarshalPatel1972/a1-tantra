import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://a1-tantra.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Relationship Tantra Consultation | In-Person Guidance | A1 Tantra",
  description:
    "Get expert relationship tantra consultation in person to improve connection, resolve conflicts, and restore harmony.",
  keywords:
    "tantra consultation, relationship guidance, couples tantra, in-person consultation, spiritual partnership",
  alternates: {
    canonical: "/advisory",
  },
};

export default function AdvisoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
