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

  const sortMap: any = {
    'Final': 0,
    ['10:30 PM ET']: 1,
    ['10:00 PM ET']: 2,
    ['9:30 PM ET']: 3,
    ['9:00 PM ET']: 4,
    ['8:30 PM ET']: 5,
    ['8:00 PM ET']: 6,
    ['7:30 PM ET']: 7,
    ['7:00 PM ET']: 8,
    ['6:30 PM ET']: 9,
    ['6:00 PM ET']: 10,
    ['4th Qtr']: 11,
    ['3rd Qtr']: 12,
    ['2nd Qtr']: 13,
    ['1st Qtr']: 14,
  };

  results.data.sort((gameA: GameData, gameB: GameData) => {
    const aTime = gameA.status;
    const bTime = gameB.status;
    if (sortMap[aTime] > sortMap[bTime]) return -1;
    else return 1;
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

