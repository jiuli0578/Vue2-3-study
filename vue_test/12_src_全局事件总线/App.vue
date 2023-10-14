<template>
    <div class="app">
        <School></School>
        <Student></Student>
    </div>
</template>
<!-- 
    全局事件总线（GlobalEventBus）
        1.一种组件间通信的方式，适用于任意组件间通信
        2.安装全局事件总线：
            new Vue({
                ...
                beforeCreate(){
                    Vue,prototype.$bus = this
                },
                ...
            })
        3.使用事件总线
            （1）接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件
                            事件的回调留在A组件自身
                    A事件：绑定自定义事件
                        mounted(){
                            this.$bus.$on('xxx',(data) => {...})
                        }
                    B事件：触发自定义事件
                        methods:{
                            demo(){this.$bus.$emit('xxx',数据)}
                        }
            （2）提供数据：this.$bus.$emit('xxx',数据)
        4.最好在beforeDestory钩子中，用$off去解绑当前组件所用到的事件
 -->
<script>
    // 引入Student组件
    import Student from './components/Student'
    import School from './components/School'
    export default {
        name:'App',
        components:{Student,School},
    }
</script>
<style>
    .app{
        background-color: violet;
        padding: 5px;
    }
</style>