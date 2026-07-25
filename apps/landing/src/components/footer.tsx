import { LogoWordmark } from "./logos";

const NAV_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Support", href: "/contact" },
  { label: "Contact", href: "mailto:hello@synexes.com" },
];

export function Footer() {
  return (
    <footer className="w-full bg-surface-primary py-8 px-6 border-t border-border-subtle relative z-10">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="text-text-primary">
            <LogoWordmark className="h-4" />
          </div>
          <span className="text-text-secondary text-sm">
            © {new Date().getFullYear()} Synexes.
          </span>
        </div>

        <nav className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-text-secondary hover:text-text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/25 rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="max-w-7xl mx-auto mt-4 text-xs text-text-secondary text-center md:text-left">
        Synexes uses first-party analytics to understand onboarding interest. We do not use third-party ad trackers on
        this landing page.
      </p>
    </footer>
  );
}
