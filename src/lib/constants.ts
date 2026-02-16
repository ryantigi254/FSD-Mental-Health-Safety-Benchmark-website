// src/lib/constants.ts

export const SECTION_IDS = [
  "hero",
  "about",
  "impact",
  "status",
  "updates",
  "outputs",
  "benchmark",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const NAV_LABELS: Record<SectionId, string> = {
  hero: "Home",
  about: "About",
  impact: "Why It Matters",
  status: "Status",
  updates: "Updates",
  outputs: "Outputs",
  benchmark: "Benchmark",
};
