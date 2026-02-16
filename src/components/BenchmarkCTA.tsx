import { siteContent } from "@/content/site";
import Button from "./ui/Button";
import Badge from "./ui/Badge";
import FadeInView from "./ui/FadeInView";

export default function BenchmarkCTA() {
  const benchmarkAvailable = siteContent.benchmarkUrl !== null;

  return (
    <section
      id={siteContent.sections.benchmark.id}
      aria-labelledby="benchmark-heading"
      className="relative bg-fsd-teal py-20 px-6 overflow-hidden"
    >
      {/* Ambient underglow mesh on dark background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[350px] h-[350px] rounded-full bg-fsd-teal/10 blur-[100px] animate-ambient-drift" />
        <div className="absolute bottom-0 right-1/4 w-[280px] h-[280px] rounded-full bg-fsd-amber/6 blur-[80px] animate-ambient-drift [animation-delay:-6s]" />
        {/* Top edge gradient fade — creates depth */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fsd-teal/30 to-transparent" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={siteContent.liveSiteUrl}
              external
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Visit Live Site
            </Button>
            {benchmarkAvailable ? (
              <Button
                href={siteContent.benchmarkUrl!}
                external
                variant="secondary"
                size="lg"
                className="border-white/50 text-white/80 hover:bg-white/10"
              >
                Open Benchmark Platform
              </Button>
            ) : (
              <span className="inline-flex items-center gap-3 px-8 py-4 rounded-lg border-2 border-white/30 text-white/60 cursor-default text-lg font-semibold">
                Benchmark Platform
                <Badge status="coming-soon" label="Coming Soon" />
              </span>
            )}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
