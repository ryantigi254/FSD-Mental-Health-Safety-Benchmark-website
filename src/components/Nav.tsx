"use client";

import { useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { SECTION_IDS, NAV_LABELS } from "@/lib/constants";

export default function Nav() {
  const activeId = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Skip "hero" from visible nav links — hero is just the home section
  const navItems = SECTION_IDS.filter((id) => id !== "hero");

  return (
    <nav
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-nav"
      aria-label="Main navigation"
    >
      {/* Thin gradient accent strip — deck teal → dark → teal */}
      <div className="h-[2px] bg-gradient-to-r from-fsd-teal/0 via-fsd-teal to-fsd-dark/40" />
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo / project name */}
        <a
          href="#hero"
          className="font-bold text-fsd-charcoal text-sm sm:text-base hover:text-primary transition-colors truncate"
        >
          FSD Benchmark
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((id) => {
            const isActive = activeId === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary bg-fsd-teal/5"
                      : "text-text-secondary hover:text-fsd-charcoal hover:bg-fsd-light/50"
                  }`}
                >
                  {NAV_LABELS[id]}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-fsd-charcoal hover:bg-fsd-light transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-fsd-light">
          <ul className="px-4 py-3 space-y-1">
            {navItems.map((id) => {
              const isActive = activeId === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary bg-fsd-teal/5"
                        : "text-text-secondary hover:text-fsd-charcoal hover:bg-fsd-light/50"
                    }`}
                  >
                    {NAV_LABELS[id]}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
