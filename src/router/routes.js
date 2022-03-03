// 路由的配置信息
// import Home from '@/pages/Home'
// import Search from '@/pages/Search'
const Search = () => import('@/pages/Search')
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import addCartSuccess from "@/pages/addCartSuccess";
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'
export default [
    {
        path: '/center',
        component: Center,
        // 路由元信息为对象格式
        // 注意子路由的写法
        children: [
            {
                // path: '/center/myorder',
                path: 'myorder',
                component: MyOrder,
            },
            {
                path: 'grouporder',
                component: GroupOrder,
            },
            // 重定向，当组件没有指定为哪个子路由时，默认为我的订单
            {
                path: '',
                redirect: 'myorder'
            }
        ]
    },
    {
        path: '/paysuccess',
        component: PaySuccess,
        // 路由元信息为对象格式
        meta: {
            show: true
        },
        // 这是路由独享守卫的写法
        // beforeEnter: (to, from, next) => {
        //     // 如果要去支付成功界面，必须是从支付界面而来
        //     if (from.path == '/pay') {
        //         next();
        //     } else {
        //         // 如果从其他的路由组件而来，则停留在 当前
        //         // next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，
        //         // 那么 URL 地址会重置到 from 路由对应的地址。
        //         next(false)
        //     }
        // }
    },
    {
        path: '/pay',
        component: Pay,
        // 路由元信息为对象格式
        meta: {
            show: true
        },
        // 组件内守卫
        beforeEnter: (to, from, next) => {
            // 如果要去支付界面，必须是从交易界面而来
            if (from.path == '/trade') {
                next();
            } else {
                // 如果从其他的路由组件而来，则停留在 当前
                // next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，
                // 那么 URL 地址会重置到 from 路由对应的地址。
                next(false)
            }
        }
    },
    {
        path: '/home',
        // 路由懒加载
        component: () => import('@/pages/Home'),
        // 路由元信息为对象格式
        meta: {
            show: true
        },

    },
    {
        path: '/trade',
        component: Trade,
        // 路由元信息为对象格式
        meta: {
            show: true
        },
        beforeEnter: (to, from, next) => {
            // 如果要去交易界面，必须是从购物车而来
            if (from.path == '/shopcart') {
                next();
            } else {
                // 如果从其他的路由组件而来，则停留在 当前
                // next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，
                // 那么 URL 地址会重置到 from 路由对应的地址。
                next(false)
            }
        }
    },
    {
        path: '/shopcart',
        component: ShopCart,
        // 路由元信息为对象格式
        meta: {
            show: true
        }
    },
    {
        path: '/addcartsuccess',
        name: 'addcartsuccess',
        component: addCartSuccess,
        // 路由元信息为对象格式
        meta: {
            show: true
        }
    },
    {
        path: '/search/:keyword',
        component: Search,
        meta: {
            show: true
        },
        name: "search",
    },
    {
        path: '/login',
        component: Login,
        meta: {
            show: false
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            show: false
        }
    },
    // 点击这个产品是需要路由跳转以及传参，因此此处需要占位
    {
        path: '/detail/:skuid',
        component: Detail,
        meta: {
            show: false
        }
    },
    // 重定向，在项目跑起来的时候，访问/时 让他定向到Home
    {
        path: '',
        redirect: './home'
    },
    {
        path: '/communication',
        component: () => import('@/pages/Communication/Communication'),
        children: [
            {
                path: 'event',
                component: () => import('@/pages/Communication/EventTest/EventTest'),
                meta: {
                    isHideFooter: true
                },
            },
            {
                path: 'model',
                component: () => import('@/pages/Communication/ModelTest/ModelTest'),
                meta: {
                    isHideFooter: true
                },
            },
            {
                path: 'sync',
                component: () => import('@/pages/Communication/SyncTest/SyncTest'),
                meta: {
                    isHideFooter: true
                },
            },
            {
                path: 'attrs-listeners',
                component: () => import('@/pages/Communication/AttrsListenersTest/AttrsListenersTest'),
                meta: {
                    isHideFooter: true
                },
            },
            {
                path: 'children-parent',
                component: () => import('@/pages/Communication/ChildrenParentTest/ChildrenParentTest'),
                meta: {
                    isHideFooter: true
                },
            },
            {
                path: 'scope-slot',
                component: () => import('@/pages/Communication/ScopeSlotTest/ScopeSlotTest'),
                meta: {
                    isHideFooter: true
                },
            }
        ],
    },

]