import axiosInstance from '@/utils/http'
import type { AxiosPromise } from 'axios';
import type {LoginData,LoginResult} from "@/api/login/types";

// 通义千问api
export const loginApi = (data: LoginData):AxiosPromise<LoginResult>=> {
    console.log('data',data)
    return axiosInstance({
        url: '/api/v1/auth/login',
        method: 'post',
        params: data,
        timeout: 10000
    })
}