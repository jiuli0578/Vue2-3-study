<template>
    <div class="container">
        <Count></Count>
    </div>
</template>
<!--
    getters的使用
        1）概念：当state中的数据需要经过加工后再使用时
                可以使用getters加工
        2）在store.js中追加getters配置
            const getters = {
                bigNum(state){
                    return state.num * 10
                }
            }
        3）组件中读取数据：$store.getters.bigNum
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