"use client";

import { Clock, Sparkles, ShieldCheck, Search, Users, Share } from "lucide-react";

const FEATURES = [
  {
    icon: <Clock className="w-6 h-6 text-brand-500" />,
    title: "Unified Timeline",
    desc: "Medical records arranged chronologically so clinicians and caregivers can review history quickly.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-brand-500" />,
    title: "Summaries with source context",
    desc: "Structured summaries designed to point back to original reports before decisions are made.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand-500" />,
    title: "Security-first data handling",
    desc: "Protected infrastructure, explicit sharing controls, and access designed for sensitive healthcare records.",
  },
  {
    icon: <Search className="w-6 h-6 text-brand-500" />,
    title: "Searchable history",
    desc: "Find records by date, doctor, condition, or report type without scanning folders manually.",
  },
  {
    icon: <Users className="w-6 h-6 text-brand-500" />,
    title: "Family-centered workflows",
    desc: "Support for caregivers managing more than one person while keeping each profile separated.",
  },
  {
    icon: <Share className="w-6 h-6 text-brand-500" />,
    title: "Time-bound sharing",
    desc: "Share relevant history with doctors using links that can expire and be revoked.",
  },
];

const PROOF_BLOCKS = [
  {
    title: "Who it is for",
    detail: "Caregivers coordinating long-term care, patients with chronic conditions, and clinicians who need complete context.",
  },
  {
    title: "Problem we are validating",
    detail: "Care decisions are slowed when records are scattered across folders, portals, and messaging threads.",
  },
  {
    title: "Product approach",
    detail: "A chronological timeline with source-linked records and controlled sharing for healthcare discussions.",
  },
];

export function FeaturesSection() {
  return (
    <section className="w-full py-24 px-6 bg-surface-canvas">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-6">
              Built for chronic-care coordination
            </h2>
            <p className="text-lg text-text-secondary">
              Synexes is in early access discovery. We are validating one central idea: a reliable timeline can reduce
              repeated history-taking and help families share complete context during care decisions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {PROOF_BLOCKS.map((block) => (
            <div key={block.title} className="rounded-[12px] border border-border-default bg-surface-primary p-5">
              <h3 className="text-sm font-semibold text-brand-500 uppercase tracking-wide mb-2">{block.title}</h3>
              <p className="text-sm text-text-secondary">{block.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-[16px] bg-surface-primary border border-border-subtle shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-brand-500/30 transition-all">
              <div className="w-12 h-12 rounded-[12px] bg-surface-secondary border border-border-default flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
