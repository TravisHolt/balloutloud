import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { PowerRankings } from "./PowerRankings";
import { NightlyLeaders } from "./NightLeaders";
import { TeamData } from "../../api/teams/teamTypes";
import { useEffect, useState } from "react";
import { fetchTeams } from "../../api/teams/teams";
import { Article } from "./Articles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    width: '100%',
  },
  bodyContainer: {
    display: "grid",
    margin: "auto",
    width: "75vw",
    gap: theme.spacing(4),
    marginTop: "2rem",
    gridTemplateColumns: '2fr 1fr',
    paddingBottom: theme.spacing(6)
  },
  iconColumn: {
    padding: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
  },
}));

export const HomePage = () => {
  const classes = useStyles();
  const [teams, setTeams] = useState<TeamData[]>([]);

  useEffect(() => {
    fetchTeams({}).then((res) => setTeams(res.data));
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.bodyContainer}>
        <Article />
        <PowerRankings teams={teams} />
        <NightlyLeaders />
      </div>
    </div>
  );
};
