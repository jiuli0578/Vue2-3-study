<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
            <!-- 以下方式也可以实现和功能,但不建议这样写,违反了Vue原则:不能修改props -->
            <!-- <input type="checkbox" v-model="todo.done"> -->
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
</template>
<script>
    import pubsub from 'pubsub-js';
    export default {
        name:"MyItem",
        // 声明接收todo对象
        props:['todo'],
        methods:{
            handleCheck(id){
                // 通知App组件将对应的todo对象的done值取反
                // this.checkTodo(id)
                this.$bus.$emit('checkTodo',id)
            },
            handleDelete(id){
                if(confirm('确定删除吗')){
                    // 通知App组件将对应的todo对象删除
                    // this.deleteTodo(id)
                    // this.$bus.$emit('deleteTodo',id)
                    pubsub.publish('deleteTodo',id)
                }
            }
        }
    }
</script>
<style scoped>
    li{
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }
    li label{
        float: left;
        cursor: pointer;
    }
    li label li input{
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }
    li button{
        float: right;
        display: none;
        margin-top: 3px;
    }
    li:before{
        content: initial;
    }
    li:last-child{
        border-bottom: none;
    }
    li:hover{
        background-color: #ededed;
    }
    li:hover button{
        display: block;
    }
</style>