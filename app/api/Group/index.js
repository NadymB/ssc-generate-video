import { LIST_GROUPS_ENDPOINT } from "./endpoints";
import ApiFactory from "../ApiFactory";

const UserApi = new ApiFactory({
  url: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

UserApi.createEntities([{ name: LIST_GROUPS_ENDPOINT }]);

const fetchGroupListApi = () =>
  UserApi.createBasicCRUDEndpoints({
    name: LIST_GROUPS_ENDPOINT,
  }).get();

export { fetchGroupListApi };
