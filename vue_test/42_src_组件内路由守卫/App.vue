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
    组件内守卫：
        // 通过路由规则，进入该组件时被调用
        beforeRouteEnter (to, from, next) {
            console.log('About--beforeRouteEnter');
            if(to.meta.isAuth){
                if(localStorage.getItem('school') === '东华理工大学'){
                    next()
                }else{
                    alert('无此权限！！！')
                }
            }else{
                next()
            }
        },
        // 通过路由规则，离开该组件时被调用
        beforeRouteLeave (to, from, next) {
            console.log('About--beforeRouteLeave');
            next()
        }
 -->
<script>
    import Banner from './components/Banner';
    export default {
        name:'App',
        components:{Banner}
    }
</script>