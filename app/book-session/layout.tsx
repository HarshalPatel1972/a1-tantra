import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Tantra Session | Schedule Online Consultation | A1 Tantra",
  description: "Book your online tantra session today. Choose from meditation, breathwork, chakra balancing, and other healing services.",
  keywords: "book tantra session, schedule consultation, tantra booking, online sessions, healing appointments",
};

export default function BookSessionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
