import data from "../../data/dices";
import { ADD_RESULT, ADD_SELECT, COUNT_TOTAL } from "../actions/player";

const initialState = {
  playerOne: [...data],
};

function resultsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_RESULT: {
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
        }),
      };
    }

    case ADD_SELECT: {
      let diceNumber = action.diceName.match(/\d/g);
      diceNumber = diceNumber.join("");
      let selectResult = diceNumber * action.id;
      if (selectResult === 0) {
        selectResult = "0";
      }
      console.log(selectResult);
      return {
        ...state,
        playerOne: state.playerOne.map((element) => {
          if (element.id === parseInt(diceNumber)) {
            return {
              ...element,
              result: selectResult,
            };
          } else {
            return element;
          }
        }),
      };
    }

    case COUNT_TOTAL: {
      const upArr = state.playerOne.filter((element) => element.id < 7);
      let sum = upArr.map((element) => {
        if (element.result === null) return 0;
        else {
          return parseInt(element.result);
        }
      });
      const total = sum.reduce((acc, item) => (acc += item), 0);

      const fullArr = state.playerOne.filter(
        (element) => element.id > 8 && element.id < 16
      );
      let fullSum = fullArr.map((element) => {
        if (element.result === null) return 0;
        else {
          return parseInt(element.result);
        }
      });
      const fullTotal = fullSum.reduce((acc, item) => (acc += item), 0);

      return {
        ...state,
        playerOne: state.playerOne.map((element) => {
          if (element.id === 8) {
            return {
              ...element,
              result: total,
            };
          }
          if (element.id === 7 && total > 62) {
            return {
              ...element,
              result: 50,
            };
          }
          if (element.id === 7 && total < 63) {
            return {
              ...element,
              result: null,
            };
          }
          if (element.id === 16 && total > 62) {
            return {
              ...element,
              result: fullTotal + total + 50,
            };
          }
          if (element.id === 16 && total < 63) {
            return {
              ...element,
              result: fullTotal + total,
            };
          } else {
            return element;
          }
        }),
      };
    }

    default:
      return state;
  }
}

export default resultsReducer;
