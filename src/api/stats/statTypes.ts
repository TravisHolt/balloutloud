import { ResponseMeta } from "../apiTypes";
import { TeamData } from "../teams/teamTypes";

type StatResponse = {
  data: StatData[];
  meta: ResponseMeta;
}

export type StatData = {
  id: number;
  ast: number;
  blk: number;
  dreb: number;
  fg3_pct: number;
  fg3a: number;
  fg3m: number;
  fg_pct: number;
  fga: number;
  fgm: number;
  ft_pct: number;
  fta: number;
  ftm: number;
  game: {
    id: number;
    date: Date;
    home_team_id: number;
    home_team_score: number;
    season: number;
    visitor_team_id: number;
    visitor_team_score: number;
  }
  min: string;
  oreb: number;
  pf: number;
  player: {
    id: number;
    first_name: string;
    last_name: string;
    position: string;
    team_id: number
  }
  pts: number;
  reb: number;
  stl: number;
  team: TeamData
  turnover: number;
};

export type FetchNightlyStats = ({ showYesterday }: { showYesterday?: boolean }) => Promise<StatData[]>

export type FetchAllStats = ({}: any) => Promise<StatResponse>