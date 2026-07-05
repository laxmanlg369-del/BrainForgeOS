import StatCard from "../components/dashboard/StatCard";
import Section from "../components/ui/Section";

import {
  FolderKanban,
  TrendingUp,
  Brain,
  BookOpen,
} from "lucide-react";

function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-5xl font-extrabold tracking-tight text-white">
          Welcome Back, Laxman 👋
        </h1>

        <p className="mt-2 text-slate-400">
          Manage all your AI tools and projects from one dashboard.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Projects"
          value="03"
          icon={FolderKanban}
        />

        <StatCard
          title="TradeNova"
          value="Active"
          icon={TrendingUp}
        />

        <StatCard
          title="AI Memory"
          value="120"
          icon={Brain}
        />

        <StatCard
          title="Knowledge"
          value="58"
          icon={BookOpen}
        />
      </div>

      {/* Bottom */}
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">

        <Section title="Recent Projects">
          <div className="space-y-4">

            <div className="rounded-xl bg-slate-800 p-4">
              <h3 className="font-semibold text-white">
                TradeNova AI
              </h3>

              <p className="text-sm text-slate-400">
                Last updated: Today
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-4">
              <h3 className="font-semibold text-white">
                BrainForge Core
              </h3>

              <p className="text-sm text-slate-400">
                Last updated: Yesterday
              </p>
            </div>

          </div>
        </Section>

        <Section title="Quick Actions">
          <div className="space-y-4">

            <button className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
              + New Project
            </button>

            <button className="w-full rounded-xl bg-slate-800 py-3 text-white transition hover:bg-slate-700">
              Open TradeNova
            </button>

            <button className="w-full rounded-xl bg-slate-800 py-3 text-white transition hover:bg-slate-700">
              Open AI Memory
            </button>

          </div>
        </Section>

      </div>

      {/* AI Status */}
      <Section title="AI Status">
        <div className="grid grid-cols-3 gap-6 text-center">

          <div>
            <p className="text-3xl font-bold text-green-400">99%</p>
            <p className="text-sm text-slate-400">System Health</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-blue-400">24</p>
            <p className="text-sm text-slate-400">Running Tasks</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-purple-400">12ms</p>
            <p className="text-sm text-slate-400">Response Time</p>
          </div>

        </div>
      </Section>
    </div>
  );
}

export default Dashboard;