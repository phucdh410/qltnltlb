import { CREATE_ACHIEVEMENT, GET_ACHIEVEMENT } from "store/type";
import axios from "axios";
import { toast } from "react-toastify";
import { getByUserId } from "utils/axios";

export const createAchievement = (body) => async (dispatch) => {
  try {
    const res = await axios.post(`/v1/achievement/create`, body);
    if (res.status === 201) {
      toast.success("Nộp đăng ký phần việc thành công");
    }
  } catch (error) {
    if (error?.response?.status === 401) {
      window.location("/");
    }
    if (error?.response?.data?.errorCode === 1001) {
      toast.warning(error.response?.data?.message);
    }
  }
};

export const getAchievement = (year) => async (dispatch) => {
  try {
    const res = await getByUserId("achievement", year);
    if (res?.data) {
      const payload = res?.data;
      dispatch({ type: GET_ACHIEVEMENT, payload });
    } else {
      const payload = res;
      dispatch({ type: GET_ACHIEVEMENT, payload });
    }
  } catch (error) {
    console.log(error);
  }
};
