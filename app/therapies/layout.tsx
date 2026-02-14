import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Spiritual Healing & Tantra Therapy | A1 Tantra",
  description: "Experience online spiritual healing and tantra therapy sessions for emotional balance, energy alignment, and personal growth.",
  keywords: "tantra therapy, spiritual healing, energy healing, chakra balancing, tantric practices",
};

export default function TherapiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
