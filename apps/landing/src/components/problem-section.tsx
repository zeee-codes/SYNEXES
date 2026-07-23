"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FolderOpen, History, FileWarning, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PAIN_POINTS = [
  {
    icon: <FolderOpen className="w-6 h-6 text-[#B94A3E]" />,
    title: "Digging for Reports",
    desc: "Searching through WhatsApp, Drive folders, or physical files minutes before a consultation.",
  },
  {
    icon: <History className="w-6 h-6 text-[#C48A2C]" />,
    title: "Repeating History",
    desc: "Explaining your medical history again and again at every single appointment.",
  },
  {
    icon: <Users className="w-6 h-6 text-brand-500" />,
    title: "Juggling Family Records",
    desc: "Trying to keep track of your parents', partner's, and children's health documents in one brain.",
  },
  {
    icon: <FileWarning className="w-6 h-6 text-[#3A6BB0]" />,
    title: "Doctors Missing Context",
    desc: "Arriving with incomplete info, forcing doctors to guess or prescribe redundant tests.",
  },
];

export function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !cardsRef.current) return;

    gsap.fromTo(cardsRef.current.children, {
      opacity: 0,
      y: 40,
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
    });
  }, []);

  return (
    <section ref={containerRef} className="w-full py-32 px-6 bg-surface-primary relative z-10 border-t border-border-subtle">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-6">
            Healthcare shouldn’t feel <br className="hidden sm:block" />
            this disorganized.
          </h2>
          <p className="text-lg text-text-secondary">
            The friction of chronic care is the scattered data. When records are dispersed across paper folders and chat threads, caregivers lose time and doctors miss critical context.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAIN_POINTS.map((pt, i) => (
            <div key={i} className="p-8 rounded-[16px] bg-surface-raised border border-border-default shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.06)] hover:border-brand-500/30 transition-all">
              <div className="w-12 h-12 rounded-[12px] bg-surface-secondary border border-border-subtle flex items-center justify-center mb-6">
                {pt.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">{pt.title}</h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
