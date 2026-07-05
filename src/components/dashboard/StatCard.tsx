import type { LucideIcon } from "lucide-react";
import Card from "../ui/Card";

type StatCardProps = {
  title: string;
  value: string;
  icon: LucideIcon;
};

function StatCard({
  title,
  value,
  icon: Icon,
}: StatCardProps) {
  return (
    <Card>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            {value}
          </h2>

          <div className="mt-4 inline-flex rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400">
            ▲ +12% this week
          </div>
        </div>

        <div className="rounded-2xl bg-blue-600/20 p-4">
          <Icon className="h-8 w-8 text-blue-400" />
        </div>
      </div>
    </Card>
  );
}

export default StatCard;