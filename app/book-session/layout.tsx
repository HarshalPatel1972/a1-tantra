import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://a1-tantra.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Book Tantra Session | Request In-Person Session | A1 Tantra",
  description:
    "Book your in-person tantra session today. Choose from meditation, breathwork, chakra balancing, and other healing services.",
  keywords:
    "book tantra session, schedule consultation, tantra booking, in-person sessions, healing appointments",
  alternates: {
    canonical: "/book-session",
  },
};

export default function BookSessionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
