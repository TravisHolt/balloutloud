import { API_URI } from "../apiTypes";
import { createParam } from "../apiUtils";
import { FetchPlayers } from "./playerTypes";

export const fetchPlayers: FetchPlayers = async ({
  search = "",
  page = 0,
  perPage = 25,
}) => {
  const response = await fetch(
    `${API_URI.base}/players?search=${search}&page=${page}&per_page=${perPage}`
  );
  const results = await response.json();
  return results;
};

export const fetchSinglePlayer = async (id: string) => {
  const response = await fetch(`${API_URI.base}/players/${id}`);
  const results = await response.json();
  return results;
};

export const fetchPlayerSeasonStats = async ({
  season = '2021',
  players,
}: {
  season?: string;
  players: (string | undefined)[];
}) => {
  const playerParams = players ? createParam('player_ids', players) : ""; 
  console.log(players, playerParams)
  const response = await fetch(`${API_URI.base}/season_averages?season=${season}${playerParams}`);
  const results = await response.json();
  return results;
};
