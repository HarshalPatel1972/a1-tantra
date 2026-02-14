import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | A1 Tantra",
  description: "Read the terms and conditions governing the use of A1 Tantra services and website.",
  keywords: "terms of service, terms and conditions, legal agreement",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
