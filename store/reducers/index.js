import { combineReducers } from "redux";
import achievementFieldsReducer from "./achievementFieldsReducer";
import achievementReducer from "./achievementReducer";
import authReducer from "./authReducer";
import topicReducer from "./topicReducer";

const rootReducer = combineReducers({
  topic: topicReducer,
  auth: authReducer,
  achievementField: achievementFieldsReducer,
  achievement: achievementReducer,
});
export default rootReducer;
