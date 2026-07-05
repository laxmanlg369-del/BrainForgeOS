import { TrendingUp, TrendingDown } from "lucide-react";

const marketData = [
  {
    name: "NIFTY 50",
    value: "24,856.20",
    change: "+152.40",
    positive: true,
  },
  {
    name: "BANK NIFTY",
    value: "56,248.80",
    change: "+315.90",
    positive: true,
  },
  {
    name: "SENSEX",
    value: "81,742.10",
    change: "+418.30",
    positive: true,
  },
  {
    name: "INDIA VIX",
    value: "13.42",
    change: "-0.58",
    positive: false,
  },
];

function MarketOverview() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">
          Market Overview
        </h2>

        <p className="text-sm text-slate-400 mt-1">
          Live snapshot of major Indian market indices.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {marketData.map((item) => (
          <div
            key={item.name}
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

              {item.positive ? (
                <TrendingUp className="text-green-400" size={20} />
              ) : (
                <TrendingDown className="text-red-400" size={20} />
              )}
            </div>

            <h3 className="mt-5 text-3xl font-bold text-white">
              {item.value}
            </h3>

            <p
              className={`mt-2 text-sm font-semibold ${
                item.positive
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {item.change} Today
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MarketOverview;