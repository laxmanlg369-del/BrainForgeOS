import MarketOverview from "../components/tradenova/overview/MarketOverview";
import PredictionCard from "../components/tradenova/prediction/PredictionCard";
import SignalCard from "../components/tradenova/signal/SignalCard";
import PortfolioCard from "../components/tradenova/portfolio/PortfolioCard";
import ChartSection from "../components/tradenova/chart/ChartSection";
import Watchlist from "../components/tradenova/watchlist/Watchlist";
import MarketNews from "../components/tradenova/news/MarketNews";
import PerformanceCard from "../components/tradenova/performance/PerformanceCard";
import TradeNovaHeader from "../components/tradenova/header/TradeNovaHeader";

function TradeNova() {
  return (
    <div className="min-h-screen space-y-6 p-6">

      <TradeNovaHeader
        title="TradeNova AI"
        subtitle="AI Powered Trading Dashboard"
        marketStatus="live"
        lastUpdated="Just now"
        onRefresh={() => undefined}
      />

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
