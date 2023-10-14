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
    routes:[
        {
            name:'guanyu',
            path:'/About',
            component:About,
            meta:{title:'关于'}
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
                    beforeEnter:(to,from,next) => {
                        console.log('beforeEnter',to,from);
                        if(to.meta.isAuth){
                            if(localStorage.getItem('school') === '东华理工大学'){
                                next()
                            }else{
                                alert('无此权限！！！')
                            }
                        }else{
                            next()
                        }
                    }
                }
            ]
        }
    ]
})
// 全局后置路由守卫--初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to,from) => {
    console.log('后置路由守卫',to,from);
    // 修改网页的title
    document.title = to.meta.title || 'Vue Router Demo'
})
export default router