/* eslint-disable no-console */
import axios, { type AxiosRequestConfig } from 'axios';
import { getAuthToken, removeAuthToken } from '@/utils';
import { env } from '@/env.mjs';

const Axios = axios.create({
  baseURL: env.BASE_URL,
  timeout: 1500000,
  headers: {
    'Content-Type': 'application/json',
  },
});

Axios.interceptors.request.use(
  async config => {
    const { access_token } = getAuthToken();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    config.headers = {
      ...config.headers,
      Authorization: access_token ? `Bearer ${access_token}` : '',
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      removeAuthToken();
      // window.location.replace(routes.connect);
    }
    return Promise.reject(error);
  }
);

export default Axios;

export class HttpClient {
  static async get<T>(
    url: string,
    params?: unknown,
    options?: AxiosRequestConfig
  ) {
    const response = await Axios.get<T>(url, {
      params,
      ...options,
    });
    return response.data;
  }
  static async post<T>(
    url: string,
    data: unknown,
    options?: AxiosRequestConfig
  ) {
    const response = await Axios.post<T>(url, data, options);
    return response.data;
  }
  static async put<T>(
    url: string,
    data: unknown,
    options?: AxiosRequestConfig
  ) {
    const response = await Axios.put<T>(url, data, options);
    return response.data;
  }
  static async delete<T>(url: string, options?: AxiosRequestConfig) {
    const response = await Axios.delete<T>(url, options);
    return response.data;
  }
}
