/**
 * Synexes Logo System
 * Uses exact uploaded logo image assets
 */

import React from "react";

interface LogoProps {
  className?: string;
  height?: number;
}

export function LogoWordmark({ height = 26, className }: LogoProps) {
  return (
    <img
      src="/brand/logo-wordmark.png"
      alt="Synexes"
      style={{
        height: height,
        width: "auto",
        objectFit: "contain",
      }}
      className={`transition-all duration-300 dark:invert dark:hue-rotate-180 dark:brightness-110 ${className}`}
    />
  );
}

export function LogoIcon({ height = 30, className }: LogoProps) {
  return (
    <img
      src="/brand/logo-icon.png"
      alt="Synexes Mark"
      style={{
        height: height,
        width: "auto",
        objectFit: "contain",
      }}
      className={`transition-all duration-300 dark:brightness-[2.2] dark:contrast-[1.1] dark:hue-rotate-[190deg] ${className}`}
    />
  );
}

export function LogoLockup({ height = 30, className }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <LogoIcon height={height} />
      <LogoWordmark height={Math.round(height * 0.85)} />
    </div>
  );
}
