<template>
    <div class='student'>
        <h1>{{msg}}</h1>
        <h2>姓名:{{name}}</h2>
        <h2>年龄:{{age}}</h2>
        <input type="text" v-fbind:value="name">
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
<style>
    .student{
        background-color:aqua;
    }
</style>