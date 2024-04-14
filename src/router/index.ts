import {createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'
import HomeView from '../layout/HomeView.vue'
import UserLogin from "@/views/Login/UserLogin.vue";

// 静态路由
export const constantRoutes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: '首页',
            hidden: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: UserLogin,
        meta: {
            title: '登录',
            hidden: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: constantRoutes as RouteRecordRaw[],
    // 刷新时，滚动条位置还原
    scrollBehavior: () => ({left: 0, top: 0})
})

// 重置路由
export const resetRouter = () => {
    router.getRoutes().forEach(route => {
        const {name} = route
        if (name) {
            router.hasRoute(name) && router.removeRoute(name)
        }
    })
}

// router.beforeEach((to, from) => {
//     document.title = to.meta.title as string
//     // 判断用户是否已经登录
//     if (to.path !== '/Login' && !sessionStorage.getItem('token')) {
//         return '/Login'
//     }else{
//         // 获取用户角色权限之后，根据角色生成动态路由
//         console.log('有权限，可以访问，生成动态路由')
//     }
//     return true
// })

export default router
