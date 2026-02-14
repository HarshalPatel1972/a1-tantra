import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://a1-tantra.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Terms & Conditions | A1 Tantra",
  description:
    "Read the terms and conditions governing the use of A1 Tantra services and website.",
  keywords: "terms of service, terms and conditions, legal agreement",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
