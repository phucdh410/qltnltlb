import { GET_ACHIEVEMENT_FIELDS } from "store/type";
import { getAll } from "utils/axios";

export const getAchievementFields = () => async (dispatch) => {
  try {
    const res = await getAll("achievementFields");
    const payload = res.data.data;
    dispatch({ type: GET_ACHIEVEMENT_FIELDS, payload });
  } catch (error) {
    console.log(error);
  }
};
