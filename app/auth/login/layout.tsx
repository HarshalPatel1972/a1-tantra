import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | A1 Tantra",
  description: "Sign in to your A1 Tantra account to access exclusive content and book sessions.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
