import axios from "axios";

let baseURL = "http://localhost:8000";

export const instance = axios.create({
  baseURL,
  withCredentials: true,
});

export default instance;
