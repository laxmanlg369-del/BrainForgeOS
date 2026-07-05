import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

import TradeNova from "./pages/TradeNova";
import Memory from "./pages/Memory";
import Knowledge from "./pages/Knowledge";
import Settings from "./pages/Settings";
import Projects from "./pages/Projects";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/tradenova" element={<TradeNova />} />
       
        <Route path="/memory" element={<Memory />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
}

export default App;