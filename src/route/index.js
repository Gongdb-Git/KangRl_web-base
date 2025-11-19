import { createRouter, createWebHashHistory } from 'vue-router'
import route from './routes.js'
const routes = [
    {
        path: '/',
        redirect: '/login',
        children: [
            {
                path: 'login', meta: { title: '登录' },
                component: () => import('@/views/login/LoginPage.vue'),
            },
        ],
    },
    ...route,

]

console.log('路由表--->', routes);

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


router.beforeEach((to, from) => {
    // ...
    // 返回 false 以取消导航
    // return false
})
export default router;