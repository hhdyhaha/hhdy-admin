import axiosInstance from '@/utils/http'


// 通义千问api
export const testApi = (params: object) => {
    return axiosInstance({
        url: '/',
        method: 'post',
        data: params,
        timeout: 10000
    })
}