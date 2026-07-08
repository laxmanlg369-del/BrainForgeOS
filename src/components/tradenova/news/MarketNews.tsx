import { Newspaper, ArrowUpRight } from "lucide-react";

import GlassCard from "../../ui/GlassCard";

const news = [
  {
    title: "NIFTY closes higher amid strong banking rally",
    source: "Economic Times",
    time: "10 min ago",
  },
  {
    title: "RBI expected to maintain interest rates",
    source: "Moneycontrol",
    time: "25 min ago",
  },
  {
    title: "FII buying continues for third consecutive session",
    source: "CNBC TV18",
    time: "42 min ago",
  },
  {
    title: "Global markets remain positive ahead of US data",
    source: "Reuters",
    time: "1 hr ago",
  },
];

function MarketNews() {
  return (
    <GlassCard className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">
            Market News
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Latest market updates
          </p>
        </div>

        <Newspaper
          className="text-cyan-400"
          size={24}
        />
      </div>

      <div className="mt-6 space-y-4">
        {news.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-700 bg-slate-800/60 p-4 transition hover:border-cyan-500"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-medium text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {item.source} • {item.time}
                </p>
              </div>

              <ArrowUpRight
                className="text-cyan-400"
                size={18}
              />
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

export default MarketNews;
