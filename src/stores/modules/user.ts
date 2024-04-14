import {loginApi, logoutApi} from "@/api/auth";
import {getUserInfoApi} from "@/api/user";
import {resetRouter} from "@/router";
import {store} from "@/stores";

import type {LoginData} from "@/api/auth/types";
import type {UserInfo} from "@/api/user/types";

import {ref} from "vue"
import {defineStore} from "pinia"

export const useUserStore = defineStore("user", () => {
    const user = ref<UserInfo>({
        roles: [],
        perms: [],
    });

    /**
     * 登录
     *
     * @param {LoginData}
     * @returns
     */
    function login(loginData: LoginData) {
        return new Promise<void>((resolve, reject) => {
            loginApi(loginData)
                .then((response) => {
                    const {tokenType, accessToken} = response.data;
                    localStorage.setItem("accessToken", tokenType + " " + accessToken); // Bearer eyJhbGciOiJIUzI1NiJ9.xxx.xxx
                    resolve();
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    // 获取信息(用户昵称、头像、角色集合、权限集合)
    function getUserInfo() {
        return new Promise<UserInfo>((resolve, reject) => {
            getUserInfoApi()
                .then((res:any) => {
                    const data = res.data.data
                    if (!data) {
                        reject("Verification failed, please Login again.");
                        return;
                    }
                    if (!data.roles || data.roles.length <= 0) {
                        reject("getUserInfo: roles must be a non-null array!");
                        return;
                    }
                    user.value.roles = data.roles;
                    user.value.perms = data.perms;
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    // user logout
    function logout() {
        return new Promise<void>((resolve, reject) => {
            logoutApi()
                .then(() => {
                    localStorage.setItem("accessToken", "");
                    location.reload(); // 清空路由
                    resolve();
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    // remove token
    function resetToken() {
        return new Promise<void>((resolve) => {
            localStorage.setItem("accessToken", "");
            resetRouter();
            resolve();
        });
    }

    return {
        user,
        login,
        getUserInfo,
        logout,
        resetToken,
    };
});

// 非setup
export function useUserStoreHook() {
    return useUserStore(store);
}