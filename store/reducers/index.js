import { combineReducers } from "redux";
import authReducer from "./authReducer";
import topicReducer from "./topicReducer";

const rootReducer = combineReducers({
  topic: topicReducer,
  auth: authReducer,
});
export default rootReducer;
