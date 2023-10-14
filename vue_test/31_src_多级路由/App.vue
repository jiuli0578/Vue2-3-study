<template>
    <div class="container">
        <div>
            <div class="row">
                <Banner></Banner>
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
    多级路由（嵌套路由）
        1.配置路由规则，使用children配置项：
            routes:[
                {
                    path:'/About',
                    component:About
                },
                {
                    path:'/Home',
                    component:Home,
                    children:[
                        {
                            path:'Message',
                            component:Message
                        },
                        {
                            path:'News',
                            component:News
                        }
                    ]
                }
            ]
        2.跳转（要写完整路径）
            <router-link class="list-group-item active" to="/home/news">News</router-link>
 --> 
<script>
    import Banner from './components/Banner';
    export default {
        name:'App',
        components:{Banner}
    }
</script>