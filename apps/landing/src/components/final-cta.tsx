"use client";

export function FinalCta() {
  return (
    <section className="w-full py-32 px-6 bg-surface-canvas border-t border-border-subtle">
      <div className="w-full max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-8 tracking-tight">
          Join the waitlist → <br className="hidden sm:block" />
          <span className="text-brand-500">Be one of the first to try Synexes.</span>
        </h2>
        
        <div className="flex flex-col items-center">
          <a
            href="#survey"
            className="px-8 py-4 rounded-[10px] bg-brand-500 text-white font-bold text-lg hover:bg-brand-400 hover:-translate-y-[1px] shadow-[0_4px_12px_rgba(58,122,92,0.3)] transition-all duration-150 active:scale-[0.98] mb-4"
          >
            Join Now
          </a>
          <p className="text-text-secondary text-sm">No spam, we promise.</p>
        </div>
      </div>
    </section>
  );
}
