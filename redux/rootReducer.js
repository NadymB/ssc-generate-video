import { combineReducers } from "redux";
import alertReducer from "./reducers/alertReducer";
import authenReducer from "./reducers/authenReducer";

const rootReducers = combineReducers({
  alertReducer: alertReducer,
  authenReducer: authenReducer,
});

export default rootReducers;
