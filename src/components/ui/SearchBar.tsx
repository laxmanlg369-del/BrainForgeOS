import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="flex w-96 items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 transition-all duration-300 focus-within:border-blue-500">
      <Search className="h-5 w-5 text-slate-400" />

      <input
        type="text"
        placeholder="Search BrainForge..."
        className="w-full bg-transparent text-white placeholder:text-slate-500 outline-none"
      />
    </div>
  );
}

export default SearchBar;