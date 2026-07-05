import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-700/80
        bg-slate-900/70
        backdrop-blur-xl
        shadow-lg
        shadow-black/30
        transition-all
        duration-300
        hover:border-cyan-500/60
        hover:shadow-cyan-500/20
        hover:-translate-y-1
        ${className}
      `}
    >
      {/* Top Glow Line */}
      <div
        className="
          absolute
          left-0
          top-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-cyan-400/60
          to-transparent
        "
      />

      {children}
    </div>
  );
}

export default GlassCard;