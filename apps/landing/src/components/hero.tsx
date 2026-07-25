"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TIMELINE_RECORDS = [
  {
    date: "Apr 22, 2025",
    title: "Echocardiogram & Lipid Panel",
    badge: "Report + Scan",
    doctor: "Dr. A. Sharma (Cardiology)",
  },
  {
    date: "Mar 14, 2025",
    title: "Metformin 500mg",
    badge: "Rx Active",
    doctor: "Endocrinology Dept.",
  },
];

function TimelineMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto mt-16 rounded-[16px] bg-surface-primary border border-border-subtle shadow-[0_4px_12px_rgba(0,0,0,0.1)] overflow-hidden">
      {/* Top Bar */}
      <div className="bg-surface-secondary border-b border-border-subtle p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-500/10 text-brand-500 flex items-center justify-center font-semibold text-sm">
            S
          </div>
          <div>
            <h3 className="text-text-primary font-semibold text-sm">Live Timeline</h3>
            <p className="text-text-secondary text-[11px] uppercase tracking-wider">Secure Cloud</p>
          </div>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#B94A3E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#C48A2C]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#3A7A5C]" />
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {TIMELINE_RECORDS.map((rec, i) => (
          <div key={i} className="flex gap-4 group">
            <div className="flex flex-col items-center gap-2 mt-1">
              <div className="w-3 h-3 rounded-full bg-surface-primary border-[3px] border-brand-500" />
              {i !== TIMELINE_RECORDS.length - 1 && (
                <div className="w-[2px] h-full bg-border-subtle group-hover:bg-brand-500/30 transition-colors" />
              )}
            </div>
            <div className="flex-1 bg-surface-raised border border-border-default rounded-[12px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] group-hover:shadow-[0_2px_4px_rgba(0,0,0,0.06)] group-hover:border-brand-500/30 transition-all">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-text-secondary">{rec.date}</span>
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-surface-secondary text-text-primary border border-border-subtle">
                  {rec.badge}
                </span>
              </div>
              <p className="text-text-primary font-semibold mb-1">{rec.title}</p>
              <p className="text-sm text-text-secondary">{rec.doctor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!containerRef.current || !textRef.current || shouldReduceMotion) return;
    
    // Very subtle fade on scroll
    gsap.to(textRef.current, {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom 30%",
        scrub: true,
      },
    });
  }, [shouldReduceMotion]);

  return (
    <section ref={containerRef} className="w-full pt-40 pb-24 px-6 relative bg-surface-canvas overflow-hidden flex flex-col items-center text-center">
      
      <div ref={textRef} className="max-w-4xl mx-auto z-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-6xl lg:text-[80px] font-bold text-text-primary tracking-tight leading-[1.1] mb-6"
        >
          The healthcare timeline <br className="hidden md:block" />
          <span className="text-brand-500">for chronic care.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Synexes helps caregivers, patients, and clinicians keep medical history in one chronological record that can
          be reviewed and shared with context.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#survey"
            className="w-full sm:w-auto px-8 py-4 rounded-[10px] bg-brand-500 text-white font-bold text-lg hover:bg-brand-400 hover:-translate-y-[1px] shadow-[0_4px_12px_rgba(58,122,92,0.3)] transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/25"
          >
            Secure Early Access
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-8 py-4 rounded-[10px] bg-surface-primary border-2 border-border-subtle text-text-primary font-semibold text-lg hover:bg-surface-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/25"
          >
            See How It Works
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full z-10"
      >
        <TimelineMockup />
      </motion.div>
    </section>
  );
}
