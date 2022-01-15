export const createParam = (name: string, list: any) => {
  if (Array.isArray(list)) {
    return list.reduce((string: string, value: any) => {
      switch (name) {
        case "teams":
          return string + "&team_ids[]=" + value;
        case "dates":
          return string + "&dates[]=" + value;
        case "player_ids":
          return string + "&player_ids[]=" + value;
        default:
          return "";
      }
    }, "");
  } else {
    return "";
  }
};