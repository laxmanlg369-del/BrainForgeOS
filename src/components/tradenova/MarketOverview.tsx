import { TrendingUp, TrendingDown } from "lucide-react";
import { marketData } from "../../data/marketData";

function MarketOverview() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">
          Market Overview
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Live snapshot of major Indian market indices.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {marketData.map((item) => (
          <div
            key={item.symbol}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-6
              transition-all
              duration-300
              hover:border-cyan-500/40
              hover:shadow-xl
              hover:shadow-cyan-500/10
            "
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-400">
                {item.name}
              </p>

              {item.trend === "up" ? (
                <TrendingUp
                  size={20}
                  className="text-green-400"
                />
              ) : (
                <TrendingDown
                  size={20}
                  className="text-red-400"
                />
              )}
            </div>

            <h3 className="mt-5 text-3xl font-bold text-white">
              {item.price.toLocaleString()}
            </h3>

            <p
              className={`mt-2 text-sm font-semibold ${
                item.trend === "up"
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {item.change > 0 ? "+" : ""}
              {item.change} ({item.changePercent}%)
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MarketOverview;