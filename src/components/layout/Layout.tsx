import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen bg-slate-950 text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div className="flex flex-1 flex-col overflow-hidden">

        {/* Topbar */}
        <Topbar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-slate-900 p-8">
          {children}
        </main>

      </div>

    </div>
  );
}

export default Layout;