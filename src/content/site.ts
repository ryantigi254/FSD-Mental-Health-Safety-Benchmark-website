// src/content/site.ts
// ─── Edit this file to update hero text, section headings, SEO, and footer ───

export interface SectionHeading {
  id: string;
  title: string;
  subtitle?: string;
}

export interface FooterContent {
  contactEmail: string;
  lastUpdated: string;
  disclaimer: string;
  copyrightHolder: string;
}

export interface SEOContent {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: "summary_large_image" | "summary";
  keywords: string[];
  metadataBase: string;
}

export interface ImpactCard {
  icon: string;
  title: string;
  description: string;
  accentColor: string;
}

export interface SiteContent {
  title: string;
  tagline: string;
  missionStatement: string;
  benchmarkUrl: string | null;
  liveSiteUrl: string;
  repositoryUrl: string;
  sections: Record<string, SectionHeading>;
  footer: FooterContent;
  seo: SEOContent;
}

export const siteContent: SiteContent = {
  title: "FSD Mental Health Safety Benchmark",
  tagline: "Evaluating clinical reasoning reliability in mental health LLMs",
  missionStatement:
    "A lightweight benchmark evaluating three critical failure modes in large language models destined for mental health support: unfaithful reasoning, sycophantic agreement, and longitudinal drift.",

  // Set to null until the benchmark platform is live — the CTA will show "Coming Soon"
  benchmarkUrl: null,
  liveSiteUrl: "https://fsd-benchmark.netlify.app/",
  repositoryUrl: "https://github.com/ryantigi254/FSD-Mental-Health-Safety-Benchmark.git",

  sections: {
    hero:       { id: "hero",       title: "FSD Mental Health Safety Benchmark" },
    about:      { id: "about",      title: "What This Project Is",   subtitle: "Purpose & Scope" },
    impact:     { id: "impact",     title: "Why It Matters" },
    status:     { id: "status",     title: "Current Status" },
    updates:    { id: "updates",    title: "Updates" },
    outputs:    { id: "outputs",    title: "Outputs & Artefacts" },
    references: { id: "references", title: "References" },
    benchmark:  { id: "benchmark",  title: "Explore the Benchmark" },
  },

  footer: {
    contactEmail: "ryan.gichuru22@my.northampton.ac.uk",
    lastUpdated: "2026-02-16",
    disclaimer:
      "This website showcases the FSD Mental Health Safety Benchmark project. " +
      "The benchmark platform itself is a separate artefact. " +
      "This site does not provide clinical advice.",
    // TODO: Replace with actual author/institution
    copyrightHolder: "FSD Research Group",
  },

  seo: {
    title: "FSD Mental Health Safety Benchmark",
    description:
      "A lightweight benchmark evaluating clinical reasoning reliability " +
      "in mental health LLMs across faithfulness, sycophancy, and drift.",
    ogTitle: "FSD Mental Health Safety Benchmark",
    ogDescription:
      "Evaluating three critical failure modes in clinical LLMs: " +
      "unfaithful reasoning, sycophantic agreement, and longitudinal drift.",
    ogImage: "/opengraph-image.png",
    twitterCard: "summary_large_image",
    keywords: [
      "LLM benchmark",
      "mental health",
      "clinical reasoning",
      "AI safety",
      "faithfulness",
      "sycophancy",
      "longitudinal drift",
    ],
    metadataBase: "https://fsd-benchmark.netlify.app",
  },
};

export const impactCards: ImpactCard[] = [
  {
    icon: "shield",
    title: "Patient Safety",
    description:
      "Identifies when models produce unsafe clinical outputs, including unfaithful reasoning and silent bias in mental health contexts.",
    accentColor: "fsd-orange",
  },
  {
    icon: "eye",
    title: "Transparency",
    description:
      "Measures whether model explanations genuinely reflect their decision-making process, or are post-hoc rationalisations.",
    accentColor: "fsd-teal",
  },
  {
    icon: "chart",
    title: "Evaluation Quality",
    description:
      "Tests 9 models across 3 studies with reproducible metrics, enabling fair comparison of clinical reasoning capabilities.",
    accentColor: "fsd-green",
  },
  {
    icon: "globe",
    title: "Real-World Relevance",
    description:
      "Grounded in verified failure modes from safety literature with clinically meaningful evaluation scenarios.",
    accentColor: "fsd-amber",
  },
];
