export const convertLanesToPersian = (lane: string) => {
  switch (lane) {
    case "GK":
      return "دروازه بانان";
    case "DEF":
      return "مدافعان";
    case "MID":
      return "هافبک ها";
    case "ATT":
      return "مهاجمین";
  }
};
