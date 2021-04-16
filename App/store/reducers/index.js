import { combineReducers } from "redux";

import resultsReducer from "./resultsReducer";

const rootReducer = combineReducers({
  results: resultsReducer,
  // other reducers
});

export default rootReducer;
