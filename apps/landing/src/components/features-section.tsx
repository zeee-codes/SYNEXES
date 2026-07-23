"use client";

import { Clock, Sparkles, ShieldCheck, Search, Users, Share } from "lucide-react";

const FEATURES = [
  {
    icon: <Clock className="w-6 h-6 text-brand-500" />,
    title: "Unified Timeline",
    desc: "All your medical documents in one chronological, easy-to-read view.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-brand-500" />,
    title: "AI-Powered Summaries",
    desc: "Automatically highlight key info like abnormal test results or new prescriptions.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand-500" />,
    title: "Secure Cloud Storage",
    desc: "AES-256 encryption ensures your records are locked and private.",
  },
  {
    icon: <Search className="w-6 h-6 text-brand-500" />,
    title: "Smart Search",
    desc: "Instantly find any past report by keyword, doctor's name, or date.",
  },
  {
    icon: <Users className="w-6 h-6 text-brand-500" />,
    title: "Family Profiles",
    desc: "Manage multiple people’s health records seamlessly under one account.",
  },
  {
    icon: <Share className="w-6 h-6 text-brand-500" />,
    title: "Instant Sharing",
    desc: "Securely share any timeline or specific report with doctors in one click.",
  },
];

export function FeaturesSection() {
  return (
    <section className="w-full py-24 px-6 bg-surface-canvas">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-6">
              One Timeline. <br />
              <span className="text-brand-500">Every Medical Moment.</span>
            </h2>
            <p className="text-lg text-text-secondary">
              Synexes connects all your medical documents—lab results, prescriptions, consultations—into a single chronological timeline. No more hunting for files or repeating your history.
            </p>
          </div>
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
