export interface WatchlistItem {
  symbol: string;
  price: number;
  change: number;
}

export const watchlistData: WatchlistItem[] = [
  {
    symbol: "NIFTY",
    price: 25312.4,
    change: 0.82,
  },
  {
    symbol: "BANKNIFTY",
    price: 56284.1,
    change: 0.64,
  },
  {
    symbol: "RELIANCE",
    price: 3245.8,
    change: -0.48,
  },
  {
    symbol: "HDFCBANK",
    price: 2032.5,
    change: 1.12,
  },
  {
    symbol: "ICICIBANK",
    price: 1548.3,
    change: 0.93,
  },
  {
    symbol: "INFY",
    price: 1687.2,
    change: -0.27,
  },
];