import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact A1 Tantra | Get in Touch | Online Consultation",
  description: "Contact A1 Tantra for questions about tantra services, sessions, or consultation. We respond within 24 hours.",
  keywords: "contact tantra, inquiry, tantra questions, spiritual guidance, customer support",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
