import { createMemoryHistory, createRouter } from 'vue-router'
import routes from './routes.js'

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})


router.beforeEach((to, from) => {
    // ...
    // 返回 false 以取消导航
    // return false
})
export default router;