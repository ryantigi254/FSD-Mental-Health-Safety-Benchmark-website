// src/content/outputs.ts
// ─── Edit this file to update artefact cards ───

export type OutputType = "report" | "deck" | "methodology" | "release-notes" | "code" | "data" | "notebook";
export type OutputStatus = "available" | "coming-soon";

export interface OutputArtefact {
  title: string;
  description: string;
  type: OutputType;
  url: string;
  status: OutputStatus;
  external?: boolean;
}

export interface AnalysisNotebook {
  title: string;
  description: string;
  url: string;
}

export const outputs: OutputArtefact[] = [
  {
    title: "Technical Report",
    description:
      "Full written report covering all three studies, metrics, model comparisons, and findings.",
    type: "report",
    url: "/docs/technical-report.pdf",
    status: "available",
  },
  {
    title: "Presentation Deck",
    description:
      "Slide deck summarising benchmark design, key results, and implications for clinical AI safety.",
    type: "deck",
    url: "/docs/presentation-deck.pptx",
    status: "available",
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
    url: "https://github.com/ryantigi254/FSD-Mental-Health-Safety-Benchmark.git",
    status: "available",
    external: true,
  },
];

export const analysisNotebooks: AnalysisNotebook[] = [
  {
    title: "Study A — Faithfulness Analysis",
    description: "Faithfulness gap, step-F1, and accuracy metrics across evaluated models.",
    url: "/notebooks/study_a_analysis.html",
  },
  {
    title: "Study A — Bias Analysis",
    description: "Silent bias rate and adversarial bias vignette evaluation.",
    url: "/notebooks/study_a_bias_analysis.html",
  },
  {
    title: "Study B — Sycophancy Analysis",
    description: "Sycophancy probability, flip rate, and evidence hallucination metrics.",
    url: "/notebooks/study_b_analysis.html",
  },
  {
    title: "Study C — Longitudinal Drift Analysis",
    description: "Entity recall at turn 10, knowledge conflict rate, and continuity scores.",
    url: "/notebooks/study_c_analysis.html",
  },
];
