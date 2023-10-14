<template>
    <div class='student'>
        <h1>{{msg}}</h1>
        <h2>姓名:{{name}}</h2>
        <h2>年龄:{{MyAge}}</h2>
        <h2>性别:{{gender}}</h2>
        <button @click='addAge'>点击年龄加一</button>
    </div>
</template>
<script>
    export default {
        name:'Student',
        data(){
            return{
                msg:'我是齐天大圣',
                MyAge:this.age
            }
        },
        methods:{
            addAge(){
                this.MyAge++
            }
        },
        /* // 简单声明接收
        props:['name','age','gender'] */

        /* // 接收同时对数据进行类型限制
        props:{
            name:String,
            age:Number,
            gender:Stirng
        } */

        // 接受同时对数据进行:类型限制+默认值的指定+必要性限制
        props:{
            name:{
                type:String,
                required:true
            },
            age:{
                type:Number,
                default:99
            },
            gender:{
                type:String,
                required:true
            }
        }
    }
</script>
<style>
    .student{
        background-color:aqua;
    }
</style>