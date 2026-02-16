// src/content/outputs.ts
// ─── Edit this file to update artefact cards ───

export type OutputType = "report" | "deck" | "methodology" | "release-notes" | "code" | "data";
export type OutputStatus = "available" | "coming-soon";

export interface OutputArtefact {
  title: string;
  description: string;
  type: OutputType;
  url: string;
  status: OutputStatus;
}

// TODO: Update URLs and statuses when artefacts become available
export const outputs: OutputArtefact[] = [
  {
    title: "Technical Report",
    description:
      "Full written report covering all three studies, metrics, model comparisons, and findings.",
    type: "report",
    url: "#",
    status: "coming-soon",
  },
  {
    title: "Presentation Deck",
    description:
      "Slide deck summarising benchmark design, key results, and implications for clinical AI safety.",
    type: "deck",
    url: "#",
    status: "coming-soon",
  },
  {
    title: "Evaluation Methodology",
    description:
      "Detailed description of metrics, data pipelines, gold label construction, and reproducibility steps.",
    type: "methodology",
    url: "#",
    status: "coming-soon",
  },
  {
    title: "Benchmark Code",
    description:
      "Open-source benchmark runtime with all study pipelines, model runners, and metric calculators.",
    type: "code",
    url: "#",
    status: "coming-soon",
  },
];
