import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://a1-tantra.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Contact A1 Tantra | Get in Touch | Online Consultation",
  description: "Contact A1 Tantra for questions about tantra services, sessions, or consultation. We respond within 24 hours.",
  keywords: "contact tantra, inquiry, tantra questions, spiritual guidance, customer support",
  canonical: `${siteUrl}/contact`,
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
