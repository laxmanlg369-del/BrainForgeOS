import {
  BriefcaseBusiness,
  TrendingUp,
  Wallet,
  IndianRupee,
} from "lucide-react";

import GlassCard from "../../ui/GlassCard";

function PortfolioCard() {
  return (
    <GlassCard className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">
            Portfolio Summary
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Today's Trading Performance
          </p>
        </div>

        <BriefcaseBusiness
          className="text-cyan-400"
          size={28}
        />
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl bg-slate-800/60 p-5">
          <Wallet className="text-cyan-400" size={22} />

          <p className="mt-4 text-sm text-slate-400">
            Capital
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            ₹1,00,000
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800/60 p-5">
          <IndianRupee className="text-green-400" size={22} />

          <p className="mt-4 text-sm text-slate-400">
            Today's P&L
          </p>

          <h3 className="mt-2 text-3xl font-bold text-green-400">
            +₹4,850
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800/60 p-5">
          <TrendingUp className="text-blue-400" size={22} />

          <p className="mt-4 text-sm text-slate-400">
            Win Rate
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            82%
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800/60 p-5">
          <BriefcaseBusiness
            className="text-yellow-400"
            size={22}
          />

          <p className="mt-4 text-sm text-slate-400">
            Open Trades
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            1
          </h3>
        </div>
      </div>
    </GlassCard>
  );
}

export default PortfolioCard;
