export interface LoginData {
    /**
     * 密码
     */
    password: string;
    /**
     * 用户名
     */
    username: string;
    [property: string]: any;
}

/**
 * ResultLoginResult
 */
export interface ApifoxModel {
    code?: string;
    data?: LoginResult;
    msg?: string;
    [property: string]: any;
}

/**
 * LoginResult，登录响应对象
 */
export interface LoginResult {
    /**
     * 访问token
     */
    accessToken?: string;
    /**
     * 过期时间(单位：毫秒)
     */
    expires?: number | null;
    /**
     * 刷新token
     */
    refreshToken?: null | string;
    /**
     * token 类型
     */
    tokenType?: string;
    [property: string]: any;
}