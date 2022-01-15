import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { MyPaper } from "../../Shared/MyPaper";
import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchNightlyStats } from "../../../api/stats/stats";
import { sortStatsByCategoryTopTen } from "../../../api/stats/utils";
import { StatData } from "../../../api/stats/statTypes";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  leaderContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  categoryList: {
    flex: '1 1 0',
    margin: theme.spacing(1, 2),
    minWidth: '40%'
  },
  catHeader: {
    textAlign: "center",
    margin: theme.spacing(0, 3, 2, 3),
    ...theme.typography.h6,
  },
  statList: {
    flexGrow: 1,
    "&>:first-child": {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  statRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0, 3),
    lineHeight: 1.6,
    color: theme.palette.grey[800],
  },
  ranking: {
    fontSize: '.7rem'
  },
  playerName: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
      color: "black",
      textDecoration: "underline",
    },
  },
  teamAbb: {
    color: theme.palette.grey[500],
    fontSize: "0.8rem",
  },
}));

const StatCategoryLeaders = ({
  stats,
  category,
}: {
  stats: StatData[];
  category: keyof StatData;
}) => {
  const classes = useStyles();
  const [statCategory, setStatCategory] = useState<StatData[]>([]);

  const headerMap: { [key: string]: string } = {
    pts: "Points",
    ast: "Assists",
    reb: "Rebounds",
    stl: "Steals",
    blk: "Blocks",
    turnover: "Turnovers",
  };

  useEffect(() => {
    setStatCategory(sortStatsByCategoryTopTen(category, stats, 5));
  }, [stats, category]);

  return (
    <div className={classes.categoryList}>
      <div className={classes.catHeader}>{headerMap[category]}</div>
      <div className={classes.statList}>
        {stats &&
          statCategory.map((stat, index) => {
            return (
              <div className={classes.statRow}>
                <div>
                  <Link
                    className={classes.playerName}
                    to={`/player/${stat.player.id}`}
                  >
                    <span>
                      <span className={classes.ranking}>{index + 1}.</span>{`${stat.player.first_name} ${stat.player.last_name}`}
                    </span>
                  </Link>
                  <span className={classes.teamAbb}>
                    - {stat.team.abbreviation}
                  </span>
                </div>
                <span>{stat[category]}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export const NightlyLeaders = () => {
  const [title, setTitle] = useState("Today's Leaders");
  const [isYesterday, setYesterdayBool] = useState(false);
  const [stats, setStats] = useState<StatData[]>([]);
  const classes = useStyles();

  const categories: (keyof StatData)[] = [
    "pts",
    "reb",
    "ast",
    "stl",
    "blk",
    "turnover",
  ];

  const fetchStats = useMemo(async () => {
    let data = await fetchNightlyStats({});
    if (data.length === 0) {
      data = await fetchNightlyStats({ showYesterday: true });
      setYesterdayBool(true);
      setTitle("Yesterday's Leaders");
    } else if (isYesterday) {
      setYesterdayBool(false);
      setTitle("Today's Leaders");
    }
    return data;
  }, [isYesterday]);

  useEffect(() => {
    fetchStats.then(setStats);
  }, [isYesterday, fetchStats]);

  return (
    <MyPaper flexGrow={2} headerText={title}>
      <div className={classes.leaderContainer}>
        {categories.map((cat) => (
          <StatCategoryLeaders stats={stats} category={cat} />
        ))}
      </div>
    </MyPaper>
  );
};
