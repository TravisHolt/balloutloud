import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useGameCardStyles = makeStyles((theme: Theme) => ({
  gameContainer: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    minWidth: "15%",
    borderRadius: theme.border.borderRadius,
    boxShadow: theme.borderBox.boxShadow,
    border: `1px solid ${theme.palette.grey[200]}`,
  },
  timeHeader: {
    display: "flex",
    width: '100%',
    justifyContent: "space-between",
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    paddingBottom: ".5rem",
    marginBottom: ".5rem",
    fontWeight: 800,
    "& > span": {
      color: "red",
    },
  },
  teamRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 600,
  },
  teamLabel: {
    display: 'flex',
    alignContent: 'center',
  },
  finalLosingTeam: {
    color: theme.palette.grey[600]
  },
}));