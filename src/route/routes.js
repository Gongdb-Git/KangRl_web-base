
// 每个元素一个大目录
const routes = [
  {
    path: '/', meta: { title: '静态Ecg', show: true },
    component: () => import('@/layout/Layout.vue'),
    redirect: '/home',
    children: [
      { path: 'home', component: () => import('@/views/home/HomePage.vue'), meta: { title: '首页', hidenSidebar: false, hiddenHeader: false, show: true } },
    ],
  },
  {
    path: '/dynamic', meta: { title: '动态Ecg', show: false },
    component: () => import('@/layout/Layout.vue'),
    children: [

    ]
  },
]



const filterRoutes = (routes) => {
  return routes.map(route => {
    const newRoute = { ...route };
  })
}


export default routes;  