import { CREATE_ACHIEVEMENT, GET_ACHIEVEMENT } from "store/type";

const initialState = {
  achievements: [],
};

const achievementReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACHIEVEMENT:
      return action.payload;
    case GET_ACHIEVEMENT:
      return action.payload;
    default:
      return state;
  }
};
export default achievementReducer;
