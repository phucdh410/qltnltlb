import axios from "axios";

let source = axios.CancelToken.source();

const headers = {
  "x-access-token":
    "H0xCg8e2ITmEgyERQkxnwQRRprGqIzqIaQAyB2iS2do.9NjN5YTMzETN2EjOiAHelJCLzYTO0IzN4QjNxojI0FWaiwiIulWbkFkclBXdTJiOiUWbh5Ec19mcnJCL5kTO6ICeh1EblZXZsJCLiUDNmJGNhVGMyMTM2UWYmFDO1UzY1MzY1IiOiQWafJye.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
};

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
const getAll = async (
  path,
  page = 1,
  limit = 1000000000,
  options = { headers }
) => {
  try {
    const res = await axios.get(
      `/v1/${path}/getAll?cols=_id&sBy=sortOrder&sType=ASC&page=${page}&limit=${limit}`,
      {
        ...options,
        cancelToken: source.token,
        headers: {
          "x-access-token":
            "H0xCg8e2ITmEgyERQkxnwQRRprGqIzqIaQAyB2iS2do.9NjN5YTMzETN2EjOiAHelJCLzYTO0IzN4QjNxojI0FWaiwiIulWbkFkclBXdTJiOiUWbh5Ec19mcnJCL5kTO6ICeh1EblZXZsJCLiUDNmJGNhVGMyMTM2UWYmFDO1UzY1MzY1IiOiQWafJye.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        },
      }
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
const getByUserId = async (path, year) => {
  try {
    const res = await axios.get(`/v1/${path}/getByUserId/${year}`);
    if (res?.status === 204) {
      return [];
    }
    return res.data;
  } catch (err) {
    console.log(err);
    if (err?.response?.status === 401) {
    }
    // => Logout
    //   logoutUser(() => (window.location = "/login"))(store.dispatch);
    return [];
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

const getTop = async (path, page = 1, limit = 100, options = { headers }) => {
  try {
    const res = await axios.get(
      `/v1/${path}/getTopNews?sBy=&sType=&page=${page}&limit=${limit}`,
      { ...options, cancelToken: source.token, headers }
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

const getByCategoryId = async (path, categoryId, options = { headers }) => {
  try {
    const res = await axios.get(`/v1/${path}/getByCategoryId/${categoryId}`, {
      ...options,
      cancelToken: source.token,
    });
    if (res?.data) {
      return res.data;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Set Authentication Token-Based
const setAuthToken = (token) => {
  if (token) axios.defaults.headers.common["x-access-token"] = token;
  // Apply to every request
  else delete axios.defaults.headers.common["x-access-token"]; // Delete auth header
};

export {
  setAuthToken,
  getAll,
  getByUserId,
  getById,
  getBySlug,
  getByTopicId,
  getByCategoryId,
  getTop,
};
