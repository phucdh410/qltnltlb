import { LOGIN, LOGOUT } from "store/type";

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return action.payload;
    default:
      return state;
  }
};
export default authReducer;
