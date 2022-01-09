import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { MyPaper } from "../../Shared/MyPaper";

const useStyles = makeStyles((theme: Theme) => ({
}));

export const Standings = () => {
  const classes = useStyles();
  return (
    <MyPaper headerText="Standings Leaders"> Body </MyPaper>  )
};