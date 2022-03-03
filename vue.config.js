module.exports = {
    productionSourceMap: false,
    // 关闭ESLINT校验工具
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': { // 只对请求路由以/api开头的请求进行代理转发
                target: 'http://39.98.123.211', // 转发的目标url
                // 此处的真实的接口中都包含/api，故不用重写
                // pathRewrite:{'^/api':''},
                changeOrigin: true // 支持跨域
            }
        }
    },

}