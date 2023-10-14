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
    编程式路由导航
        1.作用：不借助<router-link>实现路由跳转。让路由跳转更加灵活
        2.具体编码：
            // router的五个API
            this.$router.push({
                name:'xiangqing',
                params:{
                    id:item.id,
                    title:item.title
                }
            })
            this.$router.replace({
                name:'xiangqing',
                params:{
                    id:item.id,
                    title:item.title
                }
            })
            this.$router.back() // 前进
            this.$router.forward()  // 后退
            // 可前进可后退，正数前进，负数后退
            this.$router.go(-2) 
 -->        
<script>
    import Banner from './components/Banner';
    export default {
        name:'App',
        components:{Banner}
    }
</script>