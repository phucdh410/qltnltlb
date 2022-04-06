import axios from "axios";
import md5 from "md5";
import { setAuthToken } from ".";

const authInstance = axios.create({
  baseURL: "https://hcmue-tnltlb.vtcode.vn:3000/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

authInstance.interceptors.request.use(
  (config) => {
    console.log("Trước khi requet");
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

authInstance.interceptors.response.use(
  (config) => {
    console.log("Sau khi request");
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const onLogin = async (data, source) => {
  const { password } = data;
  const hashPassword = md5(password);
  try {
    const res = await authInstance.post(`/auth/loginForWeb`, {
      ...data,
      password: hashPassword,
    });
    if (res?.status === 204) {
      return false;
    }
    localStorage.setItem("token", res.data?.data?.access_token);
    localStorage.setItem("refresh_token", res.data?.data?.refresh_token);

    setAuthToken(res.data.data.access_token);

    const user = await getUser();
    return user.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getUser = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await authInstance.post(
      `/users/profile`,
      {},
      {
        headers: { "x-access-token": token },
      }
    );
    if (res?.data) {
      setAuthToken(token);
      return res.data;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
