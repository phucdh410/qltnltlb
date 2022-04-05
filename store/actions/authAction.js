import { LOGIN, LOGOUT } from "store/type";
import { onLogin } from "utils/axios/auth";

export const onUserLogin = (data) => async (dispatch) => {
  const res = await onLogin(data);
  if (res === false) {
    return false;
  }
  const payload = res;
  console.log(payload);
  dispatch({ type: LOGIN, payload });
  return res;
};

export const onLogout = () => async (dispatch) => {
  const payload = {};
  dispatch({ type: LOGOUT, payload });
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
};
