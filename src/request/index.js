// 获取默认搜索关键字
import axios from 'axios';
const http = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
});
export const featchSearchDefault = () => http.get('/search/default');

export const fetchSearchResult = (params) =>
  HttpStatusCode.get('/cloudsearch', { params });
