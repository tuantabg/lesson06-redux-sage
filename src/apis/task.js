import axiosServie from "../commons/axiosServie";
import {API_ENDPOINT} from "../constants";

// http://localhost:3000/tasks
const url = "tasks";

export const getList = () => {
  return axiosServie.get(`${API_ENDPOINT}/${url}`);
};
