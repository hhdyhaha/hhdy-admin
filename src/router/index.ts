import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../layout/HomeView.vue'
import UserLogin from "@/views/Login/UserLogin.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {title: '首页'}
        },
        {
            path: '/Login',
            name: 'Login',
            component: UserLogin,
            meta: {title: '登录'}
        }

    ]
})

router.beforeEach((to, from) => {
    document.title = to.meta.title as string
    return true
})

export default router
