<template>
    <div class="demo">
        <h2>姓名:{{name}}</h2>
        <h2>年龄:{{age}}</h2>
        <button @click="showName">点我提示姓名</button>
    </div>
</template>
<script>
    export default {
        name:'Student',
        data(){
            return{
                name:"孙悟空",
                age:18
            }
        },
        methods: {
            showName(){
                alert(this.name);
            }
        },
    }
</script>
<style>
    .demo{
        background-color: chartreuse;
    }
</style>