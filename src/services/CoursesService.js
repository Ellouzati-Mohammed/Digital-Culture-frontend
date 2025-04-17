import axios from "axios";
import { API_ENDPOINTS } from "../api/api";

   
const DomainCours_URL = API_ENDPOINTS.courses;

const getDomainCourses = (domainId) => axios.get(`${DomainCours_URL}/${domainId}/domain`);//recupere le domain + ses courses
const createDomainCourse = (data) => axios.post(DomainCours_URL, data);
const updateDomainCourse = (id, data) => axios.put(`${DomainCours_URL}/${id}`, data);
const deleteDomainCourse = (id) => axios.delete(`${DomainCours_URL}/${id}`);

  export {getDomainCourses,createDomainCourse,updateDomainCourse,deleteDomainCourse};