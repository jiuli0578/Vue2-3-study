<template>
    <div class="container">
        <div>
            <div class="row">
            <div class="col-xs-offset-2 col-xs-8">
                <div class="page-header"><h2>Vue Router Demo</h2></div>
            </div>
            </div>
            <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <!-- 原始html中使用a标签实现页面跳转 -->
                    <!-- <a class="list-group-item active" href="./about.html">About</a> -->
                    <!-- <a class="list-group-item" href="./home.html">Home</a> -->
                    <!-- Vue中借助router-link标签实现路由的切换 -->
                    <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
                    <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                <div class="panel-body">
                    <!-- 指定组件的呈现位置 -->
                    <router-view></router-view>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<!-- 
    路由
        1.理解：一个路由（route）就是一组映射关系（key-value）
                多个路由需要路由器（router）进行管理
        2.前端路由：key是路径，value是组件
        3.基本使用：
            1）安装vue-router，命令：npm i vue-router
            2）应用插件：Vue.use(VueRouter)
            3）编写router配置项
                // 该文件用于创建整个应用的路由器
                import VueRouter from "vue-router";
                // 引入组件
                import About from '../components/About'
                import Home from '../components/Home'
                // 创建并暴露一个路由器
                export default new VueRouter({
                    routes:[
                        {
                            path:'/About',
                            component:About
                        },
                        {
                            path:'/Home',
                            component:Home
                        }
                    ]
                })
        4.实现切换（active-class可配置高亮样式）
            <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
        5.指定展示位置
            <router-view></router-view>
 -->        
<script>
    export default {
        name:'App',
    }
</script>