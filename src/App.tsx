import { useEffect, useState } from "react";
import { fetchTodaysGames, fetchTomorrowsGames } from "./api/games/games";
import { ThemeProvider } from "@mui/styles";
import { GameResponseData } from "./api/games/gameTypes";
import { createTheme } from "@mui/material";
import { GameHeader } from "./components/GamesHeader";
import { HomePage } from './components/Home';

const theme = createTheme({
  borderBox: {
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
  },
  border: {
    borderRadius: 8
  }
});

function App() {
  const [todayGames, setTodaysGames] = useState<GameResponseData | null>(null);
  const [tomorrowGames, setTomorrowsGames] = useState<GameResponseData | null>(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      const [todaysGames, tomorrowsGames] = await Promise.all([fetchTodaysGames(), fetchTomorrowsGames()]);
      setTodaysGames(todaysGames);
      setTomorrowsGames(tomorrowsGames);
    };

    fetchPlayerData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GameHeader todaysGames={todayGames?.data} tomorrowsGames={tomorrowGames?.data}/>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
