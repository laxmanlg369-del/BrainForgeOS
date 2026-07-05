import Card from "../components/ui/Card";

function Projects() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-extrabold text-white">
            Projects
          </h1>

          <p className="mt-2 text-slate-400">
            Manage all your BrainForge projects.
          </p>
        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
          + New Project
        </button>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        <Card title="TradeNova AI">
          <p className="text-slate-400">
            AI-powered trading platform.
          </p>

          <div className="mt-6 flex justify-between">
            <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
              Active
            </span>

            <span className="text-slate-400">
              75%
            </span>
          </div>

          <div className="mt-4 h-2 rounded-full bg-slate-800">
            <div className="h-2 w-3/4 rounded-full bg-green-500"></div>
          </div>
        </Card>

        <Card title="BrainForge Core">
          <p className="text-slate-400">
            Main operating system.
          </p>

          <div className="mt-6 flex justify-between">
            <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-sm text-yellow-400">
              In Progress
            </span>

            <span className="text-slate-400">
              48%
            </span>
          </div>

          <div className="mt-4 h-2 rounded-full bg-slate-800">
            <div className="h-2 w-1/2 rounded-full bg-yellow-500"></div>
          </div>
        </Card>

        <Card title="Knowledge Base">
          <p className="text-slate-400">
            AI searchable documentation.
          </p>

          <div className="mt-6 flex justify-between">
            <span className="rounded-full bg-slate-700 px-3 py-1 text-sm text-slate-300">
              Planned
            </span>

            <span className="text-slate-400">
              10%
            </span>
          </div>

          <div className="mt-4 h-2 rounded-full bg-slate-800">
            <div className="h-2 w-[10%] rounded-full bg-slate-400"></div>
          </div>
        </Card>

      </div>
    </div>
  );
}

export default Projects;