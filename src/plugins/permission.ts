import router from "@/router";
import { usePermissionStore } from "@/stores/modules/permission";
import { useUserStore } from "@/stores/modules/user";
import NProgress from "@/utils/nprogress"
import type { RouteRecordRaw } from "vue-router";

export function setupPermission() {
    // 白名单路由
    const whiteList = ["/login"];
    router.beforeEach(async (to, from, next) => {
        NProgress.start();
        const hasToken = localStorage.getItem("accessToken");
        if (hasToken) {
            if (to.path === "/login") {
                // 如果已登录，跳转首页
                next({ path: "/" });
                NProgress.done();
            } else {
                const userStore = useUserStore();
                const hasRoles = userStore.user.roles && userStore.user.roles.length > 0;
                if (hasRoles) {
                    // 未匹配到任何路由，跳转404
                    if (to.matched.length === 0) {
                        from.name ? next({ name: from.name }) : next("/404");
                    } else {
                        next();
                    }
                } else {
                    // 根据角色获取动态路由
                    const permissionStore = usePermissionStore();
                    try {
                        const { roles } = await userStore.getUserInfo();
                        const accessRoutes = await permissionStore.generateRoutes(roles);
                        accessRoutes.forEach((route: RouteRecordRaw) => {
                            router.addRoute(route);
                        });
                        next({ ...to, replace: true });
                    } catch (error) {
                        console.log(4,error)
                        // 移除 token 并跳转登录页
                        await userStore.resetToken();
                        next('/login');
                        NProgress.done();
                    }
                }
            }
        } else {
            // 未登录可以访问白名单页面
            if (whiteList.indexOf(to.path) !== -1) {
                next();
            } else {
                next(`/login`);
                NProgress.done();
            }
        }
    });

    router.afterEach(() => {
        NProgress.done();
    });
}