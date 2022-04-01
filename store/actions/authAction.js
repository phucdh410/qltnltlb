import { LOGIN } from "store/type";
import { onLogin } from "utils/axios/auth";

export const onUserLogin = (data) => async (dispatch) => {
  console.log("Chạy action redux");
  const res = await onLogin(data);
  if (res === false) {
    return false;
  }
  const payload = res;
  dispatch({ type: LOGIN, payload });
  return res;
};
