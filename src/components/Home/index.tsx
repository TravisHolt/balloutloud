import { makeStyles } from "@mui/styles";
import { Button, Theme, Tooltip } from "@mui/material";
import { BarChart, Layout } from "react-feather";
import { Standings } from "./Standings";
import { NightlyLeaders } from "./NightLeaders";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
  },
  sideBar: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: theme.borderBox.boxShadow,
    minHeight: 'calc(100vh - 160px)',
    maxHeight: '100vh',
  },
  bodyContainer: {
    display:'flex',
    justifyContent: 'space-between',
    margin: "auto",
    width: '75vw',
    gap: theme.spacing(4),
    marginTop: '2rem',
  },
}));

export const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.sideBar}>
        <Tooltip title='Home'>
          <Button sx={{ padding: '1rem' }} variant="text">
            <Layout size={34} />
          </Button>
        </Tooltip>
        <Tooltip title='Stats'>
          <Button sx={{ padding: '1rem' }} variant="text">
            <BarChart size={34} />
          </Button>
        </Tooltip>
      </div>
      <div className={classes.bodyContainer}>
        <NightlyLeaders />
        <Standings />
      </div>
    </div>
  );
};
