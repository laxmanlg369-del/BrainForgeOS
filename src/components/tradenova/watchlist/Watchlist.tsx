import {
  TrendingUp,
  TrendingDown,
  Star,
} from "lucide-react";

import GlassCard from "../../ui/GlassCard";

const watchlist = [
  {
    symbol: "NIFTY",
    price: "25,312.40",
    change: "+0.82%",
    positive: true,
  },
  {
    symbol: "BANKNIFTY",
    price: "56,284.10",
    change: "+0.64%",
    positive: true,
  },
  {
    symbol: "RELIANCE",
    price: "3,245.80",
    change: "-0.48%",
    positive: false,
  },
  {
    symbol: "HDFCBANK",
    price: "2,032.50",
    change: "+1.12%",
    positive: true,
  },
];

function Watchlist() {
  return (
    <GlassCard className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">
            Watchlist
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Favorite Market Instruments
          </p>
        </div>

        <Star className="text-yellow-400" size={22} />
      </div>

      <div className="mt-6 space-y-4">
        {watchlist.map((item) => (
          <div
            key={item.symbol}
            className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800/60 p-4 transition hover:border-cyan-500"
          >
            <div>
              <h3 className="font-semibold text-white">
                {item.symbol}
              </h3>

              <p className="text-sm text-slate-400">
                {item.price}
              </p>
            </div>

            <div
              className={`flex items-center gap-2 font-semibold ${
                item.positive
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {item.positive ? (
                <TrendingUp size={18} />
              ) : (
                <TrendingDown size={18} />
              )}

              {item.change}
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

export default Watchlist;
