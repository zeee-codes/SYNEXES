import type { Metadata } from "next";
import { Nav } from "../components/nav";
import { Hero } from "../components/hero";
import { ProblemSection } from "../components/problem-section";
import { FeaturesSection } from "../components/features-section";
import { HowItWorks } from "../components/how-it-works";
import { TrustSection } from "../components/trust-section";
import { DiscoverySurvey } from "../components/discovery-survey";
import { ContributorIntake } from "../components/contributor-intake";
import { Footer } from "../components/footer";

export const metadata: Metadata = {
  title: "Synexes — Healthcare timeline for chronic care",
  description:
    "Synexes is building a healthcare timeline for chronic care so caregivers, patients, and clinicians can review and share complete medical history with context.",
  openGraph: {
    title: "Synexes — Healthcare timeline for chronic care",
    description:
      "Early access and discovery for a healthcare timeline focused on chronic-care coordination.",
    type: "website",
    images: [
      {
        url: "/og/landing-preview.svg",
        width: 1200,
        height: 630,
        alt: "Synexes healthcare timeline for chronic care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synexes — Healthcare timeline for chronic care",
    description: "Secure early access and help shape Synexes during the discovery phase.",
    images: ["/og/landing-preview.svg"],
  },
};

export default function Home() {
  return (
    <div className="relative z-10 w-full overflow-hidden">
      <Nav />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <FeaturesSection />
        <TrustSection />
        <DiscoverySurvey />
        <ContributorIntake />
      </main>
      <Footer />
    </div>
  );
}
