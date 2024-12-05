import { message } from "antd";
import { actionTypes } from "../actions/alertAction";
import { Visibility } from "@material-ui/icons";

const initialState = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  message: "",
  state: null,
  visibility: false,
  placeholderData: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case actionTypes.TOAST: {
      return {
        ...state,
        message: action.message,
        state: action.state,
        visibility: action.visibility,
      };
    }

    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case actionTypes.RESET:
      return {
        ...state,
        count: initialState.count,
      };

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        placeholderData: action.data,
      };

    case actionTypes.TICK_CLOCK:
      return {
        ...state,
        lastUpdate: action.ts,
        light: !!action.light,
      };

    default:
      return state;
  }
}

export default reducer;
