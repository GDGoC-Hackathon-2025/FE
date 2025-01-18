import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api";

// 단순 get요청으로 인증값이 필요없는 경우
const axiosApi = (url, options) => {
  const instance = axios.create({
    baseURL: url,
    headers: {
      "Content-type": "application/json",
    },
    withCredentials: false,
    ...options,
  });
  return instance;
};

// post, delete등 api요청 시 인증값이 필요한 경우
const axiosAuthApi = (url, options) => {
  const instance = axios.create({
    baseURL: url,
    headers: {
      "Content-type": "application/json",
    },
    withCredentials: true,
    ...options,
  });
  return instance;
};

export const defaultInstance = axiosApi(BASE_URL);
export const authInstance = axiosAuthApi(BASE_URL);
