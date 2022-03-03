import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store";

Vue.use(VueRouter);
import routes from './routes'
// 重写replace和reject
let oringinpush = VueRouter.prototype.push;
let oringinreplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        oringinpush.call(this, location, resolve, reject)
    } else {
        oringinpush.call(this, location, () => { }, () => { });
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        oringinreplace.call(this, location, resolve, reject)
    } else {
        oringinreplace.call(this, location, () => { }, () => { });
    }
}
let router = new VueRouter({
    routes,
    // 滚动行为
    scrollBehavior(to, from, savedPosition) {
        // 返回的这个y=0，代表滚动条在最上面
        return { y: 0 }
    }
});
// 全局首位：全局守卫（在路由跳转之间进行判断）
router.beforeEach(async (to, from, next) => {
    //to:获取到要跳转到的路由信息
    //from：获取到从哪个路由跳转过来来的信息
    //next: next() 放行  next(path) 放行  
    //方便测试 统一放行
    //  next();
    //获取仓库中的token-----可以确定用户是登录了
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    // 用户登录了
    if (token) {
        // 已经登录了，不能再跳转到登录界面
        if (to.path == '/login' || to.path == '/register') {
            next('/')
        } else {
            // 已经登陆了，访问的是非登录与注册
            // 登录了且拥有用户信息，放行
            if (name) {
                next();
            } else {
                // 登陆了但没有用户信息
                // 在路由跳转前获取用户信息且放行
                try {
                    await store.dispatch('getUserInfo');
                    next()
                } catch (error) {
                    // token失效重新登录
                    await store.dispatch('userLogout');
                    next('/login')
                }
            }
        }
    } else {
        // 未登录：不能去交易相关、不能去支付相关、不能去个人中心
        // 未登录去上面的这些路由(center|pay|paysuccess|trade|)-----登录
        let toPath = to.path
        if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
            //把未登录的时候向去而没有去成的信息，存储于地址栏中【路由】,重定向
            next('/login?redirect=' + toPath);
        } else {
            //去的不是上面的路由(home|search|shopCart)----放行
            next()
        }
    }
})
export default router