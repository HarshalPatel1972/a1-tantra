import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tantra Services in India | Book Online Tantra Sessions | A1 Tantra",
  description: "Explore tantra services in India. Book secure online tantra sessions for healing, relationship support, and guidance.",
  keywords: "tantra services, tantra sessions, online tantra, tantra healing, spiritual healing India",
};

export default function SessionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
