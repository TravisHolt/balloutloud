import { ResponseMeta } from "../apiTypes";
import { TeamData } from "../teams/teamTypes";

export type PlayerResponseData = {
  data: PlayerData[];
  meta: ResponseMeta;
};

export type PlayerData = {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  height_feet: string;
  height_inches: string;
  weight_pounds: string;
  team: TeamData;
};

type PlayerParams = {
  search?: string,
  page?: number,
  perPage?: number
};

export type FetchPlayers = (params: PlayerParams) => Promise<PlayerResponseData>
