import Badge from "./Badge";
import type { UpdateTag } from "@/content/updates";

interface UpdateEntryProps {
  date: string;
  title: string;
  body: string;
  tag?: UpdateTag;
}

export default function UpdateEntry({
  date,
  title,
  body,
  tag,
}: UpdateEntryProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <article className="bg-white rounded-xl shadow-card p-6 hover:shadow-glow-teal-sm hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex flex-wrap items-center gap-3 mb-2">
        <time
          dateTime={date}
          className="text-sm font-medium text-text-secondary"
        >
          {formattedDate}
        </time>
        {tag && <Badge status={tag} />}
      </div>
      <h3 className="text-lg font-semibold text-fsd-charcoal mb-2">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{body}</p>
    </article>
  );
}
