"use client";

import { CheckCircle2 } from "lucide-react";

const TRUST_POINTS = [
  "Privacy-first product decisions for sensitive health data",
  "Access is explicit, time-bound, and revocable",
  "Designed for caregiver, patient, and clinician collaboration",
  "Current stage: early access and discovery with selected users",
];

export function TrustSection() {
  return (
    <section className="w-full py-24 px-6 bg-surface-primary border-t border-border-subtle">
      <div className="w-full max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
          Trust and privacy are core requirements.
        </h2>
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8">
          {TRUST_POINTS.map((point, i) => (
            <div key={i} className="flex items-center justify-center gap-3 bg-surface-raised px-6 py-4 rounded-[12px] border border-border-default shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
              <span className="text-text-primary font-medium text-sm md:text-base">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
