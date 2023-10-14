<template>
    <div class='school'>
        <h1>{{msg}}</h1>
        <h2>学校名称:{{name}}</h2>
        <h2>地址:{{address}}</h2>
    </div>
</template>
<script>
    export default {
        name:'School',
        props:['getSchoolName'],
        data(){
            return{
                msg:'',
                name:'东华理工大学',
                address:'江西南昌'
            }
        },
        mounted(){
            // 绑定自定义事件
            this.$bus.$on('getStudentName',(data) => {
                console.log('我是School组件，收到了数据',data);
                this.msg = '欢迎' + data
            })
        },
        beforeDestroy(){
            // 解绑自定义事件
            this.$bus.$off('getStudentName')
        }
    }
</script>
<style scoped>
    .school{
        background-color: tomato;
    }
</style>