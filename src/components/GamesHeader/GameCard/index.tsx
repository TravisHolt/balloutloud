import { GameData } from "../../../api/games/gameTypes";
import { GetTeamLogo } from "../../../utils/getTeamLogo";
import { useGameCardLogic } from "./useGameCardLogix";
import { useGameCardStyles } from "./useGameCardStyles";

export const GameCard = ({ game }: { game: GameData }) => {
  const { losingTeam, isHalftime } = useGameCardLogic(game);
  const classes = useGameCardStyles();

  const homeLossStyle =
    losingTeam === "home"
      ? `${classes.finalLosingTeam} ${classes.teamRow}`
      : classes.teamRow;

  const visitorLossStyle =
    losingTeam === "visitor"
      ? `${classes.finalLosingTeam} ${classes.teamRow}`
      : classes.teamRow;

  return (
    <div key={game.id} className={classes.gameContainer}>
      <div>
        {isHalftime ? (
          <div>Halftime</div>
        ) : (
          <div className={classes.timeHeader}>
            {game.status}
            <span>{game.time}</span>
          </div>
        )}
      </div>
      <div>
        <div className={homeLossStyle}>
          <span className={classes.teamLabel}>
            {GetTeamLogo(game.home_team.abbreviation, 32)}
            <span style={{ margin: "auto 0 auto 3px" }}>
              {game.home_team.name}
            </span>
          </span>
          {game.status.includes("ET") ? null : (
            <span>{game.home_team_score}</span>
          )}
        </div>
        <div className={visitorLossStyle}>
          <span className={classes.teamLabel}>
            {GetTeamLogo(game.visitor_team.abbreviation, 32)}
            <span style={{ margin: "auto 0 auto 3px" }}>
              {game.visitor_team.name}
            </span>
          </span>
          {game.status.includes("ET") ? null : (
            <span>{game.visitor_team_score}</span>
          )}
        </div>
      </div>
    </div>
  );
};
