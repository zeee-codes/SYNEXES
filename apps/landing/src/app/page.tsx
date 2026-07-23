import type { Metadata } from "next";
import { Nav } from "../components/nav";
import { Hero } from "../components/hero";
import { ProblemSection } from "../components/problem-section";
import { FeaturesSection } from "../components/features-section";
import { HowItWorks } from "../components/how-it-works";
import { DiscoverySurvey } from "../components/discovery-survey";
import { TrustSection } from "../components/trust-section";
import { FinalCta } from "../components/final-cta";
import { Footer } from "../components/footer";

export const metadata: Metadata = {
  title: "Synexes — Your Health. Finally Connected.",
  description:
    "Every report, prescription, consultation, and scan—organized into one secure timeline you can search, understand, and share in seconds.",
  openGraph: {
    title: "Synexes — Your Health. Finally Connected.",
    description:
      "Every report, prescription, consultation, and scan—organized into one secure timeline.",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="relative z-10 w-full overflow-hidden">
      <Nav />
      <main>
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <HowItWorks />
        <DiscoverySurvey />
        <TrustSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
