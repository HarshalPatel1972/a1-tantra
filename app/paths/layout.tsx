import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tantra Paths | Kundalini, Shakta, Kaula & More | A1 Tantra",
  description: "Explore different tantra paths including Kundalini Tantra, Shakta, Kaula, Tibetan Tantra. Find the path aligned with your spiritual journey.",
  keywords: "tantra paths, kundalini tantra, shakta tantra, kaula tantra, tibetan tantra, tantric traditions",
};

export default function PathsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
