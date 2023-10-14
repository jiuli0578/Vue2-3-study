<template>
    <div class='demo'>
        <h1>{{msg}}</h1>
        <h2>姓名:{{name}}</h2>
        <h2>年龄:{{age}}</h2>
    </div>
</template>
<script>
    export default {
        name:'Student',
        data(){
            return{
                msg:'我是齐天大圣',
                name:'孙悟空',
                age:18
            }
        }
    }
</script>
<style scoped>
    .demo{
        background-color:aqua;
    }
</style>