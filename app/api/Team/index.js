import { LIST_TEAM_ENDPOINT } from "./endpoints";
import ApiFactory from "../ApiFactory";

const UserApi = new ApiFactory({
  url: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

UserApi.createEntities([{ name: LIST_TEAM_ENDPOINT }]);

const fetchListTeamApi = () =>
  UserApi.createBasicCRUDEndpoints({
    name: LIST_TEAM_ENDPOINT,
  }).get();

export { fetchListTeamApi };
