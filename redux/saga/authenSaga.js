import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import {
  actionTypes,
  login,
  loginSuccess,
  loadProfile,
  loadProfileSuccess,
} from "../actions/authenAction";
import { loginUserApi } from "@/app/api/Auth";
import { fetchUserProfileApi } from "@/app/api/Auth";
import { useRouter } from "next/router";

function* loginSaga({ payload }) {
  const data = {
    username: payload.username,

    password: payload.password,
  };
  console.log(payload);
  try {
    const response = yield call(loginUserApi, data);
    console.log(response);

    if (response?.status == 200) {
      const respLogged = response?.data?.data;

      if (respLogged) {
        const { token } = respLogged;
        console.log(token);
        localStorage.setItem("authToken", token);
        console.log("User logged in successfully");
        yield put(loginSuccess(token));
        window.location.href = "/";
      } else {
        throw new Error("Invalid login response");
      }
    }
  } catch (error) {
    //yield put(failure(error));
  }
}
function* logoutSaga() {
  console.log("call logout");
  localStorage.removeItem("authToken");

  window.location.reload();

  window.location.href("/sign-in/");
}

function* fetchProfile() {
  console.log("call fetch profile!");
  try {
    const response = yield call(fetchUserProfileApi);
    console.log(response);
    if (response?.status == 200) {
      console.log(response?.data?.data);
      yield put(loadProfileSuccess(response?.data?.data));
    }
  } catch (error) {
    if (error?.response?.status === 401) {
      yield call(handleUnauthorized);
    }
  }
}

// New generator function to handle unauthorized logic
function* handleUnauthorized() {
  yield put(loadProfile(""));
  localStorage.removeItem("authToken");
}

export function* loginWatcherSaga() {
  yield takeLatest(actionTypes.LOGIN, loginSaga);
}

export function* logoutWatcherSaga() {
  yield takeLatest(actionTypes.LOGOUT, logoutSaga);
}

export function* fetchProfileWatcher() {
  yield takeLatest(actionTypes.LOAD_PROFILE, fetchProfile);
}
