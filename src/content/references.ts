// src/content/references.ts
// ─── Edit this file to add or update academic references ───

export type ReferenceCategory =
  | "faithfulness"
  | "sycophancy"
  | "longitudinal"
  | "clinical"
  | "methods"
  | "evaluation";

export interface Reference {
  /** Short citation key displayed in list, e.g. "Wei et al., 2023" */
  authors: string;
  year: number;
  title: string;
  /** Venue: journal, conference, preprint server, etc. */
  venue: string;
  /** URL to the paper (arXiv, DOI, etc.) — optional */
  url?: string;
  /** Which study / topic area this reference supports */
  category: ReferenceCategory;
}

export const categoryLabels: Record<ReferenceCategory, string> = {
  faithfulness: "Faithfulness & Reasoning",
  sycophancy: "Sycophancy & Alignment",
  longitudinal: "Longitudinal Drift & Memory",
  clinical: "Clinical Domain & Safety",
  methods: "Methods & Frameworks",
  evaluation: "Evaluation Tools & Benchmarks",
};

export const categoryOrder: ReferenceCategory[] = [
  "faithfulness",
  "sycophancy",
  "longitudinal",
  "clinical",
  "methods",
  "evaluation",
];

export const references: Reference[] = [
  // ── Faithfulness & Reasoning ──────────────────────────────────────
  {
    authors: "Lanham, T., et al.",
    year: 2023,
    title: "Measuring Faithfulness in Chain-of-Thought Reasoning",
    venue: "arXiv:2307.13702",
    url: "https://arxiv.org/abs/2307.13702",
    category: "faithfulness",
  },
  {
    authors: "Paul, D., et al.",
    year: 2024,
    title: "Making Reasoning Matter: Measuring and Improving Faithfulness of Chain-of-Thought Reasoning",
    venue: "Findings of EMNLP 2024",
    category: "faithfulness",
  },
  {
    authors: "Turpin, M., et al.",
    year: 2023,
    title: "Language Models Don't Always Say What They Think: Unfaithful Explanations in Chain-of-Thought Prompting",
    venue: "NeurIPS 2023",
    url: "https://proceedings.neurips.cc/paper_files/paper/2023/file/ed3fea9033a80fea1376299fa7863f4a-Paper-Conference.pdf",
    category: "faithfulness",
  },
  {
    authors: "Lyu, Q., et al.",
    year: 2023,
    title: "Faithful Chain-of-Thought Reasoning",
    venue: "arXiv:2301.13379",
    url: "https://arxiv.org/abs/2301.13379",
    category: "faithfulness",
  },
  {
    authors: "Paul, D. & West, P.",
    year: 2024,
    title: "On Measuring Faithfulness or Self-Consistency of Natural Language Explanations",
    venue: "ACL 2024",
    category: "faithfulness",
  },
  {
    authors: "Ibrahim, L., et al.",
    year: 2025,
    title: "A Causal Lens for Evaluating Faithfulness Metrics",
    venue: "arXiv:2502.18848",
    url: "https://arxiv.org/abs/2502.18848",
    category: "faithfulness",
  },
  {
    authors: "Wei, J., et al.",
    year: 2022,
    title: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
    venue: "arXiv:2201.11903",
    url: "https://arxiv.org/abs/2201.11903",
    category: "faithfulness",
  },
  {
    authors: "Wang, X., et al.",
    year: 2022,
    title: "Self-Consistency Improves Chain of Thought Reasoning in Language Models",
    venue: "arXiv:2203.11171",
    url: "https://arxiv.org/abs/2203.11171",
    category: "faithfulness",
  },

  // ── Sycophancy & Alignment ────────────────────────────────────────
  {
    authors: "Wei, J., et al.",
    year: 2023,
    title: "Simple Synthetic Data Reduces Sycophancy in Large Language Models",
    venue: "arXiv:2308.03958",
    url: "https://arxiv.org/abs/2308.03958",
    category: "sycophancy",
  },
  {
    authors: "Sharma, M., et al.",
    year: 2023,
    title: "Towards Understanding Sycophancy in Language Models",
    venue: "arXiv:2310.13548",
    url: "https://arxiv.org/abs/2310.13548",
    category: "sycophancy",
  },
  {
    authors: "Liu, J., et al.",
    year: 2025,
    title: "TRUTH DECAY: Quantifying Multi-Turn Sycophancy in LLMs",
    venue: "arXiv:2503.11656",
    url: "https://arxiv.org/abs/2503.11656",
    category: "sycophancy",
  },
  {
    authors: "Fanous, A., et al.",
    year: 2025,
    title: "SycEval: Evaluating LLM Sycophancy",
    venue: "arXiv:2502.08177",
    url: "https://arxiv.org/abs/2502.08177",
    category: "sycophancy",
  },
  {
    authors: "Pandey, S., et al.",
    year: 2025,
    title: "Beacon: Single-Turn Diagnosis of Latent Sycophancy in LLMs",
    venue: "arXiv:2510.16727",
    url: "https://arxiv.org/abs/2510.16727",
    category: "sycophancy",
  },
  {
    authors: "Hong, J., et al.",
    year: 2025,
    title: "Measuring Sycophancy in Multi-turn Dialogues",
    venue: "Findings of EMNLP 2025",
    category: "sycophancy",
  },
  {
    authors: "Kaur, A.",
    year: 2025,
    title: "Echoes of Agreement: Argument-Driven Sycophancy in LLMs",
    venue: "Findings of EMNLP 2025",
    category: "sycophancy",
  },
  {
    authors: "Meinke, A., et al.",
    year: 2024,
    title: "Frontier Models are Capable of In-context Scheming",
    venue: "arXiv:2412.04984",
    url: "https://arxiv.org/abs/2412.04984",
    category: "sycophancy",
  },
  {
    authors: "Koorndijk, J.",
    year: 2025,
    title: "Empirical Evidence for Alignment Faking in a Small LLM Trained to Be Helpful, Honest, and Harmless",
    venue: "arXiv:2506.21584",
    url: "https://arxiv.org/abs/2506.21584",
    category: "sycophancy",
  },
  {
    authors: "Van der Weij, W., et al.",
    year: 2025,
    title: "AI Sandbagging: Language Models Can Strategically Underperform on Evaluations",
    venue: "ICLR 2025",
    category: "sycophancy",
  },
  {
    authors: "Zou, A., et al.",
    year: 2024,
    title: "Enhancing Multiple Dimensions of Trustworthiness in LLMs via Sparse Activation Control",
    venue: "NeurIPS 2024",
    category: "sycophancy",
  },

  // ── Longitudinal Drift & Memory ───────────────────────────────────
  {
    authors: "Laban, P., et al.",
    year: 2025,
    title: "LLMs Get Lost In Multi-Turn Conversation",
    venue: "arXiv:2505.06120",
    url: "https://arxiv.org/abs/2505.06120",
    category: "longitudinal",
  },
  {
    authors: "Kruse, B., et al.",
    year: 2025,
    title: "Large Language Models with Temporal Reasoning for Longitudinal Clinical Summarisation",
    venue: "Findings of EMNLP 2025",
    category: "longitudinal",
  },
  {
    authors: "Zheng, C., et al.",
    year: 2024,
    title: "Why LLMs Fail in Multi-Turn Conversations (And How to Fix It)",
    venue: "PromptHub Technical Report",
    url: "https://www.prompthub.us/blog/why-llms-fail-in-multi-turn-conversations-and-how-to-fix-it",
    category: "longitudinal",
  },
  {
    authors: "Yuan, Z., et al.",
    year: 2024,
    title: "Drift No More? Context Equilibria in Multi-Turn LLM Interactions",
    venue: "arXiv:2510.07777",
    url: "https://arxiv.org/abs/2510.07777",
    category: "longitudinal",
  },

  // ── Clinical Domain & Safety ──────────────────────────────────────
  {
    authors: "Hu, H., et al.",
    year: 2025,
    title: "Beyond Empathy: Integrating Diagnostic and Therapeutic Reasoning with Large Language Models for Mental Health",
    venue: "arXiv:2505.15715",
    url: "https://arxiv.org/abs/2505.15715",
    category: "clinical",
  },
  {
    authors: "Hager, P., et al.",
    year: 2024,
    title: "Evaluation and Mitigation of the Limitations of Large Language Models in Clinical Decision-Making",
    venue: "Nature Medicine 2024",
    category: "clinical",
  },
  {
    authors: "Lee, S., et al.",
    year: 2024,
    title: "SafeHear: A Novel Evaluation Benchmark for Safety in Medical LLMs",
    venue: "arXiv:2507.23486",
    url: "https://arxiv.org/abs/2507.23486",
    category: "clinical",
  },
  {
    authors: "Lee, J., et al.",
    year: 2025,
    title: "When Helpfulness Backfires: LLMs and the Risk of False Medical Information",
    venue: "Journal of Medical Internet Research",
    category: "clinical",
  },
  {
    authors: "Singhal, K., et al.",
    year: 2023,
    title: "Towards Expert-Level Medical Question Answering with Large Language Models",
    venue: "arXiv:2305.09617",
    url: "https://arxiv.org/abs/2305.09617",
    category: "clinical",
  },
  {
    authors: "Gabriel, A., et al.",
    year: 2024,
    title: "Can AI Relate: Testing Large Language Model Response for Mental Health Support",
    venue: "Findings of EMNLP 2024",
    category: "clinical",
  },
  {
    authors: "Kim, S., et al.",
    year: 2025,
    title: "CARE-AD: A Multi-Agent LLM Framework for Alzheimer's Disease Prediction",
    venue: "npj Digital Medicine 2025",
    category: "clinical",
  },

  // ── Methods & Frameworks ──────────────────────────────────────────
  {
    authors: "Madaan, A., et al.",
    year: 2023,
    title: "Self-Refine: Iterative Refinement with Self-Feedback",
    venue: "arXiv:2303.17651",
    url: "https://arxiv.org/abs/2303.17651",
    category: "methods",
  },
  {
    authors: "Shinn, N., et al.",
    year: 2023,
    title: "Reflexion: Language Agents with Verbal Reinforcement Learning",
    venue: "arXiv:2303.11366",
    url: "https://arxiv.org/abs/2303.11366",
    category: "methods",
  },
  {
    authors: "Srivastava, A., et al.",
    year: 2023,
    title: "Beyond the Imitation Game: Quantifying and Extrapolating the Capabilities of Language Models",
    venue: "arXiv:2206.04615",
    url: "https://arxiv.org/abs/2206.04615",
    category: "methods",
  },

  // ── Evaluation Tools & Benchmarks ─────────────────────────────────
  {
    authors: "DeYoung, J., et al.",
    year: 2020,
    title: "ERASER: A Benchmark to Evaluate Rationalized NLP Models",
    venue: "ACL 2020",
    url: "https://aclanthology.org/2020.acl-main.408",
    category: "evaluation",
  },
  {
    authors: "Kim, A., et al.",
    year: 2025,
    title: "Development and Validation of the Provider Documentation Summarisation Quality Instrument (PDSQI-9)",
    venue: "arXiv:2501.08977",
    url: "https://arxiv.org/abs/2501.08977",
    category: "evaluation",
  },
  {
    authors: "Smith, J., et al.",
    year: 2025,
    title: "Automating Evaluation of AI Text Generation in Healthcare with an LLM-as-a-Judge",
    venue: "medRxiv preprint",
    url: "https://www.medrxiv.org/content/10.1101/2025.04.22.25326219v1",
    category: "evaluation",
  },
  {
    authors: "Welleck, S., et al.",
    year: 2019,
    title: "Dialogue Natural Language Inference",
    venue: "ACL 2019",
    category: "evaluation",
  },
  {
    authors: "Zhao, Z., et al.",
    year: 2025,
    title: "LLLMs: A Data-Driven Survey of Evolving Research on Limitations of Large Language Models",
    venue: "ResearchGate Preprint",
    category: "evaluation",
  },
];
