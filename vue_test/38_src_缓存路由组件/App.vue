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
                    <router-link class="list-group-item" active-class="active" :to="{name:'guanyu'}">About</router-link>
                    <router-link class="list-group-item" active-class="active" to="/Home">Home</router-link>
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
    缓存路由组件
        1.作用：让不展示的路由组件保持挂载，不被销毁
        2.具体编码：
            <keep-alive include="News">
                <router-view></router-view>
            </keep-alive>
            include里是要缓存组件的组件名
            缓存多个路由组件
            :include="['News','Message']"
 -->
<script>
    import Banner from './components/Banner';
    export default {
        name:'App',
        components:{Banner}
    }
</script>