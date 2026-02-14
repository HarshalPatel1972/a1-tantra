import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://a1-tantra.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Privacy Policy | A1 Tantra",
  description: "Review A1 Tantra's privacy policy to understand how we protect and handle your personal data.",
  keywords: "privacy policy, data protection, personal information",
  canonical: `${siteUrl}/privacy`,
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
