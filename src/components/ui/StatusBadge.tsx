interface StatusBadgeProps {
  status:
    | "live"
    | "buy"
    | "sell"
    | "bullish"
    | "bearish"
    | "active"
    | "offline";
}

const statusStyles = {
  live: {
    label: "LIVE",
    className: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
  },
  buy: {
    label: "BUY",
    className: "bg-green-500/15 text-green-400 border border-green-500/30",
  },
  sell: {
    label: "SELL",
    className: "bg-red-500/15 text-red-400 border border-red-500/30",
  },
  bullish: {
    label: "BULLISH",
    className: "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30",
  },
  bearish: {
    label: "BEARISH",
    className: "bg-orange-500/15 text-orange-400 border border-orange-500/30",
  },
  active: {
    label: "ACTIVE",
    className: "bg-blue-500/15 text-blue-400 border border-blue-500/30",
  },
  offline: {
    label: "OFFLINE",
    className: "bg-slate-500/15 text-slate-400 border border-slate-500/30",
  },
};

function StatusBadge({ status }: StatusBadgeProps) {
  const badge = statusStyles[status];

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-semibold
        tracking-wide
        ${badge.className}
      `}
    >
      {badge.label}
    </span>
  );
}

export default StatusBadge;