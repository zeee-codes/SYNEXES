"use client";

import { FormEvent, useState } from "react";
import { submitContributorInquiry } from "../app/actions";

const ROLE_OPTIONS = ["Developer", "Product Designer", "Marketer", "Clinical Advisor", "Other"];
const AVAILABILITY_OPTIONS = [
  "2-4 hours/week",
  "5-8 hours/week",
  "Part-time collaboration",
  "Open to full-time when funded",
];

export function ContributorIntake() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<string>(ROLE_OPTIONS[0] ?? "Developer");
  const [skills, setSkills] = useState("");
  const [availability, setAvailability] = useState<string>(AVAILABILITY_OPTIONS[0] ?? "2-4 hours/week");
  const [motivation, setMotivation] = useState("");
  const [status, setStatus] = useState<{ kind: "idle" | "error" | "success"; message: string }>({
    kind: "idle",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ kind: "idle", message: "" });
    setSubmitting(true);

    const result = await submitContributorInquiry({
      email,
      role,
      skills,
      availability,
      motivation,
    });

    setSubmitting(false);

    if (!result.success) {
      setStatus({ kind: "error", message: result.error });
      return;
    }

    setStatus({ kind: "success", message: result.message });
    setEmail("");
    setSkills("");
    setMotivation("");
  }

  return (
    <section id="contribute" className="w-full py-24 px-6 bg-surface-primary border-t border-border-subtle">
      <div className="w-full max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Get involved with Synexes</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We are in early discovery and selectively connecting with developers, marketers, and domain experts who
            want to help build infrastructure for chronic care.
          </p>
        </div>

        <div className="rounded-[16px] border border-border-default bg-surface-raised p-6 md:p-8 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-text-primary">
                Role
                <select
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                  className="rounded-[10px] border border-border-default bg-surface-primary p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/25 focus-visible:border-brand-500"
                >
                  {ROLE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2 text-sm text-text-primary">
                Availability
                <select
                  value={availability}
                  onChange={(event) => setAvailability(event.target.value)}
                  className="rounded-[10px] border border-border-default bg-surface-primary p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/25 focus-visible:border-brand-500"
                >
                  {AVAILABILITY_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm text-text-primary">
              Skills and experience
              <input
                type="text"
                required
                value={skills}
                onChange={(event) => setSkills(event.target.value)}
                placeholder="Example: React, growth campaigns, care operations"
                className="rounded-[10px] border border-border-default bg-surface-primary p-3 placeholder:text-text-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/25 focus-visible:border-brand-500"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm text-text-primary">
              Email
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="name@email.com"
                className="rounded-[10px] border border-border-default bg-surface-primary p-3 placeholder:text-text-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/25 focus-visible:border-brand-500"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm text-text-primary">
              Why do you want to contribute? (optional)
              <textarea
                value={motivation}
                onChange={(event) => setMotivation(event.target.value)}
                rows={3}
                placeholder="Short note about your interest"
                className="rounded-[10px] border border-border-default bg-surface-primary p-3 placeholder:text-text-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/25 focus-visible:border-brand-500"
              />
            </label>

            <p className="text-xs text-text-secondary">
              By submitting this form, you consent to Synexes storing your details to evaluate team collaboration and
              send follow-up communication. We currently use first-party analytics for discovery and do not run
              third-party ad trackers on this page.
            </p>

            {status.kind !== "idle" && (
              <p
                role={status.kind === "error" ? "alert" : "status"}
                className={status.kind === "error" ? "text-sm text-red-500" : "text-sm text-brand-500"}
              >
                {status.message}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full md:w-auto px-6 py-3 rounded-[10px] border border-border-default bg-surface-primary text-text-primary font-semibold hover:bg-surface-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/25 disabled:opacity-60"
            >
              {submitting ? "Submitting..." : "Share contributor profile"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
