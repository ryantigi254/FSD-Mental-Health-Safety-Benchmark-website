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
    title: "9-Model Evaluation Complete",
    description:
      "Ran all studies across 9 models with full metric computation and result archival.",
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
