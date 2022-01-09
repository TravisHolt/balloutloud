import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { MyPaper } from "../../Shared/MyPaper";
import { useEffect, useState } from "react";
import { fetchNightlyStats } from "../../../api/stats/stats";
import { sortStatsByCategoryTopTen } from "../../../api/stats/utils";
import { StatData } from "../../../api/stats/statTypes";

const useStyles = makeStyles((theme: Theme) => ({
  leaderContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  statRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0, 3),
    lineHeight: 1.6,
  },
  catHeader: {
    textAlign: "center",
    margin: theme.spacing(0, 3, 2, 3),
    ...theme.typography.h6,
  },
  statList: {
    "&>:first-child": {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
}));

const StatCategoryLeaders = ({ category }: { category: keyof StatData }) => {
  const classes = useStyles();
  const [stats, setStats] = useState<StatData[] | null>(null);

  const headerMap: { [key: string]: string } = {
    pts: "Points",
    ast: "Assists",
    reb: "Rebounds",
  };

  useEffect(() => {
    (async function () {
      const data = await fetchNightlyStats();
      setStats(sortStatsByCategoryTopTen(category, data, 5));
    })();
  }, [category]);

  return (
    <div>
      <div className={classes.catHeader}>
        {headerMap[category]}
      </div>
      <div className={classes.statList}>
        {stats &&
          stats.map((stat) => {
            return (
              <div className={classes.statRow}>
                <span>{`${stat.player.first_name} ${stat.player.last_name}`}</span>
                <span>{stat[category]}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export const NightlyLeaders = () => {
  const classes = useStyles();
  const categories: (keyof StatData)[] = ["pts", "reb", "ast"];

  return (
    <MyPaper flexGrow={2} headerText="Nightly Leaders">
      <div className={classes.leaderContainer}>
        {categories.map((cat) => (
          <StatCategoryLeaders category={cat} />
        ))}
      </div>
    </MyPaper>
  );
};
