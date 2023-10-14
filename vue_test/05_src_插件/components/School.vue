<template>
    <div class='school'>
        <h1>{{msg}}</h1>
        <h2>学校名称:{{name | mySlice}}</h2>
        <h2>地址:{{address}}</h2>
        <button @click="showHello">点击测试hello方法</button>
    </div>
</template>
<script>
    export default {
        name:'School',
        data(){
            return{
                msg:'欢迎来到东华理工大学',
                name:'东华理工大学',
                address:'江西南昌'
            }
        },
        methods:{
            showHello(){
                this.hello()
            }
        }
    }
</script>
<style>
    .school{
        background-color: tomato;
    }
</style>