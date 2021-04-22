export const ADD_RESULT = "ADD_RESULT";
export const COUNT_TOTAL = "COUNT_TOTAL";
export const ADD_SELECT = "ADD_SELECT";

export const addResult = (id, full) => ({
  type: ADD_RESULT,
  id,
  full,
});

export const countTotal = () => ({
  type: COUNT_TOTAL,
});

export const addSelect = (diceName, id) => ({
  type: ADD_SELECT,
  diceName,
  id,
});
