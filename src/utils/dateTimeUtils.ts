const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const getTodayYYYYMMDD = (getPreviousDay = false) => {
  const today = new Date();
  let day: number | string = getPreviousDay ? today.getDate() - 1 :  today.getDate();
  let month: number | string = today.getMonth() + 1;
  const year = today.getFullYear();

  if (day < 10) day = `0${day}`
  if (month < 10) month = `0${month}`

  return `${year}-${month}-${day}`
};

export const getYesterdayYYYYMMDD = () => {
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  let day: number | string = tomorrow.getDate();
  let month: number | string = tomorrow.getMonth() + 1;
  const year = tomorrow.getFullYear();

  if (day < 10) day = `0${day}`
  if (month < 10) month = `0${month}`

  return `${year}-${month}-${day}`;
};

export const getTomorrowsDayString = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return days[tomorrow.getDay()];
};