import { API_URI } from "../apiTypes";
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

export const fetchSinglePlayer = async (id: number) => {
  const response = await fetch(
    `${API_URI.base}/players/${id}`
  );
  const results = await response.json();
  return results;
};
