import {
  LIST_TEAM_ENDPOINT,
  CREATE_TEAM_ENDPOINT,
  UPDATE_TEAM_ENDPOINT,
  DETAIL_TEAM_ENDPOINT,
  DELETE_TEAM_ENDPOINT,
} from "./endpoints";
import ApiFactory from "../ApiFactory";

const UserApi = new ApiFactory({
  url: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

UserApi.createEntities([{ name: LIST_TEAM_ENDPOINT }]);

const fetchListTeamApi = (params) =>
  UserApi.createBasicCRUDEndpoints({
    name: LIST_TEAM_ENDPOINT,
  }).get(params);

const createTeamApi = (data) =>
  UserApi.createBasicCRUDEndpoints({
    name: CREATE_TEAM_ENDPOINT,
  }).post(data);

const updateTeamApi = (data) =>
  UserApi.createBasicCRUDEndpoints({
    name: UPDATE_TEAM_ENDPOINT,
  }).put(data);

const fetchDetailTeamApi = (id) =>
  UserApi.createBasicCRUDEndpoints({
    name: DETAIL_TEAM_ENDPOINT,
  }).getOne(id);

const deleteTeamApi = (id) =>
  UserApi.createBasicCRUDEndpoints({
    name: DELETE_TEAM_ENDPOINT,
  }).delete(id);

const deleteMultiTeamApi = (data) => 
  UserApi.createBasicCRUDEndpoints({
    name: DELETE_TEAM_ENDPOINT,
  }).submitDeleteCustom(data);

export {
  fetchListTeamApi,
  createTeamApi,
  updateTeamApi,
  fetchDetailTeamApi,
  deleteTeamApi,
  deleteMultiTeamApi
};
