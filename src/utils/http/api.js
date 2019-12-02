'use strict'

import axios from 'axios'
import router from '@/router'

const production = 'production'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.post['Content-Type'] = 'application/json'
// const qs = require('querystring')
let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

const httpService = axios.create(config)

httpService.interceptors.request.use(
  function (config) {
    let token = sessionStorage.getItem('token')
    if (token) {
      config.headers.common['token'] = token
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
httpService.interceptors.response.use(
  function (response) {
    // Do something with response data
    // 拦截 若从新生成header中的token更新
    const token = response.headers['x-auth-token']
    if (token) {
      sessionStorage.setItem('token', token)
    }
    return response
  },
  function (error) {
    // Do something with response error
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '错误请求'
          break
        case 401:
          error.message = '未授权，请重新登录'
          // sessionStorage.removeItem('token')
          // sessionStorage.removeItem('username')
          router.push({ path: '/' })
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = '请求错误,未找到该资源'
          break
        case 405:
          error.message = '请求方法未允许'
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器端出错'
          break
        case 501:
          error.message = '网络未实现'
          break
        case 502:
          error.message = '网络错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网络超时'
          break
        case 505:
          error.message = 'http版本不支持该请求'
          break
        default:
          error.message = `未知错误${error.response.status}`
      }
    } else {
      error.message = '连接到服务器失败'
    }
    return Promise.reject(error)
  }
)
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url: process.env.NODE_ENV === production ? '/api' + url : url,
      method: 'get',
      params: params
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
/*
 *  post请求
 *  url:请求地址
 *  params:参数
 * */
export function post (url, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url: process.env.NODE_ENV === production ? '/api' + url : url,
      method: 'post',
      // data: qs.stringify(params
      data: params
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

/*
 *  post请求
 *  url:请求地址
 *  params:参数
 * */
export function postParam (url, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url: process.env.NODE_ENV === production ? '/api' + url : url,
      method: 'post',
      // data: qs.stringify(params
      params: params
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

/*
 *  文件上传
 *  url:请求地址
 *  params:参数
 * */
export function upload (url, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url: process.env.NODE_ENV === production ? '/api' + url : url,
      method: 'post',
      data: params,
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

/*
 *  文件上传
 *  url:请求地址
 *  params:参数
 * */
export function download (url, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url: process.env.NODE_ENV === production ? '/api' + url : url,
      method: 'post',
      params: params
      // responseType: 'arraybuffer'
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

export default {
  get,
  post,
  postParam,
  upload,
  download
}
