export const ADD_RESULT = "ADD_RESULT";
export const COUNT_TOTAL = "COUNT_TOTAL";
export const ADD_SELECT = "ADD_SELECT";
export const ADD_PALYER_ONE_NEW_NAME = "ADD_PALYER_ONE_NEW_NAME";

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
