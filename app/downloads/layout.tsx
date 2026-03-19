import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Downloads – Sambhav Services",
  description:
    "Download Sambhav Services for Windows. Get the latest version of the business management application.",
  icons: { icon: "/logo.png" },
};

export default function DownloadsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
