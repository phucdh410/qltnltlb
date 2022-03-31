import { GET_TOPICS } from "store/type";

const initialState = {
  topics: [],
  topic: null,
  nItems: 0,
  nPages: 0,
};

const topicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOPICS:
      return {
        ...state,
        topics: action.payload.data,
        nItems: action.payload.nItems,
        nPages: action.payload.nPages,
      };
    default:
      return state;
  }
};
export default topicReducer;
