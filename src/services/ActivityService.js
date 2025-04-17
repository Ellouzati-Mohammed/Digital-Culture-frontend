import axios from "axios";
import { API_ENDPOINTS } from "../api/api";

   
const Activities_URL = API_ENDPOINTS.activities;

const getActivities = (coursId) => axios.get(`${Activities_URL}/${coursId}/course`);//recupere le course + ses activities
const createActivity = (data) => axios.post(Activities_URL, data);
const updateActivity = (id, data) => axios.put(`${Activities_URL}/${id}`, data);
const deleteActivity = (id) => axios.delete(`${Activities_URL}/${id}`);

  export {getActivities,createActivity,updateActivity,deleteActivity};