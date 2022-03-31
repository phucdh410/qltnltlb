import axios from "axios";
import { headers } from "next.config";

let source = axios.CancelToken.source();

export const JsonHeader = { "Content-Type": "application/json" };
export const FormHeader = { "Content-Type": "multipart/form-data" };
export const FormEncodedHeader = {
  "Content-Type": "application/x-www-form-urlencoded",
};

// Cancel request call api
export const cancel = async () => {
  source.cancel();
  source = axios.CancelToken.source();
};

// Request api: method = get
const getAll = async (path, page = 1, limit = 10, options = { headers }) => {
  try {
    const res = await axios.get(
      `/v1/${path}/getAll?cols=_id&sBy=sortOrder&sType=ASC&page=${page}&limit=${limit}`,
      { ...options, cancelToken: source.token }
    );
    return res.data;
  } catch (err) {
    if (err?.response?.status === 401) {
    }
    // => Logout
    //   logoutUser(() => (window.location = "/login"))(store.dispatch);
    return null;
  }
};

const getById = async (path, id, options = { headers }) => {
  try {
    const res = await axios.get(`/v1/${path}/getById/${id}`, {
      ...options,
      cancelToken: source.token,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getBySlug = async (path, slug, options = { headers }) => {
  try {
    const res = await axios.get(`/v1/${path}/getBySlug/${slug}`, {
      ...options,
      cancelToken: source.token,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getTop = async (path, page = 1, limit = 10, options = { headers }) => {
  try {
    const res = await axios.get(
      `/v1/${path}/getTopNews?cols=_id&sBy=sortOrder&sType=ASC&page=${page}&limit=${limit}`,
      { ...options, cancelToken: source.token }
    );
    return res.data;
  } catch (err) {
    if (err?.response?.status === 401) {
      console.log(err);
      // => Logout
      //   logoutUser(() => (window.location = "/login"))(store.dispatch);
    }
    return null;
  }
};

const getByTopicId = async (path, topicId, options = { headers }) => {
  try {
    const res = await axios.get(`/v1/${path}/getByTopicId/${topicId}`, {
      ...options,
      cancelToken: source.token,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Set Authentication Token-Based
const setAuthToken = (token) => {
  if (token) axios.defaults.headers.common["x-access-token"] = token;
  // Apply to every request
  else delete axios.defaults.headers.common["x-access-token"]; // Delete auth header
};

export { setAuthToken, getAll, getById, getBySlug, getByTopicId, getTop };
