import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/Login',
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
  {
    path: '/SongSheet',
    name: 'SongSheet',
    component: () => import('../views/SongSheet.vue'),
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/song',
    component: () => import('../views/SongSheet.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
