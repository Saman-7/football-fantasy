enum CATEGORIES {
  GK,
  DEF,
  MID,
  ATT,
}

const inCategories: Record<number, CATEGORIES> = {
  11: CATEGORIES.GK,
  12: CATEGORIES.DEF,
  13: CATEGORIES.MID,
  14: CATEGORIES.ATT,
}

const outPositions: Record<CATEGORIES, number[]> = {
  [CATEGORIES.GK]: [0],
  [CATEGORIES.DEF]: [1, 2, 3, 4],
  [CATEGORIES.MID]: [5, 6, 7, 8],
  [CATEGORIES.ATT]: [9, 10],
}

export const checkPositionPlayer = (
  inIndex: number,
  outIndex: number
): boolean => {
  if (!Number.isInteger(inIndex)) return false

  const inCategory = inCategories[inIndex]
  const possiblePositions = outPositions[inCategory]
  return !!possiblePositions?.includes(outIndex)
}
