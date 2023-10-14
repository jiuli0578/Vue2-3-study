<template>
    <div class='school'>
        <h1>{{msg}}</h1>
        <h2 @click="showName">学校名称:{{name}}</h2>
        <h2>地址:{{address}}</h2>
    </div>
</template>
<script>
    // 引入一个hunhe(局部引入) 
    import {hunhe1,hunhe2} from '../mixin'
    export default {
        name:'School',
        data(){
            return{
                msg:'欢迎来到东华理工大学',
                name:'东华理工大学',
                address:'江西南昌',
                a:666 //输出仍是666,不会影响原有数据
            }
        },
        mixins:[hunhe1,hunhe2]
    }
</script>
<style>
    .school{
        background-color: tomato;
    }
</style>