<template>
    <div class='student'>
        <h1>{{msg}}</h1>
        <h2>姓名:{{name}}</h2>
        <h2>年龄:{{age}}</h2>
        <button @click="sendStudentName">点击发送学生姓名</button>
    </div>
</template>
<script>
    import Pubsub from 'pubsub-js';
    export default {
        name:'Student',
        data(){
            return{
                msg:'我是齐天大圣',
                name:'孙悟空',
                age:18
            }
        },
        methods:{
            sendStudentName(){
                // 触发自定义事件
                // this.$bus.$emit('getStudentName',this.name)
                Pubsub.publish('getStudentName',this.name)
            }
        }
    }
</script>
<style scoped>
    .student{
        background-color:aqua;
    }
</style>