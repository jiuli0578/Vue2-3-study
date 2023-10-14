// 该文件用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'
// 创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/About',
            component:About
        },
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
    ]
})
