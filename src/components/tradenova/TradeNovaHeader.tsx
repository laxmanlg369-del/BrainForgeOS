import type { ComponentProps } from "react";
import { RefreshCw, Sparkles } from "lucide-react";

import StatusBadge from "../ui/StatusBadge";

type MarketStatus = ComponentProps<typeof StatusBadge>["status"];

interface TradeNovaHeaderProps {
  title: string;
  subtitle?: string;
  marketStatus: MarketStatus;
  lastUpdated: string;
  onRefresh?: () => void;
}

function TradeNovaHeader({
  title,
  subtitle,
  marketStatus,
  lastUpdated,
  onRefresh,
}: TradeNovaHeaderProps) {
  return (
    <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/75 p-5 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-6 lg:p-7">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-cyan-500/10 via-blue-500/5 to-transparent" />

      <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 shadow-lg shadow-cyan-500/10 sm:h-12 sm:w-12">
              <Sparkles className="h-5 w-5 text-cyan-200 sm:h-6 sm:w-6" />
            </div>

            <div className="min-w-0">
              <h1 className="truncate text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
                {title}
              </h1>
              {subtitle ? (
                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                  {subtitle}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-end">
          <div className="flex flex-wrap items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
            <StatusBadge status={marketStatus} />
            <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Last Updated
            </span>
            <span className="text-sm font-semibold text-slate-200">
              {lastUpdated}
            </span>
          </div>

          <button
            type="button"
            onClick={onRefresh}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-400/10 px-4 text-sm font-semibold text-cyan-100 shadow-lg shadow-cyan-500/10 transition hover:border-cyan-300/40 hover:bg-cyan-400/15 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
        </div>
      </div>
    </header>
  );
}

export default TradeNovaHeader;
