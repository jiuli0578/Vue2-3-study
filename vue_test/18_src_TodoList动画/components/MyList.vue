<template>
    <ul class="todo-main">
        <!-- 简单动画 -->
        <!-- <transition-group name="todo">
            <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"></MyItem>
        </transition-group> -->
        <!-- 通过animate.css动画 -->
        <transition-group
            name="animate__animated animate__bounce"
            enter-active-class="animate__swing"
            leave-active-class="animate__backOutUp"
        >
            <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"></MyItem>
        </transition-group>
    </ul>
</template>
<script>
    import 'animate.css'
    import MyItem from './MyItem';
    export default {
        name:"MyList",
        components:{MyItem},
        props:['todos']
    }
</script>
<style scoped>
    .todo-main{
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }
    .todo-empty{
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
    /* .todo-enter-active{
        animation: show 1s;
    }
    .todo-leave-active{
        animation: show 1s reverse;
    }
    @keyframes show{
        from{
            transform: translateX(100%);
        }
        to{
            transform: translateX(0px);
        }
    } */
</style>