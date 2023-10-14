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
    路由守卫
        1.作用：对路由进行权限控制
        2.分类：全局守卫、独享守卫、组件内守卫
        3.全局守卫
            // 全局前置路由守卫--初始化的时候被调用、每次路由切换之前被调用
            router.beforeEach((to,from,next) => {
                console.log('前置路由守卫',to,from);
                /* if(to.path === '/Home/Message' || to.path === '/Home/News'){
                    if(localStorage.getItem('school') === '东华理工大学'){
                        next()
                    }else{
                        alert('无此权限！！！')
                    }
                }else{
                    next()
                } */
                if(to.meta.isAuth){
                    if(localStorage.getItem('school') === '东华理工大学'){ 
                        // document.title = to.meta.title || 'Vue Router Demo'
                        next()
                    }else{
                        alert('无此权限！！！')
                    }
                }else{   
                    // document.title = to.meta.title || 'Vue Router Demo'
                    next()
                } 
            })
            // 全局后置路由守卫--初始化的时候被调用、每次路由切换之后被调用
            router.afterEach((to,from) => {
                console.log('后置路由守卫',to,from);
                document.title = to.meta.title || 'Vue Router Demo'
            })
 -->
<script>
    import Banner from './components/Banner';
    export default {
        name:'App',
        components:{Banner}
    }
</script>