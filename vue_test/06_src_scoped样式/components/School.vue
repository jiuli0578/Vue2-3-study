<template>
    <div class='demo'>
        <h1>{{msg}}</h1>
        <h2>学校名称:{{name}}</h2>
        <h2>地址:{{address}}</h2>
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
        }
    }
</script>
<style scoped>
    .demo{
        background-color: tomato;
    }
</style>