import { useEffect, useState } from "react";
import { fetchTodaysGames, fetchTomorrowsGames } from "./api/games/games";
import { ThemeProvider } from "@mui/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GameResponseData } from "./api/games/gameTypes";
import { createTheme } from "@mui/material";
import { GameHeader } from "./components/GamesHeader";
import { HomePage } from "./components/Home";
import { Sidebar } from "./components/Sidebar";
import { SinglePlayer } from "./components/SinglePlayer";

const theme = createTheme({
  borderBox: {
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
  },
  border: {
    borderRadius: 8,
  },
});

function App() {
  const [todayGames, setTodaysGames] = useState<GameResponseData | null>(null);
  const [tomorrowGames, setTomorrowsGames] = useState<GameResponseData | null>(
    null
  );

  useEffect(() => {
    const fetchPlayerData = async () => {
      const [todaysGames, tomorrowsGames] = await Promise.all([
        fetchTodaysGames(),
        fetchTomorrowsGames(),
      ]);
      setTodaysGames(todaysGames);
      setTomorrowsGames(tomorrowsGames);
    };

    fetchPlayerData();
  }, []);

  return (
    <div style={{
      background: '#f6f6f6'
    }}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GameHeader
          todaysGames={todayGames?.data}
          tomorrowsGames={tomorrowGames?.data}
        />
        <div style={{ height: '1rem', background: 'black' }} />
        <div style={{ display: 'flex' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/player/:id" element={<SinglePlayer />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
