import Vue from 'vue';
import './index.css';
import { Icon } from '@iconify/vue2';
import Player from '@/components/Player/player';
Vue.use(Player);
Vue.component('Icon', Icon);
import Vant from 'vant';
import 'vant/lib/index.css';
import App from '../src/App.vue';
Vue.use(Vant);

import dayjs from 'dayjs';
import router from './router/router.js';
Vue.prototype.dayjs = dayjs;

import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

Vue.component('VueSlider', VueSlider);

const vm = new Vue({
  //挂载点
  el: '#app',
  router,
  render: (h) => h(App),
});
