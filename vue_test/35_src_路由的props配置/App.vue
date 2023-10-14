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
    路由的props配置
        作用：让路由组件更方便的收到参数
            /* 
                props的第一种写法，值为对象
                    该对象中所有key-value都会以props的形式传给Detail组件    
            */
            // props:{id:'666',title:'title'}
            /* 
                props的第二种写法，值为布尔值，若布尔值为真
                    就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
            */
            // props:true
            /* 
                props的第三种写法，值为函数
                    该函数返回的对象种每一组key-value都会通过props传给Detail组件
            */
            props($route){
                return {id:$route.params.id,title:$route.params.title}
            }
 -->
<script>
    import Banner from './components/Banner';
    export default {
        name:'App',
        components:{Banner}
    }
</script>