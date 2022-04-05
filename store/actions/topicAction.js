import { GET_TOPICS } from "store/type";
import { getAll } from "utils/axios";

export const onGetTopics = () => async (dispatch) => {
  const res = await getAll("topics");
  const payload = res?.data || null;
  dispatch({ type: GET_TOPICS, payload });
};
