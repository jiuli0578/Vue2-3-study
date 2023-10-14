<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader :addTodo="addTodo"></MyHeader>
                <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></MyList>
                <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"></MyFooter>
            </div>
        </div>
    </div>
</template>
<!-- 
    总结TodoList案例:
        1.组件化编码流程:
            (1)拆分静态组件:组件要按照功能进行拆分
                            命名不能与html元素冲突
            (2)实现动态组件:考虑好数据的存放位置
                            数据是一个组件在用,还是多个组件在用
                1)一个组件在用:放在组件自身即可
                2)多个组件在用:放在他们共同的父组件上(状态提升)
        2.props适用于:
            (1)父组件 ==> 子组件通信
            (2)子组件 ==> 父组件通信(需要父组件先给子组件一个函数)
        3.使用v-model时要切记:
            v-model绑定的值不能是props传过来的值,
                因为props是不可以被修改的
        4.props传过来的若是对象类型的值,修改对象中的属性时Vue不会报错
            但不推荐这样做

 -->
<script>
    // 引入组件
    import MyHeader from './components/MyHeader'
    import MyList from './components/MyList'
    import MyFooter from './components/MyFooter'
    export default {
        name:'App',
        components:{MyHeader,MyList,MyFooter},
        data(){
            return{
                todos:JSON.parse(localStorage.getItem('todos')) || []
            }
        },
        methods:{
            // 添加todo
            addTodo(todoObj){
                this.todos.unshift(todoObj)
            },
            // 勾选/取消勾选todo
            checkTodo(id){
                this.todos.forEach((todo) => {
                    if(todo.id === id) todo.done = !todo.done
                })
            },
            // 删除一个todo
            deleteTodo(id){
                this.todos = this.todos.filter(todo => todo.id !== id)
            },
            // 全选/取消全选
            checkAllTodo(done){
                this.todos.forEach((todo) => {
                    todo.done = done
                })
            },
            // 清除所有已经完成的todo
            clearAllTodo(){
                this.todos = this.todos.filter((todo) => {
                    return !todo.done
                })
            }
        },
        watch:{
            todos:{
                deep:true,
                handler(value){
                    localStorage.setItem('todos',JSON.stringify(value))
                }
            }
        }
    }
</script>
<style>
    body{
        background-color: #fff;
    }
    .btn{
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }
    .btn-danger{
       color: #fff; 
       background-color: #da4f49;
       border: 1px solid #bd362f;
    }
    .btn-danger:hover{
        color: #fff;
        background-color: #bd362f;
    }
    .btn:focus{
        outline: none;
    }
    .todo-container{
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap{
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>