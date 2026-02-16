import { siteContent } from "@/content/site";
import Button from "./ui/Button";
import FadeInView from "./ui/FadeInView";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-white to-surface-alt px-6"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-fsd-blue-soft/8 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-fsd-blue-deep/5 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <FadeInView delay={0.1}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Research Project
          </p>
        </FadeInView>

        <FadeInView delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-fsd-charcoal mb-6 leading-tight">
            {siteContent.title}
          </h1>
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={siteContent.benchmarkUrl}
              external
              variant="primary"
              size="lg"
            >
              View Benchmark Platform
            </Button>
            <Button href="#about" variant="secondary" size="lg">
              Read Project Overview
            </Button>
          </div>
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
