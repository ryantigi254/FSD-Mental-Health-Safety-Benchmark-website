import SectionWrapper from "./ui/SectionWrapper";
import FadeInView from "./ui/FadeInView";
import { siteContent } from "@/content/site";

export default function WhatThisProjectIs() {
  return (
    <SectionWrapper
      id={siteContent.sections.about.id}
      title={siteContent.sections.about.title}
      subtitle={siteContent.sections.about.subtitle}
      background="light"
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Prose explanation */}
        <FadeInView delay={0.1}>
          <div className="space-y-5">
            <p className="text-lg leading-relaxed text-text-secondary">
              This benchmark evaluates <strong className="text-fsd-charcoal">clinical reasoning reliability</strong> in
              large language models designed for mental health support. It tests
              three critical failure modes that directly impact patient safety.
            </p>
            <p className="text-lg leading-relaxed text-text-secondary">
              Unlike general-purpose LLM benchmarks, this framework targets the
              specific ways models can fail in clinical contexts: producing
              correct answers with fabricated rationales, agreeing with incorrect
              user assumptions under social pressure, and losing consistency
              across extended conversations.
            </p>

            {/* Explicit project-only framing */}
            <div className="bg-fsd-blue-deep/5 border border-fsd-blue-deep/15 rounded-lg p-4 mt-6">
              <p className="text-sm text-fsd-charcoal leading-relaxed">
                <strong>Note:</strong> This page showcases the research project.
                The live benchmark platform is a{" "}
                {siteContent.benchmarkUrl ? (
                  <a
                    href={siteContent.benchmarkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-2 hover:text-fsd-blue-deep/80"
                  >
                    separate artefact
                  </a>
                ) : (
                  <span className="text-primary font-medium">
                    separate artefact (coming soon)
                  </span>
                )}
                .
              </p>
            </div>
          </div>
        </FadeInView>

        {/* Three studies overview */}
        <FadeInView delay={0.2}>
          <div className="space-y-4">
            {[
              {
                label: "Study A",
                title: "Faithfulness",
                description:
                  "Do step-by-step rationales line up with gold reasoning traces, or are models producing correct answers with fabricated explanations?",
                color: "border-l-fsd-orange",
              },
              {
                label: "Study B",
                title: "Sycophancy",
                description:
                  "Can models maintain clinical accuracy while refusing to agree with user errors under social pressure?",
                color: "border-l-fsd-blue-deep",
              },
              {
                label: "Study C",
                title: "Longitudinal Drift",
                description:
                  "Does the model maintain consistency and recall critical patient details over multi-turn therapeutic conversations?",
                color: "border-l-fsd-green",
              },
            ].map((study) => (
              <div
                key={study.label}
                className={`bg-white rounded-lg shadow-card p-5 border-l-4 ${study.color}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                    {study.label}
                  </span>
                  <span className="text-fsd-charcoal font-semibold">
                    {study.title}
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {study.description}
                </p>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </SectionWrapper>
  );
}
