
// 每个元素一个大目录
const routes = [
  {
    path: '/sys', meta: { title: '静态Ecg', show: true },
    component: () => import('@/layout/Layout.vue'),
    redirect: '/sys/home',
    children: [
      { path: 'home', component: () => import('@/views/home/HomePage.vue'), meta: { title: '首页', hidenSidebar: false, hiddenHeader: false, roles: "", show: true } },
    ],
  },
  {
    path: '/dynamic', meta: { title: '动态Ecg', show: true },
    component: () => import('@/layout/Layout.vue'),
  },
]
export default routes;  