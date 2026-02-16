type BadgeStatus =
  | "done"
  | "active"
  | "planned"
  | "release"
  | "milestone"
  | "paper"
  | "data"
  | "coming-soon"
  | "available";

interface BadgeProps {
  status: BadgeStatus;
  label?: string;
}

const statusStyles: Record<BadgeStatus, string> = {
  done: "bg-fsd-green/15 text-fsd-green",
  active: "bg-fsd-orange/15 text-fsd-orange",
  planned: "bg-fsd-grey/15 text-fsd-grey",
  release: "bg-fsd-blue-deep/15 text-fsd-blue-deep",
  milestone: "bg-fsd-green/15 text-fsd-green",
  paper: "bg-fsd-amber/15 text-fsd-charcoal",
  data: "bg-fsd-blue-soft/15 text-fsd-blue-deep",
  "coming-soon": "bg-fsd-grey/15 text-fsd-grey",
  available: "bg-fsd-green/15 text-fsd-green",
};

const defaultLabels: Record<BadgeStatus, string> = {
  done: "Done",
  active: "In Progress",
  planned: "Planned",
  release: "Release",
  milestone: "Milestone",
  paper: "Paper",
  data: "Data",
  "coming-soon": "Coming Soon",
  available: "Available",
};

export default function Badge({ status, label }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusStyles[status]}`}
    >
      {label || defaultLabels[status]}
    </span>
  );
}
