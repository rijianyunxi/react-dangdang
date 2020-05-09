import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.songjintao.cn',
    timeout: 10000
});

//axios请求拦截
instance.interceptors.request.use(config => {
        let token = localStorage.getItem('token');
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
    return Promise.reject(error)
})

export default instance;