import { reqCategoryList, reqGetBannerList, reqGetFloorList } from '@/api'
const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
};
// mutations:修改mutations
const mutations = {
    CATEGORYLIST(state, categoryList) {
        // 仓库中的值等于服务器返回的值
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    }
}
// action:修改action,可以书写自己的业务逻辑，也可以处理异步
const actions = {
    // 通过API里面的接口函数调用，向服务器发送请求，获取数据
    // 这里注意写法
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit('CATEGORYLIST', result.data)
        }
    },
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        console.log(result);
        if (result.code == 200) {
            commit('GETBANNERLIST', result.data)
        }
    },
    async getFloorList({ commit }) {
        let result = await reqGetFloorList();
        if (result.code == 200) {
            commit('GETFLOORLIST', result.data)
        }
    }
}
// getters:理解为计算属性，用于简化仓库数据，让组件仓库的数据更加方便
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}
