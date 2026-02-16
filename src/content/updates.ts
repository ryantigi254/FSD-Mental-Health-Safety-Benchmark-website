// src/content/updates.ts
// ─── Edit this file to add new project updates ───
// Add new entries at the TOP of the array (newest first).

export type UpdateTag = "release" | "milestone" | "paper" | "data";

export interface Update {
  date: string;
  title: string;
  body: string;
  tag?: UpdateTag;
}

// TODO: Replace placeholder updates with real project updates
export const updates: Update[] = [
  {
    date: "2026-02-15",
    title: "Benchmark runtime restructured",
    body: "Canonical script layout enforced. All studies now run from unified pipeline entry points with consistent CLI interfaces.",
    tag: "release",
  },
  {
    date: "2026-01-20",
    title: "9-model evaluation complete",
    body: "All 9 models evaluated across Studies A, B, and C. Results archived with full metric computation including faithfulness gap, sycophancy probability, and entity recall at turn 10.",
    tag: "milestone",
  },
  {
    date: "2025-12-01",
    title: "Persona-based longitudinal histories",
    body: "40+ patient personas created with safety plans and multi-turn conversation histories for Study C longitudinal drift evaluation.",
    tag: "data",
  },
];
