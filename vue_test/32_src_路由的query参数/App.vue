<template>
    <div class="container">
        <div>
            <div class="row">
                <Banner></Banner>
            </div>
            <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
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
    路由的query参数
        1.传递参数
            // 跳转路由并携带query参数，to的字符串写法 
            <router-link :to="`/Home/Message/Detail?id=${item.id}&title=${item.title}`">{{item.title}}</router-link> 
            // 跳转路由并携带query参数，to的对象写法 
            <router-link :to="{
                path:'/Home/Message/Detail',
                query:{
                    id:item.id,
                    title:item.title
                }
            }">
                {{item.title}}
            </router-link>
        2.接收参数：
            $route.query.id
            $route.query.title
 -->
<script>
    import Banner from './components/Banner';
    export default {
        name:'App',
        components:{Banner}
    }
</script>