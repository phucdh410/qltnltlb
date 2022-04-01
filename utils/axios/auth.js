import axios from "axios";
import md5 from "md5";

const authInstance = axios.create({
  baseURL: "http://115.79.199.129:3000/",
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
    const user = await getUser(res.data.data.access_token);
    return { token: { ...res.data.data }, user: { ...user.data } };
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getUser = async (accessToken) => {
  try {
    const res = await authInstance.post(`/users/profile`, {
      headers: { "x-access-token": accessToken },
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
