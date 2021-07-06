import axios from 'axios';
import Configs from 'react-native-config';
import {SESSION_TOKEN} from './constants';
import AsyncStorage from '@react-native-community/async-storage';
import {Platform} from 'react-native';

const api = axios.create({
  baseURL: Configs.API_SERVER_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem(SESSION_TOKEN);
  config.headers['X-Parse-Application-Id'] = Configs.API_APP_ID;
  config.headers['X-Parse-REST-API-Key'] = Configs.API_REST_API_KEY;
  config.headers['App-Version'] = Configs.APP_VERSION;
  config.headers.Platform = Platform.OS;

  if (token) {
    config.headers['X-Parse-Session-Token'] = token;
  }
  return config;
});

api.interceptors.response.use(
  response => response.data,
  ({message, response: {data, status}}) => {
    return Promise.reject({message, data, status});
  },
);

export default api;
