import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | A1 Tantra",
  description: "Read the important disclaimer regarding A1 Tantra services and information provided on our website.",
  keywords: "disclaimer, legal notice, service disclaimer",
};

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
