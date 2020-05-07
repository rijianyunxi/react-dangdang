import axios from 'axios'

const instance = axios.create({
    baseURL = "https://localhost:6000",
    timeout: 10000
})

//axios请求拦截
instance.interceptors.request.use(config => {
        let token = localStorage.getItem('token')
        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

//axios响应拦截

instance.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.reject("发生啦意外，请重试...")
})

export default instance;