import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Butterfly Nectar",
  description: "Official Affiliate Program for Butterfly .Inc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
