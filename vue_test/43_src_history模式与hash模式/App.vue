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
    路由器的两种工作模式
        1.对于一个url说，什么是hash值？
            --#及其以后的内容就是hash值
        2.hash值不会包含在HTTP请求中，即：hash值不会带给服务器
        3.hash模式：
            1）地址中永远带着#号，不美观
            2）若以后将地址通过第三方手机app分享，若app校验严格
                则地址会被标记为不合法
            3）兼容性较好
        4.history模式：
            1）地址干净、美观
            2）兼容性和hash模式相比略差
            3）应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题
 -->
<script>
    import Banner from './components/Banner';
    export default {
        name:'App',
        components:{Banner}
    }
</script>