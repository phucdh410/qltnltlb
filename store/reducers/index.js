import { combineReducers } from "redux";
import topicReducer from "./topicReducer";

const rootReducer = combineReducers({
  topic: topicReducer,
});
export default rootReducer;
