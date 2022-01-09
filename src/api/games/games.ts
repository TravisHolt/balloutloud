import { getTodayYYYYMMDD, getYesterdayYYYYMMDD } from "../../utils/dateTimeUtils";
import { API_URI } from "../apiTypes";
import { createParam } from "../apiUtils";
import { FetchGames, GameData } from "./gameTypes";


export const fetchGames: FetchGames = async ({
  page = "",
  perPage = "",
  dates,
  seasons = 2021,
  teamIDs,
  postseason = "",
  startDate,
  endDate = "",
}) => {
  const teams = teamIDs ? createParam("teams", teamIDs) : "";
  const dateRange = dates ? createParam("dates", dates) : "";
  const start = startDate ? `&start_date=${startDate}` : "";
  const end = endDate ? `&end_date=${endDate}` : "";

  const response = await fetch(
    `${API_URI.base}/games?${teams}${dateRange}${start}${end}`
  );
  const results = await response.json();

  results.data.sort((gameA: GameData, gameB: GameData) => {
    const aTime = gameA.status;
    const bTime = gameB.status;
    if (gameB.status === 'Final') return -1;
    if (gameA.status === '10:00 PM ET') return 1;
    if (gameB.status === '10:00 PM ET') return -1;
    return aTime > bTime ? 1 : -1
  });

  return results;
};

export const fetchSingleGame = async (id: number) => {
  const response = await fetch(`${API_URI.base}games/${id}`);
  const results = await response.json();
  return results;
};

export const fetchTodaysGames = async () => {
  const dateString = getTodayYYYYMMDD();
  return fetchGames({ startDate: dateString, endDate: dateString });
};

export const fetchTomorrowsGames = async () => {
  const dateString = getYesterdayYYYYMMDD();
  return fetchGames({ startDate: dateString, endDate: dateString });
};

