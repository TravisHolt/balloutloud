import { Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { GameData } from "../../api/games/gameTypes";
import { getTomorrowsDayString } from "../../utils/dateTimeUtils";
import { GameCard } from "./GameCard";

type GameHeaderProps = {
  todaysGames?: GameData[];
  tomorrowsGames?: GameData[];
};

const useStyles = makeStyles({
  dateContainer: {
    display: "flex",
    overflow: "scroll",
  },
});

export const GameHeader = ({
  todaysGames = [],
  tomorrowsGames = [],
}: GameHeaderProps) => {
  const classes = useStyles();

  return (
    <div className={classes.dateContainer}>
      {todaysGames.map((game) => (
        <GameCard game={game} />
      ))}
      <Divider orientation="vertical" variant="middle" flexItem>
        {getTomorrowsDayString()}
      </Divider>
      {tomorrowsGames.map((game) => (
        <GameCard game={game} />
      ))}
    </div>
  );
};
