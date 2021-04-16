export const ADD_RESULT = "ADD_RESULT";

export const addResult = (id, full) => ({
  type: ADD_RESULT,
  id,
  full,
});