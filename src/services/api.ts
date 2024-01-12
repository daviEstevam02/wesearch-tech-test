import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
  } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://parallelum.com.br/fipe/api/v1/'
})

const DEFAULT_HEADERS = {
    "Content-Type": "application/json",
  };
  
  const API = {
    get<T>(
      endpoint: string,
      params?: any,
      config?: Omit<AxiosRequestConfig, "params">,
    ): Promise<AxiosResponse<T>> {
      return axiosInstance.get<T>(endpoint, {
        params,
        ...config,
      });
    },
  
    post<T>(
      endpoint: string,
      payload?: any,
      config?: AxiosRequestConfig,
    ): Promise<AxiosResponse<T>> {
      return axiosInstance.post(endpoint, payload, {
        headers: {
          ...DEFAULT_HEADERS,
          ...config?.headers,
        },
        ...config,
      });
    },
    delete(
      endpoint: string,
      config?: AxiosRequestConfig,
    ): Promise<AxiosResponse<any>> {
      return axiosInstance.delete(endpoint, {
        headers: {
          ...DEFAULT_HEADERS,
          ...config?.headers,
        },
        ...config,
      });
    },
  
    put<T>(
      endpoint: string,
      payload?: any,
      config?: AxiosRequestConfig,
    ): Promise<AxiosResponse<T>> {
      return axiosInstance.put(endpoint, payload, {
        headers: {
          ...DEFAULT_HEADERS,
          ...config?.headers,
        },
        ...config,
      });
    },
  
    all(requests: any[]): Promise<any[]> {
      return Promise.all(requests);
    },
  
    patch<T = any, R = AxiosResponse<T>>(
      endpoint: string,
      payload?: any,
      config?: AxiosRequestConfig,
    ): Promise<R> {
      return axiosInstance.patch(endpoint, payload, config);
    },
  };

  export { 
    API
  }