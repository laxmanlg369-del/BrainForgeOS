import {
  LayoutDashboard,
  FolderKanban,
  TrendingUp,
  Brain,
  BookOpen,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menu = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: FolderKanban,
  },
  {
    name: "TradeNova",
    path: "/tradenova",
    icon: TrendingUp,
  },
  {
    name: "AI Memory",
    path: "/memory",
    icon: Brain,
  },
  {
    name: "Knowledge",
    path: "/knowledge",
    icon: BookOpen,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-950">

      {/* Logo */}
      <div className="border-b border-slate-800 p-6">
        <h1 className="text-3xl font-bold text-white">
          BrainForge
          <span className="text-blue-500"> OS</span>
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          AI Operating System
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-2 p-4">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                }`
              }
            >
              <Icon size={20} />

              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-800 p-4 text-center text-xs text-slate-500">
        BrainForge OS v1.0
      </div>

    </aside>
  );
}

export default Sidebar;