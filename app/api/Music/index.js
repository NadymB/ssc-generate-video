import {
  LIST_MUSICS_ENDPOINT,
  GENERATE_MUSIC_ENDPOINT,
  LIST_MUSIC_STYLES_ENDPOINT,
} from "./endpoints";
import ApiFactory from "../ApiFactory";

const UserApi = new ApiFactory({
  url: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

UserApi.createEntities([
  { name: LIST_MUSICS_ENDPOINT },
  { name: GENERATE_MUSIC_ENDPOINT },
  { name: LIST_MUSIC_STYLES_ENDPOINT },
]);

const fetchMusicListApi = (params) =>
  UserApi.createBasicCRUDEndpoints({
    name: LIST_MUSICS_ENDPOINT,
  }).get(params);

const generateMusicApi = (data) =>
  UserApi.createBasicCRUDEndpoints({
    name: GENERATE_MUSIC_ENDPOINT,
  }).post(data);

const fetchMusicStylesApi = () =>
  UserApi.createBasicCRUDEndpoints({
    name: LIST_MUSIC_STYLES_ENDPOINT,
  }).get();

export { fetchMusicListApi, generateMusicApi, fetchMusicStylesApi };
