import { ResponseMeta } from "../apiTypes";
import { TeamData } from "../teams/teamTypes";

export type GameData = {
  id: string;
  date: Date;
  home_team_score: number;
  visitor_team_score: number;
  season: number;
  period: number;
  status: string;
  time: string;
  postseason: boolean;
  home_team: TeamData;
  visitor_team: TeamData;
};

export type GameResponseData = {
  data: GameData[];
  meta?: ResponseMeta;
};

type GameParams = {
  page?: number;
  perPage?: number;
  dates?: string[];
  seasons?: number[];
  teamIDs?: number[];
  postseason?: boolean;
  startDate?: string;
  endDate?: string;
};

export type FetchGames = (params: GameParams) => Promise<GameResponseData>;