// 该文件用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'
// 创建并暴露一个路由器
const router = new VueRouter({
    mode:'history',
    routes:[
        {
            name:'guanyu',
            path:'/About',
            component:About,
            meta:{title:'关于',isAuth:true}
        },
        {
            path:'/Home',
            component:Home,
            meta:{title:'主页'},
            children:[
                {
                    path:'Message',
                    component:Message,
                    meta:{isAuth:true,title:'信息'},
                    children:[
                        {
                            name:'xiangqing',
                            // 使用占位符声明接收params参数
                            path:'Detail/:id/:title',
                            component:Detail,
                            meta:{isAuth:true,title:'详情'},
                            props($route){
                                return {id:$route.params.id,title:$route.params.title}
                            }
                        }
                    ]
                },
                {
                    path:'News',
                    component:News,
                    meta:{isAuth:true,title:'新闻'},
                }
            ]
        }
    ]
})
export default router