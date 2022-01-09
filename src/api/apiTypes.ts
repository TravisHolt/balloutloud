export type ResponseMeta = {
  current_page: number;
  next_page: number | null;
  per_page: number;
  total_count: number;
  total_pages: number;
}

export enum API_URI {
  base = 'https://www.balldontlie.io/api/v1'
}