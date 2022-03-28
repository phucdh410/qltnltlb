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
const getAll = async (slug, page = 1, limit = 5, options = { headers }) => {
  try {
    const res = await axios.get(
      `/v1/${slug}/getAll?cols=_id&sBy=sortOrder&sType=ASC&page=${page}&limit=${limit}`,
      { ...options, cancelToken: source.token }
    );
    return res.data;
  } catch (err) {
    if (err?.response?.status === 401)
      // => Logout
      //   logoutUser(() => (window.location = "/login"))(store.dispatch);
      return null;
  }
};

// Set Authentication Token-Based
const setAuthToken = (token) => {
  if (token) axios.defaults.headers.common["x-access-token"] = token;
  // Apply to every request
  else delete axios.defaults.headers.common["x-access-token"]; // Delete auth header
};

export { setAuthToken, getAll };
