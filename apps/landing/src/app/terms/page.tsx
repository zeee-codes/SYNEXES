import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Synexes",
  description: "Terms of use for Synexes landing page and submissions.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-surface-canvas px-6 py-20">
      <article className="max-w-3xl mx-auto bg-surface-primary border border-border-default rounded-[16px] p-8 md:p-10">
        <h1 className="text-3xl font-bold text-text-primary mb-6">Terms of Use</h1>
        <section className="space-y-4 text-text-secondary">
          <p>This page provides early-access and contributor discovery information for Synexes.</p>
          <p>
            Information on this website is for product communication only and is not medical advice, diagnosis, or
            treatment guidance.
          </p>
          <p>
            By submitting forms, you confirm the information provided is accurate and you consent to Synexes contacting
            you about the scope you selected.
          </p>
          <p>
            Synexes may update this page and its form flows as discovery evolves. Continued use of the site means you
            accept the current version of these terms.
          </p>
          <p>
            For support or legal questions, contact{" "}
            <a className="text-brand-500 underline" href="mailto:hello@synexes.com">
              hello@synexes.com
            </a>
            .
          </p>
          <p className="text-sm">Last updated: 25 Jul 2026</p>
        </section>
      </article>
    </main>
  );
}
