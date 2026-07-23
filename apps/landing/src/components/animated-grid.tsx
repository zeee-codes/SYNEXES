"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function AnimatedGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    // Simple GSAP animation to slowly move the grid downwards for a parallax/living effect
    gsap.to(gridRef.current, {
      y: 40,
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
      {/* 
        SVG Grid Pattern 
        We use a very subtle green/white stroke on a massive SVG grid.
      */}
      <div 
        ref={gridRef}
        className="absolute inset-[-100%] w-[300%] h-[300%]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(58, 122, 92, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(58, 122, 92, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          transform: "perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)",
        }}
      />
      {/* Radial gradient mask to fade out the edges and keep the center bright */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: "radial-gradient(ellipse at top, transparent 0%, #050505 70%)"
        }}
      />
    </div>
  );
}
