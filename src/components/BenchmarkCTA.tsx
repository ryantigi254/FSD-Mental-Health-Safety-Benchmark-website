import { siteContent } from "@/content/site";
import Button from "./ui/Button";
import FadeInView from "./ui/FadeInView";

export default function BenchmarkCTA() {
  return (
    <section
      id={siteContent.sections.benchmark.id}
      aria-labelledby="benchmark-heading"
      className="bg-fsd-blue-deep py-20 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <FadeInView>
          <h2
            id="benchmark-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            {siteContent.sections.benchmark.title}
          </h2>
        </FadeInView>

        <FadeInView delay={0.1}>
          <p className="text-lg text-white/80 mb-3 leading-relaxed">
            The benchmark platform is a separate, interactive tool where you can
            explore model evaluations, compare results, and run your own
            assessments.
          </p>
        </FadeInView>

        <FadeInView delay={0.15}>
          <p className="text-sm text-white/60 mb-8">
            This showcase page provides project context. For the live evaluation
            tool, visit the platform below.
          </p>
        </FadeInView>

        <FadeInView delay={0.2}>
          {/* TODO: Replace placeholder URL in src/content/site.ts */}
          <Button
            href={siteContent.benchmarkUrl}
            external
            variant="secondary"
            size="lg"
            className="border-white text-white hover:bg-white/10"
          >
            Open Benchmark Platform
          </Button>
        </FadeInView>
      </div>
    </section>
  );
}
