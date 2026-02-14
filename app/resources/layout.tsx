import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tantra Resources | Guides, Practices & Learning Materials | A1 Tantra",
  description: "Access free tantra resources including beginner guides, rituals, breathwork techniques, mantras, and myth-busting articles.",
  keywords: "tantra resources, tantra guides, breathwork, mantras, tantra learning, spiritual practices",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
