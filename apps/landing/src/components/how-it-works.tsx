"use client";

import { UploadCloud, Layers, Send } from "lucide-react";

const STEPS = [
  {
    icon: <UploadCloud className="w-8 h-8 text-brand-500" />,
    title: "1. Upload or import",
    desc: "Simply upload PDFs or sync your doctor emails.",
  },
  {
    icon: <Layers className="w-8 h-8 text-brand-500" />,
    title: "2. Organize automatically",
    desc: "AI instantly sorts everything by date and condition.",
  },
  {
    icon: <Send className="w-8 h-8 text-brand-500" />,
    title: "3. View & share",
    desc: "Browse the timeline and securely send to any doctor.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-32 px-6 bg-surface-primary border-t border-border-subtle">
      <div className="w-full max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-16">
          How It Works
        </h2>
        
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-border-subtle -z-10" />

          {STEPS.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-center relative z-10 group">
              <div className="w-24 h-24 rounded-full bg-surface-canvas border-4 border-surface-primary flex items-center justify-center mb-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)] group-hover:scale-105 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">{step.title}</h3>
              <p className="text-text-secondary text-base leading-relaxed max-w-[280px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
