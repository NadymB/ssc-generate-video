export const actionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOAD_PROFILE: "LOAD_PROFILE",
  LOAD_PROFILE_SUCCESS: "LOAD_PROFILE_SUCCESS",
};

export function login({ username, password }) {
  return { type: actionTypes.LOGIN, payload: { username, password } };
}

export function loginSuccess(data) {
  console.log(data);
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: data,
  };
}
export function logOut() {
  return { type: actionTypes.LOGOUT };
}

export function loadProfile() {
  return { type: actionTypes.LOAD_PROFILE };
}

export function loadProfileSuccess(data) {
  console.log(data);
  return { type: actionTypes.LOAD_PROFILE_SUCCESS, payload: data };
}
