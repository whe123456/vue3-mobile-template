import axios from 'axios'
// 创建 axios 实例
const service = axios.create({
  baseURL: '', // url = base url + request url
  timeout: 10000 // request timeout
})

//  请求拦截器
service.interceptors.request.use(
  (config: any) => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;'

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    // 届时根据后端返回success或者code值判断
    if (res.success === true) {
      return res
    }
    return res
  },
  (error) => {
    // 响应错误
    return Promise.reject(error)
  }
)

export default service
