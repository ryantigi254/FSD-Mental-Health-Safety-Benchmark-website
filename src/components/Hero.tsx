import { siteContent } from "@/content/site";
import Button from "./ui/Button";
import Badge from "./ui/Badge";
import FadeInView from "./ui/FadeInView";

export default function Hero() {
  const benchmarkAvailable = siteContent.benchmarkUrl !== null;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-fsd-off-white to-surface-alt px-6"
    >
      {/* Ambient underglow mesh — deck palette blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary teal — top right */}
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-fsd-teal/8 blur-[100px] animate-ambient-drift" />
        {/* Deep navy — bottom left */}
        <div className="absolute -bottom-48 -left-48 w-[440px] h-[440px] rounded-full bg-fsd-dark/6 blur-[100px] animate-ambient-drift [animation-delay:-4s]" />
        {/* Amber hint — centre left */}
        <div className="absolute top-1/3 -left-20 w-[280px] h-[280px] rounded-full bg-fsd-amber/5 blur-[80px] animate-ambient-drift [animation-delay:-8s]" />
        {/* Green whisper — bottom right */}
        <div className="absolute bottom-20 right-10 w-[200px] h-[200px] rounded-full bg-fsd-green/4 blur-[70px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <FadeInView delay={0.1}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Research Project
          </p>
        </FadeInView>

        <FadeInView delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-fsd-charcoal mb-4 leading-tight">
            {siteContent.title}
          </h1>
          {/* Deck-coloured gradient accent line */}
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-fsd-teal via-fsd-dark to-fsd-teal opacity-60" />
        </FadeInView>

        <FadeInView delay={0.3}>
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-4 leading-relaxed">
            {siteContent.tagline}
          </p>
        </FadeInView>

        <FadeInView delay={0.4}>
          <p className="text-base text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            {siteContent.missionStatement}
          </p>
        </FadeInView>

        <FadeInView delay={0.5}>
          {benchmarkAvailable ? (
            <Button
              href={siteContent.benchmarkUrl!}
              external
              variant="secondary"
              size="lg"
              className="bg-fsd-teal border-white text-white hover:bg-fsd-dark hover:border-white"
            >
              Open Benchmark Platform
            </Button>
          ) : (
            <span className="inline-flex items-center gap-3 px-8 py-4 rounded-lg border-2 bg-fsd-teal border-white/30 text-white/60 cursor-default text-lg font-semibold">
              Benchmark Platform
              <Badge status="coming-soon" label="Coming Soon" />
            </span>
          )}
        </FadeInView>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-fsd-grey"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
