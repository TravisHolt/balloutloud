import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme ) => ({
  articleContainer: {
    gridRow: 1,
    gridColumn: 1,
    position: 'relative'
  },
  articleImageOverlay: {
    display: 'flex',
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: '6px',
    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',
  },
  articleOverlayTextContainer: {
    alignSelf: 'flex-end',
    color: 'white',
    padding: '16px'
  },
  articleTitle: {
    fontWeight: theme.typography.fontWeightBold
  },
  articleDescription: {},
  articleImage: {
    borderRadius: '6px',
    overflow: 'hidden',
    width: '100%'
  }
}));

export const Article = () => {
  const classes = useStyles();

  return (
    <div className={classes.articleContainer}>
      <div className={classes.articleImageOverlay}>
        <div className={classes.articleOverlayTextContainer}>
          <div className={classes.articleTitle}> Is Josh Giddey the Rookie of the Year? </div>
          <div> A look at the rookie in Oklahoma City </div>
        </div>
      </div>
      <img className={classes.articleImage} src="https://content.api.news/v3/images/bin/0fdc8aab3bea3b95abccb9e73396c96d" />
    </div>
  )
};