export function sortStatsByCategoryTopTen<T, K extends keyof T>(cat: K, data: T[], count?: number) {
  data.sort((a, b) => {
    if (a[cat] >= b[cat]) return -1
    else return 1;
  });
  return data.slice(0, count);
};