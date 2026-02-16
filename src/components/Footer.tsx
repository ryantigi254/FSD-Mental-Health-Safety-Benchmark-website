import { siteContent } from "@/content/site";

export default function Footer() {
  const { footer } = siteContent;

  const formattedDate = new Date(footer.lastUpdated).toLocaleDateString(
    "en-GB",
    { day: "numeric", month: "long", year: "numeric" }
  );

  return (
    <footer className="bg-fsd-charcoal py-12 px-6">
      <div className="max-w-6xl mx-auto">
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
              className="text-fsd-grey text-sm hover:text-white transition-colors"
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

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
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
