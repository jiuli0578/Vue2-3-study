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
    命名路由
        1.作用：可以简化路由的跳转
        2.如何使用：
            1）给路由命名
                {
                    path:'/Home',
                    component:Home,
                    children:[
                        {
                            path:'Message',
                            component:Message,
                            children:[
                                {
                                    name:'xiangqing',
                                    path:'Detail',
                                    component:Detail
                                }
                            ]
                        },
                        {
                            path:'News',
                            component:News
                        }
                    ]
                }
            2）简化跳转
                // 简化前
                <router-link to="/demo/list/about">About</router-link>
                // 简化后
                <router-link :to="{name:'guanyu'}">About</router-link>
                // 简化写法配合传递参数
                <router-link :to="{
                    // path:'/Home/Message/Detail',
                    name:'xiangqing',
                    query:{
                        id:item.id,
                        title:item.title
                    }
                }">
                    {{item.title}}
                </router-link>
 -->
<script>
    import Banner from './components/Banner';
    export default {
        name:'App',
        components:{Banner}
    }
</script>