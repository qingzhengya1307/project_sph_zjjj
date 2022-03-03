//对aixios进行二次封装
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'
const requests = axios.create({
    baseURL: "/api", // 基础路径
    timeout: 15000   // 连接请求超时时间
})

requests.interceptors.request.use((config) => {
    // config:配置对象，对象里面有一个属性很重要：header请求头
    // 显示请求中的水平进度条
    if (store.state.detail.uuid_token) {
        //请求头添加一个字段(userTempId):和后台老师商量好了
        config.headers.userTempId = store.state.detail.uuid_token;
    }
    // 需要携带token带给服务器
    if (store.state.user.token) {
        config.headers.token = store.state.user.token
    }
    NProgress.start()

    // 必须返回配置对象
    return config
})

requests.interceptors.response.use((response) => {
    // 隐藏进度条
    NProgress.done()
    // 返回响应体数据
    return response.data
}, (error) => {
    // 隐藏进度条
    NProgress.done()

    // 统一处理一下错误
    alert(`请求出错: ${error.message || '未知错误'}`)

    // 后面可以选择不处理或处理
    return Promise.reject(error)
})

export default requests

