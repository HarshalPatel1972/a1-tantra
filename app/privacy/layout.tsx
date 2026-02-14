import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | A1 Tantra",
  description: "Review A1 Tantra's privacy policy to understand how we protect and handle your personal data.",
  keywords: "privacy policy, data protection, personal information",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
