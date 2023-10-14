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
                }
            ]
        }
    ]
})

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
    // 判断当前路由是否需要进行权限控制
    if(to.meta.isAuth){
        // 权限控制具体规则
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
    // 修改网页的title
    document.title = to.meta.title || 'Vue Router Demo'
})
export default router