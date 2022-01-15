import { Layout } from "react-feather";
import { Button, Divider, Theme, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  sideBar: {
    display: "flex",
    flexDirection: "column",
    boxShadow: theme.borderBox.boxShadow,
    height: "100vh",
    position: "sticky",
    top: 0,
    background: 'white',
  },
}));

export const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.sideBar}>
      <Tooltip title="Home">
        <Link to="/">
          <Button sx={{ padding: "1rem" }} variant="text">
            <Layout size={34} />
          </Button>
        </Link>
      </Tooltip>
      <Divider />
    </div>
  );
};
