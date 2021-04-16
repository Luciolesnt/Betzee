import data from "../../data/dices";

const initialState = {
  playerOne: [...data],
};

function resultsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ADD_RESULT":
      return {
        ...state,
        // newvalues
      };

    default:
      return state;
  }
}

export default resultsReducer;
