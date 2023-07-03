import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/index.vue'),
  },
  {
    path: '/suosou',
    name: 'Sousuo',
    component: () => import('../views/SearchView.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
