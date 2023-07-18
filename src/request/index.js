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
export const getQRKey = () => http.get('/login/qr/key');

export const getQrInfo = (key, qrimg = 1) =>
  http.get('/login/qr/create', { params: { key, qrimg } });

export const checkQrStatus = (key) =>
  http.get('/login/qr/check', { params: { key, timestamp: Date.now() } });

export const getUserAccount = () => http.get('/user/account');

export const getUserDetail = (uid) =>
  http.get('/user/detail', { params: { uid } });

// 用户详情页面
export const getUserQing = () => http.get('/user/account');

// 用户详情页面
export const getUserShou = () => http.get('/user/subcount');

/**
 * @descriptiong 获取用户评论
 */
export const fetchUserHistory = (uid) =>
  http.get('/user/comment/history', { params: { uid } });

/**
 * @descriptiong 获取用户歌单
 */
// 收藏歌单加我的评论
export const fetchUserPlaylist = (uid) =>
  http.get('/user/playlist', { params: { uid } });

/**
 * @descriptiong 播放歌曲
 */

// 播放歌曲
export const getTrackDetail = (id) =>
  http.get('/song/detail', { params: { ids: id } });
export const getMP3 = (id) =>
  http.get('/song/url/v1', { params: { id, level: 'standard' } });

export const setUser = (
  gender,
  birthday,
  nickname,
  province,
  city,
  signature
) =>
  http.get('/user/update', {
    params: { gender, birthday, nickname, province, city, signature },
  });
//重复昵称检测
export const getNickname = (nickname) =>
  http.get('/nickname/check', { params: { nickname } });

/**
 * @descriptiong MV排行
 */

// MV排行
export const MvList = (area) =>
  http.get('/top/mv', { params: { limit: 50, area } });

//歌词
export const lyricText = (id) => http.get('/lyric', { params: { id } });

/**
 * @description MV视频
 */
export const featMvUrl = (id) => http.get('/mv/url', { params: { id } });

/**
 * @description MV视频信息
 */
export const featMvDetail = (mvid) =>
  http.get('/mv/detail', { params: { mvid } });

/**
 * @description 获取 mv 点赞转发评论数数据
 */
export const featMvDetailInfo = (mvid) =>
  http.get('/mv/detail/info', { params: { mvid } });
