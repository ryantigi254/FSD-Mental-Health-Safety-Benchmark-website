import Badge from "./Badge";
import type { MilestoneStatus } from "@/content/milestones";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  status: MilestoneStatus;
  isLast: boolean;
}

const dotColors: Record<MilestoneStatus, string> = {
  done: "bg-fsd-green",
  active: "bg-fsd-orange",
  planned: "bg-fsd-grey",
};

export default function TimelineItem({
  date,
  title,
  description,
  status,
  isLast,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0">
      {/* Connector line */}
      {!isLast && (
        <div className="absolute left-[11px] top-6 bottom-0 w-px bg-fsd-light" />
      )}

      {/* Dot */}
      <div
        className={`absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full border-4 border-white ${dotColors[status]} shadow-sm`}
      />

      {/* Content */}
      <div className="ml-4">
        <div className="flex flex-wrap items-center gap-3 mb-1">
          <span className="text-sm font-medium text-text-secondary">
            {date}
          </span>
          <Badge status={status} />
        </div>
        <h3 className="text-lg font-semibold text-fsd-charcoal mb-1">
          {title}
        </h3>
        <p className="text-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
