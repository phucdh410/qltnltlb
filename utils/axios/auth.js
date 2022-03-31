import axios from "axios";

const urlLogin = "http://115.79.199.129:3000/auth/loginForWeb";

export const onLogin = async (data, source) => {
  try {
    const res = await axios.post(`${urlLogin}`, data);
    console.log(res);
    if (res?.status === 204) {
      return false;
    }
    return res;
  } catch (err) {
    console.log(err);
    return false;
  }
};
