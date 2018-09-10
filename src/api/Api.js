import axios from 'axios';
import NProgress from 'nprogress/nprogress.js';

let axiosInstance = axios.create({
  baseURL: 'https://api.nal.usda.gov/ndb/nutrients'
});

axiosInstance.interceptors.request.use(config => {
  NProgress.start();
  NProgress.set(0.4);
  return config;
});

axiosInstance.interceptors.response.use(response => {
  NProgress.done();
  return response;
});

export const Api = axiosInstance;
