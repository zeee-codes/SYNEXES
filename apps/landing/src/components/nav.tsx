"use client";

import { useState, useEffect } from "react";
import { LogoWordmark } from "./logos";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 inset-x-0 h-16 z-50 transition-all duration-300 ${
        scrolled ? "bg-surface-canvas/90 backdrop-blur-md shadow-[0_1px_2px_rgba(0,0,0,0.1)] border-b border-border-subtle" : "bg-transparent"
      }`}
    >
      <div className="h-full w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="text-text-primary">
          <LogoWordmark className="h-6" />
        </div>
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-surface-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/25"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}
          <a 
            href="#survey"
            className="text-sm font-semibold text-white px-5 py-2.5 rounded-lg bg-brand-500 hover:bg-brand-400 hover:-translate-y-[1px] shadow-[0_2px_4px_rgba(0,0,0,0.15)] transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/25"
          >
            Secure Early Access
          </a>
        </div>
      </div>
    </header>
  );
}
