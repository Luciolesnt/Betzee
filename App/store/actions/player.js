export const ADD_RESULT = "ADD_RESULT";
export const COUNT_TOTAL = "COUNT_TOTAL";
export const ADD_SELECT = "ADD_SELECT";
export const CLEAN_RESULT = "CLEAN_RESULT";
export const CLEAN_ALL = "CLEAN_ALL";

export const addResult = (id, full, player) => ({
  type: ADD_RESULT,
  id,
  full,
  player,
});

export const countTotal = (player) => ({
  type: COUNT_TOTAL,
  player,
});

export const addSelect = (diceName, id, player) => ({
  type: ADD_SELECT,
  diceName,
  id,
  player,
});

export const cleanResult = (id, player) => ({
  type: CLEAN_RESULT,
  id,
  player,
});

export const cleanAll = () => ({
  type: CLEAN_ALL,
});
