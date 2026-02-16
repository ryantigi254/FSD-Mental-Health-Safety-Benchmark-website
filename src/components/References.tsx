"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import FadeInView from "./ui/FadeInView";
import {
  references,
  categoryLabels,
  categoryOrder,
  type ReferenceCategory,
} from "@/content/references";

const categoryIcons: Record<ReferenceCategory, string> = {
  faithfulness: "A",
  sycophancy: "B",
  longitudinal: "C",
  clinical: "D",
  methods: "M",
  evaluation: "E",
};

const categoryColors: Record<ReferenceCategory, string> = {
  faithfulness: "bg-fsd-orange/15 text-fsd-orange border-fsd-orange/30",
  sycophancy: "bg-fsd-dark/10 text-fsd-dark border-fsd-dark/30",
  longitudinal: "bg-fsd-green/15 text-fsd-green border-fsd-green/30",
  clinical: "bg-fsd-teal/15 text-fsd-teal border-fsd-teal/30",
  methods: "bg-fsd-amber/15 text-fsd-charcoal border-fsd-amber/30",
  evaluation: "bg-fsd-cool-grey/15 text-fsd-charcoal border-fsd-cool-grey/30",
};

const panelVariants: Variants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

export default function References() {
  const [isOpen, setIsOpen] = useState(false);

  // Group references by category
  const grouped = categoryOrder.reduce(
    (acc, cat) => {
      acc[cat] = references.filter((r) => r.category === cat);
      return acc;
    },
    {} as Record<ReferenceCategory, typeof references>
  );

  return (
    <section
      id="references"
      aria-labelledby="references-heading"
      className="bg-surface-alt py-12 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <FadeInView>
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="references-panel"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white shadow-card hover:shadow-glow-teal-sm hover:-translate-y-0.5 transition-all duration-300 border border-fsd-teal/10"
            >
              {/* Book icon */}
              <svg
                className="w-5 h-5 text-fsd-teal"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span className="text-lg font-semibold text-fsd-charcoal group-hover:text-fsd-teal transition-colors">
                References
              </span>
              <span className="text-sm text-text-secondary">
                ({references.length})
              </span>
              {/* Chevron */}
              <svg
                className={`w-5 h-5 text-fsd-cool-grey transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <p className="text-sm text-text-secondary">
              Key academic sources supporting this benchmark
            </p>
          </div>
        </FadeInView>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id="references-panel"
              key="references-panel"
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              variants={panelVariants}
              className="overflow-hidden"
            >
              <div className="pt-10 space-y-10">
                {categoryOrder.map((cat) => {
                  const refs = grouped[cat];
                  if (!refs || refs.length === 0) return null;

                  return (
                    <div key={cat}>
                      {/* Category header */}
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold border ${categoryColors[cat]}`}
                        >
                          {categoryIcons[cat]}
                        </span>
                        <h3
                          id={`references-heading`}
                          className="text-lg font-semibold text-fsd-charcoal"
                        >
                          {categoryLabels[cat]}
                        </h3>
                        <span className="text-xs text-text-secondary">
                          ({refs.length})
                        </span>
                      </div>

                      {/* Reference list */}
                      <motion.ol
                        variants={listVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-2 pl-11"
                      >
                        {refs.map((ref, i) => (
                          <motion.li
                            key={`${cat}-${i}`}
                            variants={itemVariants}
                            className="group text-sm leading-relaxed"
                          >
                            <div className="flex items-start gap-2">
                              <span className="text-fsd-cool-grey select-none shrink-0 mt-0.5 text-xs font-mono">
                                [{i + 1}]
                              </span>
                              <p className="text-text-secondary">
                                <span className="font-medium text-fsd-charcoal">
                                  {ref.authors}
                                </span>{" "}
                                ({ref.year}).{" "}
                                {ref.url ? (
                                  <a
                                    href={ref.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-fsd-dark underline underline-offset-2 decoration-fsd-teal/30 hover:decoration-fsd-teal transition-colors"
                                  >
                                    &ldquo;{ref.title}&rdquo;
                                  </a>
                                ) : (
                                  <span>&ldquo;{ref.title}&rdquo;</span>
                                )}{" "}
                                <span className="italic">{ref.venue}.</span>
                              </p>
                            </div>
                          </motion.li>
                        ))}
                      </motion.ol>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
