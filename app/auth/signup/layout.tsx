import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | A1 Tantra",
  description: "Create your A1 Tantra account to start your spiritual journey with us.",
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
