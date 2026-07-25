import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Support | Synexes",
  description: "Contact Synexes for support, privacy, and partnership questions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-surface-canvas px-6 py-20">
      <article className="max-w-3xl mx-auto bg-surface-primary border border-border-default rounded-[16px] p-8 md:p-10">
        <h1 className="text-3xl font-bold text-text-primary mb-6">Contact & Support</h1>
        <p className="text-text-secondary mb-6">
          For support, privacy requests, partnership discussions, or contributor follow-up, contact:
        </p>
        <div className="space-y-3 text-text-secondary">
          <p>
            Email:{" "}
            <a href="mailto:hello@synexes.com" className="text-brand-500 underline">
              hello@synexes.com
            </a>
          </p>
          <p>Response target: within 3 business days.</p>
        </div>
      </article>
    </main>
  );
}
