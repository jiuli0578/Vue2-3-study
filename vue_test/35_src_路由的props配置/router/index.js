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
                            // 使用占位符声明接收params参数
                            path:'Detail/:id/:title',
                            component:Detail,
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
