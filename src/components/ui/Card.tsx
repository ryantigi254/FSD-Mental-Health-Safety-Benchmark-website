import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  accentColor?: string;
  hoverable?: boolean;
}

const accentColorMap: Record<string, string> = {
  "fsd-orange": "border-l-fsd-orange",
  "fsd-blue-deep": "border-l-fsd-teal",
  "fsd-teal": "border-l-fsd-teal",
  "fsd-green": "border-l-fsd-green",
  "fsd-amber": "border-l-fsd-amber",
  "fsd-blue-soft": "border-l-fsd-blue-soft",
};

/* Underglow colour that matches the accent — creates coloured ambient light beneath the card on hover */
const accentGlowMap: Record<string, string> = {
  "fsd-orange": "hover:shadow-[0_8px_30px_-4px_rgba(237,125,49,0.2)]",
  "fsd-blue-deep": "hover:shadow-glow-teal",
  "fsd-teal": "hover:shadow-glow-teal",
  "fsd-green": "hover:shadow-glow-green",
  "fsd-amber": "hover:shadow-glow-amber",
  "fsd-blue-soft": "hover:shadow-glow-teal",
};

export default function Card({
  children,
  className = "",
  accentColor,
  hoverable = true,
}: CardProps) {
  const accent = accentColor
    ? `border-l-4 ${accentColorMap[accentColor] || "border-l-fsd-teal"}`
    : "";
  const glowShadow = accentColor && accentGlowMap[accentColor]
    ? accentGlowMap[accentColor]
    : "hover:shadow-glow-teal-sm";
  const hover = hoverable
    ? `hover:-translate-y-1 ${glowShadow} transition-all duration-300`
    : "";

  return (
    <div
      className={`bg-white rounded-xl shadow-card p-6 ${accent} ${hover} ${className}`}
    >
      {children}
    </div>
  );
}
