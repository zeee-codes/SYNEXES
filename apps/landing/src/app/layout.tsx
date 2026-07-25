import type { Metadata } from "next";
import { SmoothScroller } from "../components/smooth-scroller";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://synexes.com"),
  title: "Synexes — Healthcare timeline for chronic care",
  description:
    "Synexes is building a healthcare timeline for chronic care. Join early access and share your needs as a caregiver, patient, clinician, or contributor.",
  openGraph: {
    title: "Synexes — Healthcare timeline for chronic care",
    description: "Early access for caregivers, patients, and clinicians coordinating chronic care.",
    type: "website",
    images: ["/og/landing-preview.svg"],
  },
};

import { ThemeProvider } from "../components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-surface-canvas text-text-primary font-sans antialiased selection:bg-brand-500 selection:text-white min-h-screen transition-colors duration-300">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <SmoothScroller>{children}</SmoothScroller>
        </ThemeProvider>
      </body>
    </html>
  );
}
