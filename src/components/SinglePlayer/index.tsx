import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchPlayerSeasonStats,
  fetchSinglePlayer,
} from "../../api/players/players";
import { PlayerData } from "../../api/players/playerTypes";
import { MyPaper } from "../Shared/MyPaper";
import { CircularProgress, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { GetTeamLogo } from "../../utils/getTeamLogo";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Line,
  Tooltip,
} from "recharts";

const useStyles = makeStyles((theme: Theme) => ({
  playerContainer: {
    margin: `${theme.spacing(4)} auto`,
    width: "80vw",
  },
  playerMetaList: {
    display: 'flex',
  },
  statListContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(0, 3, 0, 0)
  },
  statContainer: {
    margin: theme.spacing(0, 0, 4, 0),
  },
  metaTitle: {
    display: "flex",
    fontWeight: theme.typography.fontWeightBold,
  },
  metaStat: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: "3.5rem",
    lineHeight: .8
  },
  test: {
    width: '100%'
  },
  logo: {
    position: 'absolute',
    opacity: .2,
  }
}));

const LineChartComponent = ({ data }: any) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

const MetaInfo = ({ label, value }: any) => {
  const classes = useStyles();
  return (
    <div style={{ display: 'flex', margin: '0 0 24px 0', justifyContent: 'space-evenly', width: '100%', fontSize: '2rem'}}>
      <div>{label}</div>
      <div>{value}</div>
    </div>
  );
};

const HeaderStats = ({ label, value }: any) => {
  const classes = useStyles();
  return (
    <div className={classes.statContainer}>
      <div className={classes.metaTitle}>{label}</div>
      <div className={classes.metaStat}>{value}</div>
    </div>
  );
};

export const SinglePlayer = () => {
  const [playerInfo, setPlayerInfo] = useState<PlayerData | null>(null);
  const [playerStats, setPlayerStats] = useState<any>(null);
  const params = useParams();
  const classes = useStyles();

  const fetchPlayerData = async () => {
    const playerId = Object.values(params)[0];
    if (typeof playerId === "string") {
      const { data } = await fetchPlayerSeasonStats({ players: [playerId] });
      const playerInfo = await fetchSinglePlayer(playerId);

      if (data.length > 0) setPlayerStats(data[0]);
      setPlayerInfo(playerInfo);
    }
  };

  useEffect(() => {
    fetchPlayerData();
  }, [params]);

  if (!playerStats || !playerInfo) {
    return <CircularProgress />;
  }

  const teamAbb: any = playerInfo.team.abbreviation;
  const TeamLogo = ({ size }: any) => GetTeamLogo(teamAbb, size);

  return (
    <div className={classes.playerContainer}>
      <h1>{`${playerInfo?.first_name} ${playerInfo?.last_name}`}</h1>
      <div className={classes.playerMetaList}>
        <MetaInfo value={playerInfo?.team.full_name} />
        <MetaInfo
          label="Height"
          value={`${playerInfo?.height_feet}'${playerInfo?.height_inches}"`}
        />
        <MetaInfo label="Weight" value={playerInfo?.weight_pounds} />
      </div>
      <div style={{ display: "flex" }}>
        <div className={classes.statListContainer}>
          <HeaderStats value={playerStats.pts.toFixed(1)} label="POINTS" />
          <HeaderStats value={playerStats.ast.toFixed(1)} label="ASSISTS" />
          <HeaderStats value={playerStats.reb.toFixed(1)} label="REBOUNDS" />
          <HeaderStats value={playerStats.stl.toFixed(1)} label="STEALS" />
          <HeaderStats value={playerStats.blk.toFixed(1)} label="BLOCKS" />
        </div>
        <MyPaper>
          <div className={classes.logo}>
            <TeamLogo className={classes.logo} size={740} />
          </div>
          <div style={{ margin: "24px" }}>
            <div style={{ height: "200px", margin: "24px" }}>
              <LineChartComponent data={[{ uv: 2000 }]} />
            </div>
            <div style={{ height: "200px", margin: "24px" }}>
              <LineChartComponent data={[{ uv: 1000 }]} />
            </div>
            <div style={{ height: "200px", margin: "24px" }}>
              <LineChartComponent data={[{ uv: 3000 }]} />
            </div>
          </div>
        </MyPaper>
      </div>
    </div>
  );
};
