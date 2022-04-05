import { CREATE_ACHIEVEMENT } from "store/type";
import axios from "axios";
import { toast } from "react-toastify";
import { getAllByYear } from "utils/axios";

export const createAchievement = (body) => async (dispatch) => {
  try {
    const res = await axios.post(`/v1/achievement/create`, body);
    if (res.status === 201) {
      toast.success("Nộp đăng ký phần việc thành công");
    }
  } catch (error) {
    if (error?.response?.status === 401) {
      alert("Bạn cần phải đăng nhập để thực hiện chức năng này");
      window.location("/");
    }
    if (error?.response?.data?.errorCode === 1001) {
      toast.warning(error.response?.data?.message);
    }
  }
};

export const getAchievement = (year) => async (dispatch) => {
  try {
    const res = await getAllByYear("achievement", year);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
