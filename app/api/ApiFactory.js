/* eslint-disable */
import axios from "axios";
// import Cookies from 'js-cookie';
import { BASE_URL, TIMEOUT_REQUEST_API } from "../variables/index";
let token = null;
if (typeof window !== "undefined") {
  token = localStorage.getItem("authToken");
}


// axios.defaults.timeout = TIMEOUT_REQUEST_API;

class ApiFactory {
  constructor({ url }) {
    this.url = url || BASE_URL;
    this.endpoints = {};
  }

  /**
   * Create and store a single entity's endpoints
   * @param {A entity Object} entity
   */
  createEntity(entity) {
    this.endpoints[entity.name] = this.createBasicCRUDEndpoints(entity);
  }

  /**
   * Create and store multiple entity's endpoints
   * @param {A entity Array} arrayOfEntity
   */
  createEntities(arrayOfEntity) {
    arrayOfEntity.forEach(this.createEntity.bind(this));
  }

  /**
   * Create the basic endpoints handlers for CRUD operations
   * @param {A entity Object} entity
   */
  createBasicCRUDEndpoints({ name }) {
    var endpoints = {};

    const resourceURL = `${this.url}/${name}`;

    /**
     * GET WITH NO TOKEN
     */
    endpoints.getWithNoToken = (query, config = { headers: {} }) =>
      axios.get(resourceURL, { params: { ...query }, ...config });

    /**
     * GET
     */
    endpoints.get = (
      query,
      config = { headers: { authorization: token ? `Bearer ${token}` : null } }
    ) => axios.get(resourceURL, { params: { ...query }, ...config });

    /**
     * GET WITH HEADER
     */
    endpoints.getWithHeader = (query, config) => {
      let customHeaders = {};
      // config && config.headers && customHeaders = { ...config.headers };

      if (query.config) {
        customHeaders = { ...query.config };
      }

      console.log("params:", query.params);

      console.log("config:", query.config);

      console.log("customHeaders:", customHeaders);

      console.log("query:", query);

      return axios.get(resourceURL, {
        params: { ...query.params },
        headers: {
          ...customHeaders,
          // authorization: token ? `Bearer ${token}` : null,
          authorization: token
            ? `Bearer ${token}`
            : query?.token
            ? `Bearer ${token}`
            : null,
        },
      });
    };

    /**
     * GET/{:ID}
     */
    endpoints.getOne = (
      id,
      config = { headers: { authorization: token ? `Bearer ${token}` : null } }
    ) => axios.get(`${resourceURL}/${id}`, { ...config });

    /**
     * GET WITH LINK
     */
    endpoints.getByLink = (
      { link },
      config = { headers: { authorization: token ? `Bearer ${token}` : null } }
    ) => axios.get(`${resourceURL}/${link}`, { ...config });

    /**
     * NEW
     * GET REPLACE ID
     * /id/list (example)
     */
    endpoints.customGet = (
      toSubmit,
      config = { headers: { authorization: token ? `Bearer ${token}` : null } }
    ) => {
      return axios.get(resourceURL.replace("id", toSubmit), toSubmit, {
        ...config,
      });
    };

    /**
     * POST WITH NO TOKEN
     */
    endpoints.postWithNoToken = (data, config) => {
      const customHeaders = config && config.headers && { ...config.headers };
      return axios.post(resourceURL, data, {
        ...config,
        headers: {
          ...customHeaders,
          "Content-Type": "application/json",
        },
      });
    };

    /**
     * SUBMIT POST
     */
    endpoints.submitPost = (toSubmit, config) => {
      const customHeaders = config && config.headers && { ...config.headers };
      console.log(
        "---- resource url -----",
        resourceURL.replace("id", toSubmit),
        toSubmit
      );
      // const id = toSubmit && (toSubmit.id || toSubmit.get('id'));
      return axios.post(resourceURL.replace("id", toSubmit), toSubmit, {
        ...config,
        headers: {
          authorization: token ? `Bearer ${token}` : null,
          ...customHeaders,
        },
      });
    };

    /**
     * POST
     */
    endpoints.post = (data, config) => {
      const customHeaders = config && config.headers && { ...config.headers };
      return axios.post(resourceURL, data, {
        ...config,
        headers: {
          authorization: token ? `Bearer ${token}` : null,
          ...customHeaders,
        },
      });
    };

    /**
     * PUT
     */
    endpoints.put = (data, config) => {
      const customHeaders = config && config.headers && { ...config.headers };
      return axios.put(resourceURL, data, {
        ...config,
        headers: {
          authorization: token ? `Bearer ${token}` : null,
          ...customHeaders,
        },
      });
    };

    /**
     * PATCH
     */
    endpoints.patch = (data, config) => {
      const customHeaders = config && config.headers && { ...config.headers };
      return axios.patch(resourceURL, data, {
        ...config,
        headers: {
          authorization: token ? `Bearer ${token}` : null,
          ...customHeaders,
        },
      });
    };

    /**
     * SUBMIT PUT
     */
    endpoints.submitPut = (toSubmit, config) => {
      const customHeaders = config && config.headers && { ...config.headers };
      return axios.put(resourceURL.replace("id", toSubmit.id), toSubmit, {
        ...config,
        headers: {
          authorization: token ? `Bearer ${token}` : null,
          ...customHeaders,
        },
      });
    };

    endpoints.submitPatch = (data, config) => {
      const bodyData = { statuses: data.data.statuses };
      const customHeaders = config && config.headers && { ...config.headers };
      return axios.patch(`${resourceURL}/${data.data.id}`, bodyData, {
        ...config,
        headers: {
          authorization: token ? `Bearer ${token}` : null,
          ...customHeaders,
        },
      });
    };

    endpoints.patchWithoutId = (data, config) => {
      const customHeaders = config && config.headers && { ...config.headers };
      return axios.patch(resourceURL, data, {
        ...config,
        headers: {
          ...customHeaders,
          authorization: token ? `Bearer ${token}` : null,
          "Content-Type": "application/json",
        },
      });
    };
    /**
     * SUBMIT DELETE
     */
    endpoints.submitDelete = (toSubmit, config) => {
      const customHeaders = config && config.headers && { ...config.headers };
      // console.log('---- resource url -----', resourceURL.replace("id", toSubmit), toSubmit);
      // const id = toSubmit && (toSubmit.id || toSubmit.get('id'));
      return axios.delete(resourceURL.replace("id", toSubmit), toSubmit, {
        ...config,
        headers: {
          authorization: token ? `Bearer ${token}` : null,
          ...customHeaders,
        },
      });
    };

    /**
     * UPDATE
     */
    endpoints.update = (toUpdate, config) => {
      const customHeaders = config && config.headers && { ...config.headers };
      const id = toUpdate && (toUpdate.id || toUpdate.get("id"));
      return axios.put(`${resourceURL}/${id}`, toUpdate, {
        ...config,
        headers: {
          authorization: token ? `Bearer ${token}` : null,
          ...customHeaders,
        },
      });
    };

    /**
     * PATCH
     */
    endpoints.patch = (
      { id },
      toPatch,
      config = { headers: { authorization: token ? `Bearer ${token}` : null } }
    ) => axios.patch(`${resourceURL}/${id}`, toPatch, { ...config });

    endpoints.customPatch = (
      { start_id, end_id },
      toPatch,
      config = { headers: { authorization: token ? `Bearer ${token}` : null } }
    ) =>
      axios.patch(`${resourceURL}/${start_id}/${end_id}`, toPatch, {
        ...config,
      });

    /**
     * DELETE
     */
    endpoints.delete = (
      { id },
      config = { headers: { authorization: token ? `Bearer ${token}` : null } }
    ) => axios.delete(`${resourceURL}/${id}`, { ...config });

    return endpoints;
  }
}

export default ApiFactory;
