import { createStore } from 'vuex'

export default createStore({
    state: {
        token: 1,
    },
    mutations: {
        // 进行数据更新，改变数据状态
        setToken(state, action) {
            state.token = action.token
        },
    },
    actions: {
        //执行动作，数据请求
        async resetList({ commit }) {},
    },
    getters: {
        getToken(state) {
            return state.token
        },
    },
})
