export const filterStringToNumber = (lane: string) => {
  let numberFilter
  switch (lane) {
    case "GK":
      numberFilter = 1
      break
    case "DEF":
      numberFilter = 2
      break
    case "MID":
      numberFilter = 3
      break
    case "ATT":
      numberFilter = 4
      break
    default:
      numberFilter = 0
      break
  }
  return numberFilter
}
