import { API_URI } from "../apiTypes";
import { FetchTeams } from "./teamTypes";

export const fetchTeams: FetchTeams = async ({
  page = 0,
  perPage = 30
}) => {
  const response = await fetch(
    `${API_URI.base}/teams?page=${page}&perPage=${perPage}`
  );
  const results = await response.json();
  return results;
};

export const fetchSingleTeam = async (id: number) => {
  const response = await fetch(
    `${API_URI.base}/teams/${id}`
  );
  const results = await response.json();
  return results; 
};
