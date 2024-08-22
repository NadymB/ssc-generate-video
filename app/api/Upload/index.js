import { FETCH_DETAIL_UPLOAD_FILE } from "./endpoints";
import ApiFactory from "../ApiFactory";

const UserApi = new ApiFactory({
  url: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

UserApi.createEntities([{ name: FETCH_DETAIL_UPLOAD_FILE }]);

const fetchDetailUploadFileApi = (id) =>
  UserApi.createBasicCRUDEndpoints({
    name: FETCH_DETAIL_UPLOAD_FILE,
  }).getOne(id);

export { fetchDetailUploadFileApi };
