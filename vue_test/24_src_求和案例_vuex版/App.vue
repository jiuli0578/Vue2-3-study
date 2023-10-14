<template>
    <div class="container">
        <Count></Count>
    </div>
</template>
<!-- 
    Vuex基本使用：
        1.初始化数据、配置actions、配置mutations，操作文件store.js
            // 引入Vue核心库
            import Vue from 'vue'
            // 引入Vuex
            import Vuex from 'vuex'
            const actions = {
                // 响应组件中加的动作
                addOdd(context,value){
                    console.log('actions中的addOdd被调用了');
                    if(context.state.num % 2){
                        context.commit('ADD',value)
                    }
                },
            }
            const mutations = {
                // 执行加
                ADD(state,value){
                    console.log('mutations中的ADD被调用了');
                    state.num += value
                },
            }
            // 初始化数据
            const state = {
                num:0,
            }   
            // 创建并暴露store
            export default new Vuex.Store({
                actions,
                mutations,
                state,
            })
        2.组件中读取vuex中的数据：$store.state.num
        3.组件中修改vuex中的数据：$store.dispatch('action中的方法名',数据)
                                或 $store.commit('action中的方法名',数据)
        备注：若没有网络请求或其他业务逻辑，组件中也可以越过actions，
                即不写dispatch，直接写commit
-->
<script>
    import Count from './components/Count'
    export default {
        name:'App',
        components:{Count}
    }
</script>
<style>
    .container,.footer{
        display: flex;
        justify-content: space-around;
    }
    img{
        width: 100%;
    }
    video{
        width: 100%;
    }
</style>