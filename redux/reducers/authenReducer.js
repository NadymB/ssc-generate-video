import { message } from "antd";
import { actionTypes } from "../actions/authenAction";

const initialState = {
  token: global?.window?.localStorage.getItem("authToken"),
  profile: {},
  loading: false,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: data?.token,

        loading: false,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        token: "",
      };

    case actionTypes.LOAD_PROFILE:
      return {
        ...state,
      };

    case actionTypes.LOAD_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
