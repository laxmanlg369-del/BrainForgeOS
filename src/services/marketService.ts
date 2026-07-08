import type { MarketData } from "../types/market";
import { marketData } from "../data/marketData";

class MarketService {
  async getMarketOverview(): Promise<MarketData[]> {
    return Promise.resolve(marketData);
  }
}

export const marketService = new MarketService();