import { ResponseMeta } from "../apiTypes";

export type TeamResponseData = {
  data: TeamData[];
  meta: ResponseMeta;
};

export type TeamData = {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
};

type TeamParams = {
  perPage?: number;
  page?: number;
};

export type FetchTeams = (params: TeamParams) => Promise<TeamResponseData>;
