import data from "../../data/dices";
import { ADD_RESULT } from "../actions/player";

const initialState = {
  playerOne: [...data],
};

function resultsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_RESULT: {
      // let test = action.id - 1;
      // state.playerOne[test].result = action.full;
      // console.log(state.playerOne[test]);
      return {
        ...state,
        playerOne: state.playerOne.map((element) => {
        if (element.id === action.id) {
          return {
            ...element,
            result: action.full,
          };
        } else {
          return element;
        }
      })};
    }
    default:
      return state;
  }
}

export default resultsReducer;
