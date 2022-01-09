import { makeStyles } from "@mui/styles";
import { Divider, Theme } from "@mui/material";
import React from "react";

type Props = {
  children: any;
  className?: string;
  flexGrow?: number;
  headerText?: string;
};

type StyleProps = {
  flexGrow?: number;
};

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    boxShadow: theme.borderBox.boxShadow,
    borderRadius: theme.border.borderRadius,
    padding: theme.spacing(2, 4, 4, 4),
    flexGrow: (props: StyleProps) => props.flexGrow,
  },
  header: {
    ...theme.typography.h5,
    fontWeight: theme.typography.fontWeightBold,
    paddingBottom: theme.spacing(1),
  },
}));

export const MyPaper = ({ children, headerText, flexGrow = 1, className= '' }: Props) => {
  const classes = useStyles({ flexGrow });
  return (
    <div className={`${classes.paper} ${className}`}>
      {headerText && (
        <>
          <div className={classes.header}>{headerText}</div>
          <Divider sx={{ marginBottom: 1 }} />
        </>
      )}
      <>{children}</>
    </div>
  );
};
