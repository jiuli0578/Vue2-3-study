<template>
    <div class='student'>
        <h1>{{msg}}</h1>
        <h2 @click="showName">姓名:{{name}}</h2>
        <h2>年龄:{{age}}</h2>
    </div>
</template>
<script>
    // 引入一个hunhe 
    import {hunhe1,hunhe2} from '../mixin'
    export default {
        name:'Student',
        data(){
            return{
                msg:'我是齐天大圣',
                name:'孙悟空',
                age:18
            }
        },
        mixins:[hunhe1,hunhe2]
    }
</script>
<style>
    .student{
        background-color:aqua;
    }
</style>