import Vue from 'vue';
import './index.css';
import { Icon } from '@iconify/vue2';
Vue.component('Icon', Icon);
import Vant from 'vant';
import 'vant/lib/index.css';
import App from '../src/App.vue';
Vue.use(Vant);
import dayjs from 'dayjs';
import router from './router/router.js';
Vue.prototype.dayjs = dayjs;

const vm = new Vue({
  //挂载点
  el: '#app',
  router,
  render: (h) => h(App),
});
