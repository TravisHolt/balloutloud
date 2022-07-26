import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { StatsHome } from "./pages/Stats";
import { TeamsList } from "./pages/Teams";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<TeamsList />} />
        <Route path="/stats" element={<StatsHome />} />
      </Routes>
    </>
  );
}

export default App;
