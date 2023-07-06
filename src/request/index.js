//所有的请求都定义在此
import axios from 'axios';
import store from 'storejs';
const http = axios.create({
  baseURL: 'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app',
});

// 添加请求拦截器;
http.interceptors.request.use(function (config) {
  // console.log(config);
  const cookie = store.get('__m__cookie') ?? '';
  config.params = config.params || {};
  config.params.cookie = cookie;
  return config;
});
export const fetchPlaylists = (cat) =>
  http.get('/top/playlist', { params: { cat } });
export const fetchSearchDefault = () => http.get('/search/default');
export const fetchSearchSuggest = (keywords) =>
  http.get('/search/suggest', {
    params: {
      keywords,
    },
  });
export const fetchStartTime = () =>
  axios.get(
    'https://netease-cloud-music-api-five-roan-88.vercel.app/calendar?startTime=1677417600000&endTime=1677417600000'
  );
export const fetchPersonalized = () =>
  axios.get(
    'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/personalized'
  );

export const fetchDetail = () => http.get('/search/hot/detail');

// 排行榜里面的东西
export const songDetails = (params) =>
  http.get(`/playlist/detail?id=${params}`);
// 所有歌曲
export const songAll = (params) => http.get(`/playlist/track/all?id=${params}`);

// 二维码
export const getQrKey = () => http.get('/login/qr/key');

export const getQrInfo = (key, qrimg = 1) =>
  http.get('/login/qr/create', { params: { key, qrimg } });

export const checkQrStatus = (key) =>
  http.get('/login/qr/check', { params: { key, timestamp: Date.now() } });

export const getUserAccount = () => http.get('/user/account');

export const getUserDetail = (uid) =>
  http.get('/user/detail', { params: { uid } });
