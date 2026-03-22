import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – SamTechy",
  description:
    "Privacy Policy for SamTechy Machine Service Management System by Sammed Technosol.",
  icons: { icon: "/samtechy_logo.png" },
};

export default function SamTechyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
