"use client";

import { motion, type Variants } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import FadeInView from "./ui/FadeInView";
import { siteContent } from "@/content/site";
import { outputs, analysisNotebooks, type OutputType } from "@/content/outputs";
import type { ReactElement } from "react";

const typeIcons: Record<OutputType, ReactElement> = {
  report: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  deck: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  methodology: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  "release-notes": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  code: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  data: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
    </svg>
  ),
  notebook: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const externalIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export default function Outputs() {
  return (
    <SectionWrapper
      id={siteContent.sections.outputs.id}
      title={siteContent.sections.outputs.title}
      background="light"
    >
      {/* Artefact cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid sm:grid-cols-2 gap-6"
      >
        {outputs.map((output) => (
          <motion.div key={output.title} variants={itemVariants}>
            <Card className="h-full relative hover:shadow-glow-teal hover:-translate-y-1 transition-all duration-300" hoverable={false}>
              {output.status === "coming-soon" && (
                <div className="absolute top-4 right-4">
                  <Badge status="coming-soon" />
                </div>
              )}
              <div className="flex items-start gap-4">
                <div className="text-fsd-teal shrink-0 mt-0.5">
                  {typeIcons[output.type] || typeIcons.report}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-fsd-charcoal mb-2">
                    {output.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {output.description}
                  </p>
                  {output.status === "available" && output.url !== "#" && (
                    <a
                      href={output.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-primary hover:text-fsd-dark transition-colors"
                    >
                      {output.external ? "View on GitHub" : "Download"}
                      {externalIcon}
                    </a>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Analysis Notebooks */}
      <FadeInView delay={0.2} className="mt-16">
        <h3 className="text-2xl font-bold text-fsd-charcoal mb-1">
          Analysis Notebooks
        </h3>
        <div className="mb-3 h-0.5 w-12 rounded-full bg-gradient-to-r from-fsd-green to-fsd-teal/40" />
        <p className="text-text-secondary mb-6">
          Interactive analysis from the benchmark evaluation runs. Each notebook contains charts, tables, and detailed metric breakdowns.
        </p>
      </FadeInView>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid sm:grid-cols-2 gap-4"
      >
        {analysisNotebooks.map((nb) => (
          <motion.div key={nb.title} variants={itemVariants}>
            <a
              href={nb.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="h-full group-hover:shadow-glow-green group-hover:-translate-y-1.5 transition-all duration-300" hoverable={false}>
                <div className="flex items-start gap-4">
                  <div className="text-fsd-green shrink-0 mt-0.5">
                    {typeIcons.notebook}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-fsd-charcoal mb-1 group-hover:text-primary transition-colors">
                      {nb.title}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {nb.description}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-primary">
                      Open notebook {externalIcon}
                    </span>
                  </div>
                </div>
              </Card>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
