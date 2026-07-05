import { Moon, Sun } from "lucide-react";
import { useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(true);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="rounded-xl border border-slate-700 bg-slate-900 p-2 text-slate-300 hover:bg-slate-800"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default ThemeToggle;