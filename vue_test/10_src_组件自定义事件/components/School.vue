<template>
    <div class='school'>
        <h1>{{msg}}</h1>
        <h2>学校名称:{{name}}</h2>
        <h2>地址:{{address}}</h2>
        <button @click="sendSchoolName">把学校名给App</button>
    </div>
</template>
<script>
    export default {
        name:'School',
        props:['getSchoolName'],
        data(){
            return{
                msg:'欢迎来到东华理工大学',
                name:'东华理工大学',
                address:'江西南昌'
            }
        },
        methods:{
            sendSchoolName(){
                this.getSchoolName(this.name)
            }
        }
    }
</script>
<style scoped>
    .school{
        background-color: tomato;
    }
</style>