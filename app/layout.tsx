import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Privacy Policy – Sambhav Services",
  description:
    "Privacy Policy for Sambhav Services business management application by Shailendra Badjatya.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
