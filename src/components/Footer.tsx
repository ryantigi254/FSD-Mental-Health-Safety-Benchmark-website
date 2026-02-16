import { siteContent } from "@/content/site";

export default function Footer() {
  const { footer } = siteContent;

  const formattedDate = new Date(footer.lastUpdated).toLocaleDateString(
    "en-GB",
    { day: "numeric", month: "long", year: "numeric" }
  );

  return (
    <footer className="relative bg-fsd-charcoal py-12 px-6 overflow-hidden">
      {/* Top edge gradient — teal glow line separating from content */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fsd-teal/25 to-transparent" />
      {/* Subtle ambient glow in footer */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full bg-fsd-teal/4 blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Project name */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">
              {siteContent.title}
            </h3>
            <p className="text-fsd-grey text-sm leading-relaxed">
              {siteContent.tagline}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">
              Contact
            </h4>
            {/* TODO: Replace with actual contact email */}
            <a
              href={`mailto:${footer.contactEmail}`}
              className="text-fsd-cool-grey text-sm hover:text-fsd-teal transition-colors"
            >
              {footer.contactEmail}
            </a>
          </div>

          {/* Last updated */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">
              Last Updated
            </h4>
            <p className="text-fsd-grey text-sm">{formattedDate}</p>
          </div>
        </div>

        {/* Gradient divider — deck teal fade */}
        <div className="pt-6 border-t border-transparent" style={{ borderImage: "linear-gradient(to right, transparent, rgba(61,139,139,0.25), transparent) 1" }}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-fsd-grey/70 text-xs leading-relaxed max-w-2xl">
              {footer.disclaimer}
            </p>
            <p className="text-fsd-grey/50 text-xs shrink-0">
              &copy; {new Date().getFullYear()} {footer.copyrightHolder}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
