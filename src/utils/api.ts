import axios from 'axios';
import configs from 'react-native-config';
import { INVALID_SESSION_TOKEN } from './constants';
import Helper from './helper';

const getAxiosInstance = async () => {
  const headers: { [k: string]: string } = {};
  headers['X-Parse-Application-Id'] = configs.API_APP_ID;
  headers['X-Parse-REST-API-Key'] = configs.API_REST_API_KEY;

  const token = await Helper.getAuthToken();
  if (token) {
    headers['X-Parse-Session-Token'] = token;
  }

  const apiServerUrl = configs.API_SERVER_URL;
  const axiosInstance = axios.create({
    baseURL: apiServerUrl,
    headers,
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      const arr = [200, 201];
      if (arr.indexOf(response.status) !== -1) {
        const result = response.data;
        result.statusCode = response.status;
        return response.data;
      }
      return Promise.reject(response);
    },
    (error) => {
      const { code } = error.response.data;

      if (code) {
        if (code === 209) {
          return Promise.reject(INVALID_SESSION_TOKEN);
        }
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error.response.statusText);
    },
  );

  return axiosInstance;
};

const request = async (url: string, data = {}) => {
  try {
    const API = await getAxiosInstance();
    return API.post(url, data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export default request;
