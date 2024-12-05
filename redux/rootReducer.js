import { combineReducers } from "redux";
import alertReducer from "./reducers/alertReducer";

const rootReducers = combineReducers({
  alertReducer: alertReducer,
});

export default rootReducers;
