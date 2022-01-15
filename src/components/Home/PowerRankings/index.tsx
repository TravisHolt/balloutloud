import { Responsive, WidthProvider } from "react-grid-layout";
import {
  List,
  ListItemAvatar,
  ListItemText,
  Theme,
} from "@mui/material";
import { GetTeamLogo } from "../../../utils/getTeamLogo";
import { makeStyles } from "@mui/styles";
import { MyPaper } from "../../Shared/MyPaper";
import { TeamData } from "../../../api/teams/teamTypes";

const ResponsiveGridLayout = WidthProvider(Responsive);

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    gridRow: "span 3",
  },
  rowItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ranking: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '.8rem',
    color: theme.palette.grey[800]
  },
  teamName: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '1.1rem',
    paddingRight: theme.spacing(2),
  },
}));

export const PowerRankings = ({ teams }: { teams: TeamData[] }) => {
  const classes = useStyles();
  const layout = [
    { i: "GSW", x: 0, y: 0, w: 2, h: 1 },
    { i: "PHX", x: 0, y: 1, w: 2, h: 1 },
    { i: "MEM", x: 0, y: 2, w: 2, h: 1 },
    { i: "CHI", x: 0, y: 3, w: 2, h: 1 },
    { i: "UTA", x: 0, y: 4, w: 2, h: 1 },
    { i: "MIL", x: 0, y: 5, w: 2, h: 1 },
    { i: "MIA", x: 0, y: 6, w: 2, h: 1 },
    { i: "BKN", x: 0, y: 7, w: 2, h: 1 },
    { i: "PHI", x: 0, y: 8, w: 2, h: 1 },
    { i: "DAL", x: 0, y: 9, w: 2, h: 1 },
    { i: "DEN", x: 0, y: 10, w: 2, h: 1 },
    { i: "CLE", x: 0, y: 11, w: 2, h: 1 },
    { i: "LAL", x: 0, y: 12, w: 2, h: 1 },
    { i: "TOR", x: 0, y: 13, w: 2, h: 1 },
    { i: "CHA", x: 0, y: 14, w: 2, h: 1 },
    { i: "MIN", x: 0, y: 15, w: 2, h: 1 },
    { i: "WAS", x: 0, y: 16, w: 2, h: 1 },
    { i: "LAC", x: 0, y: 17, w: 2, h: 1 },
    { i: "BOS", x: 0, y: 18, w: 2, h: 1 },
    { i: "NYK", x: 0, y: 19, w: 2, h: 1 },
    { i: "ATL", x: 0, y: 20, w: 2, h: 1 },
    { i: "SAS", x: 0, y: 21, w: 2, h: 1 },
    { i: "IND", x: 0, y: 22, w: 2, h: 1 },
    { i: "SAC", x: 0, y: 23, w: 2, h: 1 },
    { i: "NOP", x: 0, y: 24, w: 2, h: 1 },
    { i: "POR", x: 0, y: 25, w: 2, h: 1 },
    { i: "OKC", x: 0, y: 26, w: 2, h: 1 },
    { i: "HOU", x: 0, y: 27, w: 2, h: 1 },
    { i: "DET", x: 0, y: 28, w: 2, h: 1 },
    { i: "ORL", x: 0, y: 29, w: 2, h: 1 },
  ];

  const findTeam = (abb: string) => {
    const team = teams.find((team) => team.abbreviation === abb);
    return team?.full_name;
  };

  return (
    <div className={classes.container}>
      <MyPaper headerText="Power Rankings">
        <List>
          <ResponsiveGridLayout
            className="layout"
            layouts={{ md: layout, lg: layout, xl: layout }}
            rowHeight={60}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            isDraggable={false}
            isResizable={false}
          >
            {layout.map((item, index) => (
              <div key={item.i} className={classes.rowItem}>
                <div className={classes.ranking}>{ index + 1}. </div>
                <ListItemAvatar>{GetTeamLogo(item.i, 48)}</ListItemAvatar>
                <ListItemText>
                  <span className={classes.teamName}>{findTeam(item.i)}</span>
                </ListItemText>
              </div>
            ))}
          </ResponsiveGridLayout>
        </List>
      </MyPaper>
    </div>
  );
};
