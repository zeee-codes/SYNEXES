import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Synexes",
  description: "Privacy policy for Synexes landing page and early access forms.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-surface-canvas px-6 py-20">
      <article className="max-w-3xl mx-auto bg-surface-primary border border-border-default rounded-[16px] p-8 md:p-10">
        <h1 className="text-3xl font-bold text-text-primary mb-6">Privacy Policy</h1>
        <p className="text-text-secondary mb-6">
          Synexes collects only the information needed to run early-access and contributor discovery for this landing
          page.
        </p>
        <section className="space-y-4 text-text-secondary">
          <p>
            <strong className="text-text-primary">What we collect:</strong> email address, survey responses, and
            contributor profile details you submit.
          </p>
          <p>
            <strong className="text-text-primary">Why we collect it:</strong> to understand user needs, prioritize
            product development, and contact you about early access or contributor follow-up.
          </p>
          <p>
            <strong className="text-text-primary">How we use it:</strong> internal product and outreach workflows only.
            We do not sell your information.
          </p>
          <p>
            <strong className="text-text-primary">Analytics:</strong> we use first-party analytics events for product
            discovery on this landing page.
          </p>
          <p>
            <strong className="text-text-primary">Your choices:</strong> email{" "}
            <a className="text-brand-500 underline" href="mailto:hello@synexes.com">
              hello@synexes.com
            </a>{" "}
            to request data access, correction, or deletion.
          </p>
          <p className="text-sm">Last updated: 25 Jul 2026</p>
        </section>
      </article>
    </main>
  );
}
