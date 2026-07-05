import MarketOverview from "../components/tradenova/MarketOverview";
import PredictionCard from "../components/tradenova/PredictionCard";
import SignalCard from "../components/tradenova/SignalCard";
import PortfolioCard from "../components/tradenova/PortfolioCard";
import ChartSection from "../components/tradenova/ChartSection";
import Watchlist from "../components/tradenova/Watchlist";
import MarketNews from "../components/tradenova/MarketNews";
import PerformanceCard from "../components/tradenova/PerformanceCard";

function TradeNova() {
  return (
    <div className="min-h-screen space-y-6 p-6">

      {/* Header */}
      <section className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <h1 className="text-4xl font-bold text-white">
              📈 TradeNova AI
            </h1>

            <p className="mt-2 text-slate-400">
              AI Powered Trading Dashboard
            </p>
          </div>

          <div className="flex gap-4">

            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3">
              <p className="text-xs text-slate-400">
                Market
              </p>

              <h3 className="font-bold text-emerald-400">
                LIVE
              </h3>
            </div>

            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-3">
              <p className="text-xs text-slate-400">
                AI Confidence
              </p>

              <h3 className="font-bold text-cyan-400">
                82%
              </h3>
            </div>

          </div>

        </div>
      </section>

      {/* Market Overview */}
      <MarketOverview />

      {/* Prediction + Signal */}
      <section className="grid gap-6 xl:grid-cols-2">

        <PredictionCard />

        <SignalCard />

      </section>

      {/* Portfolio */}
      <PortfolioCard />

      {/* Chart */}
      <ChartSection />

      {/* Bottom */}
      <section className="grid gap-6 lg:grid-cols-2">

        <Watchlist />

        <MarketNews />

      </section>

      {/* Performance */}
      <PerformanceCard />

    </div>
  );
}

export default TradeNova;