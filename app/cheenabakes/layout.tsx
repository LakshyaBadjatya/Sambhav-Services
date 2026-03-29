import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Cheena Bakes",
  description:
    "Privacy Policy for Cheena Bakes – 100% Eggless Cakes ordering application by Lakshya Badjatya.",
  icons: { icon: "/cheenabakes_logo.png" },
};

export default function CheenaBakesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
