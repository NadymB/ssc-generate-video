import {
  LIST_USER_BY_ADMIN_ENDPOINT,
  LIST_USER_GROUP_ENDPOINT,
  CREATE_NEW_USER_ENDPOINT,
  FETCH_USER_PROFILE_ENDPOINT,
} from "./endpoints";
import ApiFactory from "../ApiFactory";

const UserApi = new ApiFactory({
  url: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

UserApi.createEntities([
  { name: LIST_USER_BY_ADMIN_ENDPOINT },
  { name: LIST_USER_GROUP_ENDPOINT },
]);

const fetchListUserApi = (params) =>
  UserApi.createBasicCRUDEndpoints({
    name: LIST_USER_BY_ADMIN_ENDPOINT,
  }).get(params);

const fetchListUserGroupApi = () =>
  UserApi.createBasicCRUDEndpoints({
    name: LIST_USER_GROUP_ENDPOINT,
  }).get();

const createNewUserApi = (data) =>
  UserApi.createBasicCRUDEndpoints({
    name: CREATE_NEW_USER_ENDPOINT,
  }).post(data);

export { fetchListUserApi, fetchListUserGroupApi, createNewUserApi };
