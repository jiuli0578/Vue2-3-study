<template>
    <div class='student'>
        <h1>{{msg}}</h1>
        <h2>姓名:{{name}}</h2>
        <h2>年龄:{{age}}</h2>
        <button @click="sendStudentName">把学生名给App</button>
        <button @click="unbind">解绑事件</button><br>
        <button @click="death">销毁组件实例对象(vc)</button>
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
        },
        methods:{
            sendStudentName(){
                // 触发Student组件实例身上的getStudentName事件
                this.$emit('getStudentName',this.name)
                this.$emit('demo')
            },
            unbind(){
                // 解绑一个自定义事件
                this.$off('getStudentName')
                // 解绑多个自定义事件
                // this.$off(['getStudentName','demo'])
                // 解绑所有自定义事件
                // this.$off()
            },
            death(){
                /* 
                    销毁当前Student组件实例,
                        销毁后所有Student实例的自定义事件全部失效
                */
                this.$destroy()
            }
        }
    }
</script>
<style scoped>
    .student{
        background-color:aqua;
    }
</style>