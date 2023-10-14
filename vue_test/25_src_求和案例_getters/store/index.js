// 该文件用于创建Vuex中最为核心的store

import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'

// 准备actions--用于响应组件中的动作
const actions = {
    /* add(context,value){
        console.log('actions中的add被调用了');
        context.commit('ADD',value)
    },
    subtract(context,value){
        console.log('actions中的subtract被调用了');
        context.commit('SUBTRACT',value)
    }, */
    addOdd(context,value){
        console.log('actions中的addOdd被调用了');
        if(context.state.num % 2){
            context.commit('ADD',value)
        }
    },
    addWait(context,value){
        console.log('actions中的addWait被调用了');
        setTimeout(() => {
            context.commit('ADD',value)
        },500)
    },
}
// 准备mutations--用于操作数据（state）
const mutations = {
    ADD(state,value){
        console.log('mutations中的ADD被调用了');
        state.num += value
    },
    SUBTRACT(state,value){
        console.log('mutations中的SUBTRACT被调用了');
        state.num -= value
    },
}
// 准备state--用于存储数据
const state = {
    num:0,
}
// 准备getters--用于将state中的数据进行加工
const getters = {
    bigNum(state){
        return state.num * 10
    }
}
// 应用Vuex插件
Vue.use(Vuex)
// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})