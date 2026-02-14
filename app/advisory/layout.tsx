import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Relationship Tantra Consultation | Online Guidance | A1 Tantra",
  description: "Get expert relationship tantra consultation online to improve connection, resolve conflicts, and restore harmony.",
  keywords: "tantra consultation, relationship guidance, couples tantra, online consultation, spiritual partnership",
};

export default function AdvisoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
