import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About A1 Tantra | Our Mission & Story | Authentic Tantra Teachings",
  description: "Learn about A1 Tantra's mission to teach authentic tantric wisdom with clarity, compassion, and respect. Meet our advisory panel.",
  keywords: "about tantra, tantra mission, tantra teachings, spiritual wisdom, tantric lineage",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
