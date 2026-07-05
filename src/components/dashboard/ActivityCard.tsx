import Section from "../ui/Section";
import {
  CheckCircle2,
  Brain,
  FolderKanban,
} from "lucide-react";

function ActivityCard() {
  return (
    <Section title="Recent Activity">
      <div className="space-y-5">

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-green-500/20 p-2">
            <CheckCircle2 className="h-5 w-5 text-green-400" />
          </div>

          <div>
            <p className="font-medium text-white">
              TradeNova updated successfully
            </p>

            <p className="text-sm text-slate-400">
              2 minutes ago
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-blue-500/20 p-2">
            <FolderKanban className="h-5 w-5 text-blue-400" />
          </div>

          <div>
            <p className="font-medium text-white">
              New Project created
            </p>

            <p className="text-sm text-slate-400">
              Today
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-purple-500/20 p-2">
            <Brain className="h-5 w-5 text-purple-400" />
          </div>

          <div>
            <p className="font-medium text-white">
              AI Memory synchronized
            </p>

            <p className="text-sm text-slate-400">
              Yesterday
            </p>
          </div>
        </div>

      </div>
    </Section>
  );
}

export default ActivityCard;