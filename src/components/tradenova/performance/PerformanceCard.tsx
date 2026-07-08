import {
  Trophy,
  TrendingUp,
  Target,
  Percent,
} from "lucide-react";

import GlassCard from "../../ui/GlassCard";

function PerformanceCard() {
  return (
    <GlassCard className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">
            Performance
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            AI Trading Statistics
          </p>
        </div>

        <Trophy className="text-yellow-400" size={24} />
      </div>

      <div className="mt-8 grid gap-4 grid-cols-2">
        <div className="rounded-xl bg-slate-800/60 p-5">
          <TrendingUp className="text-green-400" size={20} />

          <p className="mt-3 text-sm text-slate-400">
            Weekly P&L
          </p>

          <h3 className="mt-2 text-2xl font-bold text-green-400">
            +₹18,420
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800/60 p-5">
          <Percent className="text-cyan-400" size={20} />

          <p className="mt-3 text-sm text-slate-400">
            Accuracy
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            84%
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800/60 p-5">
          <Target className="text-yellow-400" size={20} />

          <p className="mt-3 text-sm text-slate-400">
            Win Ratio
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            21 / 25
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800/60 p-5">
          <Trophy className="text-orange-400" size={20} />

          <p className="mt-3 text-sm text-slate-400">
            ROI
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            +18.4%
          </h3>
        </div>
      </div>
    </GlassCard>
  );
}

export default PerformanceCard;
