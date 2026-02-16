import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  accentColor?: string;
  hoverable?: boolean;
}

const accentColorMap: Record<string, string> = {
  "fsd-orange": "border-l-fsd-orange",
  "fsd-blue-deep": "border-l-fsd-blue-deep",
  "fsd-green": "border-l-fsd-green",
  "fsd-amber": "border-l-fsd-amber",
  "fsd-blue-soft": "border-l-fsd-blue-soft",
};

export default function Card({
  children,
  className = "",
  accentColor,
  hoverable = true,
}: CardProps) {
  const accent = accentColor
    ? `border-l-4 ${accentColorMap[accentColor] || "border-l-fsd-blue-deep"}`
    : "";
  const hover = hoverable
    ? "hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
    : "";

  return (
    <div
      className={`bg-white rounded-xl shadow-card p-6 ${accent} ${hover} ${className}`}
    >
      {children}
    </div>
  );
}
