import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import {
  loginWatcherSaga,
  logoutWatcherSaga,
  fetchProfileWatcher,
} from "./saga/authenSaga";

function* rootSaga() {
  yield all([loginWatcherSaga(), logoutWatcherSaga(), fetchProfileWatcher()]);
}

export default rootSaga;
