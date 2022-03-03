import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import { Button, MessageBox } from 'element-ui';
import '@/plugins/validate'
// import VueLazyload from 'vue-lazyload'

// import { reqCategoryList } from '@/api'
// 统一引入
import * as API from '@/api'
import 'swiper/css/swiper.css'
// reqCategoryList()
// reqGetBannerList()
Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination);
// Vue.use(VueLazyload)
// 第一种写法
Vue.component(Button.name, Button);
//ElementUI注册组件的时候，还有一种写法，挂在原型上
// 模态框
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

import '@/mock/mockServer'
// import { reqGetBannerList } from '@/api'
// reqGetBannerList()
//引入插件
import atm from '@/assets/1.gif';
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  //懒加载默认的图片
  loading: atm
});
new Vue({
  render: h => h(App),
  // 配置全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  //需要把router进行注册
  //可以让全部的组件（非路由|路由组件）都可以获取到$route|$router属性
  //$route(路由)：可以获取到路由信息（path、query、params）
  //$router:进行编程式导航路由跳转push||replace
  router,
  // 注册仓库：组件实例对象的身上会多了个$store属性
  store
}).$mount('#app')
