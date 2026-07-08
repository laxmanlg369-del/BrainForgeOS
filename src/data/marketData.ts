import type { MarketData } from "../types/market";

export const marketData: MarketData[] = [
  {
    symbol: "NIFTY",
    name: "NIFTY 50",
    price: 25312.4,
    change: 206.4,
    changePercent: 0.82,
    trend: "up",
  },
  {
    symbol: "BANKNIFTY",
    name: "BANK NIFTY",
    price: 56284.1,
    change: 358.8,
    changePercent: 0.64,
    trend: "up",
  },
  {
    symbol: "SENSEX",
    name: "SENSEX",
    price: 82945.2,
    change: 512.7,
    changePercent: 0.62,
    trend: "up",
  },
  {
    symbol: "VIX",
    name: "INDIA VIX",
    price: 13.42,
    change: -0.58,
    changePercent: -4.14,
    trend: "down",
  },
];