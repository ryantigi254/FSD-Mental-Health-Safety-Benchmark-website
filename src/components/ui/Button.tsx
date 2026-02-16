import { type ReactNode, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  external?: boolean;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

const variantStyles = {
  primary:
    "bg-fsd-teal text-white hover:bg-fsd-dark shadow-sm hover:shadow-glow-teal transition-all duration-300",
  secondary:
    "border-2 border-fsd-teal text-fsd-teal hover:bg-fsd-teal hover:text-white hover:shadow-glow-teal transition-all duration-300",
  ghost:
    "text-fsd-charcoal hover:text-fsd-teal underline underline-offset-4 transition-colors duration-300",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  href,
  external = false,
  children,
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
        {external && (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        )}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}
