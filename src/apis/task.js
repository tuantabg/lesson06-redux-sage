import queryString from "query-string";
import axiosServie from "../commons/axiosServie";
import {API_ENDPOINT} from "../constants";


// http://localhost:3000/tasks
const url = "tasks";

export const getList = (params={}) => {
  let queryParams = "";
  if (Object.keys(params).length > 0) {
    queryParams = `?${queryString.stringify(params)}`;
  }
  return axiosServie.get(`${API_ENDPOINT}/${url}${queryParams}`);
};

// http://localhost:3000/tasks METHOD: POST
export const addTask = (data) => {
  return axiosServie.post(`${API_ENDPOINT}/${url}`, data);
};

// http://localhost:3000/tasks/:id METHOD: PUT
export const updateTask = (data, taskId) => {
  return axiosServie.put(`${API_ENDPOINT}/${url}/${taskId}`, data);
};

// http://localhost:3000/tasks/:id METHOD: DELETE
export const deleteTask = (taskId) => {
  return axiosServie.delete(`${API_ENDPOINT}/${url}/${taskId}`);
};
