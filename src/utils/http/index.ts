import axios, { type InternalAxiosRequestConfig, type AxiosInstance, type AxiosResponse } from 'axios'

// 通过create方法,创建axios实例
const axiosInstance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000,
    withCredentials: false,
    headers: { 'Content-Type': 'application/json;' }
})

// 添加请求拦截器
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // 从本地存储或状态管理获取令牌
        // const token = localStorage.getItem('token');
        const token: string = '获取你存储的token'
        // 如果存在令牌，在请求头中携带
        if (token) {
            config.headers.Authorization = token
        }
        // 在发送请求之前做些什么
        return config
    },
    (error: any) => {
        // 处理请求错误
        return Promise.reject(error)
    }
)

// 添加响应拦截器
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        // 对响应数据做点什么
        return response
    },
    (error: any) => {
        // 处理响应错误
        return Promise.reject(error)
    }
)

export default axiosInstance