import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Synexes — Healthcare Intelligence Platform",
  description:
    "Synexes is an AI-powered healthcare technology platform for document analysis and clinical insights.",
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
