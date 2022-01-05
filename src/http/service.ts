import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
    // baseURL: "http://47.104.224.188:8081/website_api/", // url = base url + request url
    // baseURL: "http://127.0.0.1:6031/website_api/", // url = base url + request url
    baseURL: "http://app.blzckji.com/website_api", // url = base url + request url
    // baseURL: "http://test.app.blzckji.com/website_api", // url = base url + request url
    timeout: 10000, // request timeout
})

//  请求拦截器
service.interceptors.request.use(
    (config) => {
        // config.headers['Authorization'] = 111 // 让每个请求携带自定义token 请根据实际情况自行修改
        config.headers['Content-Type'] =
            'application/x-www-form-urlencoded;'

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
        //届时根据后端返回success或者code值判断
        if (res.success === true) {
            return res
        } else {
            return res
        }
    },
    (error) => {
        //响应错误
        return Promise.reject(error)
    }
)

export default service