import axios from "axios";
import getToken from "./../services/getToken";

export const API_URL = import.meta.env.VITE_API_URL;

const unProtectedList = ["auth/signup", "auth/login"];

export const axiosInstance = axios.create({
  baseURL: API_URL || "https://crown-survey/api/v1/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    const unprotectedApi = unProtectedList.some((item) => config.url == item);
    if (token && !unprotectedApi) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    console.log("Error in Interceptor Request", error);
  }
);
