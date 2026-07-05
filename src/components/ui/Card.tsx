import type { ReactNode } from "react";

type CardProps = {
  title?: string;
  children: ReactNode;
};

function Card({ title, children }: CardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10">
      {title && (
        <h3 className="mb-5 text-lg font-semibold text-white">
          {title}
        </h3>
      )}

      {children}
    </div>
  );
}

export default Card;