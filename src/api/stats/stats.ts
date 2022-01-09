import { getTodayYYYYMMDD } from "../../utils/dateTimeUtils";
import { API_URI } from "../apiTypes";
import { createParam } from "../apiUtils";
import { FetchAllStats, StatData } from "./statTypes";

export const fetchAllStats: FetchAllStats = async ({ dates, season = '2021', perPage = 100, page = 0 }: any) => {
  const dateParams = createParam('dates', dates);
  const response = await fetch(`${API_URI.base}/stats?seasons[]=${season}&per_page=${perPage}${dateParams}&page=${page}`)
  const result = await response.json();
  return result
};

export const fetchNightlyStats = async () => {
  let allPlayersFromToday: StatData[] = [];
  const todaysDate = getTodayYYYYMMDD();

  const recursePlayersToday = async (pageNumber = 0) => {
    const { data, meta } = await fetchAllStats({ dates: [todaysDate], page: pageNumber});
    allPlayersFromToday.push(...data);
    if (meta.next_page) await recursePlayersToday(meta.next_page);
  }
  await recursePlayersToday(0);
  return allPlayersFromToday;
};

export const fetchSeasonAverages = async ({ season = '2021', perPage = 25 }) => {
  const response = await fetch(`${API_URI.base}/season_averages?season=${season}`)
  const result = await response.json();
  return result
};