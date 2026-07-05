import {
  BarChart3,
  CandlestickChart,
  Activity,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import StatusBadge from "../ui/StatusBadge";

function ChartSection() {
  return (
    <GlassCard className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <CandlestickChart
              className="text-cyan-400"
              size={24}
            />

            <h2 className="text-2xl font-bold text-white">
              NIFTY 50 Chart
            </h2>
          </div>

          <p className="mt-2 text-sm text-slate-400">
            Live market visualization
          </p>
        </div>

        <StatusBadge status="live" />
      </div>

      {/* Timeframes */}
      <div className="mt-6 flex flex-wrap gap-3">
        {["1 Min", "5 Min", "15 Min", "1 Hour", "1 Day"].map(
          (time) => (
            <button
              key={time}
              className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-500 hover:text-white"
            >
              {time}
            </button>
          )
        )}
      </div>

      {/* Chart Area */}
      <div className="mt-6 flex h-[420px] items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-950">
        <div className="text-center">
          <BarChart3
            className="mx-auto text-cyan-400"
            size={70}
          />

          <h3 className="mt-6 text-2xl font-bold text-white">
            Chart Coming Soon
          </h3>

          <p className="mt-2 text-slate-400">
            TradingView / Recharts integration will appear here.
          </p>
        </div>
      </div>

      {/* Indicators */}
      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-6">
        {[
          "VWAP",
          "EMA 20",
          "EMA 50",
          "ATR",
          "Volume",
          "Supertrend",
        ].map((item) => (
          <div
            key={item}
            className="rounded-lg border border-slate-700 bg-slate-800 p-3 text-center"
          >
            <Activity
              className="mx-auto text-cyan-400"
              size={18}
            />

            <p className="mt-2 text-sm text-slate-300">
              {item}
            </p>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

export default ChartSection;