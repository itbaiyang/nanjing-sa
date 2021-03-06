import axios from 'axios';

axios.interceptors.request.use(function (config){
  config.headers = config.headers || {};
  var encodedString = btoa("test:123456");
  config.headers.Authorization = 'Basic ' + encodedString;
  return config;
  return config;
}, function (error){
 // 请求失败的处理
 return Promise.reject(error);
});
let base = '/apis';
// let base1 = '/api';

export const requestLogin = params => { return axios.post(`/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`/user/list`, { params: params }); };

export const getStallListPage = params => { return axios.get(`${base}/stallMan/list`, { params: params }); };
export const getUserListPage = params => { return axios.get(`/user/list`, { params: params }); };

export const removeUser = params => { return axios.get(`/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`/user/add`, { params: params }); };

export const marketInfo = params => { return axios.get(`${base}/market/view/` + params);};