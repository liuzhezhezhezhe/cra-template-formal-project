import axios, { AxiosHeaders } from "axios";
import { getCookie } from "@/utils/cookie";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
  withCredentials: true,
});

/**
 * Before Request
 */
instance.interceptors.request.use(
  (config) => {
    if (
      config.headers !== undefined &&
      config.headers instanceof AxiosHeaders
    ) {
      const token = getCookie("token");
      if (token !== null) {
        config.headers.set("Authorization", getCookie("token"));
      }
    }
    // Add interceptors before send request.
    return config;
  },
  (error) => {
    // Add interceptors when get some error.
    return Promise.reject(error);
  }
);

/**
 * Got Response
 */
instance.interceptors.response.use(
  (response) => {
    const { status } = response;
    if (status === 200) return response;
    else if (status === 401) {
      // Add some method to resolve problem
    }
    return Promise.reject(response.data);
  },
  (error) => {
    // Add some method to resolve problem
    return Promise.reject(error);
  }
);

export default instance;
