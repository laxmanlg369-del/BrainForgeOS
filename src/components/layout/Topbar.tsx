import { Bell, User } from "lucide-react";
import SearchBar from "../ui/SearchBar";
import ThemeToggle from "../ui/ThemeToggle";

function Topbar() {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950/90 px-8 backdrop-blur-md">

      <SearchBar />

      <div className="flex items-center gap-4">

        <ThemeToggle />

        <button className="relative rounded-xl p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white">
          <Bell size={20} />

          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-slate-800">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
            <User size={18} className="text-white" />
          </div>

          <div>
            <p className="font-semibold text-white">
              Laxman
            </p>

            <p className="text-xs text-slate-400">
              Administrator
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;