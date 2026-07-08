import {
  ArrowUpCircle,
  CircleStop,
  ShieldCheck,
} from "lucide-react";

import GlassCard from "../../ui/GlassCard";
import StatusBadge from "../../ui/StatusBadge";

function SignalCard() {
  return (
    <GlassCard className="p-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-white">
            Trading Signal
          </h2>

          <p className="text-xs text-slate-400">
            AI Generated Trade Setup
          </p>
        </div>

        <StatusBadge status="buy" />
      </div>

      {/* Trade Levels */}
      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-slate-800/60 p-3 text-center">
          <ArrowUpCircle
            className="mx-auto text-cyan-400"
            size={18}
          />

          <p className="mt-2 text-xs text-slate-400">
            Entry
          </p>

          <h3 className="mt-1 text-xl font-bold text-white">
            25,310
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800/60 p-3 text-center">
          <ArrowUpCircle
            className="mx-auto text-green-400"
            size={18}
          />

          <p className="mt-2 text-xs text-slate-400">
            Target
          </p>

          <h3 className="mt-1 text-xl font-bold text-green-400">
            25,480
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800/60 p-3 text-center">
          <CircleStop
            className="mx-auto text-red-400"
            size={18}
          />

          <p className="mt-2 text-xs text-slate-400">
            Stop Loss
          </p>

          <h3 className="mt-1 text-xl font-bold text-red-400">
            25,220
          </h3>
        </div>
      </div>

      {/* Risk */}
      <div className="mt-5 flex items-center justify-between rounded-xl border border-yellow-500/20 bg-yellow-500/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <ShieldCheck
            className="text-yellow-400"
            size={18}
          />

          <div>
            <p className="text-xs text-slate-400">
              Risk Level
            </p>

            <p className="font-semibold text-yellow-300">
              Low Risk
            </p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-xs text-slate-400">
            Risk / Reward
          </p>

          <p className="font-bold text-emerald-400">
            1 : 3
          </p>
        </div>
      </div>
    </GlassCard>
  );
}

export default SignalCard;
