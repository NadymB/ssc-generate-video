/* eslint-disable */
import {
  LOGIN_ENPOINT,
  REGISTER_ENDPOINT,
  PROFILE_DETAIL_ENDPOINT,
  ADMIN_LIST_USER_ENDPOINT,
  UPDATE_PASSWORD_ENPOINT,
  FETCH_USER_PROFILE_ENDPOINT,
  CHANGE_PASSWORD_ENDPOINT,
} from "./endpoints";
import ApiFactory from "../ApiFactory";

console.log(process.env);

const AuthenticateApi = new ApiFactory({
  url: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

AuthenticateApi.createEntities([
  { name: LOGIN_ENPOINT },
  { name: REGISTER_ENDPOINT },
  { name: PROFILE_DETAIL_ENDPOINT },
  { name: ADMIN_LIST_USER_ENDPOINT },
  { name: UPDATE_PASSWORD_ENPOINT },
  { name: CHANGE_PASSWORD_ENDPOINT },
]);

const loginUserApi = (data) =>
  AuthenticateApi.createBasicCRUDEndpoints({ name: LOGIN_ENPOINT }).post(data);

const registerUserApi = (data) =>
  AuthenticateApi.createBasicCRUDEndpoints({ name: REGISTER_ENDPOINT }).post(
    data
  );

// const fetchProfileDetail = (data, config) => AuthenticateApi.createBasicCRUDEndpoints({ name: PROFILE_DETAIL_ENDPOINT }).getWithHeader(data, config);
const fetchUserProfileApi = () =>
  AuthenticateApi.createBasicCRUDEndpoints({
    name: FETCH_USER_PROFILE_ENDPOINT,
  }).get();

const updateProfileDetail = (data) =>
  AuthenticateApi.createBasicCRUDEndpoints({
    name: PROFILE_DETAIL_ENDPOINT,
  }).update(data);

const fetchAdminListUser = (params) => {
  console.log("params:", params);

  return AuthenticateApi.createBasicCRUDEndpoints({
    name: ADMIN_LIST_USER_ENDPOINT,
  }).get(params);
};

const changePasswordApi = (data) =>
  AuthenticateApi.createBasicCRUDEndpoints({
    name: CHANGE_PASSWORD_ENDPOINT,
  }).put(data);

const updatePasswordUser = (data) =>
  AuthenticateApi.createBasicCRUDEndpoints({
    name: UPDATE_PASSWORD_ENPOINT,
  }).put(data);

export {
  loginUserApi,
  registerUserApi,
  fetchAdminListUser,
  fetchUserProfileApi,
  updatePasswordUser,
  updateProfileDetail,
  changePasswordApi,
};
