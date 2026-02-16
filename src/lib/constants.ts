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

export const EXTERNAL_LINKS = {
  // TODO: Replace with actual benchmark platform URL when available
  benchmark: "https://TODO-benchmark-platform.example.com",
  repository: "https://github.com/ryantigi254/FSD-Mental-Health-Safety-Benchmark.git",
} as const;
