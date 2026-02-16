import { type ReactNode } from "react";
import FadeInView from "./FadeInView";

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  background?: "white" | "light";
}

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className = "",
  background = "white",
}: SectionWrapperProps) {
  const headingId = `${id}-heading`;
  const bg = background === "light" ? "bg-surface-alt" : "bg-surface";

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`py-20 px-6 ${bg} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        <FadeInView>
          <div className="mb-12">
            {subtitle && (
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
                {subtitle}
              </p>
            )}
            <h2
              id={headingId}
              className="text-3xl md:text-4xl font-bold text-fsd-charcoal"
            >
              {title}
            </h2>
          </div>
        </FadeInView>
        {children}
      </div>
    </section>
  );
}
