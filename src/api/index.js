// 当前的这个模块，api进行统一管理
import requests from './ajax'
import mockRequests from './mockAjax'
// 三级联动的文档
// /api/product/getBaseCategoryList     get 无参数

// 函数被调用时就可以直接发请求
export const reqCategoryList = () => {
    // 发送请求
    // return request({ url: '/api/product/getBaseCategoryList', method: 'get' });
    // 由于request中已经配置了baseUrl,故此处不用配置api

    // axios返回的结果为promoise对象
    return requests({ url: '/product/getBaseCategoryList', method: 'get' });
};
export const reqGetBannerList = () => mockRequests.get('/banner')
export const reqGetFloorList = () => mockRequests.get('/floor')
// // 请求搜索匹配的商品相关数据,此处的searchParams至少为一个空对象，不能不传
export const reqGetSearchInfo = (params) => requests({ url: "/list", method: "post", data: params });
// export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' });
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' });
///api/cart/addToCart/{ skuId }/{ skuNum }  POST
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" });
// 获取购物车列表数据接口
export const reqCartList = () => requests({ url: '/cart/cartList ', method: 'get' });
// 删除购物产品的接口 cart/deleteCart/{skuId}
export const reqDeleteCartById = (skuId) => requests({ url: `cart/deleteCart/${skuId} `, method: 'DELETE' });
// 切换商品选中状态
export const reqUpdateCheckedByid = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' });
// 获取验证码
//URL:/api/user/passport/sendCode/{phone}  method:get
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })
// 注册
// //url:/api/user/passport/register  method:post    phone code password
export const reqUserRegister = (data) => requests({ url: '/user/passport/register', data, method: 'post' });
// 登录 /api/user/passport/login
export const reqUserLogin = (data) => requests({ url: '/user/passport/login', data, method: 'post' });
// 获取用户的信息 需要带着用户的token向服务器要用户信息  /user/passport/auth/getUserInfo
export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' });
// 退出登录
// URL// 退出登录 /api/user/passport/logout
export const reqLogout = () => requests({ url: '/user/passport/logout', method: 'get' })
//获取用户地址信息
//URL:/api/user/userAddress/auth/findUserAddressList  method:get
export const reqAddressInfo = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' });
//获取商品清单
//URL:/api/order/auth/trade   method:get
export const reqOrderInfo = () => requests({ url: '/order/auth/trade', method: 'get' });
//提交订单的接口
//URL:/api/order/auth/submitOrder?tradeNo={tradeNo}  method:post
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'post' });
//获取支付信息
//URL:/api/payment/weixin/createNative/{orderId}  GET
export const reqPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' });
//获取支付订单状态
//URL:/api/payment/weixin/queryPayStatus/{orderId}  get
export const reqPayStatus = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' });
//获取个人中心的数据
//api/order/auth/{page}/{limit}  get 
export const reqMyOrderList = (page, limit) => requests({ url: `/order/auth/${page}/${limit}`, method: 'get' });
