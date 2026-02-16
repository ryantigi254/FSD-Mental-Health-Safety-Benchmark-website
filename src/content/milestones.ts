// src/content/milestones.ts
// ─── Edit this file to update the project timeline ───

export type MilestoneStatus = "done" | "active" | "planned";

export interface Milestone {
  date: string;
  title: string;
  description: string;
  status: MilestoneStatus;
}

// TODO: Update milestones with actual project dates and descriptions
export const milestones: Milestone[] = [
  {
    date: "Oct 2025",
    title: "Literature Review & Framework Design",
    description:
      "Surveyed clinical LLM failure modes and designed three-study evaluation protocol.",
    status: "done",
  },
  {
    date: "Dec 2025",
    title: "Benchmark Runtime v1",
    description:
      "Implemented Study A (faithfulness), Study B (sycophancy), and Study C (drift) pipelines.",
    status: "done",
  },
  {
    date: "Jan 2026",
    title: "Dataset Scaling Complete",
    description:
      "Scaled to 14,416 prompts per model across all studies — Study A: 4,000 CoT/Early + 2,016 adversarial bias; Study B: 4,000 single-turn + 2,400 multi-turn; Study C: 2,000 longitudinal turns.",
    status: "done",
  },
  {
    date: "Jan 2026",
    title: "8-Model Evaluation Complete",
    description:
      "Ran all studies across 8 models totalling 115,328 prompts with full metric computation and result archival.",
    status: "done",
  },
  {
    date: "Feb 2026",
    title: "Analysis & Reporting",
    description:
      "Producing final analysis notebooks, charts, and written report.",
    status: "active",
  },
  {
    date: "Mar 2026",
    title: "Public Release",
    description:
      "Release benchmark platform, dataset splits, and reproducibility package.",
    status: "planned",
  },
];
