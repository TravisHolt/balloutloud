import { useEffect, useState } from "react";
import { GameData } from "../../../api/games/gameTypes";

export const useGameCardLogic = (game: GameData) => {
  const [losingTeam, setLosingTeam] = useState<'visitor' | 'home' | null>(null);
  const [isHalftime, setIsHalftime] = useState(false);

  useEffect(() => {
    if (game.status === 'Final') {
      const { home_team_score, visitor_team_score } = game;
      const losingTeam = home_team_score > visitor_team_score ? 'visitor' : 'home';
      setLosingTeam(losingTeam);
    }

    if (game.status === '2nd Qtr' && game.time === '') setIsHalftime(true);
    else if (game.status !== '2nd Qtr' && isHalftime) setIsHalftime(false);
  }, [game]);

  return {
    losingTeam,
    isHalftime
  };
};