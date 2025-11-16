import { Routes, Route } from "react-router-dom";
import { Home, SingleTeam, CompareTeams } from "./pages";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single-team" element={<SingleTeam />} />
        <Route path="/compare-teams" element={<CompareTeams />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
