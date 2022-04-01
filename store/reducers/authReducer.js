import { LOGIN, LOGOUT } from "store/type";

const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.token.access_token,
        refreshToken: action.payload.token.refresh_token,
      };

    default:
      return state;
  }
};
export default authReducer;
